import React from 'react';
import { DIGITAL_BUSINESS_CARD_DATA, SOCIAL_LINKS } from '../constants';
import MetaTags from '../components/MetaTags';
import Icon from '../components/Icon';

const DigitalBusinessCardPage: React.FC = () => {
  const data = DIGITAL_BUSINESS_CARD_DATA;

  const seoTitle = `${data.name} - ${data.title} | ${data.companyName}`;
  const seoDescription = `Digital business card for ${data.name}. Access all contact details, social profiles, downloads, and location for ${data.companyName}.`;
  
  const iconClasses = "w-6 h-6";
  const socialIconClasses = "h-8 w-8";

  return (
    <>
      <MetaTags title={seoTitle} description={seoDescription} />
      <div className="bg-[var(--color-background)] min-h-screen p-4 sm:p-6 md:p-8 font-sans">
        <main className="max-w-md mx-auto bg-[var(--color-surface-primary)] rounded-2xl shadow-lg overflow-hidden">
          <header className="bg-gray-800 p-8 text-center text-white relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: `url('https://images.unsplash.com/photo-1581093582415-998f8287894a?q=80&w=1974&auto=format&fit=crop')`}}></div>
            <div className="relative z-10">
                <img src={data.logoUrl} alt={`${data.companyName} Logo`} className="w-24 h-24 mx-auto rounded-full border-4 border-white/20 object-contain bg-white mb-4" />
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-md font-light text-white/80">{data.title}</p>
                <p className="text-lg font-semibold text-white/90 mt-1">{data.companyName}</p>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {/* Quick Actions */}
            <section>
              <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                  <a href={`tel:${data.contact.phone}`} className="flex items-center justify-center gap-3 p-3 bg-blue-500/10 text-blue-700 font-semibold rounded-lg hover:bg-blue-500/20 transition-colors">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>Call</span>
                  </a>
                  <a href={`mailto:${data.contact.email}`} className="flex items-center justify-center gap-3 p-3 bg-red-500/10 text-red-700 font-semibold rounded-lg hover:bg-red-500/20 transition-colors">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Email</span>
                  </a>
                  <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 flex items-center justify-center gap-3 p-3 bg-gray-500/10 text-gray-700 font-semibold rounded-lg hover:bg-gray-500/20 transition-colors">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    <span>Visit Website</span>
                  </a>
              </div>
            </section>
            
            {/* Social Profiles */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Connect With Us</h2>
                <div className="flex justify-around items-center p-3 bg-gray-100 rounded-lg">
                    {/* FIX: Consistently use data.socials and updated keys to match type definition */}
                    <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors" aria-label="LinkedIn Profile">
                        <Icon name="linkedin" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" aria-label="X (formerly Twitter) Profile">
                        <Icon name="twitter" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-800 transition-colors" aria-label="Facebook Profile">
                        <Icon name="facebook" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors" aria-label="Instagram Profile">
                        <Icon name="instagram" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.google} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Google Business Profile">
                        <Icon name="google" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors" aria-label="WhatsApp">
                        <Icon name="whatsapp" className={socialIconClasses} />
                    </a>
                </div>
            </section>

            {/* Downloads */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Downloads</h2>
                <div className="space-y-3">
                    <a href={data.downloads.profile} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="font-medium text-gray-700">Company Profile</span>
                    </a>
                    <a href={data.downloads.catalog} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span className="font-medium text-gray-700">Product Catalog</span>
                    </a>
                    <a href={data.downloads.brochure} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                         <svg className="w-6 h-6 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        <span className="font-medium text-gray-700">Corporate Brochure</span>
                    </a>
                </div>
            </section>

            {/* Location */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9 border border-gray-200 rounded-lg overflow-hidden">
                    <iframe
                        src={data.location.googleMapsEmbedUrl}
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="EMPHZ Office Location"
                    ></iframe>
                </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default DigitalBusinessCardPage;