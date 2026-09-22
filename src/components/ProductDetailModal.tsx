import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Ruler, 
  Package, 
  Award,
  Clock,
  Sparkles,
  Globe2,
  Mail
} from 'lucide-react';
import { Product, Currency } from '../types';
import { CATEGORY_SOURCING_INFO, EXPORTER_PROFILE } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currentCurrency?: Currency;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.imageUrl);

  // Find category sourcing info for this product's category
  const categoryInfo = CATEGORY_SOURCING_INFO.find(c => c.id === product.category);

  const whatsappMessage = `Hello Subhasish, I would like to inquire about specifications and wholesale quotation for: "${product.title}" (${product.categoryLabel}).`;
  const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative w-full max-w-4xl bg-[#1d1510] border border-amber-900/50 rounded-2xl shadow-2xl overflow-hidden text-stone-100 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-amber-900/40 bg-[#17110c] sticky top-0 z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-amber-950/80 border border-amber-800 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            {categoryInfo?.regionalOdishaName && (
              <span className="text-xs text-amber-400 font-semibold">
                {categoryInfo.regionalOdishaName}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close product modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Gallery & Visuals */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-950 border border-amber-900/40 shadow-inner relative group">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to primary product image if sub-image fails
                    if (activeImage !== product.imageUrl) {
                      setActiveImage(product.imageUrl);
                    }
                  }}
                />
              </div>

              {/* Thumbnails */}
              {product.galleryImages.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === img ? 'border-amber-500 scale-95 shadow-md' : 'border-stone-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Heritage Assurance Badge */}
              <div className="p-4 rounded-xl bg-[#241a13] border border-amber-900/40 space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Odisha Master Craftsmen Authenticity</span>
                </div>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  Direct master artisan sourcing from living craft clusters in Paralakhemundi, Cuttack, and Raghurajpur. No mass-market automated reproductions.
                </p>
              </div>
            </div>

            {/* Right: Technical Specs & Dimension Details */}
            <div className="lg:col-span-6 space-y-5">
              
              {/* Product Titles & Description */}
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-amber-50 leading-snug">
                  {product.title}
                </h2>
                {product.regionalTitle && (
                  <p className="text-xs text-amber-400 font-medium mt-1">
                    {product.regionalTitle}
                  </p>
                )}
                <p className="text-xs text-stone-300 mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Pricing Notice (Customized for Domestic & International Buyers) */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#261d15] to-[#1c1510] border border-amber-800/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                  <Globe2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Wholesale Quotation on Request</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Pricing varies for <strong>domestic buyers within India</strong> and <strong>international export consignments</strong> depending on order volume, custom sizing, packaging, and shipping destination.
                </p>
                <div className="pt-2 border-t border-amber-950/70 flex flex-wrap gap-2 text-[11px] text-amber-300/90 font-medium">
                  <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/40">✓ Pan-India Domestic Delivery</span>
                  <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/40">✓ International Courier & Cargo</span>
                </div>
              </div>

              {/* Physical Dimensions & Sizing (Fixed Layout: Stacked cards with clear labels) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dimensions & Physical Specifications</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#17110c] border border-stone-800/90 space-y-1">
                    <span className="text-stone-400 text-[10px] uppercase font-semibold block">Dimensions (Metric)</span>
                    <span className="text-stone-200 font-mono font-medium text-xs break-words">{product.dimensionsCm}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#17110c] border border-stone-800/90 space-y-1">
                    <span className="text-stone-400 text-[10px] uppercase font-semibold block">Dimensions (Imperial)</span>
                    <span className="text-stone-200 font-mono font-medium text-xs break-words">{product.dimensionsInches}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#17110c] border border-stone-800/90 space-y-1">
                    <span className="text-stone-400 text-[10px] uppercase font-semibold block">Approximate Weight</span>
                    <span className="text-stone-200 font-mono font-medium text-xs">{product.weightGrams}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#17110c] border border-stone-800/90 space-y-1">
                    <span className="text-stone-400 text-[10px] uppercase font-semibold block">Wholesale MOQ</span>
                    <span className="text-stone-200 font-medium text-xs">{product.moq}</span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                  Artisan Details & Materials
                </h4>
                <div className="border border-amber-900/40 rounded-xl overflow-hidden divide-y divide-amber-950/70 text-xs">
                  <div className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-400 font-medium flex-shrink-0">Material & Sourcing:</span>
                    <span className="text-stone-200 sm:text-right leading-relaxed">{product.material}</span>
                  </div>
                  <div className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-400 font-medium flex-shrink-0">Origin Cluster:</span>
                    <span className="text-stone-200 sm:text-right">{product.origin}</span>
                  </div>
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                      <span className="text-stone-400 font-medium flex-shrink-0">{spec.label}:</span>
                      <span className="text-stone-200 sm:text-right leading-relaxed">{spec.value}</span>
                    </div>
                  ))}
                  <div className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-400 font-medium flex-shrink-0">Custom Designs:</span>
                    <span className="text-emerald-400 font-medium sm:text-right">Bespoke sizing & motifs available on request</span>
                  </div>
                </div>
              </div>

              {/* Artisanal Heritage Note */}
              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs">
                <span className="text-amber-400 font-bold block mb-1">Craft Guild Heritage:</span>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  {product.artisanalStory}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer / Direct WhatsApp & Email Buttons */}
        <div className="px-5 sm:px-6 py-4 border-t border-amber-900/40 bg-[#17110c] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-400 text-left w-full sm:w-auto">
            <span>Direct Artisan Sourcing • Fast Response via WhatsApp & Email</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`mailto:${EXPORTER_PROFILE.email}?subject=${encodeURIComponent(`Wholesale Inquiry: ${product.title}`)}&body=${encodeURIComponent(`Hello Subhasish,\n\nI would like to request wholesale pricing and consignment details for "${product.title}".\n\nDestination (Domestic India / International Country):\nEstimated Quantity:\n\nThank you.`)}`}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Inquire via Email</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
