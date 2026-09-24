import React from 'react';
import { 
  Sparkles, 
  Palette, 
  Boxes, 
  TrendingDown, 
  FileCheck2, 
  Workflow, 
  Building2, 
  Store, 
  Landmark, 
  Home, 
  Gift, 
  Globe2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

interface AboutUsProps {
  onOpenCatalogueModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenCatalogueModal }) => {
  const capabilities = [
    {
      icon: Sparkles,
      tag: 'Centuries-Old Living Heritage',
      title: 'Authentic Handmade Products',
      description: 'Zero automated mass manufacturing. Every horn carving, Pattachitra cloth painting, and stone sculpture is shaped by skilled rural artisans carrying multi-generational lineage traditions.'
    },
    {
      icon: Palette,
      tag: 'Tailored to Buyer Specifications',
      title: 'Custom Designs & Sizing',
      description: 'We execute bespoke client designs, customized dimensional proportions, specialized finishes (matte/high-gloss), and retail-ready private labeling based on your sketches or reference photos.'
    },
    {
      icon: Boxes,
      tag: 'From Boutique Retailers to Large Distributors',
      title: 'Flexible MOQs & Sample Shipments',
      description: 'We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal.'
    },
    {
      icon: TrendingDown,
      tag: 'Direct Exporter • No Middlemen',
      title: 'Direct Artisan Wholesale Rates',
      description: 'Benefit from transparent ex-cluster wholesale pricing directly from the artisanal source villages, enabling healthy retail margins for both domestic stores in India and international trade buyers.'
    },
    {
      icon: FileCheck2,
      tag: 'Pre-Shipment Proof & Physical Evaluation',
      title: 'Photos, Specifications & Samples',
      description: 'We provide high-resolution photography of finished batches, dimensional inspection sheets, and prompt courier sample dispatch before committing to full production runs.'
    },
    {
      icon: Workflow,
      tag: 'Your Dedicated Indian Sourcing Partner',
      title: 'Flexible Sourcing Across India',
      description: 'Beyond our horn, Pattachitra, and stone carving core lines, our boots-on-the-ground artisan network enables us to source and quality-check any regional Indian handicraft based on your exact brief.'
    }
  ];

  const partnerSegments = [
    {
      icon: Store,
      title: 'Boutique Retailers & Gift Shops',
      desc: 'Curated artisanal inventory with flexible order quantities and barcode labeling.'
    },
    {
      icon: Landmark,
      title: 'Museum Stores & Cultural Centers',
      desc: 'Authentic craft documentation, origin certificates, and traditional technique displays.'
    },
    {
      icon: Home,
      title: 'Interior Designers & Architects',
      desc: 'Bespoke large-scale sandstone carvings, temple panels, and custom scroll sizes.'
    },
    {
      icon: Gift,
      title: 'Corporate Gifting & Hospitality',
      desc: 'Premium handcrafted gifts, customized packaging, and commemorative crests.'
    },
    {
      icon: Globe2,
      title: 'Global Wholesalers & Importers',
      desc: 'Full pallet and container consignments with export fumigation and customs dossier.'
    },
    {
      icon: Building2,
      title: 'Individual Art Connoisseurs',
      desc: 'Direct access to master artisan masterpieces with insured doorstep delivery.'
    }
  ];

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-[#faf7f2] text-stone-900 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Why Source With Us */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Why Source With Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-950">
            Comprehensive Wholesale Capabilities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Direct master artisan sourcing backed by transparent trade discipline. Designed to make sourcing authentic Indian handicrafts smooth, dependable, and cost-effective for domestic and international buyers.
          </p>
        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left mb-16">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md group"
              >
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-lg font-bold text-stone-900 mt-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Serving Diverse Global & Domestic Partners Section */}
        <div className="pt-8 border-t border-stone-200/80">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950">
              Serving Diverse Global & Domestic Partners
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Customized fulfillment protocols designed for every type of organization and private collector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            {partnerSegments.map((segment, idx) => {
              const SegIcon = segment.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 flex-shrink-0 mt-0.5">
                      <SegIcon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                        {segment.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {segment.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Sourcing Proposal Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-amber-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-display text-base sm:text-lg font-bold text-stone-900">
              Discuss Your Direct Artisan Sourcing Requirements
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Contact Subhasish Choudhury for personalized sample shipments, wholesale FOB/CIF price lists, or custom craftsmanship commissions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
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
