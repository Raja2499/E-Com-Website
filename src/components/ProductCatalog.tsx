import React, { useState } from 'react';
import { 
  Search, 
  Eye, 
  Sparkles, 
  Download,
  MapPin, 
  MessageSquare, 
  Boxes
} from 'lucide-react';
import { Product, ProductCategory, Currency } from '../types';
import { PRODUCTS, EXPORTER_PROFILE } from '../data/products';

interface ProductCatalogProps {
  currentCurrency?: Currency;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  onOpenCatalogueModal: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onOpenCatalogueModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Heritage Crafts', count: PRODUCTS.length },
    { 
      id: 'horn-art', 
      label: 'Paralakhemundi Shringa Silpa', 
      count: PRODUCTS.filter(p => p.category === 'horn-art').length 
    },
    { 
      id: 'pattachitra', 
      label: 'Pattachitra & Palm Leaf', 
      count: PRODUCTS.filter(p => p.category === 'pattachitra').length 
    },
    { 
      id: 'stone-carving', 
      label: 'Konark Stone Carvings', 
      count: PRODUCTS.filter(p => p.category === 'stone-carving').length 
    },
    { 
      id: 'silver-filigree', 
      label: 'Cuttack Silver Filigree', 
      count: PRODUCTS.filter(p => p.category === 'silver-filigree').length 
    },
    { 
      id: 'custom-crafts', 
      label: 'Tribal & Regional Crafts', 
      count: PRODUCTS.filter(p => p.category === 'custom-crafts').length 
    }
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.regionalTitle && product.regionalTitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-20 bg-[#140e0a] text-stone-100 border-b border-amber-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Odisha Artisanal Archive</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
              Mastercrafted Product Presentation & Portfolio
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Explore authentic masterworks sculpted, painted, etched, and woven by generational guilds across Odisha. 
              Featuring high-definition visual captures highlighting natural horn marbleization, crisp mineral pigments on patta cloth, 
              undercut sandstone latticework, and gossamer silver filigree.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCatalogueModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-900/40 hover:bg-amber-800/60 border border-amber-600/60 text-amber-200 text-xs font-semibold transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Export Catalog (PDF)</span>
            </button>
          </div>
        </div>

        {/* Prominent Flexible MOQs Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#241710] via-[#2d1b11] to-[#20140d] border border-amber-800/50 text-left shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/90 border border-amber-700/60 flex items-center justify-center text-amber-300 flex-shrink-0">
                <Boxes className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                  B2B Trade Commitment • Flexible Minimum Orders
                </span>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent('Hello Subhasish, I am interested in discussing flexible MOQs and sample shipments for Odisha handicrafts.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#2a1d15] hover:bg-[#38261c] border border-amber-700/60 text-amber-200 text-xs font-semibold whitespace-nowrap transition-colors self-start sm:self-auto cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40'
                    : 'bg-[#221812] text-stone-300 hover:bg-[#2e2018] border border-amber-950/80'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  selectedCategory === cat.id ? 'bg-amber-800 text-white' : 'bg-[#18110b] text-stone-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search motifs, crafts, or materials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c140e] border border-amber-950 focus:border-amber-500 focus:outline-none text-xs text-stone-100 placeholder-stone-400"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-stone-400 space-y-3 bg-[#1c140e] rounded-2xl border border-amber-950">
            <p className="text-base font-medium">No handcrafted pieces matched your search criteria.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-amber-900/60 hover:bg-amber-800 text-amber-200 text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group rounded-2xl bg-[#1d1510] border border-amber-950/80 hover:border-amber-600/60 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-950/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Photography: Clean Studio Image Presentation */}
                  <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-b from-stone-900 to-[#140e0b]">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Regional Odia Heritage Badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-md bg-stone-900/90 border border-amber-800/60 text-amber-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm">
                        {product.categoryLabel}
                      </span>
                    </div>

                    {/* Quick Specs Overlay on Hover */}
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full bg-amber-600/90 text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Specifications</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      {product.regionalTitle && (
                        <span className="text-[11px] font-bold text-amber-400/90 block mb-0.5">
                          {product.regionalTitle}
                        </span>
                      )}
                      <h3 className="font-display text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-xs text-stone-300 line-clamp-2 mt-1 leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Specifications & Origin */}
                    <div className="space-y-1.5 text-xs text-stone-300 pt-3 border-t border-amber-950/70">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 text-xs">
                        <span className="text-stone-400 text-[11px] font-medium flex-shrink-0">Craft Material:</span>
                        <span className="text-stone-300 sm:text-right text-[11px] line-clamp-1">{product.material}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 text-xs">
                        <span className="text-stone-400 flex items-center gap-1 text-[11px] font-medium flex-shrink-0">
                          <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                          <span>Origin:</span>
                        </span>
                        <span className="text-stone-300 sm:text-right text-[11px] line-clamp-1">{product.origin}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 text-xs">
                        <span className="text-stone-400 text-[11px] font-medium flex-shrink-0">Wholesale MOQ:</span>
                        <span className="text-amber-300 font-semibold sm:text-right text-[11px]">{product.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Clear B2B Actions */}
                <div className="p-5 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="py-2.5 px-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(`Hello Subhasish, I am interested in inquiring about "${product.title}" (${product.categoryLabel}). Please share wholesale availability and details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="py-2.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="p-2 rounded-lg bg-[#241a12] border border-amber-950 flex items-center justify-between text-[10px] text-amber-300">
                    <span>✓ Flexible MOQs & Samples</span>
                    <span className="text-stone-400">Pre-dispatch video approval</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
