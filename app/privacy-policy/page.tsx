import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-4xl mx-auto px-6 py-20 bg-white shadow-sm border border-black/5 mt-12 mb-24">
        <h1 className="font-cormorant text-4xl font-light text-primary mb-6">Privacy Policy</h1>
        <p className="font-manrope text-[10px] text-charcoal/50 mb-8 uppercase tracking-widest">Effective Date: June 27, 2026</p>
        <div className="space-y-6 font-manrope text-xs font-light text-charcoal/80 leading-relaxed">
          <p>
            At Four Pillars Interior, we value the trust you place in us. This Privacy Policy details how we collect, store, utilize, and protect your information when you browse our website (fourpillarsinterior.com) or submit contact/consultation requests.
          </p>
          
          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">1. Information Collection</h2>
          <p>
            We collect personal details that you explicitly provide when submitting lead inquiries (including your Full Name, Mobile Phone Number, Email Address, Selected Services, and specific project notes).
          </p>

          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">2. Usage of Information</h2>
          <p>
            Your information is used to schedule spatial design consultations, provide itemized cost sheets, confirm factory production schedules, and communicate updates about your project installation work.
          </p>

          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">3. Storage & Security</h2>
          <p>
            We deploy standard electronic firewalls and secure hosting databases to ensure your contact details remain confidential. We do not sell or trade customer listings with marketing firms.
          </p>

          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">4. Cookies</h2>
          <p>
            This website utilizes minimal session cookies to analyze traffic patterns and optimize page load speeds, ensuring a premium browsing experience.
          </p>
        </div>
      </div>
    </div>
  );
}
