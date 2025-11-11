import React from 'react';
import { PRODUCTS_DATA } from '../constants';

const Products = () => {
    return (
        <section id="products" className="border-t border-zinc-800 bg-zinc-950" role="region" aria-label="Products">
            <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                <h2 className="text-3xl font-bold">{PRODUCTS_DATA.title}</h2>
                <p className="mt-2 max-w-2xl text-zinc-300">{PRODUCTS_DATA.description}</p>
                </div>
                <div className="flex gap-2">
                <select className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm">
                    <option>All Categories</option>
                    <option>Enclosures</option>
                    <option>Kiosks</option>
                    <option>Cabins</option>
                    <option>Toilet Pods</option>
                    <option>Bus‑Stop Modules</option>
                </select>
                <input className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm" placeholder="Search…" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {PRODUCTS_DATA.items.map((p) => (
                <div key={p.sku} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
                    <div className="aspect-[4/3] rounded-lg bg-zinc-800" />
                    <div className="mt-3 text-sm text-zinc-400">{p.sku}</div>
                    <div className="text-lg font-semibold">{p.name}</div>
                    <div className="text-xs text-zinc-500">{p.cat}</div>
                    <button className="mt-3 rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-zinc-900">Add to RFQ</button>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Products;
