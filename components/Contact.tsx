
import React from 'react';
import { CONTACT_DATA } from '../constants';

const Contact = () => {
    return (
        <section id="contact" className="border-t border-zinc-800 bg-gradient-to-b from-zinc-900/40 to-zinc-950" role="region" aria-label="Contact">
            <div className="mx-auto max-w-5xl px-4 py-16 text-center">
            <h2 className="text-3xl font-bold">{CONTACT_DATA.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-300">{CONTACT_DATA.description}</p>
            <form name="rfq" method="POST" data-netlify="true" className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-2">
                <input type="hidden" name="form-name" value="rfq" />
                <input name="name" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-teal-500" placeholder="Full name" required />
                <input name="contact" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-teal-500" placeholder="Email / Phone" required />
                <select name="product" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-teal-500">
                <option>Rural Bus‑Stop Module</option>
                <option>GRP Electrical Enclosure</option>
                <option>Portable Kiosk</option>
                <option>Security Cabin</option>
                <option>Villa Toilet Pod</option>
                <option>Utility Box / Chamber</option>
                </select>
                <input name="dims" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-teal-500" placeholder="Target dimensions / Qty" />
                <textarea name="notes" className="md:col-span-2 h-28 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-teal-500" placeholder="Notes: accessories, standards, site conditions" />
                <button className="md:col-span-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-zinc-950 hover:bg-teal-400">Request Quote</button>
            </form>
            <p className="mt-4 text-xs text-zinc-500">{CONTACT_DATA.note}</p>
            </div>
            <a href={CONTACT_DATA.whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-teal-500 font-bold text-zinc-900 shadow-lg hover:bg-teal-400" aria-label="Chat on WhatsApp">WA</a>
        </section>
    );
};

export default Contact;