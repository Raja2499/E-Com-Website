import React from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  FileText
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
  const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am interested in discussing wholesale sourcing for authentic Indian handicrafts (Horn Artwork, Pattachitra, Stone Carvings).'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#18120c] via-[#201710] to-[#140f0b] text-stone-100 py-16 sm:py-24 border-b border-amber-950/60">
      {/* Odisha Traditional Filigree / Mandala Motif Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at center, #d97706 1.5px, transparent 1.5px), radial-gradient(circle at center, #92400e 1px, transparent 1px)`,
          backgroundSize: '36px 36px, 18px 18px'
        }}
      />
      {/* Traditional Warm Terracotta & Deep Amber Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-red-950/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Traditional Jhoti / Temple arch geometric border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-7">
        
        {/* Exporter & Heritage Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold shadow-inner">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Direct Master Artisan Guilds • Odisha, India</span>
          <span className="text-amber-500/70">|</span>
          <span className="text-stone-300 font-normal">Domestic & Worldwide Sourcing</span>
        </div>

        {/* Main Headline without curly underline */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-50 leading-[1.18]">
          Authentic and Traditional <span className="text-amber-400">Odisha Handicrafts</span>
        </h1>

        {/* Introductory Statement */}
        <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-3xl">
          Direct supplier and exporter connecting traditional artisan guilds with retail stores, wholesale buyers, interior designers, art galleries, and corporate buyers. 
          Authentic, handcrafted artifacts sourced straight from heritage craft villages across Odisha with customized wholesale pricing for domestic India and international export consignments.
        </p>

        {/* 3 Core Heritage Craft Specialties */}
        <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-medium">
          <span className="px-3.5 py-1.5 rounded-lg bg-[#271d14] text-amber-200 border border-amber-900/60 shadow-sm flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✦</span> Traditional Horn Artwork (ସିଙ୍ଗ କାମ)
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#271d14] text-amber-200 border border-amber-900/60 shadow-sm flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✦</span> Pattachitra Cloth Scrolls & Palm Leaf (ପଟ୍ଟଚିତ୍ର)
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-[#271d14] text-amber-200 border border-amber-900/60 shadow-sm flex items-center gap-1.5">
            <span className="text-amber-400 font-bold">✦</span> Stone Carvings (ପଥର ଖୋଦେଇ)
          </span>
        </div>

        {/* Trust Checks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Custom sizes & bulk volumes</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Direct artisan guild rates</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Sample dispatch & photos</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Secure domestic & export transit</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenCatalogueModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2b1f15] hover:bg-[#38281b] border border-amber-700/60 text-amber-200 font-semibold text-sm transition-all"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Digital Product Catalog & Guide</span>
          </button>

          <button
            type="button"
            onClick={onScrollToCatalog}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-stone-300 hover:text-white text-xs font-medium transition-colors"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Sourcing Credentials Highlight Cards */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-center max-w-2xl">
          <div className="p-3.5 rounded-xl bg-[#201812] border border-amber-900/40">
            <span className="font-display text-xl font-bold text-amber-300 block">250+</span>
            <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Yrs Living Heritage</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#201812] border border-amber-900/40">
            <span className="font-display text-xl font-bold text-amber-300 block">Direct</span>
            <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Zero Intermediate Middlemen</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#201812] border border-amber-900/40">
            <span className="font-display text-xl font-bold text-amber-300 block">PAN-India</span>
            <span className="text-[11px] text-stone-400 uppercase tracking-wider block">& Worldwide Dispatch</span>
          </div>
        </div>
      </div>
    </section>
  );
};
