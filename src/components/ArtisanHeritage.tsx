import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Flame, 
  Palette, 
  Compass, 
  Gem,
  ExternalLink
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const ArtisanHeritage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'paralakhemundi' | 'raghurajpur' | 'cuttack' | 'konark'>('paralakhemundi');

  const craftRegions = [
    {
      id: 'paralakhemundi' as const,
      regionName: 'Paralakhemundi, Gajapati',
      regionalOdia: 'ପାରଳାଖେମୁଣ୍ଡି',
      craftTitle: 'Shringa Silpa (Horn Carving Tradition)',
      icon: Flame,
      summary: 'Royal court patronage under the Gajapati Maharajas turning organic shed cattle and buffalo horn into luminous marbleized sculptures.',
      history: 'Dating back to the late 18th century, the Gajapati Kings of Paralakhemundi invited master carvers from the traditional Maharana and Bindhani guilds to establish royal workshops. By the early 1900s, legendary statesman Utkal Gourav Madhusudan Das showcased Paralakhemundi horn artwork at international exhibitions in London and Paris via Orissa Art Wares (1898), cementing its status as an international luxury artifact.',
      artisanProfile: 'Third- and fourth-generation master carvers of the hereditary Maharana artisan cluster. Only a dozen master craftsmen in southern Odisha retain the intuition needed to soften rigid horn over open flames without burning the keratin fibers.',
      steps: [
        { step: '1. Material Selection', detail: 'Careful grading of naturally discarded Asian water buffalo and domestic cattle horn for amber and ebony grain density.' },
        { step: '2. Oil & Flame Annealing', detail: 'Soaking in cold-pressed mustard oil and gently heating over charcoal embers to render the horn pliant.' },
        { step: '3. Hand Chiseling & Shaping', detail: 'Sawn with fine bow-saws and carved with steel chisels (Rukha) into graceful cranes, combs, and royal elephants.' },
        { step: '4. Natural Kendu Buffing', detail: 'Buffed with dried Kendu leaves and charcoal ash for hours to produce a glass-like ebony luster without chemical varnishes.' }
      ],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Horn_craft.jpg',
      artisanQuote: 'Horn has an organic soul. No two horns cool with the same curvature or hue; our hands merely follow where the grain leads.'
    },
    {
      id: 'raghurajpur' as const,
      regionName: 'Raghurajpur Heritage Craft Village, Puri',
      regionalOdia: 'ରଘୁରାଜପୁର ହେରିଟେଜ୍ ଭିଲେଜ୍',
      craftTitle: 'Pattachitra & Tala Pothichitra (Palm Leaf)',
      icon: Palette,
      summary: 'A living open-air museum village where every household preserves 12th-century Jagannath Temple cloth painting and palm-leaf stylus etching.',
      history: 'Raghurajpur is India\'s premier heritage crafts village, nestled along the coconut groves of the Bhargavi River. Since the 12th century, the Chitrakar community has been tasked with painting the sacred "Anasara Patti" for Lord Jagannath during the deities\' secret quarantine before Rath Yatra. In 2000, INTACH and the Government declared it India\'s first designated Heritage Crafts Village.',
      artisanProfile: 'Generational Chitrakar families and National Award-winning master painters. Apprentices begin as young as eight, mastering mythological iconography and fluid brushstrokes.',
      steps: [
        { step: '1. Patta Cloth Preparation', detail: 'Cotton cloth layers are bonded with boiled tamarind seed paste (Niryas), coated with chalk powder, and burnished with river stones.' },
        { step: '2. Stone & Mineral Pigments', detail: 'Colors are ground by hand from natural minerals: white from conch shells (Sankha), yellow from Harital, red from Hingula, and black from lamp soot.' },
        { step: '3. Master Linework (Saru Kala)', detail: 'Direct freehand outlining using squirrel-hair brushes without preliminary pencil tracing.' },
        { step: '4. Palm Leaf Lekhani Etching', detail: 'For Tala Pattachitra, seasoned palmyra leaves are incised with an iron needle and stained with natural bean extract and lamp soot.' }
      ],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Pattachitra_Making.jpg',
      artisanQuote: 'Our colors come from the earth, stone, and sea. Because we use sacred natural pigments, a Raghurajpur scroll does not fade even across generations.'
    },
    {
      id: 'cuttack' as const,
      regionName: 'Cuttack "Silver City"',
      regionalOdia: 'କଟକ ତାରକସି',
      craftTitle: 'Tarakasi (Fine Silver Filigree)',
      icon: Gem,
      summary: 'Over 500 years of gossamer silver wire craftsmanship producing legendary jewelry, peacocks, and temple tableaus.',
      history: 'Cuttack filigree (Tarakasi) flourished through ancient maritime Kalinga trade connections with Southeast Asia, Persia, and the Levant. Hereditary Rupa Silpis (silversmiths) in quarters such as Alisha Bazar and Choudhury Bazar have handed down microscopic soldering techniques for over five centuries. Cuttack Tarakasi was recently awarded the prestigious Geographical Indication (GI) status by the Government of India.',
      artisanProfile: 'Generational master silversmiths using tweezers and mouth blowpipes to weave sterling silver wire (92.5% to 98% purity) finer than human hair.',
      steps: [
        { step: '1. Wire Drawing', detail: 'Pure silver ingots are melted and pulled through progressive diamond-eyelet dies until reduced to 0.2mm gossamer wires.' },
        { step: '2. Hair-twist Crimping', detail: 'Pairs of wires are twisted together on a wooden spindle to create a fine ribbed spiral surface.' },
        { step: '3. Skeletal Wire Framing', detail: 'Artisans bend stronger outer silver frames using tweezers, defining peacocks, flower petals, or Konark chariot outlines.' },
        { step: '4. Solder & Borax Fusion', detail: 'Delicate inner zigzag ripples are packed tightly into the frame and fused over a gentle flame using borax powder without visible joints.' }
      ],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Silver_filigree_ornament.jpg',
      artisanQuote: 'Tarakasi is metallic lace. It demands absolute patience—a single sneeze during soldering can scatter hundreds of hair-thin silver ribbons.'
    },
    {
      id: 'konark' as const,
      regionName: 'Konark & Puri Stonemason Quarter',
      regionalOdia: 'କୋଣାର୍କ ପଥର ଖୋଦେଇ',
      craftTitle: 'Architectural Sandstone & Jali Undercut Carving',
      icon: Compass,
      summary: 'Descendants of the 1,200 master craftsmen who sculpted the 13th-century UNESCO World Heritage Sun Temple of Konark.',
      history: 'When King Narasimhadeva I built the monumental Black Pagoda at Konark in 1250 CE, over 1,200 master artisans under Bishu Maharana dedicated 12 years to carving celestial musicians, stone wheels, and chariot horses. Their direct descendants in Konark and Puri continue to sculpt hard sandstone, soapstone, and Khondalite following the rigorous geometric canons of the classical Bhuvanapradipa and Shilpa Shastra texts.',
      artisanProfile: 'Generational Silpis who chisel directly into natural metamorphic and sedimentary stone without computer numeric control (CNC) or diamond automated saws.',
      steps: [
        { step: '1. Block Selection', detail: 'Quarrying fine-grained golden Odisha sandstone and marbleized soapstone for structural homogeneity.' },
        { step: '2. Proportional Grid Marking', detail: 'Freehand geometrical division of stone faces using red dye (Gairika) based on canonical Shilpa Shastra proportions.' },
        { step: '3. Hand Chiseling & Relief', detail: 'Graduated steel chisels and wooden mallets rough out deep 3D reliefs, animal anatomy, and temple medallions.' },
        { step: '4. Undercut Jali Filigree', detail: 'Pierced lattice lanterns and monolithic "calf inside mother elephant" undercut work chiseled through tiny 4mm external slots.' }
      ],
      heroImage: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Konark_Sun_Temple_Wheel.jpg',
      artisanQuote: 'The stone is already carrying the sculpture inside it. The chisel merely chips away what does not belong.'
    }
  ];

  const current = craftRegions.find(r => r.id === activeRegion) || craftRegions[0];

  return (
    <section id="artisan-heritage" className="py-20 bg-[#16100c] text-stone-100 border-b border-amber-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Story and Origin of Odisha's Crafts</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
            About the Artisans & Living Heritage Regions
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            International buyers are not merely purchasing an object; they are investing in centuries of living heritage. 
            Discover the historic villages, generational guilds, and meticulous manual processes behind every export consignment.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {craftRegions.map((region) => {
            const Icon = region.icon;
            const isSelected = activeRegion === region.id;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-950/50 scale-[1.02]'
                    : 'bg-[#221710] border-amber-900/50 text-stone-300 hover:bg-[#2b1e16] hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-amber-400'}`} />
                <span>{region.regionName.split(',')[0]}</span>
                <span className="text-[10px] opacity-75 hidden md:inline font-normal">
                  ({region.craftTitle.split('(')[0].trim()})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Region Deep Dive Card */}
        <div className="bg-[#1e150f] rounded-3xl border border-amber-900/50 shadow-2xl overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative bg-stone-950 flex flex-col">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src={current.heroImage}
                  alt={current.craftTitle}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e150f] via-transparent to-black/30" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-stone-950/90 border border-amber-500/50 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    {current.regionalOdia}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-950/85 border border-amber-900/60 backdrop-blur-sm">
                  <p className="text-xs text-amber-200/90 italic font-serif leading-relaxed">
                    "{current.artisanQuote}"
                  </p>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold block mt-1.5">
                    — Master Artisan Voice, {current.regionName.split(',')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Content & History Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{current.regionName}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-amber-50">
                  {current.craftTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed font-medium">
                  {current.summary}
                </p>
              </div>

              {/* History & Origin */}
              <div className="space-y-2 p-4 rounded-2xl bg-[#261b13] border border-amber-900/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Regional Origin & Historical Provenance</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {current.history}
                </p>
              </div>

              {/* Artisan Lineage */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Artisan Guilds & Living Apprenticeships:
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {current.artisanProfile}
                </p>
              </div>

              {/* Crafting Process Steps */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                  Meticulous Handcrafting Process:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {current.steps.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#221710] border border-amber-950/80 space-y-1">
                      <strong className="text-amber-200 text-[11px] block">{st.step}</strong>
                      <p className="text-stone-400 text-[11px] leading-relaxed">{st.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-amber-950/70">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fair living wages guaranteed directly to rural guild families</span>
                </span>

                <a
                  href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
                    `Hello Subhasish, I would like to inquire about authentic artisan sourcing from ${current.regionName} (${current.craftTitle}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire on Sourcing This Craft</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
