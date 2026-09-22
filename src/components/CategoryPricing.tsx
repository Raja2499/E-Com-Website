import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Package, 
  Clock,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Send
} from 'lucide-react';
import { CATEGORY_SOURCING_INFO, EXPORTER_PROFILE } from '../data/products';

interface CategorySourcingProps {
  onOpenQuickInquiry: (categoryName: string) => void;
}

export const CategoryPricing: React.FC<CategorySourcingProps> = ({
  onOpenQuickInquiry
}) => {
  return (
    <section id="categories-guide" className="py-20 bg-[#17120e] text-stone-100 border-b border-amber-950/60 relative overflow-hidden">
      {/* Decorative Traditional Odia Motif */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Artisan Craft Clusters</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
            Odisha Heritage Craft Categories
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Direct artisan guild sourcing across Odisha. Because rates vary depending on 
            <strong className="text-amber-300 font-semibold"> domestic delivery within India</strong> versus 
            <strong className="text-amber-300 font-semibold"> international export freight</strong>, all wholesale quotations are tailored to your order quantity and specifications.
          </p>
        </div>

        {/* 4 Category Sourcing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {CATEGORY_SOURCING_INFO.map((cat) => {
            const whatsappInquiryUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
              `Hello Subhasish, I would like to request wholesale rates and design catalogue for "${cat.name}".`
            )}`;

            return (
              <div 
                key={cat.id}
                className="rounded-2xl bg-[#211812] border border-amber-900/40 hover:border-amber-600/60 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 group relative"
              >
                {/* Traditional corner border accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-600/30 rounded-tr-2xl pointer-events-none group-hover:border-amber-500/60 transition-colors" />

                <div className="space-y-4">
                  {/* Category Title & Regional Odia Name */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-amber-400 tracking-wider block">
                        {cat.regionalOdishaName}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-amber-100 mt-0.5">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1">
                        {cat.tagline}
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-amber-950/80 border border-amber-800 text-[10px] font-bold text-amber-300 uppercase tracking-wider flex-shrink-0">
                      Wholesale Supply
                    </span>
                  </div>

                  {/* Sourcing & Quotation Card (No fixed prices) */}
                  <div className="p-4 rounded-xl bg-[#18110b] border border-amber-900/60 space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                      <Globe2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Custom Quotation on Request</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {cat.pricingNote}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-stone-400">
                      <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-300">
                        Domestic India Orders
                      </span>
                      <span className="px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-300">
                        International Export Orders
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-stone-400 block">
                      Popular Sourcing Motifs & Forms:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-300">
                      {cat.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Order MOQ & Turnaround */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-amber-950/60 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#1a130e] border border-stone-800/80">
                      <span className="text-stone-400 flex items-center gap-1 text-[10px] uppercase font-bold">
                        <Package className="w-3 h-3 text-amber-400" />
                        <span>Typical MOQ</span>
                      </span>
                      <span className="font-semibold text-stone-200 mt-0.5 block">{cat.moq}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1a130e] border border-stone-800/80">
                      <span className="text-stone-400 flex items-center gap-1 text-[10px] uppercase font-bold">
                        <Clock className="w-3 h-3 text-amber-400" />
                        <span>Crafting Time</span>
                      </span>
                      <span className="font-semibold text-stone-200 mt-0.5 block">{cat.turnaround}</span>
                    </div>
                  </div>
                </div>

                {/* Sourcing Action Buttons */}
                <div className="pt-6 mt-4 border-t border-amber-950/70 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenQuickInquiry(cat.name)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Get Rate Quote</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote on Pricing Policy */}
        <div className="mt-12 p-5 rounded-2xl bg-[#1d1510] border border-amber-900/40 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-stone-300 text-left">
          <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0" />
          <div className="space-y-1">
            <span className="font-bold text-amber-200 block">
              Fair Artisan Trade & Custom Quantity Tiering
            </span>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              We work directly with traditional guild clusters in Paralakhemundi, Raghurajpur, and Cuttack without intermediate brokers. Volume tiers are provided for domestic retailers within India, corporate gifting, and international container or air-freight consignments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
