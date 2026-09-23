import React from 'react';
import { Heart, Users, ShieldAlert, Award, Sparkles, MapPin } from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const ArtisanHeritage: React.FC = () => {
  return (
    <section id="artisan-heritage" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-stone-950">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Pattachitra_Making.jpg"
                alt="Master Artisan creating traditional Odisha craft"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-stone-950/90 border-t border-stone-800 text-left">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Rural Artisan Guilds of Odisha & Eastern India</span>
                </div>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Preserving centuries-old hereditary handicraft skills that cannot be replicated by factory machines. 
                  Every export order directly supports rural artisan families and traditional master apprenticeships.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-amber-950 border border-amber-700/60 shadow-xl hidden sm:block text-left">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>Fair Trade & Ethical Sourcing</span>
              </div>
              <span className="text-[11px] text-stone-300 block mt-0.5">Dignified artisan livelihood guarantee</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 border border-amber-700/50 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Living Cultural Heritage</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-100">
              Preserving Rare Crafts Through Global Partnership
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              In an era dominated by synthetic polymers and mass plastic moldings, the organic warmth of 
              carved cattle horn, natural stone, and mineral-painted cloth scrolls represents timeless luxury. 
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Odisha's horn carving legacy in regions such as Paralakhemundi and Cuttack is celebrated across India. 
              Our artisans select natural discarded horn from domestic cattle and water buffalo, transforming what would 
              otherwise be agricultural byproduct waste into heirloom sculptures, lustrous combs, and functional tabletop art.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <h4 className="font-semibold text-stone-100 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>GI Heritage Recognition</span>
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Pattachitra and regional horn carving represent certified Geographical Indication traditions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <h4 className="font-semibold text-stone-100 text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Direct Community Impact</span>
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  We guarantee direct fair wages to rural craftsmen without predatory middlemen exploitation.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 text-xs text-stone-300 flex items-center justify-between">
                <div>
                  <span className="text-stone-400 block text-[11px]">Primary Sourcing Director</span>
                  <span className="text-stone-100 font-bold">{EXPORTER_PROFILE.name}</span>
                  <span className="text-amber-400 block text-[11px]">{EXPORTER_PROFILE.role}</span>
                </div>
                <a
                  href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
                    'Hello Subhasish, I would love to learn more about the artisan communities and available designs.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Discuss Artisan Collaboration
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
