import React, { useState } from 'react';
import { 
  Search, 
  Eye, 
  Sparkles, 
  Download,
  Info,
  Layers,
  MapPin
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
      label: 'Pattachitra Scrolls', 
      count: PRODUCTS.filter(p => p.category === 'pattachitra').length 
    },
    { 
      id: 'stone-carving', 
      label: 'Stone Carvings', 
      count: PRODUCTS.filter(p => p.category === 'stone-carving').length 
    },
    { 
      id: 'custom-crafts', 
      label: 'Custom & Metal Crafts', 
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Odisha Artisanal Archive
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
              Handcrafted Product Showcase
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Explore authentic pieces sculpted, painted, and cast by master artisans across Odisha. 
              Featuring our premier <strong className="text-amber-300 font-semibold">Paralakhemundi Shringa Silpa (ପାରଳାଖେମୁଣ୍ଡି ଶୃଙ୍ଗ ଶିଳ୍ପ)</strong>, 
              Raghurajpur Pattachitra, and Konark Stone Carvings.
              Custom quotations provided on request for domestic Indian stores and international consignments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCatalogueModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-300 text-xs font-semibold transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Digital Catalog & Guide</span>
            </button>
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
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-[#221812] text-stone-300 hover:bg-[#2e2018] border border-amber-950/80'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  selectedCategory === cat.id ? 'bg-amber-800 text-amber-100' : 'bg-stone-900 text-stone-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search elephant, comb, scroll..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#201812] border border-amber-900/40 text-stone-200 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-stone-500"
            />
          </div>

        </div>

        {/* Paralakhemundi Shringa Silpa Card in Catalog */}
        {(selectedCategory === 'all' || selectedCategory === 'horn-art') && (
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#1e1610] border border-amber-800/60 shadow-xl text-left space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-amber-400">
                100% Hand-carved Natural Horn
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                Sourcing Available
              </span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg sm:text-xl font-bold text-amber-100">
                Paralakhemundi Shringa Silpa
              </h3>
              <span className="text-xs sm:text-sm text-amber-400 font-medium">ପାରଳାଖେମୁଣ୍ଡି ଶୃଙ୍ଗ ଶିଳ୍ପ</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Generational craftsmen hand-carve and buff natural cattle & water buffalo horn to an exquisite natural amber & ebony sheen.
            </p>
          </div>
        )}

        {/* Product Grid - Pure Showcase without individual price tags */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#1d1510] rounded-2xl border border-stone-800 p-8">
            <p className="text-stone-400 text-sm">No products found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-stone-800 text-amber-300 rounded-lg text-xs font-semibold hover:bg-stone-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="bg-[#1c1510] rounded-2xl border border-amber-900/30 overflow-hidden flex flex-col justify-between hover:border-amber-600/60 transition-all duration-300 group text-left shadow-xl cursor-pointer"
                >
                  {/* Top Image Container */}
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1510] via-transparent to-transparent opacity-75" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-stone-950/85 border border-amber-800/60 text-amber-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                          {product.categoryLabel}
                        </span>
                        {product.featured && (
                          <span className="px-2.5 py-1 rounded-md bg-amber-600/90 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
                            Masterpiece
                          </span>
                        )}
                      </div>

                      {/* View Details hover indicator */}
                      <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-stone-900/90 group-hover:bg-amber-600 text-stone-200 group-hover:text-white text-xs font-semibold border border-amber-900/50 group-hover:border-amber-500 backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-md">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Specifications</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="font-display text-base font-bold text-amber-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                          {product.title}
                        </h3>
                        {product.regionalTitle && (
                          <p className="text-[11px] text-amber-400/80 font-medium">
                            {product.regionalTitle}
                          </p>
                        )}
                        <p className="text-xs text-stone-400 line-clamp-2 mt-1 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Craft Specs Attributes (Clean Material & Provenance without Dimensions or MOQ) */}
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
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Informative Banner */}
                  <div className="p-5 pt-0">
                    <div className="p-2.5 rounded-xl bg-[#261d15] border border-amber-900/40 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-[11px]">
                        <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>Pricing on Request • Domestic & Export</span>
                      </div>
                      <span className="text-[11px] text-stone-400 group-hover:text-amber-200 transition-colors flex-shrink-0">
                        View Specs →
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
