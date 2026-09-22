import React from 'react';
import { 
  X, 
  FileText, 
  MessageSquare, 
  Printer,
  Package,
  Layers,
  Globe2,
  Mail,
  ShieldCheck
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
    'Hello Subhasish, please send me the complete Odisha Traditional Handicrafts digital catalogue and quotation details for our business.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative w-full max-w-3xl bg-[#1d1510] border border-amber-900/50 rounded-2xl shadow-2xl overflow-hidden text-stone-100 text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/40 bg-[#16100b]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h2 className="font-display text-lg font-bold text-amber-100">
              Product Catalog & Sourcing Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Top Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/80 via-[#271d15] to-[#16100b] border border-amber-900/40 space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              Authentic Odisha Artisan Sourcing
            </span>
            <h3 className="font-display text-base font-bold text-amber-100">
              Handcrafted Indian Traditional Artwork Showcase
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Serving domestic retailers across India and international buyers. 
              Wholesale pricing is tailored specifically based on domestic destination vs. international air/sea freight consignment and order volume.
            </p>
          </div>

          {/* Category Sourcing Schedule Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              Craft Disciplines & Sourcing Specifications
            </h4>

            <div className="border border-amber-900/40 rounded-xl overflow-hidden text-xs">
              <div className="grid grid-cols-12 bg-[#17110c] p-3 font-semibold text-amber-300/90 border-b border-amber-900/40 text-[11px]">
                <div className="col-span-4">Craft Category</div>
                <div className="col-span-3">Artisan Lineage</div>
                <div className="col-span-2">Typical MOQ</div>
                <div className="col-span-3 text-right">Pricing Policy</div>
              </div>

              <div className="divide-y divide-amber-950/70 bg-[#211711]">
                {CATEGORY_SOURCING_INFO.map((cat) => {
                  return (
                    <div key={cat.id} className="grid grid-cols-12 p-3 items-center hover:bg-[#281c15] transition-colors">
                      <div className="col-span-4">
                        <span className="font-semibold text-amber-100 block">{cat.name}</span>
                        <span className="text-[10px] text-amber-400/80">{cat.regionalOdishaName}</span>
                      </div>
                      <div className="col-span-3 text-stone-300 text-[11px]">
                        {cat.id === 'horn-art' ? 'Paralakhemundi, Gajapati' :
                         cat.id === 'pattachitra' ? 'Raghurajpur, Puri' :
                         cat.id === 'stone-carving' ? 'Konark & Puri Guilds' : 'Mayurbhanj & Rayagada'}
                      </div>
                      <div className="col-span-2 text-stone-300 text-[11px]">{cat.moq}</div>
                      <div className="col-span-3 text-right text-stone-300 text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-[#18110b] border border-amber-900/60 text-amber-300 font-medium">
                          Quote on Request
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Pricing Policy Notice */}
          <div className="p-4 rounded-xl bg-[#17110c] border border-amber-900/40 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wide text-[11px]">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>Domestic & International Quotation Policy</span>
            </div>
            <p className="text-stone-300 leading-relaxed text-[11px]">
              Because material density, protective packaging requirements, and logistics tariffs vary significantly between domestic deliveries within India (via surface/air express) and international export consignments (via DHL/FedEx Express or Sea Cargo), we provide itemized, all-inclusive quotations upon receiving your requirements.
            </p>
          </div>

          {/* Contact Details */}
          <div className="p-4 rounded-xl bg-[#241a13] border border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <span className="text-stone-400 block text-[11px]">Direct Contact Person:</span>
              <span className="font-bold text-amber-200 text-sm">{EXPORTER_PROFILE.name}</span>
              <span className="text-stone-400 block text-[11px] mt-0.5">Email: {EXPORTER_PROFILE.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintOrSave}
                className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-stone-400" />
                <span>Print Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-amber-900/40 bg-[#16100b] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-stone-400">
            <span>WhatsApp / Phone: </span>
            <strong className="text-emerald-400">{EXPORTER_PROFILE.whatsapp}</strong>
          </div>

          <a
            href={directWhatsAppCatalogueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Request Digital PDF on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
