import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Globe2, 
  FileCheck2, 
  ShieldCheck, 
  FileText,
  User,
  Building2,
  CheckCircle2,
  Truck,
  MapPin
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
  const [orderType, setOrderType] = useState<'individual' | 'wholesale'>('individual');

  // Find category sourcing info for this product's category
  const categoryInfo = CATEGORY_SOURCING_INFO.find(c => c.id === product.category);

  // Dynamic WhatsApp message based on individual vs wholesale
  const whatsappMessage = orderType === 'individual'
    ? `Hello Subhasish, I am interested in ordering an individual piece / sample of: "${product.title}" (${product.categoryLabel}). Please share individual price, shipping charges, and delivery timeline.`
    : `Hello Subhasish, I would like to inquire about wholesale bulk sourcing, tiered pricing, and sample shipments for: "${product.title}" (${product.categoryLabel}).`;

  const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden text-stone-900 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-stone-200 bg-[#faf7f2] sticky top-0 z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            {categoryInfo?.regionalOdishaName && (
              <span className="text-xs text-amber-800 font-semibold">
                {categoryInfo.regionalOdishaName}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
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
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-stone-950/80 text-white text-[10px] font-semibold backdrop-blur-xs">
                  100% Authentic Handcrafted Piece
                </span>
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages && product.galleryImages.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                        activeImage === img ? 'border-amber-700 ring-2 ring-amber-300' : 'border-stone-200 opacity-70 hover:opacity-100'
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
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-stone-600">
                <div className="p-2.5 rounded-xl bg-[#faf7f2] border border-stone-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Ethical Organic Material</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#faf7f2] border border-stone-200 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>DGFT IEC Registered</span>
                </div>
              </div>
            </div>

            {/* Right: Specifications & Ordering Options */}
            <div className="lg:col-span-6 space-y-5">
              
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-950 leading-tight">
                  {product.title}
                </h3>
                {product.regionalTitle && (
                  <p className="text-xs text-amber-800 font-semibold mt-1">
                    {product.regionalTitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Order Mode Selector: Individual vs Wholesale */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-amber-200 space-y-3">
                <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wide block">
                  Select Order Inquiring Mode:
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('individual')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      orderType === 'individual'
                        ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Individual / 1 Piece</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('wholesale')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      orderType === 'wholesale'
                        ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Wholesale / Bulk</span>
                  </button>
                </div>

                <div className="text-xs text-stone-600 bg-white p-3 rounded-xl border border-stone-200 space-y-1">
                  {orderType === 'individual' ? (
                    <>
                      <strong className="text-stone-900 block">Single Piece & Sample Orders:</strong>
                      <span>Order an individual masterpiece delivered safely to your home, office, or gallery. Doorstep tracked insured delivery.</span>
                    </>
                  ) : (
                    <>
                      <strong className="text-stone-900 block">Wholesale & Export Consignments:</strong>
                      <span>Custom volume tiers, flexible MOQs, commercial invoicing, export crate packaging, and sample shipments supported.</span>
                    </>
                  )}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Technical Specifications & Dimensions
                </h4>
                <div className="border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100 text-xs">
                  <div className="p-3 bg-white flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-500 font-medium flex-shrink-0">Dimensions:</span>
                    <span className="text-stone-800 sm:text-right font-medium">{product.dimensionsCm} ({product.dimensionsInches})</span>
                  </div>
                  <div className="p-3 bg-stone-50 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-500 font-medium flex-shrink-0">Unit Net Weight:</span>
                    <span className="text-stone-800 sm:text-right font-medium">{product.weightGrams}</span>
                  </div>
                  <div className="p-3 bg-white flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-500 font-medium flex-shrink-0">Material & Finish:</span>
                    <span className="text-stone-800 sm:text-right leading-relaxed font-medium">{product.material}</span>
                  </div>
                  <div className="p-3 bg-stone-50 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-500 font-medium flex-shrink-0">Origin Cluster:</span>
                    <span className="text-stone-800 sm:text-right font-medium">{product.origin}</span>
                  </div>
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="p-3 bg-white flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                      <span className="text-stone-500 font-medium flex-shrink-0">{spec.label}:</span>
                      <span className="text-stone-800 sm:text-right leading-relaxed">{spec.value}</span>
                    </div>
                  ))}
                  <div className="p-3 bg-stone-50 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                    <span className="text-stone-500 font-medium flex-shrink-0">Customization:</span>
                    <span className="text-emerald-700 font-medium sm:text-right">Available for custom motifs, sizing & packaging</span>
                  </div>
                </div>
              </div>

              {/* Artisanal Heritage Note */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                <span className="text-amber-900 font-bold block mb-1">Guild Heritage & Technique:</span>
                <p className="text-stone-700 leading-relaxed text-[11px]">
                  {product.artisanalStory}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer / WhatsApp Inquiry (Kept ONLY inside the modal) */}
        <div className="px-5 sm:px-6 py-4 border-t border-stone-200 bg-[#faf7f2] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-500 text-left w-full sm:w-auto">
            <span>Direct Artisan Guild Source • Pre-Shipment Inspection Included</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            {onRequestExportCatalog && (
              <button
                type="button"
                onClick={onRequestExportCatalog}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-800" />
                <span>Export Catalog (PDF)</span>
              </button>
            )}

            {/* Inquire on WhatsApp Button with Dynamic Pre-filled Text */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire via WhatsApp ({orderType === 'individual' ? '1 Piece' : 'Wholesale'})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
