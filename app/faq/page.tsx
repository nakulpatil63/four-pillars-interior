"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What is the tentative pricing for a modular kitchen?",
      a: "Modular kitchen pricing depends heavily on size, cabinet layout configuration (L, U, Parallel), plywood type, and finishes selected (Laminate, Acrylic, or Glass). We provide clear, itemized cost estimates so you pay precisely for what is built without hidden design premiums.",
    },
    {
      q: "What is the design-to-handover project timeline?",
      a: "Normally, a complete home modular layout takes between 30 to 45 business days. This timeframe spans the initial measurement audits, generating 3D digital walkthroughs, high-precision factory machining, and the final on-site installation work.",
    },
    {
      q: "Can we customize cabinet dimensions and drawer organizers?",
      a: "Absolutely. Every carcass block and sliding wardrobe shutter we make is customizable to align with your storage habits. We design cutlery trays, bottle pull-outs, vertical pantry shelves, and specific drawer depths to fit your kitchen appliances.",
    },
    {
      q: "What kind of product warranty do you provide?",
      a: "We provide comprehensive structural warranties on our Boiling Water Resistant (BWR/BWP) marine plywood cabinets and dynamic sliding tracks. Additionally, the premium hardware hinges and handles we use carry direct brand lifetime coverage against rust.",
    },
    {
      q: "Do you charge separately for site measurement and 3D designs?",
      a: "No. As part of our comprehensive design package, we offer our initial layout consultations, site dimensions audits, and 3D visualization mappings completely free of charge once the project is confirmed.",
    },
    {
      q: "Which modular hardware brands do you use?",
      a: "We partner directly with leading premium hardware brands such as Hettich, Hafele, and Ebco. This ensures you receive soft-closing hinges, smooth telescopic drawer channels, and high-load kitchen pull-outs that operate silently.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center space-y-4">
          <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">Inquiries & Help</span>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-wide">Frequently Asked Questions</h1>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* Accordions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-offwhite border border-black/5">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none text-primary hover:text-gold transition-colors"
                  >
                    <span className="font-cormorant text-xl font-medium tracking-wide">{item.q}</span>
                    <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : "text-primary"}`}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-8 pb-6 font-manrope text-xs font-light text-charcoal/70 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
