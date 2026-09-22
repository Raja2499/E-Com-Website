import React from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Check, 
  Feather, 
  Layers, 
  Compass, 
  Palette,
  Eye
} from 'lucide-react';
import { ProductCategory } from '../types';
import { EXPORTER_PROFILE } from '../data/products';

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
      title: 'Traditional Horn Artwork',
      odiaName: 'ସିଙ୍ଗ କାମ (Shringa Silpa)',
      badge: 'HERITAGE SPECIALTY',
      subtitle: 'Handcrafted Cattle & Buffalo Horn Art',
      description: 'One of our most celebrated specialties. Master craftsmen of Paralakhemundi and Cuttack shape natural cattle and buffalo horn through heat manipulation, precision chiseling, and organic leaf buffing into graceful decorative creations.',
      popularItems: [
        'Majestic Elephants & Wildlife Statuettes',
        'Graceful Crane & Avian Tabletop Sculptures',
        'Traditional Hand-Carved Filigree Combs',
        'Artisanal Tasting Cutlery & Organic Tableware'
      ],
      heritageNote: 'Centuries-old heritage with natural amber-to-ebony translucent marbling. 100% natural, ethically sourced byproduct.',
      imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80',
      actionText: 'View Horn Art Collection'
    },
    {
      id: 'pattachitra' as ProductCategory,
      title: 'Pattachitra Cloth Paintings',
      odiaName: 'ପଟ୍ଟଚିତ୍ର (Raghurajpur Heritage)',
      badge: 'GI TAGGED HERITAGE',
      subtitle: 'Traditional Hand-Painted Artwork on Seasoned Cloth',
      description: 'Ancient visual narrative scroll art preserved in heritage artisan villages like Raghurajpur. Painted on layers of treated cotton cloth with 100% natural earth and mineral pigments by master chitrakars.',
      popularItems: [
        'Sacred Tree of Life & Forest Sanctuary Scrolls',
        'Intricate Krishna-Leela & Mythological Narratives',
        'Botanical Floral Scroll Borders & Mandalas',
        'Custom Sized Wall Tapestries for Interior Decor'
      ],
      heritageNote: 'Decades of color vibrancy using conch shell, cinnabar, and natural stone pigments. 100% handmade visual storytelling.',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
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
        'Temple Motifs, Medallions & Wall Relief Panels',
        'Custom Garden & Luxury Interior Sculptures'
      ],
      heritageNote: 'Inspired by 1,000-year-old temple architecture of Konark and Puri. Weather-resistant, authentic, and tactile.',
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      actionText: 'View Stone Carvings'
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

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="flex flex-col bg-[#211711] rounded-2xl border border-amber-900/40 overflow-hidden hover:border-amber-600/60 transition-all duration-300 shadow-xl group text-left"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-stone-900">
                <img
                  src={spec.imageUrl}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211711] via-[#211711]/40 to-transparent" />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-300 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                  {spec.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold text-amber-400 tracking-wider block">
                      {spec.odiaName}
                    </span>
                    <h3 className="text-xl font-bold font-display text-amber-100 mt-1">
                      {spec.title}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Popular Creations List */}
                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block mb-2">
                      Key Handcrafted Motifs:
                    </span>
                    <ul className="space-y-1.5 text-xs text-stone-200">
                      {spec.popularItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Heritage Note */}
                  <div className="p-3 rounded-xl bg-[#17100b] border border-amber-950/80 text-[11px] text-stone-300 italic">
                    "{spec.heritageNote}"
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-amber-950/60 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(spec.id)}
                    className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1.5"
                  >
                    <span>{spec.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuickInquiry(spec.title)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-colors shadow-sm"
                  >
                    WhatsApp Inquiry
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
