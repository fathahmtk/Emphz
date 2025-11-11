import React from 'react';
import { PRODUCTS_DATA } from '../constants';

const Products = () => {
    return (
        <section id="products" className="border-t border-slate-200 bg-slate-50" role="region" aria-label="Products">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                <h2 className="text-3xl font-bold">{PRODUCTS_DATA.title}</h2>
                <p className="mt-2 max-w-2xl text-slate-600">{PRODUCTS_DATA.description}</p>
                </div>
                <div className="flex gap-2">
                <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option>All Categories</option>
                    <option>Enclosures</option>
                    <option>Kiosks</option>
                    <option>Cabins</option>
                    <option>Toilet Pods</option>
                    <option>Bus‑Stop Modules</option>
                </select>
                <input className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Search…" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {PRODUCTS_DATA.items.map((p) => (
                <div key={p.sku} className="rounded-2xl border border-slate-200 bg-white p-5 transition-[transform,box-shadow] duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="aspect-[4/3] rounded-lg bg-slate-200" />
                    <div className="mt-3 text-sm text-slate-500">{p.sku}</div>
                    <div className="text-lg font-semibold text-slate-800">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.cat}</div>
                    <button className="mt-3 rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-200">Add to RFQ</button>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Products;