
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Sparkles, X, Send, Loader2 } from 'lucide-react';
import { getProducts } from '../services/mockApi';
import { Product } from '../types';
import { ProductCardSmall } from './ProductCardSmall';
import { useI18n } from '../hooks/useI18n';

interface Recommendation {
    productSlug: string;
    reason: string;
    product: Product;
}

interface AIResult {
    summary: string;
    recommendations: Recommendation[];
}

const AIAdvisorWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<AIResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { t } = useI18n();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pre-fetch all products to use as context for the AI
        const fetchAllProducts = async () => {
            const allProducts = await getProducts();
            setProducts(allProducts);
        };
        fetchAllProducts();
    }, []);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [results, isLoading, error]);


    const handleQuerySubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim() || isLoading || products.length === 0) return;

        setIsLoading(true);
        setResults(null);
        setError(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const productContext = products.map(p => ({
                name: p.name,
                slug: p.slug,
                summary: p.summary,
                tags: p.tags,
            }));
            
            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    summary: {
                        type: Type.STRING,
                        description: 'A brief, friendly summary of your recommendation, explaining why these products are a good fit for the user.'
                    },
                    recommendations: {
                        type: Type.ARRAY,
                        description: 'A list of up to 3 recommended product slugs and the reason for each recommendation.',
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                productSlug: {
                                    type: Type.STRING,
                                    description: 'The unique slug of the recommended product.'
                                },
                                reason: {
                                    type: Type.STRING,
                                    description: 'A short sentence explaining why this specific product is a good choice.'
                                }
                            },
                            required: ["productSlug", "reason"]
                        }
                    }
                },
                required: ["summary", "recommendations"]
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `Based on the following user requirement, recommend up to 3 suitable products from the provided JSON list of available products.

    User Requirement: "${query}"

    Product List:
    ${JSON.stringify(productContext)}
    `,
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: responseSchema,
                    systemInstruction: 'You are an expert product advisor for EMPHZ Global, a manufacturer of GRP (Glass Reinforced Plastic) solutions. Your task is to analyze a user\'s project requirements and recommend the most suitable products from the provided list. Your response must be in the specified JSON format. Be concise, helpful, and speak directly to the user.',
                }
            });
            
            const jsonResponse = JSON.parse(response.text);
            
            const detailedRecommendations = jsonResponse.recommendations.map((rec: {productSlug: string, reason: string}) => {
                const product = products.find(p => p.slug === rec.productSlug);
                return { ...rec, product };
            }).filter((rec: any) => rec.product);

            setResults({ summary: jsonResponse.summary, recommendations: detailedRecommendations });
        } catch (err) {
            console.error("AI Advisor Error:", err);
            setError('Sorry, I encountered a problem processing that request. Please try rephrasing your needs or contact us directly.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-24 end-6 z-50">
            {/* Modal Window */}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-80 sm:w-96 h-[32rem] bg-white rounded-xl shadow-2xl flex flex-col border border-border">
                    <div className="flex justify-between items-center p-4 bg-primary text-white rounded-t-xl">
                        <div className="flex items-center gap-2">
                            <Sparkles size={20} />
                            <h3 className="font-bold font-heading">AI Product Advisor</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20"><X size={20} /></button>
                    </div>

                    <div className="flex-grow p-4 overflow-y-auto">
                        <div className="space-y-4">
                            <div className="flex justify-start">
                                <div className="max-w-[80%] px-4 py-2 rounded-lg bg-background-light text-text-DEFAULT rounded-bl-none">
                                    <p className="text-sm">Hello! Describe your project or needs, and I'll recommend the best GRP solutions for you.</p>
                                </div>
                            </div>
                            {results && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] px-4 py-2 rounded-lg bg-background-light text-text-DEFAULT rounded-bl-none space-y-4">
                                        <p className="text-sm">{results.summary}</p>
                                        <div className="space-y-2">
                                            {results.recommendations.map(rec => (
                                                <ProductCardSmall key={rec.product.id} product={rec.product}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                             {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] px-4 py-3 rounded-lg bg-background-light text-text-secondary rounded-bl-none flex items-center gap-2">
                                         <Loader2 className="animate-spin" size={16}/>
                                         <p className="text-sm italic">Finding the best solution...</p>
                                    </div>
                                </div>
                            )}
                             {error && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] px-4 py-2 rounded-lg bg-red-100 text-danger rounded-bl-none">
                                        <p className="text-sm">{error}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t">
                        <form onSubmit={handleQuerySubmit} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="e.g., a cabinet for a solar farm..."
                                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                                disabled={isLoading}
                            />
                            <button type="submit" className="bg-accent text-white p-3 rounded-lg font-semibold hover:opacity-90 transition-colors flex-shrink-0 disabled:bg-gray-400" disabled={isLoading}>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 mt-4 cta-glow ${isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                aria-label="Open AI Product Advisor"
            >
                <Sparkles size={30} />
            </button>
        </div>
    );
};

export default AIAdvisorWidget;
