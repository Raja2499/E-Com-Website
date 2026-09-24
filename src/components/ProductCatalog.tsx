import React, { useState } from 'react';
import { 
  Search, 
  Eye, 
  Sparkles, 
  Download,
  MapPin
} from 'lucide-react';
import { Product, ProductCategory, Currency } from '../types';
import { PRODUCTS } from '../data/products';

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
    { id: 'all', label: 'All Products', count: PRODUCTS.length },
    { 
      id: 'horn-art', 
      label: 'Horn Artwork', 
      count: PRODUCTS.filter(p => p.category === 'horn-art').length 
    },
    { 
      id: 'pattachitra-cloth', 
      label: 'Pattachitra Cloth Scrolls', 
      count: PRODUCTS.filter(p => p.category === 'pattachitra-cloth').length 
    },
    { 
      id: 'palm-leaf', 
      label: 'Palm Leaf', 
      count: PRODUCTS.filter(p => p.category === 'palm-leaf').length 
    },
    { 
      id: 'stone-carving', 
      label: 'Stone Carvings', 
      count: PRODUCTS.filter(p => p.category === 'stone-carving').length 
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
    <section id="catalog" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Complete Craft Collection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
              All Handcrafted Masterpieces
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Browse our complete catalog of authentic Odisha crafts. Whether you are an 
              <strong className="text-stone-900 font-semibold"> individual customer ordering a single masterpiece</strong> or a 
              <strong className="text-stone-900 font-semibold"> wholesale supplier looking for bulk consignments</strong>, both can easily view details and place orders here.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenCatalogueModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-semibold transition-all shadow-2xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-800" />
              <span>Download PDF Catalog</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-stone-950 text-amber-100 shadow-xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isSelected
                        ? 'bg-amber-800 text-white'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by craft, material..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 placeholder:text-stone-400 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#faf7f2] rounded-3xl border border-dashed border-stone-300 max-w-lg mx-auto p-8 space-y-3">
            <p className="text-stone-600 text-sm font-medium">
              No products found matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200 hover:border-amber-400 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  {/* Product Card Top: Image & Badges */}
                  <div>
                    <div className="relative aspect-16/10 sm:aspect-16/10 overflow-hidden bg-stone-100">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />
                      
                      {/* Category Tag */}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-stone-900 text-[11px] font-bold tracking-wider uppercase shadow-xs">
                        {product.categoryLabel}
                      </span>

                      {/* Individual & Bulk Badge */}
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-amber-900/90 text-amber-100 text-[11px] font-semibold tracking-wide backdrop-blur-xs">
                        Individual & Bulk Order Available
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6 space-y-3">
                      {product.regionalTitle && (
                        <span className="text-xs font-bold text-amber-800 block line-clamp-1">
                          {product.regionalTitle}
                        </span>
                      )}

                      <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                        {product.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed font-normal">
                        {product.tagline}
                      </p>

                      {/* Sourcing Quick Info */}
                      <div className="pt-3 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                        <div className="flex items-center gap-1.5">
                          <span className="text-stone-400 font-medium">Material:</span>
                          <span className="text-stone-800 font-medium line-clamp-1">{product.material}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                          <span className="text-stone-800 font-medium line-clamp-1">{product.origin}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Clear Single Action Button (View Details & Order) */}
                  <div className="p-5 sm:p-6 pt-0 space-y-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-50 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:bg-amber-800"
                    >
                      <Eye className="w-4 h-4 text-amber-300" />
                      <span>View Details & Order</span>
                    </button>

                    <div className="flex items-center justify-end text-[11px] text-stone-500 px-1 font-medium">
                      <span className="text-emerald-700 font-semibold">✓ In Stock / Made to Order</span>
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
