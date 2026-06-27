"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Sparkles, MapPin } from "lucide-react";

export default function About() {
  const pillars = [
    { title: "Architectural Precision", desc: "Every cabinet box and drawer slot is engineered down to the exact millimeter using standard structural tolerances to eliminate misalignment.", icon: <ShieldCheck size={24} /> },
    { title: "Bespoke Aesthetics", desc: "No copy-pasted layouts. We craft curated material blends, custom walnuts, sleek mattes, and gold accents tailored to your space.", icon: <Compass size={24} /> },
    { title: "Client Centricity", desc: "Transparent quotes and timeline tracking. We keep you informed at every key phase of the fabrication and installation process.", icon: <Sparkles size={24} /> },
    { title: "Local Mastery", desc: "Deeply rooted in Belagavi. Our local design studio ensures direct oversight, prompt site support, and long-term aftercare.", icon: <MapPin size={24} /> }
  ];

  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center space-y-4">
          <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">Inside Four Pillars</span>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-wide">Our Design Story</h1>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Who We Are</span>
              <h2 className="font-cormorant text-3xl md:text-5xl font-light text-primary leading-tight">
                Pioneering Premium Spatial Interiors in Belagavi since 2016.
              </h2>
              <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed">
                At Four Pillars Interior, we believe home interior designing is more than just stacking modules; it is the art of restructuring spatial functions to match your lifestyle. From our showroom in Tilakwadi, Belagavi, we conceptualize and build bespoke modular kitchens and premium closets that fuse high-end European systems with custom local cabinetry.
              </p>
              <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed">
                Our team is comprised of experienced design consultants, project managers, and skilled installers. We leverage advanced machinery to process materials, guaranteeing high durability, moisture resistance, and beautiful finishes that withstand the local climate.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 border-[6px] border-gold/20 -m-3 -z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Our Core Pillars</span>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-primary leading-tight">
              The Foundations of Our Architectural Identity
            </h2>
            <div className="w-16 h-[2px] bg-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white border border-black/5 p-8 flex flex-col justify-between min-h-[220px] shadow-sm">
                <div>
                  <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl font-medium text-primary mb-3">{pillar.title}</h3>
                  <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom CTA Banner */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-white leading-tight">
            Step Inside Our Showroom
          </h2>
          <p className="font-manrope text-sm font-light text-white/70 max-w-xl mx-auto leading-relaxed">
            Experience our premium material boards, walnut handles, acrylic layouts, and smart kitchen storage organizers first-hand at our Tilakwadi design studio.
          </p>
          <div className="flex justify-center pt-4">
            <Link href="/contact" className="bg-gold hover:bg-goldhover text-primary font-manrope text-xs font-bold uppercase tracking-[0.2em] px-8 py-5 transition-all">
              Book Showroom Walkthrough
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
