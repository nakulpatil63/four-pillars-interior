import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="pt-24 min-h-screen bg-offwhite">
      <div className="max-w-4xl mx-auto px-6 py-20 bg-white shadow-sm border border-black/5 mt-12 mb-24">
        <h1 className="font-cormorant text-4xl font-light text-primary mb-6">Terms & Conditions</h1>
        <p className="font-manrope text-[10px] text-charcoal/50 mb-8 uppercase tracking-widest">Effective Date: June 27, 2026</p>
        <div className="space-y-6 font-manrope text-xs font-light text-charcoal/80 leading-relaxed">
          <p>
            Welcome to fourpillarsinterior.com. By accessing or using this website to schedule consultations, you agree to comply with and be bound by the following terms of use.
          </p>

          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">1. Scope of Consultations</h2>
          <p>
            Our initial 3D digital mappings and showroom consultations are design proposals. Final execution specifications, material parameters, and payment structures are governed solely by signed contract agreements.
          </p>

          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">2. Visual Render Representation</h2>
          <p>
            The photorealistic renders and gallery images on this website are intended for visual guidance. Final natural grain patterns of walnut woods, marble textures, and under-cabinet light warmth may exhibit slight variations.
          </p>

          <h2 className="font-cormorant text-2xl font-normal text-primary mt-8 mb-2">3. Product Warranties</h2>
          <p>
            Warranty coverage on BWR/BWP marine plywood cabinetry, aluminum slide frames, and brand hinge systems (Hettich, Ebco, Hafele) is subject to the terms and specifications outlined in the project purchase contract.
          </p>
        </div>
      </div>
    </div>
  );
}
