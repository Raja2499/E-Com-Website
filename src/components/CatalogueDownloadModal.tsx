import React from 'react';
import { 
  X, 
  FileText, 
  MessageSquare, 
  Printer,
  Globe2
} from 'lucide-react';
import { EXPORTER_PROFILE, CATEGORY_SOURCING_INFO } from '../data/products';

interface CatalogueDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogueDownloadModal: React.FC<CatalogueDownloadModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const handlePrintOrSave = () => {
    window.print();
  };

  const directWhatsAppCatalogueUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, please send me the complete Odisha Traditional Handicrafts digital catalog and quotation details for our order.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden text-stone-900 text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#faf7f2]">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Utkal Heritage" className="w-7 h-7 object-contain" referrerPolicy="no-referrer" />
            <h2 className="font-display text-base sm:text-lg font-bold text-stone-950">
              Utkal Heritage • Sourcing Catalog
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Top Banner */}
          <div className="p-4 rounded-2xl bg-[#faf7f2] border border-amber-200 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
              Authentic Odisha Artisan Sourcing
            </span>
            <h3 className="font-display text-base font-bold text-stone-950">
              Handcrafted Indian Traditional Artwork Showcase
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Serving individual retail collectors across India and international wholesale trade buyers. 
              Pricing is tailored specifically based on destination delivery vs. international export freight and order volume.
            </p>
          </div>

          {/* Category Sourcing Schedule Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
              Craft Disciplines & Sourcing Specifications
            </h4>

            <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-12 bg-stone-100 p-3 font-semibold text-stone-800 border-b border-stone-200 text-[11px]">
                <div className="col-span-4">Craft Category</div>
                <div className="col-span-3">Artisan Lineage</div>
                <div className="col-span-2">Typical Order</div>
                <div className="col-span-3 text-right">Pricing Policy</div>
              </div>

              <div className="divide-y divide-stone-100 bg-white">
                {CATEGORY_SOURCING_INFO.map((cat) => {
                  return (
                    <div key={cat.id} className="grid grid-cols-12 p-3 items-center hover:bg-stone-50 transition-colors">
                      <div className="col-span-4">
                        <span className="font-bold text-stone-900 block">{cat.name}</span>
                        <span className="text-[10px] text-amber-800">{cat.regionalOdishaName}</span>
                      </div>
                      <div className="col-span-3 text-stone-600 text-[11px]">
                        {cat.id === 'horn-art' ? 'Paralakhemundi, Gajapati' :
                         cat.id === 'pattachitra-cloth' ? 'Raghurajpur, Puri' :
                         cat.id === 'palm-leaf' ? 'Raghurajpur Crafts Village' :
                         cat.id === 'stone-carving' ? 'Konark & Puri Guilds' : 'Odisha Master Guilds'}
                      </div>
                      <div className="col-span-2 text-stone-600 text-[11px]">{cat.moq}</div>
                      <div className="col-span-3 text-right text-stone-600 text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-800 font-medium">
                          Individual & Bulk
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Policy Notice */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-stone-800 font-bold uppercase tracking-wide text-[11px]">
              <Globe2 className="w-4 h-4 text-amber-800" />
              <span>Domestic & International Delivery Policy</span>
            </div>
            <p className="text-stone-600 leading-relaxed text-[11px] font-normal">
              Whether you need single sample delivery within India or bulk container consignments abroad via air/sea cargo, all orders include itemized invoices and safe anti-shock packaging.
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-4 rounded-xl bg-[#faf7f2] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-stone-500 block text-[11px]">Direct Contact Person:</span>
              <span className="font-bold text-stone-950 text-sm">{EXPORTER_PROFILE.name}</span>
              <span className="text-stone-500 block text-[11px] mt-0.5">Email: {EXPORTER_PROFILE.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrintOrSave}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-stone-500" />
                <span>Print Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-[#faf7f2] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-stone-500">
            <span>WhatsApp / Phone: </span>
            <strong className="text-emerald-700">{EXPORTER_PROFILE.whatsapp}</strong>
          </div>

          <a
            href={directWhatsAppCatalogueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Request Digital PDF on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
