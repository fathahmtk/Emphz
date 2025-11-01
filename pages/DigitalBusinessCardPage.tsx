
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { DIGITAL_BUSINESS_CARD_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import Icon from '../components/Icon';
import { DigitalBusinessCardData } from '../types';

const DigitalBusinessCardPage: React.FC = () => {
  const location = useLocation();

  const data = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const base64Data = params.get('data');
    if (base64Data) {
      try {
        const jsonString = atob(base64Data);
        const parsedData = JSON.parse(jsonString) as DigitalBusinessCardData;
        // Basic validation
        if (parsedData.name && parsedData.contact) {
          return parsedData;
        }
      } catch (e) {
        console.error("Failed to parse DBC data from URL, using fallback.", e);
      }
    }
    return DIGITAL_BUSINESS_CARD_DATA;
  }, [location.search]);
  
  const seoTitle = `${data.name} - ${data.title} | ${data.companyName}`;
  const seoDescription = `Digital business card for ${data.name}. Access all contact details, social profiles, downloads, and location for ${data.companyName}.`;
  
  const iconClasses = "w-6 h-6";
  const socialIconClasses = "h-8 w-8";

  const handleSaveContact = () => {
    const [firstName, ...lastNameParts] = data.name.split(' ');
    const lastName = lastNameParts.join(' ');

    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${data.name}
ORG:${data.companyName}
TITLE:${data.title}
TEL;TYPE=WORK,VOICE:${data.contact.phone}
TEL;TYPE=CELL,VOICE:${data.contact.whatsapp}
EMAIL:${data.contact.email}
URL:${data.websiteUrl}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const filename = `${data.name.replace(/\s/g, '_')}.vcf`;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <MetaTags title={seoTitle} description={seoDescription} />
      <div className="bg-[var(--color-background)] min-h-screen p-4 sm:p-6 md:p-8 font-sans">
        <main className="max-w-md mx-auto bg-[var(--color-surface-primary)] rounded-2xl shadow-lg overflow-hidden border border-[var(--color-border)]">
          <header className="p-8 text-center text-white relative bg-[var(--color-surface-secondary)]">
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
                  <button onClick={handleSaveContact} className="flex items-center justify-center gap-3 p-3 bg-[var(--color-brand)]/10 text-[var(--color-brand)] font-semibold rounded-lg hover:bg-[var(--color-brand)]/20 transition-colors col-span-2">
                     <Icon name="download" className={iconClasses} />
                    <span>Save to Contacts</span>
                  </button>
                  <a href={`tel:${data.contact.phone}`} className="flex items-center justify-center gap-3 p-3 bg-white/5 text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-white/10 transition-colors border border-[var(--color-border)]">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>Call</span>
                  </a>
                  <a href={`mailto:${data.contact.email}`} className="flex items-center justify-center gap-3 p-3 bg-white/5 text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-white/10 transition-colors border border-[var(--color-border)]">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>Email</span>
                  </a>
                  <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 flex items-center justify-center gap-3 p-3 bg-white/5 text-[var(--color-text-primary)] font-semibold rounded-lg hover:bg-white/10 transition-colors border border-[var(--color-border)]">
                    <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    <span>Visit Website</span>
                  </a>
              </div>
            </section>
            
            {/* Social Profiles */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Connect With Us</h2>
                <div className="flex justify-around items-center p-3 bg-black/10 rounded-lg">
                    <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
                        <Icon name="linkedin" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (formerly Twitter) Profile">
                        <Icon name="twitter" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook Profile">
                        <Icon name="facebook" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram Profile">
                        <Icon name="instagram" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.google} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Google Business Profile">
                        <Icon name="google" className={socialIconClasses} />
                    </a>
                    <a href={data.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
                        <Icon name="whatsapp" className={socialIconClasses} />
                    </a>
                </div>
            </section>

            {/* Downloads */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Downloads</h2>
                <div className="space-y-3">
                    <a href={data.downloads.profile} className="flex items-center gap-4 p-4 border border-[var(--color-border)] rounded-lg hover:bg-black/10 transition-colors">
                        <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="font-medium text-[var(--color-text-primary)]">Company Profile</span>
                    </a>
                    <a href={data.downloads.catalog} className="flex items-center gap-4 p-4 border border-[var(--color-border)] rounded-lg hover:bg-black/10 transition-colors">
                        <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        <span className="font-medium text-[var(--color-text-primary)]">Product Catalog</span>
                    </a>
                    <a href={data.downloads.brochure} className="flex items-center gap-4 p-4 border border-[var(--color-border)] rounded-lg hover:bg-black/10 transition-colors">
                         <svg className="w-6 h-6 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        <span className="font-medium text-[var(--color-text-primary)]">Corporate Brochure</span>
                    </a>
                </div>
            </section>

            {/* Location */}
            <section>
                <h2 className="text-xs uppercase font-bold text-gray-400 mb-3">Our Location</h2>
                <div className="aspect-w-16 aspect-h-9 border border-[var(--color-border)] rounded-lg overflow-hidden">
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