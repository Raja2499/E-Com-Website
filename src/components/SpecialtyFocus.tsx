import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Gem,
  Award
} from 'lucide-react';
import { ProductCategory } from '../types';

interface SpecialtyFocusProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenQuickInquiry: (topic: string) => void;
}

export const SpecialtyFocus: React.FC<SpecialtyFocusProps> = ({
  onSelectCategory,
  onOpenQuickInquiry
}) => {
  const specialties = [
    {
      id: 'horn-art' as ProductCategory,
      title: 'Paralakhemundi Shringa Silpa',
      odiaName: 'ପାରଳାଖେମୁଣ୍ଡି ଶୃଙ୍ଗ ଶିଳ୍ପ (Horn Art)',
      badge: 'ROYAL HERITAGE SPECIALTY',
      subtitle: 'Gajapati Heritage Cattle & Buffalo Horn Art',
      description: 'One of Odisha\'s most celebrated royal crafts. Master hereditary craftsmen of Paralakhemundi shape naturally shed cattle and buffalo horn through delicate heat manipulation, precision chiseling, and organic Kendu leaf buffing into graceful decorative creations.',
      popularItems: [
        'Paralakhemundi Royal Elephants & Tabletop Statuettes',
        'Historic "Sarapanki" Long-Neck Crane Pairs',
        'Hand-Carved Pierced Filigree Buffalo Horn Combs',
        'Artisanal Tasting Cutlery & Organic Tableware'
      ],
      heritageNote: 'Centuries-old Gajapati heritage with natural amber-to-ebony translucent marbling. 100% natural, ethically sourced byproduct.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Horn_craft.jpg',
      actionText: 'View Horn Art Collection'
    },
    {
      id: 'pattachitra' as ProductCategory,
      title: 'Pattachitra & Palm Leaf Scrolls',
      odiaName: 'ପଟ୍ଟଚିତ୍ର ଓ ତାଳପତ୍ର (Raghurajpur Heritage)',
      badge: 'GI TAGGED HERITAGE',
      subtitle: 'Traditional Hand-Painted & Etched Palm Leaf Art',
      description: 'Ancient visual narrative scroll art preserved in heritage artisan villages like Raghurajpur. Painted on layers of treated cotton cloth with 100% natural earth and mineral pigments by master chitrakars, alongside iron-needle etched palm leaf manuscripts.',
      popularItems: [
        'Sacred Tree of Life & Forest Sanctuary Scrolls',
        'Intricate Krishna-Leela & Mythological Narratives',
        'Tala Pothichitra Iron-Stylus Etched Palm Leaf Books',
        'Custom Sized Wall Tapestries for Interior Decor'
      ],
      heritageNote: 'Decades of color vibrancy using conch shell, cinnabar, and natural stone pigments. 100% handmade visual storytelling.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Pattachitra_09.jpg',
      actionText: 'View Pattachitra Collection'
    },
    {
      id: 'stone-carving' as ProductCategory,
      title: 'Handmade Stone Carvings',
      odiaName: 'ପଥର ଖୋଦେଇ (Konark Legacy)',
      badge: 'ARCHITECTURAL HERITAGE',
      subtitle: 'Sculptures & Decorative Stone Masterpieces',
      description: 'Sculpted from fine-grain Indian sandstone and soapstone by generational stonemasons. Features famous undercut "Jali" lattice filigree where inner figures are carved through perforated apertures.',
      popularItems: [
        'Pierced Sandstone Jali Lanterns & Votive Holders',
        'Undercut Soapstone Elephants with Inner Baby',
        'Konark Sun Temple Wheels & Wall Relief Panels',
        'Custom Architectural & Luxury Interior Sculptures'
      ],
      heritageNote: 'Inspired by 1,000-year-old temple architecture of Konark and Puri. Weather-resistant, authentic, and tactile.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Konark_Sun_Temple_Wheel.jpg',
      actionText: 'View Stone Carvings'
    },
    {
      id: 'silver-filigree' as ProductCategory,
      title: 'Cuttack Tarakasi Silver Filigree',
      odiaName: 'କଟକ ତାରକସି (Silver City Heritage)',
      badge: 'GI CERTIFIED METALLURGY',
      subtitle: '500-Year-Old Sterling Silver Gossamer Wirework',
      description: 'The crowning glory of Cuttack. Master silversmiths pull 92.5% to 98% pure sterling silver into delicate hair-thin threads, hand-crimping and soldering them into luminous peacocks, Konark wheels, and ornamental tableaus.',
      popularItems: [
        'Handcrafted Silver Filigree Dancing Peacocks',
        'Konark Sun Dial Wheel Presentation Medallions',
        'Intricate Miniature Rath (Temple Chariot) Models',
        'Bespoke Corporate Mementos & Luxury Gifting'
      ],
      heritageNote: '500-year-old maritime trade heritage. Certified silver purity assay with presentation casing.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Silver_filigree_ornament.jpg',
      actionText: 'View Silver Filigree'
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-[#19120c] text-stone-100 border-b border-amber-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Crafts of Odisha, India</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
            Centuries-Old Crafts, Preserved with Cultural Integrity
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Every piece we supply is hand-made by experienced master artisans in generational village clusters. 
            We preserve authentic cultural heritage while fulfilling requirements for domestic Indian retailers and global trade partners.
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="flex flex-col bg-[#211711] rounded-2xl border border-amber-900/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300 shadow-xl group text-left"
            >
              {/* Image Container with Studio Neutral Backdrop & Crisp Lighting */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-stone-900 to-[#120d09]">
                <img
                  src={spec.imageUrl}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211711] via-[#211711]/40 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-300 text-[9px] font-bold tracking-wider uppercase backdrop-blur-sm">
                  {spec.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 tracking-wider block">
                      {spec.odiaName}
                    </span>
                    <h3 className="text-lg font-bold font-display text-amber-100 mt-0.5 leading-snug">
                      {spec.title}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed line-clamp-3">
                    {spec.description}
                  </p>

                  {/* Popular Creations List */}
                  <div className="pt-2">
                    <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block mb-1.5">
                      Key Handcrafted Motifs:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-200">
                      {spec.popularItems.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-[11px] line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Heritage Note */}
                  <div className="p-2.5 rounded-xl bg-[#17100b] border border-amber-950/80 text-[10px] text-stone-300 italic">
                    "{spec.heritageNote}"
                  </div>
                </div>

                {/* Bottom Actions: Clear B2B CTAs */}
                <div className="pt-3 border-t border-amber-950/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(spec.id)}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Crafts</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuickInquiry(spec.title)}
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold transition-colors shadow-sm cursor-pointer"
                  >
                    Inquire via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
