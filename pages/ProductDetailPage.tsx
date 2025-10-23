import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Product } from '../types';
import { getProductBySlug } from '../services/mockApi';
import { CheckCircle, Download } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            if (slug) {
                setLoading(true);
                const data = await getProductBySlug(slug);
                setProduct(data || null);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [slug]);

    if (loading) {
        return (
             <div className="container mx-auto px-6 py-12 animate-pulse">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="h-[500px] bg-gray-300 rounded-lg"></div>
                    <div>
                        <div className="h-12 w-3/4 bg-gray-300 rounded mb-4"></div>
                        <div className="h-6 w-1/2 bg-gray-300 rounded mb-8"></div>
                        <div className="h-48 bg-gray-300 rounded"></div>
                    </div>
                </div>
             </div>
        )
    }

    if (!product) {
        return <div className="text-center py-20">Product not found.</div>;
    }

    return (
        <div className="bg-background">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <img src={product.imageUrls[0]} alt={product.name} className="w-full rounded-lg shadow-xl mb-4 border border-border" />
                        {/* Add thumbnail images if available */}
                    </div>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3 tracking-tight">{product.name}</h1>
                        <p className="text-lg text-text-secondary mb-8">{product.summary}</p>
                        
                        <div className="bg-background-light p-6 rounded-lg border border-border mb-8">
                            <h3 className="text-xl font-bold text-text-DEFAULT mb-4">Key Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key}>
                                        <p className="font-semibold text-text-secondary">{key}</p>
                                        <p className="text-text-DEFAULT font-medium">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-text-DEFAULT mb-4">Features</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center"><CheckCircle className="text-accent mr-3" size={20}/>Weatherproof & IP-Rated</li>
                                <li className="flex items-center"><CheckCircle className="text-accent mr-3" size={20}/>Non-conductive & Safe</li>
                                <li className="flex items-center"><CheckCircle className="text-accent mr-3" size={20}/>Fire-safe & Self-extinguishing</li>
                                <li className="flex items-center"><CheckCircle className="text-accent mr-3" size={20}/>UV & Corrosion Resistant</li>
                                <li className="flex items-center"><CheckCircle className="text-accent mr-3" size={20}/>High Impact Strength</li>
                                <li className="flex items-center"><CheckCircle className="text-accent mr-3" size={20}/>Maintenance-free Lifecycle</li>
                            </ul>
                        </div>
                        
                        <div className="mb-10">
                             <h3 className="text-xl font-bold text-text-DEFAULT mb-4">Downloads</h3>
                             <div className="flex flex-wrap gap-4">
                                {product.pdfUrls.map(pdf => (
                                    <a key={pdf.title} href={pdf.url} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-200 text-text-secondary px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                                        <Download size={18} className="mr-2"/>{pdf.title}
                                    </a>
                                ))}
                             </div>
                        </div>
                         <NavLink to="/contact" className="inline-block bg-accent text-white w-full text-center py-4 rounded-lg font-semibold hover:bg-accent-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Request a Quote for this Product
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;