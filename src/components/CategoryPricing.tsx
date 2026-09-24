import React from 'react';
import { 
  Boxes, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  Globe2, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { CATEGORY_SOURCING_INFO, EXPORTER_PROFILE } from '../data/products';

interface CategoryPricingProps {
  onOpenQuickInquiry: (topic: string) => void;
}

export const CategoryPricing: React.FC<CategoryPricingProps> = ({
  onOpenQuickInquiry
}) => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#faf7f2] text-stone-900 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>୪ ପାରମ୍ପରିକ ଶ୍ରେଣୀ • 4 Heritage Disciplines</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Odisha Heritage Craft Categories
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Direct artisan guild sourcing across Odisha. Because rates vary depending on 
            <strong className="text-stone-900 font-semibold"> individual vs. bulk quantities</strong> and 
            <strong className="text-stone-900 font-semibold"> domestic delivery vs. international export freight</strong>, all quotations are custom-tailored to your exact requirements.
          </p>
        </div>

        {/* Flexible Sourcing Policy Banner */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-amber-200 text-left shadow-xs max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 flex-shrink-0">
                <Boxes className="w-5 h-5 text-amber-700" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                  Individual Pieces, Flexible MOQs & Sample Shipments
                </span>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  "We support businesses and private art collectors of all scales: from individual art connoisseurs seeking a single sacred scroll to boutique retailers and international distributors. We offer single-piece sample shipments and flexible bulk orders."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Category Sourcing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {CATEGORY_SOURCING_INFO.map((cat) => {
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-stone-200 hover:border-amber-400 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-4">
                    <div>
                      <span className="text-xs font-bold text-amber-800 tracking-wide block">
                        {cat.regionalOdishaName}
                      </span>
                      <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors mt-0.5">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium mt-1">
                        {cat.tagline}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold flex-shrink-0">
                      GI Registered
                    </span>
                  </div>

                  {/* Sourcing Specifications */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#fbf9f5] border border-stone-200/80 text-xs">
                    <div>
                      <span className="text-[10px] text-stone-500 uppercase font-semibold block flex items-center gap-1">
                        <Boxes className="w-3 h-3 text-amber-700" /> Order Range
                      </span>
                      <span className="text-stone-800 font-medium block mt-0.5">
                        {cat.moq}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-stone-500 uppercase font-semibold block flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-700" /> Typical Handcrafting
                      </span>
                      <span className="text-stone-800 font-medium block mt-0.5">
                        {cat.turnaround}
                      </span>
                    </div>
                  </div>

                  {/* Pricing Policy Box */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center gap-2 text-stone-800 text-xs font-bold uppercase tracking-wider">
                      <Globe2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                      <span>Custom Quotation on Request</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {cat.pricingNote}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                      <span className="px-2.5 py-0.5 rounded bg-white border border-stone-200 text-stone-700 font-medium">
                        ✓ Individual / Sample Orders
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-white border border-stone-200 text-stone-700 font-medium">
                        ✓ Bulk Export Freight
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wide block">
                      Signature Artifacts Available:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-600">
                      {cat.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-stone-500 font-medium">
                    Direct Artisan Cluster Sourcing
                  </span>

                  <button
                    type="button"
                    onClick={() => onOpenQuickInquiry(cat.name)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                    <span>Inquire for {cat.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
