import React from 'react';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  FileText,
  Award,
  Layers,
  ShieldCheck,
  Globe2
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Odisha Handicrafts Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Exporter & Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Direct Master Artisan Guilds • Odisha, India</span>
              <span className="text-amber-500/70">|</span>
              <span className="text-stone-300 font-normal">Domestic & Worldwide Sourcing</span>
            </div>

            {/* Main Headline with Odisha Traditional Typography (No Name in Heading) */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-50 leading-[1.18]">
              Authentic Handmade <span className="text-amber-400 underline decoration-amber-500/50 decoration-wavy underline-offset-8">Odisha Handicrafts</span> & Traditional Horn Artwork
            </h1>

            {/* Introductory Statement */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
              Direct supplier and exporter connecting traditional artisan guilds with retail stores, wholesale buyers, interior designers, art galleries, and corporate buyers. 
              Authentic, handcrafted artifacts sourced straight from heritage craft villages across Odisha with customized wholesale pricing for domestic India and international export consignments.
            </p>

            {/* 3 Core Heritage Craft Specialties */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#271d14] text-amber-200 border border-amber-900/60 shadow-sm flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✦</span> Traditional Horn Artwork (ସିଙ୍ଗ କାମ)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#271d14] text-amber-200 border border-amber-900/60 shadow-sm flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✦</span> Pattachitra Cloth Scrolls (ପଟ୍ଟଚିତ୍ର)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-[#271d14] text-amber-200 border border-amber-900/60 shadow-sm flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">✦</span> Stone Carvings (ପଥର ଖୋଦେଇ)
              </span>
            </div>

            {/* Trust Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-stone-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Custom sizes, designs & bulk volumes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct artisan rates for domestic & export</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>High-resolution photos & sample dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Secure domestic & international courier packing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp ({EXPORTER_PROFILE.whatsapp})</span>
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

            {/* Direct Official Contact Strip */}
            <div className="pt-2 text-xs text-stone-400 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Official Email: <strong className="text-amber-200">{EXPORTER_PROFILE.email}</strong></span>
              <span className="text-stone-600 hidden sm:inline">•</span>
              <span>Direct WhatsApp: <strong className="text-emerald-400">{EXPORTER_PROFILE.whatsapp}</strong></span>
              <span className="text-stone-600 hidden sm:inline">•</span>
              <span>Contact Person: <strong className="text-stone-200">{EXPORTER_PROFILE.name}</strong></span>
            </div>

          </div>

          {/* Right Column: Traditional Visual Artifact Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame styled like traditional temple stone frame */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-amber-600/40 via-stone-800 to-amber-900/60 shadow-2xl">
              <div className="rounded-xl overflow-hidden bg-[#16110c] relative">
                
                {/* Hero Showcase Image */}
                <div className="aspect-[4/3] sm:aspect-[1/1] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80"
                    alt="Traditional Handcrafted Buffalo Horn Elephant Artwork Odisha"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16110c] via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle traditional Odisha motif watermark badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-stone-950/80 backdrop-blur-md border border-amber-600/40 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Crown Specialty: Paralakhemundi Shringa Silpa</span>
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left p-4 rounded-xl bg-[#1e1610]/95 backdrop-blur-md border border-amber-800/40 shadow-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                        100% Hand-carved Natural Horn
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                        Sourcing Available
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-sm font-bold text-amber-100">
                        Paralakhemundi Shringa Silpa
                      </h3>
                      <span className="text-[11px] text-amber-400/90 font-medium">ପାରଳାଖେମୁଣ୍ଡି ଶୃଙ୍ଗ ଶିଳ୍ପ</span>
                    </div>
                    <p className="text-[11px] text-stone-300 leading-relaxed">
                      Generational craftsmen hand-carve and buff natural cattle & water buffalo horn to an exquisite natural amber & ebony sheen.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Sourcing Credentials Card */}
            <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-xl bg-[#201812] border border-amber-900/40">
                <span className="font-display text-lg font-bold text-amber-300 block">250+</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Yrs Heritage</span>
              </div>
              <div className="p-3 rounded-xl bg-[#201812] border border-amber-900/40">
                <span className="font-display text-lg font-bold text-amber-300 block">Direct</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">No Middlemen</span>
              </div>
              <div className="p-3 rounded-xl bg-[#201812] border border-amber-900/40">
                <span className="font-display text-lg font-bold text-amber-300 block">PAN-India</span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">& Global Transit</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
