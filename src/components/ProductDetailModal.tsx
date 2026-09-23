import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Globe2, 
  FileCheck2, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { Product, Currency } from '../types';
import { CATEGORY_SOURCING_INFO, EXPORTER_PROFILE } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currentCurrency?: Currency;
  onRequestExportCatalog?: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestExportCatalog
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.imageUrl);

  // Find category sourcing info for this product's category
  const categoryInfo = CATEGORY_SOURCING_INFO.find(c => c.id === product.category);

  const whatsappMessage = `Hello Subhasish, I would like to inquire about wholesale sourcing, export MOQs, and lead time for: "${product.title}" (${product.categoryLabel}).`;
  const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
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
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-7 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: HD Visual Gallery */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-amber-900/50 bg-gradient-to-b from-stone-900 to-[#120d09] shadow-inner">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/90 border border-amber-600/40 text-amber-300 text-[10px] font-semibold backdrop-blur-sm shadow-sm">
                  100% Authentic Handcrafted Piece
                </span>
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        activeImage === img ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-amber-900/40 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail view ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Verified Trust Badges under photo */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-stone-300">
                <div className="p-2.5 rounded-xl bg-[#221812] border border-amber-950 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Ethical Non-Wildlife Material</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#221812] border border-amber-950 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>DGFT IEC Registered</span>
                </div>
              </div>
            </div>

            {/* Right: Specifications & Commercial Parameters */}
            <div className="lg:col-span-6 space-y-5">
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-amber-100 leading-tight">
                  {product.title}
                </h3>
                {product.regionalTitle && (
                  <p className="text-xs text-amber-400 font-semibold mt-1">
                    {product.regionalTitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-stone-300 mt-2.5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* B2B Commercial Parameters Card with Flexible MOQs */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#261d15] to-[#1c1510] border border-amber-800/50 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                  <Globe2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Wholesale & Sourcing Parameters</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-[#19120c] border border-amber-950 space-y-0.5">
                    <span className="text-[10px] text-stone-400 block font-medium">Minimum Order (MOQ):</span>
                    <span className="font-bold text-amber-200">{product.moq}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#19120c] border border-amber-950 space-y-0.5">
                    <span className="text-[10px] text-stone-400 block font-medium">Production Lead Time:</span>
                    <span className="font-bold text-amber-200">{product.productionLeadTime}</span>
                  </div>
                </div>

                {/* Flexible MOQs Official Statement */}
                <div className="p-3 rounded-lg bg-[#19120c] border border-amber-900/50 text-[11px] text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-100 block mb-0.5">Flexible MOQs & Sample Shipments:</strong>
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-stone-300 uppercase tracking-wider">
                  Technical Specifications & Dimensions
                </h4>
                <div className="border border-amber-900/40 rounded-xl overflow-hidden divide-y divide-amber-950/70 text-xs">
                  <div className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-400 font-medium flex-shrink-0">Dimensions:</span>
                    <span className="text-stone-200 sm:text-right">{product.dimensionsCm} ({product.dimensionsInches})</span>
                  </div>
                  <div className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-400 font-medium flex-shrink-0">Unit Net Weight:</span>
                    <span className="text-stone-200 sm:text-right">{product.weightGrams}</span>
                  </div>
                  <div className="p-3 bg-[#1a130e] flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-400 font-medium flex-shrink-0">Material & Finish:</span>
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
                    <span className="text-stone-400 font-medium flex-shrink-0">Bespoke Customization:</span>
                    <span className="text-emerald-400 font-medium sm:text-right">Available for dimensions, motifs & private labeling</span>
                  </div>
                </div>
              </div>

              {/* Artisanal Heritage Note */}
              <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs">
                <span className="text-amber-400 font-bold block mb-1">Guild Heritage & Technique:</span>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  {product.artisanalStory}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer / Clear B2B CTAs */}
        <div className="px-5 sm:px-6 py-4 border-t border-amber-900/40 bg-[#17110c] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-400 text-left w-full sm:w-auto">
            <span>Direct Artisan Export • Pre-Shipment Video Inspection</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {onRequestExportCatalog && (
              <button
                onClick={onRequestExportCatalog}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-950/70 hover:bg-amber-900 border border-amber-700/60 text-amber-200 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Export Catalog (PDF)</span>
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-950/50"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
