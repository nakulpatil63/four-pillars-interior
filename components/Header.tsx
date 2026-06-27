"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center ${
          isScrolled
            ? "glass-header py-4 bg-primary/95 shadow-xl border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <Link href="/" className="flex flex-col select-none">
          <span className="font-cormorant text-2xl md:text-3xl font-light tracking-[0.2em] text-white">
            FOUR PILLARS
          </span>
          <span className="font-manrope text-[8px] md:text-[9px] tracking-[0.45em] text-gold uppercase">
            Interior Design
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link font-manrope text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300 ${
                  isActive ? "text-gold font-semibold active-nav" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-gold hover:bg-goldhover text-primary font-manrope text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-none transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg border border-gold hover:border-goldhover"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary/98 z-40 flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-cormorant text-3xl text-white hover:text-gold tracking-widest transition-all ${
                      isActive ? "text-gold font-normal" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gold hover:bg-goldhover text-primary font-manrope text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 inline-block"
              >
                Book Free Consultation
              </Link>
              <div className="flex space-x-6 justify-center mt-8 text-white/50 text-sm font-manrope">
                <a
                  href="tel:08050615011"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Phone size={16} /> Call
                </a>
                <a
                  href="https://wa.me/918050615011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-center gap-2"
                >
                  <MessageSquare size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
