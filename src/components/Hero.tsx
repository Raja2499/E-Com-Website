import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  Award, 
  Globe2, 
  Truck, 
  Boxes,
  Sparkles
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

interface HeroProps {
  onOpenCatalogueModal: () => void;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCatalogueModal,
  onScrollToCatalog
}) => {
  return (
    <section className="relative bg-[#faf7f2] text-stone-900 pt-12 pb-16 lg:pt-18 lg:pb-22 border-b border-stone-200 overflow-hidden">
      {/* Decorative Subtle Background Ornaments */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-7">
        
        {/* Exporter & Heritage Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold shadow-xs">
          <img src="/logo.svg" alt="Utkal Heritage" className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
          <span>Utkal Heritage • Master Artisan Guilds</span>
          <span className="text-amber-400">|</span>
          <span className="text-stone-600 font-normal">Odisha, India</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.15]">
          Authentic and Traditional <br className="hidden sm:inline" />
          <span className="text-amber-800 underline decoration-amber-400/60 decoration-wavy decoration-2">Odisha Handicrafts</span>
        </h1>

        {/* Introductory Statement */}
        <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed max-w-3xl">
          Direct supplier and exporter connecting traditional artisan guilds with individual art lovers, retail stores, wholesale buyers, interior designers, and corporate houses. Handcrafted artifacts sourced straight from heritage craft villages across Odisha with customized pricing for domestic and international export consignments.
        </p>

        {/* 4 Core Heritage Craft Specialties Tags */}
        <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-medium">
          <span className="px-3.5 py-1.5 rounded-lg bg-white text-stone-800 border border-stone-200 shadow-2xs flex items-center gap-1.5">
            <span className="text-amber-700 font-bold">✦</span> Horn Artwork (ସିଙ୍ଗ କାମ)
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-white text-stone-800 border border-stone-200 shadow-2xs flex items-center gap-1.5">
            <span className="text-amber-700 font-bold">✦</span> Pattachitra Cloth Scrolls (ପଟ୍ଟଚିତ୍ର)
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-white text-stone-800 border border-stone-200 shadow-2xs flex items-center gap-1.5">
            <span className="text-amber-700 font-bold">✦</span> Palm Leaf (ତାଳ ପୋଥିଚିତ୍ର)
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-white text-stone-800 border border-stone-200 shadow-2xs flex items-center gap-1.5">
            <span className="text-amber-700 font-bold">✦</span> Stone Carvings (ପଥର ଖୋଦେଇ)
          </span>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
            <Award className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-medium">100% Handcrafted Guild Authentic</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
            <Boxes className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-medium">Individual Orders & Flexible MOQs</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
            <Globe2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-medium">DGFT / IEC Registered Exporter</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
            <Truck className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-medium">Insured Doorstep Freight</span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          <button
            type="button"
            onClick={onScrollToCatalog}
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-amber-50 text-sm font-semibold tracking-wide shadow-md transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Handcrafted Catalog</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <button
            type="button"
            onClick={onOpenCatalogueModal}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-sm font-medium transition-colors cursor-pointer shadow-2xs"
          >
            <FileText className="w-4 h-4 text-amber-800" />
            <span>Download PDF Sourcing Guide</span>
          </button>
        </div>

        {/* Sub-quote: Transparent Artisan Direct */}
        <div className="pt-2 text-xs text-stone-500 font-normal">
          Direct artisan export managed by{' '}
          <strong className="text-stone-900 font-semibold">{EXPORTER_PROFILE.name}</strong> • 
          Registered Office: Bhubaneswar & Cuttack Artisanal Corridor, Odisha.
        </div>

      </div>
    </section>
  );
};
