import React from 'react';
import { 
  ShieldCheck, 
  Package, 
  Plane, 
  Ship, 
  FileCheck, 
  CheckCircle, 
  Truck
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const ExportCompliance: React.FC = () => {
  return (
    <section id="policies" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Logistics, Standards & Safe Transit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Trade Policies, Fulfillment & Safe Transit
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From single individual orders across Indian states to commercial export consignments across international borders, 
            we guarantee secure packaging, ethical material verification, and transparent tracking.
          </p>
        </div>

        {/* 4 Pillars of Export Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          
          {/* Pillar 1: Horn Art Compliance */}
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200 space-y-3 shadow-2xs hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-stone-900">
              Ethical Horn Integrity
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              All horn creations are sculpted strictly from naturally shed domestic cattle and water buffalo agricultural byproducts. Completely non-wildlife, cruelty-free, and legally compliant for domestic commerce and international clearance.
            </p>
            <div className="pt-2 border-t border-stone-200 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Certified Sustainable Byproduct</span>
            </div>
          </div>

          {/* Pillar 2: Export Grade Packaging */}
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200 space-y-3 shadow-2xs hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-stone-900">
              Anti-Shock Packaging
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Multi-layer protective protocol: individual desiccant bags, high-density custom foam cradles, corner edge-protectors, and double-walled 7-ply heavy-duty corrugated export master cartons or fumigated wooden crates.
            </p>
            <div className="pt-2 border-t border-stone-200 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero-Transit Damage Track Record</span>
            </div>
          </div>

          {/* Pillar 3: Multi-Carrier Shipping */}
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200 space-y-3 shadow-2xs hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-stone-900">
              Domestic & Global Freight
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Direct tie-ups with premium logistics partners (Blue Dart, Delhivery, DHL Express, FedEx, and sea freight forwarders at Paradip & Kolkata ports) supporting FOB, CIF, or doorstep courier delivery with end-to-end tracking.
            </p>
            <div className="pt-2 border-t border-stone-200 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full Transit Cargo Insurance</span>
            </div>
          </div>

          {/* Pillar 4: Statutory Documentation */}
          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-stone-200 space-y-3 shadow-2xs hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-stone-900">
              Statutory Export Dossier
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Every shipment is backed by verified commercial invoices, itemized packing lists, Certificate of Origin, GST e-way bills, and requisite customs paperwork for seamless clearance across customs jurisdictions.
            </p>
            <div className="pt-2 border-t border-stone-200 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>DGFT IEC & GST Compliant</span>
            </div>
          </div>

        </div>

        {/* Official Statutory Identifiers Bar */}
        <div className="p-6 rounded-2xl bg-[#faf7f2] border border-amber-200 shadow-2xs flex flex-wrap items-center justify-around gap-6 text-left">
          <div>
            <span className="text-[10px] text-stone-500 uppercase font-semibold block">DGFT Importer-Exporter Code</span>
            <span className="text-stone-900 font-mono text-sm font-bold mt-0.5 block">{EXPORTER_PROFILE.compliance.iec.split(' ')[0]}</span>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-300" />

          <div>
            <span className="text-[10px] text-stone-500 uppercase font-semibold block">MSME Udyam Registration</span>
            <span className="text-stone-900 font-mono text-sm font-bold mt-0.5 block">{EXPORTER_PROFILE.compliance.udyam}</span>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-300" />

          <div>
            <span className="text-[10px] text-stone-500 uppercase font-semibold block">Government of India GSTIN</span>
            <span className="text-stone-900 font-mono text-sm font-bold mt-0.5 block">{EXPORTER_PROFILE.compliance.gstin.split(' ')[0]}</span>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-300" />

          <div>
            <span className="text-[10px] text-stone-500 uppercase font-semibold block">Artisan Jurisdiction</span>
            <span className="text-stone-900 text-sm font-bold mt-0.5 block">Bhubaneswar & Cuttack, Odisha</span>
          </div>
        </div>

      </div>
    </section>
  );
};
