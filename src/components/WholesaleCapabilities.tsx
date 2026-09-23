import React from 'react';
import { 
  Sparkles, 
  Palette, 
  Boxes, 
  TrendingDown, 
  FileCheck2, 
  Workflow, 
  ArrowUpRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

interface WholesaleCapabilitiesProps {
  onOpenCatalogueModal: () => void;
}

export const WholesaleCapabilities: React.FC<WholesaleCapabilitiesProps> = ({
  onOpenCatalogueModal
}) => {
  const capabilities = [
    {
      icon: Sparkles,
      title: 'Authentic Handmade Products',
      highlight: 'Centuries-Old Living Heritage',
      description: 'Zero automated mass manufacturing. Every horn carving, Pattachitra cloth painting, and stone sculpture is shaped by skilled rural artisans carrying multi-generational lineage traditions.'
    },
    {
      icon: Palette,
      title: 'Custom Designs & Sizing',
      highlight: 'Tailored to Buyer Specifications',
      description: 'We execute bespoke client designs, customized dimensional proportions, specialized finishes (matte/high-gloss), and retail-ready private labeling based on your sketches or reference photos.'
    },
    {
      icon: Boxes,
      title: 'Flexible MOQs & Sample Shipments',
      highlight: 'From Boutique Retailers to Large Distributors',
      description: 'We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal.'
    },
    {
      icon: TrendingDown,
      title: 'Direct Artisan Wholesale Rates',
      highlight: 'Direct Exporter • No Middlemen',
      description: 'Benefit from transparent ex-cluster wholesale pricing directly from the artisanal source villages, enabling healthy retail margins for both domestic stores in India and international trade buyers.'
    },
    {
      icon: FileCheck2,
      title: 'Photos, Specifications & Samples',
      highlight: 'Pre-Shipment Proof & Physical Evaluation',
      description: 'We provide high-resolution photography of finished batches, dimensional inspection sheets, and prompt courier sample dispatch before committing to full production runs.'
    },
    {
      icon: Workflow,
      title: 'Flexible Sourcing Across India',
      highlight: 'Your Dedicated Indian Sourcing Partner',
      description: 'Beyond our horn, Pattachitra, and stone carving core lines, our boots-on-the-ground artisan network enables us to source and quality-check any regional Indian handicraft based on your exact brief.'
    }
  ];

  return (
    <section id="wholesale-terms" className="py-20 bg-[#16110c] text-stone-100 border-b border-amber-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Why Source With Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
            Comprehensive Wholesale Capabilities
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Direct master artisan sourcing backed by transparent trade discipline. Designed to make sourcing authentic Indian handicrafts smooth, dependable, and cost-effective for domestic and international buyers.
          </p>
        </div>

        {/* 6 Grid Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {capabilities.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#201812] border border-amber-900/40 hover:border-amber-600/60 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-700/60 flex items-center justify-center text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wide block">
                      {cap.highlight}
                    </span>
                    <h3 className="font-display text-lg font-bold text-amber-100 mt-0.5">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ideal Buyer Profiles */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#1f1610] border border-amber-900/50 shadow-xl text-left">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Serving Diverse Global & Domestic Partners</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#150f0a] border border-stone-800 text-stone-300">
              <strong className="text-amber-200 block">Retail Stores & Boutiques</strong>
              <span className="text-[11px] text-stone-400">Authentic shelf inventory</span>
            </div>
            <div className="p-3 rounded-xl bg-[#150f0a] border border-stone-800 text-stone-300">
              <strong className="text-amber-200 block">Wholesalers & Distributors</strong>
              <span className="text-[11px] text-stone-400">Bulk & pallet volume</span>
            </div>
            <div className="p-3 rounded-xl bg-[#150f0a] border border-stone-800 text-stone-300">
              <strong className="text-amber-200 block">Interior Decorators</strong>
              <span className="text-[11px] text-stone-400">Architectural statement art</span>
            </div>
            <div className="p-3 rounded-xl bg-[#150f0a] border border-stone-800 text-stone-300">
              <strong className="text-amber-200 block">Gift & Lifestyle Shops</strong>
              <span className="text-[11px] text-stone-400">Cultural & artisan gifts</span>
            </div>
            <div className="p-3 rounded-xl bg-[#150f0a] border border-stone-800 text-stone-300">
              <strong className="text-amber-200 block">Galleries & Museums</strong>
              <span className="text-[11px] text-stone-400">Certified folk narratives</span>
            </div>
            <div className="p-3 rounded-xl bg-[#150f0a] border border-stone-800 text-stone-300">
              <strong className="text-amber-200 block">Corporate Buyers</strong>
              <span className="text-[11px] text-stone-400">Bespoke heritage mementos</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-amber-950/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-400">
              Interested in sourcing distinctive handcrafted Indian pieces for your store, showroom, or project?
            </p>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenCatalogueModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-950/70 hover:bg-amber-900 border border-amber-700/60 text-amber-200 text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Export Catalog (PDF)</span>
              </button>
              <a
                href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
                  'Hello Subhasish, I am interested in discussing wholesale terms and customized sourcing for Indian handicrafts.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide transition-all shadow-md"
              >
                <span>Connect on WhatsApp ({EXPORTER_PROFILE.whatsapp})</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
