"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 0,
      title: "Walnut Modular Kitchen",
      category: "kitchen",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      desc: "Warm Walnut cabinetry paired with a matte black island counter and smart cabinet drawers.",
    },
    {
      id: 1,
      title: "Glass-Door Walk-In Closet",
      category: "wardrobe",
      img: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80",
      desc: "Luxury sliding shutters in dark-tinted mirror glass, complete with automated warm internal strip lights.",
    },
    {
      id: 2,
      title: "Walnut & Marble TV Panel",
      category: "tv",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      desc: "Floating media storage system matching elegant white marble slab tiles with dark walnut slatted wood profiles.",
    },
    {
      id: 3,
      title: "Compact L-Shaped Kitchen",
      category: "kitchen",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      desc: "Optimized corners featuring high-pressure laminate finishes and soft-close pullout drawers.",
    },
    {
      id: 4,
      title: "Minimalist Master Closet",
      category: "wardrobe",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      desc: "Bespoke full-height wardrobes showcasing clean handles, premium hinges, and space-saving sliding tracks.",
    },
    {
      id: 5,
      title: "Luxury Gypsum False Ceiling",
      category: "ceiling",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      desc: "Concealed ambient light tracks running along gypsum ceiling structures for uniform distribution.",
    },
  ];

  const filteredItems = filter === "all" ? portfolioItems : portfolioItems.filter((i) => i.category === filter);

  const openLightbox = (idx: number) => {
    // Find index of this item in the filtered list
    const filteredIndex = filteredItems.findIndex((item) => item.id === idx);
    setLightboxIndex(filteredIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center space-y-4">
          <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">Showroom Creations</span>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-wide">Creations Gallery</h1>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* Filter controls */}
      <section className="py-12 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-4">
          {[
            { id: "all", label: "All Projects" },
            { id: "kitchen", label: "Modular Kitchens" },
            { id: "wardrobe", label: "Wardrobes & Closets" },
            { id: "tv", label: "TV Consoles" },
            { id: "ceiling", label: "False Ceilings" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                closeLightbox();
              }}
              className={`font-manrope text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors ${
                filter === cat.id ? "bg-primary text-white border border-primary" : "bg-transparent text-charcoal/60 border border-black/10 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className="group bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <div className="relative overflow-hidden h-64 bg-primary">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                      <div className="w-12 h-12 bg-gold text-primary rounded-full flex items-center justify-center">
                        <Eye size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="font-manrope text-[8px] font-bold tracking-[0.35em] text-gold uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-cormorant text-2xl font-semibold text-primary">{item.title}</h3>
                    <p className="font-manrope text-xs font-light text-charcoal/75 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-primary/95 z-[9999] flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              aria-label="Close Gallery"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-white/50 hover:text-white"
              aria-label="Previous Image"
            >
              <ChevronLeft size={40} />
            </button>

            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative select-none">
              <img
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain border border-white/10"
              />
              <div className="text-center mt-6 space-y-1">
                <h3 className="font-cormorant text-2xl font-normal text-gold">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="font-manrope text-xs font-light text-white/70">
                  {filteredItems[lightboxIndex].desc}
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-6 text-white/50 hover:text-white"
              aria-label="Next Image"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
