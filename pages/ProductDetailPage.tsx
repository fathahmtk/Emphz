
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
                <div className="h-96 bg-gray-300 rounded-lg"></div>
                <div className="mt-8 h-10 w-3/4 bg-gray-300 rounded"></div>
                <div className="mt-4 h-6 w-1/2 bg-gray-300 rounded"></div>
             </div>
        )
    }

    if (!product) {
        return <div className="text-center py-20">Product not found.</div>;
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <img src={product.imageUrls[0]} alt={product.name} className="w-full rounded-lg shadow-xl mb-4" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold text-primary mb-2">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">{product.summary}</p>
                        
                        <div className="bg-neutral-light p-6 rounded-lg mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Specifications</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key}>
                                        <p className="font-semibold text-gray-500">{key}</p>
                                        <p className="text-gray-800 font-medium">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Features</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/>Weatherproof & IP-Rated</li>
                                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/>Non-conductive & Safe</li>
                                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/>Fire-safe & Self-extinguishing</li>
                                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/>UV & Corrosion Resistant</li>
                                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/>High Impact Strength</li>
                                <li className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20}/>Maintenance-free Lifecycle</li>
                            </ul>
                        </div>
                        
                        <div>
                             <h3 className="text-xl font-bold text-gray-800 mb-4">Downloads</h3>
                             <div className="flex space-x-4">
                                {product.pdfUrls.map(pdf => (
                                    <a key={pdf.title} href={pdf.url} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                                        <Download size={18} className="mr-2"/>{pdf.title}
                                    </a>
                                ))}
                             </div>
                        </div>
                         <NavLink to="/contact" className="mt-8 inline-block bg-accent text-white w-full text-center py-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
                            Request a Quote for this Product
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
