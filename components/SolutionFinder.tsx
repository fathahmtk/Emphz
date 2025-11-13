import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { PRODUCTS_DATA } from './constants.tsx';

// A simple loading spinner component
const Spinner = () => (
    <div className="flex justify-center items-center gap-2">
        <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-slate-600">Analyzing your requirements...</span>
    </div>
);

// Define the type for the structured AI response
interface AiSolution {
    recommendedSku: string;
    productName: string;
    reasoning: string;
}

const SolutionFinder: React.FC = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AiSolution | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!query.trim()) {
            setError("Please describe your project requirements.");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            
            const productList = PRODUCTS_DATA.items.map(p => `- SKU: ${p.sku}, Name: ${p.name}, Category: ${p.cat}`).join('\n');

            const systemInstruction = `You are an expert technical consultant for Emphz Private Limited, a manufacturer of GRP/FRP products. Your task is to recommend the single most suitable product from the company's catalog based on the user's project requirements. 
            
            Available Products:
            ${productList}
            
            Analyze the user's query and respond ONLY with a JSON object that matches the specified schema. The 'reasoning' should be a concise, helpful explanation of why the chosen product is the best fit, written in a friendly and professional tone.`;

            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    recommendedSku: {
                        type: Type.STRING,
                        description: "The SKU of the recommended product."
                    },
                    productName: {
                        type: Type.STRING,
                        description: "The name of the recommended product."
                    },
                    reasoning: {
                        type: Type.STRING,
                        description: "A brief explanation of why this product was recommended."
                    }
                },
                required: ["recommendedSku", "productName", "reasoning"]
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: query,
                config: {
                    systemInstruction,
                    responseMimeType: "application/json",
                    responseSchema,
                    temperature: 0.2,
                },
            });

            const jsonString = response.text.trim();
            try {
                const aiResult: AiSolution = JSON.parse(jsonString);
                setResult(aiResult);
            } catch (parseError) {
                console.error("Error parsing AI response:", parseError, "Raw response:", jsonString);
                setError("Sorry, the AI returned an unexpected response. Please try rephrasing your request.");
            }

        } catch (e) {
            console.error("Error calling Gemini API:", e);
            setError("Sorry, we couldn't find a solution at this time. Please try rephrasing your request or check back later.");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setQuery('');
        setResult(null);
        setError(null);
    }

    return (
        <section id="ai-finder" className="border-t border-slate-200 bg-white" role="region" aria-label="AI Solution Finder">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900">AI-Powered Solution Finder</h2>
                    <p className="mt-2 text-slate-600">
                        Describe your project, and our AI assistant will recommend the best GRP solution from our catalog.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-3xl">
                    {!result ? (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <label htmlFor="project-description" className="block text-sm font-medium text-slate-700">
                                Your Project Requirements
                            </label>
                            <textarea
                                id="project-description"
                                rows={4}
                                className="mt-2 block w-full rounded-xl border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                                placeholder="e.g., 'I need a corrosion-proof enclosure for a coastal telecom site, about 600x400mm.'"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                disabled={loading}
                                aria-describedby="ai-finder-status"
                            />
                            <div id="ai-finder-status" className="mt-4 flex items-center justify-between">
                                {loading ? (
                                    <Spinner />
                                ) : (
                                    <button
                                        onClick={handleGenerate}
                                        className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                                    >
                                        Find Solution
                                    </button>
                                )}
                                {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-2xl border-2 border-blue-500 bg-blue-50/50 p-6 shadow-lg shadow-blue-500/20 transition-all duration-300 ease-in-out">
                             <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">AI Recommendation</h3>
                             <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
                                <div className="aspect-[4/3] rounded-lg bg-slate-200" />
                                <div className="mt-3 text-sm text-slate-500">{result.recommendedSku}</div>
                                <div className="text-lg font-semibold text-slate-800">{result.productName}</div>
                            </div>

                            <div className="mt-4">
                                <h4 className="text-sm font-semibold text-slate-800">Rationale:</h4>
                                <p className="mt-1 text-slate-600">"{result.reasoning}"</p>
                            </div>
                            
                            <div className="mt-6 flex gap-4">
                                <button
                                    onClick={handleReset}
                                    className="rounded-xl bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-300 transition-colors"
                                >
                                    Ask Again
                                </button>
                                <a href="/contact.html" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
                                    Request Quote for this Product
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SolutionFinder;