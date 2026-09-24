import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  Pause, 
  Play, 
  ArrowRight
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductBannerCarouselProps {
  onSelectProduct: (product: Product) => void;
  onScrollToCatalog: () => void;
}

export const ProductBannerCarousel: React.FC<ProductBannerCarouselProps> = ({
  onSelectProduct,
  onScrollToCatalog
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalProducts = PRODUCTS.length;
  const currentProduct = PRODUCTS[currentIndex];

  // Advance to next slide
  const nextSlide = () => {
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProducts);
      setFadeState('in');
    }, 280);
  };

  // Back to previous slide
  const prevSlide = () => {
    setFadeState('out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalProducts) % totalProducts);
      setFadeState('in');
    }, 280);
  };

  // Auto-advance every 15 seconds
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 15000); // 15 seconds

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, totalProducts]);

  return (
    <section 
      id="featured-showcase"
      className="relative bg-[#f7f3ec] text-stone-900 border-b border-stone-200 overflow-hidden py-10 sm:py-16 transition-colors duration-500"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle traditional watermark motif in background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Controls: Pause/Resume + Counter */}
        <div className="flex items-center justify-end gap-3 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 px-2.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:text-amber-800 text-xs flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
            title={isPaused ? "Resume auto-slide" : "Pause auto-slide"}
          >
            {isPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-amber-700" />}
            <span className="text-[11px] font-medium">{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          <div className="text-xs font-mono font-medium text-stone-600 bg-white px-2.5 py-1 rounded-lg border border-stone-300">
            <span className="font-bold text-stone-900">{currentIndex + 1}</span>
            <span className="text-stone-400 mx-1">/</span>
            <span>{totalProducts}</span>
          </div>
        </div>

        {/* Carousel Content: Utkalika-style Layout with Framed Image */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-opacity duration-300 ${
            fadeState === 'in' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
          }`}
        >
          {/* Left Side: Typography with Warm Highlight Brush Banner */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Category & Regional Odia Pill */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-amber-800 tracking-wider uppercase">
                {currentProduct.categoryLabel}
              </span>
              {currentProduct.regionalTitle && (
                <span className="text-sm font-semibold text-stone-600 block">
                  {currentProduct.regionalTitle}
                </span>
              )}
            </div>

            {/* Main Headline with Brush Highlight (Inspired by Utkalika) */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.2]">
              {/* Highlighted portion */}
              <span className="relative inline-block mr-2">
                <span className="absolute -inset-1 bg-[#f5d99b] -rotate-1 rounded-sm opacity-90 -z-10" />
                <span className="relative text-stone-950 font-extrabold">{currentProduct.title.split(':')[0]}</span>
              </span>
              <br className="hidden sm:block" />
              <span className="text-stone-800 font-serif italic text-2xl sm:text-3xl lg:text-4xl block mt-2">
                an exquisite form of traditional art.
              </span>
            </h2>

            {/* Product Tagline / Concise Description */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-xl">
              {currentProduct.description.substring(0, 180)}...
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectProduct(currentProduct)}
                className="py-3 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-50 font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4 text-amber-300" />
                <span>View Details & Order</span>
              </button>

              <button
                type="button"
                onClick={onScrollToCatalog}
                className="py-3 px-5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 hover:text-stone-900 font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>View All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Side: The Masterpiece Framed Picture (Utkalika Style) */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* The Framed Artwork Display */}
            <div 
              onClick={() => onSelectProduct(currentProduct)}
              className="group relative cursor-pointer max-w-lg w-full transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Rich Wooden Frame Border */}
              <div className="p-3 sm:p-4 bg-[#7a4928] rounded-xl shadow-2xl border-2 border-[#5a331a]">
                <div className="p-1 sm:p-1.5 bg-[#d4a373] rounded-md">
                  <div className="relative aspect-4/3 sm:aspect-16/10 rounded overflow-hidden bg-stone-100">
                    <img
                      src={currentProduct.imageUrl}
                      alt={currentProduct.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-stone-900 text-xs font-bold shadow-lg flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-amber-700" /> Click to View Specifications
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artisan Authenticity Caption below Frame */}
              <div className="mt-3 flex items-center justify-between text-xs text-stone-600 px-1">
                <span className="font-semibold text-stone-800 line-clamp-1">{currentProduct.title}</span>
                <span className="text-[11px] text-amber-800 font-medium flex-shrink-0">100% Genuine Handcrafted</span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Navigation Arrows (< and > on outer flanks) */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-stone-800 hover:text-amber-800 shadow-lg border border-stone-200 flex items-center justify-center transition-all cursor-pointer hover:scale-110 z-20"
          title="Previous Product"
          aria-label="Previous Product"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-stone-800 hover:text-amber-800 shadow-lg border border-stone-200 flex items-center justify-center transition-all cursor-pointer hover:scale-110 z-20"
          title="Next Product"
          aria-label="Next Product"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Clickable Slide Indicators / Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {PRODUCTS.map((prod, idx) => (
            <button
              key={prod.id}
              type="button"
              onClick={() => {
                setFadeState('out');
                setTimeout(() => {
                  setCurrentIndex(idx);
                  setFadeState('in');
                }, 200);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-amber-700'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              title={`Jump to ${prod.title}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
