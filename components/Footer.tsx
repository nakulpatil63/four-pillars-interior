import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex flex-col select-none">
              <span className="font-cormorant text-2xl md:text-3xl font-light tracking-[0.2em] text-white">
                FOUR PILLARS
              </span>
              <span className="font-manrope text-[8px] md:text-[9px] tracking-[0.45em] text-gold uppercase">
                Interior Design
              </span>
            </Link>
            <p className="font-manrope text-xs font-light text-white/55 leading-relaxed max-w-sm">
              Belagavi's premier interior studio constructing bespoke, high-precision modular kitchens, premium closets, wardrobes, false ceiling layouts, and space-saving systems.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/four_pillars_interior/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/fourpillarsinterior"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-manrope text-[10px] font-bold uppercase tracking-widest text-gold">Sitemap</h4>
            <ul className="space-y-3 font-manrope text-xs font-light text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Story</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">Creations Gallery</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">Help FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-manrope text-[10px] font-bold uppercase tracking-widest text-gold">Services</h4>
            <ul className="space-y-3 font-manrope text-xs font-light text-white/60">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Modular Kitchens</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Sliding Door Wardrobes</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Walk-In Luxury Closets</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Living Room TV Consoles</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Master Bed Design</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Gypsum False Ceilings</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-manrope text-[10px] font-bold uppercase tracking-widest text-gold">Contact Studio</h4>
            <p className="font-manrope text-xs font-light text-white/60 leading-relaxed">
              3rd Floor of Sunray Square,<br />
              Khanapur Road, Tilakwadi,<br />
              Belagavi, Karnataka 590011
            </p>
            <p className="font-manrope text-xs font-semibold text-gold">
              Hotline: <a href="tel:08050615011" className="hover:underline">08050615011</a>
            </p>
            <div className="pt-2 flex flex-col space-y-1 font-manrope text-[10px] text-white/45">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
            <p className="font-manrope text-[10px] text-white/40 pt-4">
              © 2026 Four Pillars Interior.<br />All rights reserved. Designed for excellence.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-manrope text-white/40 tracking-wider">
          <span>Architectural Integrity Guarantee</span>
          <span className="mt-2 md:mt-0">Tilakwadi, Belagavi, Karnataka, India</span>
        </div>
      </div>
    </footer>
  );
}
