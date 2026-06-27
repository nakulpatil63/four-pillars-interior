"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. Floating Phone Hotkey (Bottom Left) */}
      <a
        href="tel:08050615011"
        className="fixed bottom-6 left-6 z-40 bg-walnut hover:bg-gold text-white hover:text-primary w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 animate-pulse group-hover:scale-110" />
      </a>

      {/* 2. Floating WhatsApp Chat (Bottom Right) */}
      <a
        href="https://wa.me/918050615011?text=Hi%20Four%20Pillars%20Interior%2C%20I%20would%20like%20to%20book%20a%20free%20design%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110" />
      </a>

      {/* 3. Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 z-40 bg-primary/70 hover:bg-gold text-white hover:text-primary w-10 h-10 rounded-none flex items-center justify-center shadow-xl transition-all duration-300 border border-white/10 hover:border-gold"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
