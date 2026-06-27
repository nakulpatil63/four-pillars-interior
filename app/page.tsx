"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Compass, Calendar, Wrench, Layers, Gem, ArrowUpRight, ChefHat, Monitor, Sofa, Bed, Sun, Users, Package, Eye, ArrowRight, CheckCircle2, ChevronDown, Phone } from "lucide-react";

export default function Home() {
  // Stats Counters
  const [stats, setStats] = useState({ reviews: 0, projects: 0, experience: 0, satisfaction: 0 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  useEffect(() => {
    // Animate stats numbers slowly
    const interval = setInterval(() => {
      setStats((prev) => {
        const next = { ...prev };
        if (next.reviews < 170) next.reviews += 5;
        if (next.projects < 500) next.projects += 15;
        if (next.experience < 10) next.experience += 1;
        if (next.satisfaction < 100) next.satisfaction += 4;
        
        if (next.reviews >= 170 && next.projects >= 500 && next.experience >= 10 && next.satisfaction >= 100) {
          clearInterval(interval);
        }
        return {
          reviews: Math.min(next.reviews, 170),
          projects: Math.min(next.projects, 500),
          experience: Math.min(next.experience, 10),
          satisfaction: Math.min(next.satisfaction, 100),
        };
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Anil Patil",
      project: "Modular Kitchen Project, Tilakwadi",
      text: "We got our modular kitchen and master wardrobes designed by Four Pillars Interior. Their craftsmanship is world-class. The walnut wood textures and soft-close modular drawers are extremely premium. Truly Belagavi's best.",
    },
    {
      name: "Rohini Kulkarni",
      project: "Living Room TV Console & False Ceiling, Belagavi",
      text: "The 3D design mapping and material selection experience at their showroom were absolute highlights. The final execution of our TV unit console and false ceiling looks exactly like the photorealistic visualization they shared.",
    },
    {
      name: "Sanjay Deshpande",
      project: "Sliding Wardrobe & Bedroom Project, Tilakwadi",
      text: "High quality products, great space utilization advice, and very transparent cost sheets. The project team completed the entire wardrobe assembly within our timeline. Extremely satisfied customer.",
    },
  ];

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
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) newErrors.phone = "Please enter a valid 10-digit number.";
    if (!formData.service) newErrors.service = "Please select a service option.";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setFormSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image (Using curated high-res modular kitchen from Unsplash) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 opacity-70 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6 md:space-y-8 mt-16 md:mt-24"
          >
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <span className="h-[1px] w-8 bg-gold"></span>
              <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">
                Belagavi's Premium Furniture Interior Design Studio
              </span>
            </div>
            
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-wide">
              Crafting Elegant <br className="hidden md:inline" />
              <span className="italic text-gold">Modular Kitchens</span> & <br className="hidden md:inline" />
              Premium <span className="font-normal font-playfair border-b-[2px] border-gold/40">Wardrobes</span>
            </h1>
            
            <p className="font-manrope text-sm sm:text-base md:text-lg font-light text-white/70 max-w-2xl leading-relaxed tracking-wider">
              Elevated interior design solutions crafted for style, comfort, and state-of-the-art functionality. Discover European design fused with custom local mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gold hover:bg-goldhover text-primary font-manrope text-xs font-bold uppercase tracking-[0.25em] px-8 py-5 rounded-none transition-all duration-300 shadow-xl border border-gold hover:border-goldhover text-center"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:08050615011"
                className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-primary font-manrope text-xs font-bold uppercase tracking-[0.25em] px-8 py-5 rounded-none transition-all duration-300 border border-white/30 hover:border-white text-center flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Mouse Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50">
          <span className="font-manrope text-[9px] tracking-[0.3em] uppercase mb-2">Scroll To Explore</span>
          <div className="w-[20px] h-[34px] border border-white/30 rounded-full flex justify-center p-[4px]">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-[3px] h-[6px] bg-gold rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 2. STATISTICS SECTION */}
      <section className="bg-primary border-y border-white/5 py-12 md:py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <div className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-gold tracking-wide">
                {stats.reviews}+
              </div>
              <p className="font-manrope text-[10px] md:text-xs tracking-[0.25em] text-white/60 uppercase">Five-Star Reviews</p>
            </div>
            <div className="space-y-2">
              <div className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-gold tracking-wide">
                {stats.projects}+
              </div>
              <p className="font-manrope text-[10px] md:text-xs tracking-[0.25em] text-white/60 uppercase">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-gold tracking-wide">
                {stats.experience}+
              </div>
              <p className="font-manrope text-[10px] md:text-xs tracking-[0.25em] text-white/60 uppercase">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-gold tracking-wide">
                {stats.satisfaction}%
              </div>
              <p className="font-manrope text-[10px] md:text-xs tracking-[0.25em] text-white/60 uppercase">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SECTION */}
      <section className="py-24 md:py-32 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
            <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Why Four Pillars Interior</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary leading-tight">
              Uncompromising Craftsmanship, <br />Designed for Modern Living.
            </h2>
            <div className="w-16 h-[2px] bg-gold mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "170+ Five Star Reviews", desc: "Belagavi's most trusted name, celebrated for delivering exceptional luxury service and immaculate final design details.", icon: <Star size={24} /> },
              { title: "Custom Designs", desc: "Tailor-made floor plans and furniture layout designs created dynamically to align with your personal habits and spatial aesthetics.", icon: <Layers size={24} /> },
              { title: "Premium Materials", desc: "Only top-grade, boiling-water-resistant ply, rustproof hardware, soft-close hinges, and ultra-durable premium finishes used.", icon: <ShieldCheck size={24} /> },
              { title: "Affordable Luxury", desc: "High-end modular components made accessible. Get premium architecture studio quality without the luxury agency markup.", icon: <Gem size={24} /> },
              { title: "Experienced Designers", desc: "Collaborate with professional design specialists who understand layout optimization, color systems, and modern lighting trends.", icon: <Compass size={24} /> },
              { title: "Timely Completion", desc: "Efficient factory manufacturing and streamlined site installation to guarantee we hand over keys right on schedule.", icon: <Calendar size={24} /> },
              { title: "After Sales Support", desc: "A dedicated customer care pipeline and solid warranty policies to assist you long after the final installation.", icon: <Wrench size={24} /> }
            ].map((card, idx) => (
              <div key={idx} className="group bg-white border border-black/5 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[250px] relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold/5 rounded-full filter blur-xl translate-y-8 translate-x-8 group-hover:scale-150 transition-all duration-700" />
                <div>
                  <div className="w-12 h-12 bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl font-medium text-primary mb-3">{card.title}</h3>
                  <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION SUMMARY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-11/12 h-[350px] md:h-[450px] bg-cover bg-center shadow-2xl relative z-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 border-[6px] border-gold/30 -m-3 -z-10 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Since 2016</span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary leading-tight">
                  Elevating Homes with Thoughtful Design & Architectural Precision
                </h2>
                <div className="w-16 h-[2px] bg-gold" />
              </div>
              <p className="font-manrope text-sm font-light text-charcoal/80 leading-relaxed">
                Four Pillars Interior was founded with a singular, clear vision: to bring top-tier modular kitchens, bespoke sliding wardrobes, and premium room architecture to Belagavi. For over a decade, we have partnered with discerning clients to craft visually stunning, ergonomic, and practical home interior solutions.
              </p>
              <div className="pt-4 flex items-center">
                <Link href="/about" className="inline-flex items-center space-x-3 group text-primary font-manrope text-xs font-bold uppercase tracking-widest hover:text-gold transition-colors duration-300">
                  <span>Discover Our Story</span>
                  <span className="w-8 h-[1px] bg-primary group-hover:bg-gold transition-colors duration-300" />
                  <ArrowRight size={16} className="text-gold transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SUMMARY GRID */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-4">
              <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Core Specializations</span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary leading-tight">Custom Services Crafted to Perfection</h2>
            </div>
            <Link href="/services" className="font-manrope text-xs font-bold uppercase tracking-widest text-gold hover:text-primary transition-all">
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Modular Kitchens", desc: "Smart, ergonomic U-shaped, L-shaped, parallel, and island kitchens made with waterproof ply and rustproof soft-close hardware.", icon: <ChefHat size={24} />, img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" },
              { title: "Sliding Wardrobes", desc: "Sleek glass, acrylic, and wood laminate sliding doors. Perfect for modern spaces that demand seamless high-end storage optimization.", icon: <Layers size={24} />, img: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=600&q=80" },
              { title: "Living Room TV Units", desc: "Stunning entertainment walls integrated with walnut wooden slats, marble backgrounds, concealed wiring, and ambient floating drawers.", icon: <Monitor size={24} />, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white border border-black/5 hover:border-gold/30 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-[450px]">
                <div className="relative overflow-hidden h-52 bg-primary">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-cormorant text-2xl font-semibold text-primary">{service.title}</h3>
                      <div className="text-gold">{service.icon}</div>
                    </div>
                    <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed line-clamp-3">{service.desc}</p>
                  </div>
                  <Link href="/contact" className="flex items-center gap-2 font-manrope text-[10px] font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-300 mt-6">
                    Request Custom Quote <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REVIEWS SLIDER */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase block">What Clients Say</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white">170+ Five-Star Customer Stories</h2>
            <div className="w-16 h-[2px] bg-gold" />
          </div>

          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex text-gold space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                </div>
                <blockquote className="font-cormorant text-xl sm:text-2xl md:text-3xl italic font-light text-white/95 leading-relaxed">
                  "{testimonials[activeSlide].text}"
                </blockquote>
                <div className="pt-4 flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gold/25 rounded-full flex items-center justify-center font-manrope text-sm font-bold text-gold">
                    {testimonials[activeSlide].name[0]}
                  </div>
                  <div>
                    <h4 className="font-manrope text-xs font-bold tracking-widest text-gold uppercase">{testimonials[activeSlide].name}</h4>
                    <p className="font-manrope text-[10px] text-white/50 tracking-wider">{testimonials[activeSlide].project}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-12 max-w-xs mx-auto">
              <button onClick={() => setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))} className="w-12 h-12 border border-white/20 hover:border-gold text-white/60 hover:text-gold flex items-center justify-center transition-colors">
                ←
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <span key={idx} onClick={() => setActiveSlide(idx)} className={`w-2 h-2 rounded-full cursor-pointer ${idx === activeSlide ? "bg-gold" : "bg-white/20"}`} />
                ))}
              </div>
              <button onClick={() => setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))} className="w-12 h-12 border border-white/20 hover:border-gold text-white/60 hover:text-gold flex items-center justify-center transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center space-y-4">
            <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Got Questions?</span>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary">Frequently Asked Questions</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white border border-black/5">
                  <button onClick={() => setActiveFaq(isOpen ? null : idx)} className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none text-primary hover:text-gold transition-colors">
                    <span className="font-cormorant text-xl font-medium tracking-wide">{item.q}</span>
                    <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : "text-primary"}`}>
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="px-8 pb-6 font-manrope text-xs font-light text-charcoal/70 leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CONTACT FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Get In Touch</span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary leading-tight">Let's Co-Create Your Sanctuary</h2>
              </div>
              
              <div className="space-y-6 font-manrope text-xs">
                <div>
                  <h4 className="font-bold tracking-widest text-primary uppercase mb-1">Our Studio Address</h4>
                  <p className="text-charcoal/70 leading-relaxed">
                    3rd Floor of Sunray Square, Khanapur Main Road,<br />
                    Near RPD Circle, Opposite Heda Ply, Tilakwadi, Belagavi, KA 590011
                  </p>
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-primary uppercase mb-1">Direct Hotline</h4>
                  <p className="text-charcoal/70 leading-relaxed font-semibold hover:text-gold transition-colors">
                    <a href="tel:08050615011">08050615011</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-offwhite border border-black/5 p-8 md:p-10 shadow-sm">
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Your Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${errors.name ? "border-red-500" : "border-black/10"}`} />
                      {errors.name && <span className="text-[10px] text-red-500 font-manrope">{errors.name}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="08050615011" className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${errors.phone ? "border-red-500" : "border-black/10"}`} />
                        {errors.phone && <span className="text-[10px] text-red-500 font-manrope">{errors.phone}</span>}
                      </div>
                      <div className="space-y-1">
                        <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="example@gmail.com" className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${errors.email ? "border-red-500" : "border-black/10"}`} />
                        {errors.email && <span className="text-[10px] text-red-500 font-manrope">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Service Required *</label>
                      <select name="service" value={formData.service} onChange={handleInputChange} className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${errors.service ? "border-red-500" : "border-black/10"}`}>
                        <option value="" disabled>Select service category</option>
                        <option value="kitchen">Modular Kitchen</option>
                        <option value="wardrobes">Sliding / Walk-in Wardrobes</option>
                        <option value="tv">Living Room TV Unit</option>
                        <option value="full">Complete Home Interior</option>
                      </select>
                      {errors.service && <span className="text-[10px] text-red-500 font-manrope">{errors.service}</span>}
                    </div>

                    <div className="space-y-1">
                      <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Project Details</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Briefly describe your requirements" className="w-full bg-white border border-black/10 px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors" />
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-gold text-white hover:text-primary font-manrope text-xs font-bold uppercase tracking-[0.25em] py-4 rounded-none transition-all duration-300 border border-primary hover:border-gold">
                      Submit Consultation Request
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <CheckCircle2 size={48} className="text-gold" />
                    <h4 className="font-cormorant text-3xl font-semibold text-primary">Request Submitted!</h4>
                    <p className="font-manrope text-xs font-light text-charcoal/70 max-w-sm">Thank you. Our senior design planner will reach out to you within 24 business hours to book your showroom walkthrough.</p>
                    <button onClick={() => setFormSubmitted(false)} className="font-manrope text-[10px] font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors">Submit another request</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
