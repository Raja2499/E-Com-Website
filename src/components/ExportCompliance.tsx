import React from 'react';
import { 
  ShieldCheck, 
  Package, 
  Plane, 
  Ship, 
  FileCheck, 
  BadgeAlert, 
  CheckCircle, 
  HelpCircle,
  Truck
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const ExportCompliance: React.FC = () => {
  return (
    <section id="export-compliance" className="py-20 bg-[#140e0a] text-stone-100 border-b border-amber-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Logistics, Standards & Safe Transit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
            Fulfillment, Safe Packaging & Quality Assurance
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            From single boutique orders across Indian states to commercial consignments across international borders, 
            we guarantee secure packaging, ethical material verification, and transparent tracking.
          </p>
        </div>

        {/* 4 Pillars of Export Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
          
          {/* Pillar 1: Horn Art Compliance */}
          <div className="p-6 rounded-2xl bg-[#1d1510] border border-amber-900/40 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-amber-100">
              Ethical Horn Craft Integrity
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              All horn creations are sculpted strictly from naturally shed domestic cattle and water buffalo agricultural byproducts. Completely non-wildlife, cruelty-free, and legally compliant for domestic commerce and international clearance.
            </p>
            <div className="pt-2 border-t border-amber-950/80 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Certified Sustainable Byproduct</span>
            </div>
          </div>

          {/* Pillar 2: Export Grade Packaging */}
          <div className="p-6 rounded-2xl bg-[#1d1510] border border-amber-900/40 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-amber-100">
              Anti-Shock Packaging
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Every delicate horn piece, stone carving, or scroll receives individual bubble wrap, thermo-foam corner cushioning, moisture desiccant, and heavy-duty 7-ply corrugated outer boxes with reinforced banding.
            </p>
            <div className="pt-2 border-t border-amber-950/80 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Zero-Breakage Guarantee</span>
            </div>
          </div>

          {/* Pillar 3: Express Air Courier & Domestic Transport */}
          <div className="p-6 rounded-2xl bg-[#1d1510] border border-amber-900/40 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-amber-100">
              Courier & Air Freight
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Fast, tracked door-to-door delivery across India via BlueDart/Delhivery, and internationally via DHL Express, FedEx, and UPS. Ideal for sample validation and urgent retail stock replenishment.
            </p>
            <div className="pt-2 border-t border-amber-950/80 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Real-Time Tracking Code</span>
            </div>
          </div>

          {/* Pillar 4: Commercial Volume & Cargo */}
          <div className="p-6 rounded-2xl bg-[#1d1510] border border-amber-900/40 space-y-3 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400">
              <Ship className="w-5 h-5" />
            </div>
            <h3 className="font-display text-base font-bold text-amber-100">
              Ocean Freight & Bulk Cargo
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              For volume buyers, LCL (Less-than-Container-Load) and FCL consignments are palletized, shrink-wrapped, and fumigated with complete documentation including Certificate of Origin, Packing List, and Commercial Invoice.
            </p>
            <div className="pt-2 border-t border-amber-950/80 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Full Commercial Invoicing</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
