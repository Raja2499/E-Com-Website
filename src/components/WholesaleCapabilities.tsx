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
      description: 'Benefit from transparent ex-cluster wholesale pricing directly from the artisanal source villages, enabling healthy retail margins for both domestic stores and international trade buyers.'
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
      description: 'Beyond our horn, Pattachitra, palm leaf, and stone carving core lines, our boots-on-the-ground artisan network enables us to source and quality-check regional Indian handicrafts based on your brief.'
    }
  ];

  return (
    <section id="wholesale-terms" className="py-16 sm:py-24 bg-[#faf7f2] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Wholesale & Trade Supply Infrastructure
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Wholesale Supply Capabilities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
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
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide block">
                      {cap.highlight}
                    </span>
                    <h3 className="font-display text-lg font-bold text-stone-900 mt-0.5">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-medium text-amber-900 flex items-center gap-1">
                  <span>Guaranteed Direct Guild Sourcing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Trade Assurance Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-display text-base sm:text-lg font-bold text-stone-900">
              Need a Customized Bulk Proposal or Private Catalog?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Share your target product category, desired quantity, and destination. We provide itemized wholesale FOB/CIF quotations with export packaging specifications.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={onOpenCatalogueModal}
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs font-semibold transition-colors cursor-pointer"
            >
              Request Export Price List
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
