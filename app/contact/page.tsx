"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) newErrors.phone = "Please enter a valid 10-digit phone number.";
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
    <div className="pt-24 min-h-screen bg-offwhite">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center space-y-4">
          <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-gold uppercase">Let's Connect</span>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-white tracking-wide">Contact Our Studio</h1>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* Main Details and Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info Cards Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <span className="font-manrope text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut uppercase block">Get In Touch</span>
                <h2 className="font-cormorant text-3xl md:text-5xl font-light text-primary leading-tight">
                  Design Your Dream Home Space
                </h2>
                <p className="font-manrope text-xs font-light text-charcoal/70 leading-relaxed">
                  Have questions about modular kitchens, custom cabinetry, wardrobe tracks, or complete bedroom setups? Reach out directly or fill in the consultation form to book your showroom walkthrough.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center rounded-none shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="font-manrope text-xs">
                    <h4 className="font-bold uppercase tracking-widest text-primary mb-1">Our Showroom Address</h4>
                    <p className="text-charcoal/70 leading-relaxed">
                      3rd Floor of Sunray Square, Khanapur Main Road,<br />
                      Near RPD Circle, Opposite Heda Ply, Ranade Colony,<br />
                      Tilakwadi, Belagavi, Karnataka 590011
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center rounded-none shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="font-manrope text-xs">
                    <h4 className="font-bold uppercase tracking-widest text-primary mb-1">Direct Hotline</h4>
                    <p className="text-charcoal/70 font-semibold hover:text-gold transition-colors">
                      <a href="tel:08050615011">08050615011</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center rounded-none shrink-0">
                    <Clock size={18} />
                  </div>
                  <div className="font-manrope text-xs">
                    <h4 className="font-bold uppercase tracking-widest text-primary mb-1">Business Hours</h4>
                    <p className="text-charcoal/70 leading-relaxed">
                      Monday – Saturday: 10:00 AM – 8:00 PM<br />
                      Sunday: Closed (Available by appointment)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-offwhite border border-black/5 p-8 md:p-10 shadow-sm">
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${
                          errors.name ? "border-red-500" : "border-black/10"
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-manrope">{errors.name}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="08050615011"
                          className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${
                            errors.phone ? "border-red-500" : "border-black/10"
                          }`}
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-manrope">{errors.phone}</span>}
                      </div>
                      <div className="space-y-1">
                        <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@gmail.com"
                          className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${
                            errors.email ? "border-red-500" : "border-black/10"
                          }`}
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-manrope">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-manrope text-[10px] font-bold uppercase tracking-widest text-primary block">Service Required *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full bg-white border px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors ${
                          errors.service ? "border-red-500" : "border-black/10"
                        }`}
                      >
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
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Briefly describe your requirements"
                        className="w-full bg-white border border-black/10 px-4 py-3 font-manrope text-xs focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-gold text-white hover:text-primary font-manrope text-xs font-bold uppercase tracking-[0.25em] py-4 rounded-none transition-all duration-300 border border-primary hover:border-gold"
                    >
                      Submit Consultation Request
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <CheckCircle2 size={48} className="text-gold" />
                    <h4 className="font-cormorant text-3xl font-semibold text-primary">Request Submitted!</h4>
                    <p className="font-manrope text-xs font-light text-charcoal/70 max-w-sm">
                      Thank you. Our senior design planner will reach out to you within 24 business hours to book your showroom walkthrough.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="font-manrope text-[10px] font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors"
                    >
                      Submit another request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="h-[450px] w-full border-t border-black/5 relative bg-primary">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4831633519827!2d74.50130637489531!3d15.83984368481358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669ffaaaaaaa%3A0xe54d4f2b96874e0!2sSunray%20Square!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(120%)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Four Pillars Interior Studio Location"
        />
      </section>
    </div>
  );
}
