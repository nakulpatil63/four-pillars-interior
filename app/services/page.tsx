"use client";

import React from "react";
import Link from "next/link";
import { ChefHat, Layers, Monitor, Bed, Sun, Wrench } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      title: "Modular Kitchens",
      desc: "Architectural-grade modular layouts designed to fit standard accessories, pull-out wire baskets, tall units, and smart chimney integrations. Crafted using premium moisture-resistant BWR marine plywood structures and finished in high-gloss acrylic or matte anti-fingerprint laminates.",
      icon: <ChefHat size={28} />,
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bespoke Sliding Wardrobes",
      desc: "Sleek, space-saving closets with high-precision sliding mechanisms. Built using robust aluminum profiles, soft-close dampers, and custom-styled shutter panel finishes including tinted mirrors, lacquered glass, or natural walnut wood grains.",
      icon: <Layers size={28} />,
      img: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Luxury Walk-In Closets",
      desc: "Bespoke dressing rooms tailored for high-end organization. Features integrated internal warm-white LED strips, glass wardrobe doors, velvet-lined watch organizers, pull-out trousers racks, and premium hardware hinges.",
      icon: <Wrench size={28} />,
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Living Room TV Consoles",
      desc: "Entertainment centers crafted to serve as focal design highlights. Incorporates elegant marble backing panels, custom walnut slatted partitions, hidden structural wiring channels, and modular floating drawers.",
      icon: <Monitor size={28} />,
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Premium Bedroom Units",
      desc: "Coordinated bedroom designs featuring custom king/queen size storage beds, luxury upholstered tufted headboards, wall slat framing, bedside vanity drawers, and integrated side study tables.",
      icon: <Bed size={28} />,
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Gypsum False Ceilings",
      desc: "Architectural ceiling work structured with moisture-proof Saint-Gobain gypsum boards. Finished with concealed LED strip channels, recessed warm spot lighting, and wooden decorative rafters to set the right ambience.",
      icon: <Sun size={28} />,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center space-y-4">
          <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">Services & Capabilities</span>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-wide">Our Spatial Services</h1>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {serviceList.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-black/5 last:border-0 last:pb-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="w-14 h-14 bg-gold/10 text-gold flex items-center justify-center rounded-none">
                      {service.icon}
                    </div>
                    <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-primary">{service.title}</h2>
                    <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed">{service.desc}</p>
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="bg-primary hover:bg-gold text-white hover:text-primary font-manrope text-[10px] font-bold uppercase tracking-widest px-6 py-4 transition-all"
                      >
                        Request Quote for {service.title}
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative overflow-hidden group shadow-lg h-[300px] md:h-[350px]">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
