import React from 'react';
import { Sparkles, History, ScrollText, Compass, Award, ShieldCheck } from 'lucide-react';

export const StoryAndOrigin: React.FC = () => {
  const pillars = [
    {
      icon: History,
      title: '2,000+ Years Unbroken Lineage',
      subtitle: 'Ancient Kalinga Heritage',
      description: 'Odisha’s craft lineage dates back to the ancient Kalinga maritime era, immortalized in the monumental sun stones of Konark and centuries of royal court patronage.'
    },
    {
      icon: ScrollText,
      title: 'Sacred Rituals & Raghurajpur',
      subtitle: 'Living Heritage Village',
      description: 'In world-renowned villages like Raghurajpur, Chitrakar families still prepare organic cotton canvas with tamarind seeds and hand-inscribe palm leaves using steel styluses.'
    },
    {
      icon: Compass,
      title: '100% Sustainable Natural Media',
      subtitle: 'Earth Minerals & Byproducts',
      description: 'Zero industrial plastics. We use cruelty-free shed buffalo horn, seasoned palmyra leaves, natural stone pigments, river clay, and pure golden sandstone.'
    },
    {
      icon: Award,
      title: 'Protected GI & Guild Verification',
      subtitle: 'Direct Exporter Credentials',
      description: 'Authentic Geographical Indication (GI) heritage, sourced directly from hereditary master craftsmen without intermediaries or machine-pressed imitations.'
    }
  ];

  return (
    <section id="story-origin" className="py-16 sm:py-24 bg-[#fbf9f5] text-stone-800 border-b border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>ଐତିହ୍ୟ ଓ ଉତ୍ପତ୍ତି • Story & Origin</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            The Living Heritage of <span className="text-amber-800">Odisha Artistry</span>
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            From the sanctum walls of 12th-century Jagannath temples to the royal courts of Gajapati kings, 
            Odisha’s handcrafted heritage stands among the world’s oldest, most revered artisan traditions.
          </p>
        </div>

        {/* Narrative Feature Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 lg:p-12 mb-12 relative overflow-hidden">
          {/* Subtle decorative watermark/accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-70" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                Centuries of Sacred Ritual, Spiritual Narrative & Generational Mastery
              </h3>
              
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                Dating back over two millennia to the maritime Kalinga civilization, Odisha’s handicrafts are deeply intertwined with the spiritual consciousness of eastern India. Rather than ordinary decorative objects, each creation carries sacred folklore, epic narratives, and hereditary devotion.
              </p>
              
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                In the village of <strong>Raghurajpur</strong>, master <em className="text-amber-900 font-medium">Chitrakars</em> craft <strong>Pattachitra</strong> on layered cloth treated with crushed tamarind seeds and powdered conch shells, applying brilliant mineral colors with fine squirrel-hair brushes. Alongside, ancient <strong>Tala Pothichitra</strong> scholars engrave sacred verses into seasoned palm leaves with iron styluses. In <strong>Paralakhemundi</strong>, hereditary guilds shape cruelty-free buffalo horn into translucent ebony-and-amber sculptures, while stone carvers continue the immortal chisel traditions of the <strong>Konark Sun Temple</strong>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-700">
                <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  100% Hand-Crafted
                </span>
                <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Zero Mass-Machine Imprints
                </span>
                <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Direct Village Cooperatives
                </span>
              </div>
            </div>

            {/* Visual Image Feature */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-amber-100/80 bg-stone-100 aspect-4/3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Pattachitra_09.jpg"
                  alt="Ancient Odisha Pattachitra Painting in Raghurajpur"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-600/90 text-white px-2 py-0.5 rounded">
                    Raghurajpur Heritage Craft Village
                  </span>
                  <p className="text-xs text-stone-100 mt-1 font-medium line-clamp-1">
                    Traditional Pattachitra Canvas Scroll • Sacred Jagannath Culture
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-200 space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-amber-800 tracking-wide uppercase block">
                    {pillar.subtitle}
                  </span>
                  <h4 className="font-display text-base font-bold text-stone-900 mt-0.5">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
