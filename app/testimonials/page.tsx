"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Anil Patil",
      project: "Modular Kitchen Project, Tilakwadi",
      stars: 5,
      text: "We got our modular kitchen and master wardrobes designed by Four Pillars Interior. Their craftsmanship is world-class. The walnut wood textures and soft-close modular drawers are extremely premium. Truly Belagavi's best.",
    },
    {
      name: "Rohini Kulkarni",
      project: "Living Room TV Console & False Ceiling, Belagavi",
      stars: 5,
      text: "The 3D design mapping and material selection experience at their showroom were absolute highlights. The final execution of our TV unit console and false ceiling looks exactly like the photorealistic visualization they shared.",
    },
    {
      name: "Sanjay Deshpande",
      project: "Sliding Wardrobe & Bedroom Project, Tilakwadi",
      stars: 5,
      text: "High quality products, great space utilization advice, and very transparent cost sheets. The project team completed the entire wardrobe assembly within our timeline. Extremely satisfied customer.",
    },
    {
      name: "Mahesh Joshi",
      project: "L-Shaped Modular Kitchen, Belagavi",
      stars: 5,
      text: "Extremely professional. From the initial measurement audit to final installation of our kitchen cabinets, they maintained high standards. Highly recommended interior service in Tilakwadi.",
    },
    {
      name: "Pooja Hegde",
      project: "Bespoke Walk-in Wardrobe, Tilakwadi",
      stars: 5,
      text: "Love my new walk-in closet! The LED layout inside the glass doors looks so high-end. The designers were helpful in configuring customized drawers for all my dresses.",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center space-y-4">
          <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">Reviews & Feedback</span>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-wide">Client Testimonials</h1>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* Grid of Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Client Voices</span>
            <h2 className="font-cormorant text-3xl md:text-5xl font-light text-primary leading-tight">
              170+ Five-Star Google Ratings
            </h2>
            <div className="w-16 h-[2px] bg-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-offwhite border border-black/5 p-8 flex flex-col justify-between min-h-[300px] shadow-sm relative overflow-hidden">
                <div className="absolute top-6 right-6 text-gold/10 pointer-events-none">
                  <MessageSquare size={80} />
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="flex text-gold space-x-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="font-cormorant text-lg italic text-charcoal leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-black/5 mt-6 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center font-manrope text-sm font-bold">
                    {rev.name[0]}
                  </div>
                  <div>
                    <h4 className="font-manrope text-xs font-bold tracking-widest text-primary uppercase">{rev.name}</h4>
                    <p className="font-manrope text-[10px] text-charcoal/50 tracking-wider">{rev.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
