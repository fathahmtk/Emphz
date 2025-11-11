import React from 'react';
import { CONTACT_DATA } from '../constants';

const Contact = () => {
    return (
        <section id="contact" className="border-t border-slate-200 bg-slate-50" role="region" aria-label="Contact">
            <div className="mx-auto max-w-5xl px-4 py-16 text-center">
            <h2 className="text-3xl font-bold">{CONTACT_DATA.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">{CONTACT_DATA.description}</p>
            <form name="rfq" method="POST" data-netlify="true" className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
                <input type="hidden" name="form-name" value="rfq" />
                <input name="name" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Full name" required />
                <input name="contact" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Email / Phone" required />
                <select name="product" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                <option>Rural Bus‑Stop Module</option>
                <option>GRP Electrical Enclosure</option>
                <option>Portable Kiosk</option>
                <option>Security Cabin</option>
                <option>Villa Toilet Pod</option>
                <option>Utility Box / Chamber</option>
                </select>
                <input name="dims" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Target dimensions / Qty" />
                <textarea name="notes" className="md:col-span-2 h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Notes: accessories, standards, site conditions" />
                <button className="md:col-span-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition-colors">Request Quote</button>
            </form>
            <p className="mt-4 text-xs text-slate-500">{CONTACT_DATA.note}</p>
            </div>
            <a href={CONTACT_DATA.whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors" aria-label="Chat on WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
            </a>
        </section>
    );
};

export default Contact;