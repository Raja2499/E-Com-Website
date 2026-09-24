import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  HelpCircle, 
  Plane, 
  Ship, 
  Scale, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  AlertCircle,
  Sparkles,
  Boxes
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export type PolicyTab = 'shipping' | 'returns' | 'terms' | 'compliance' | 'faq';

interface PoliciesComplianceModalProps {
  isOpen: boolean;
  initialTab?: PolicyTab;
  onClose: () => void;
}

export const PoliciesComplianceModal: React.FC<PoliciesComplianceModalProps> = ({
  isOpen,
  initialTab = 'shipping',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  if (!isOpen) return null;

  const directWhatsAppPolicyLink = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I have a query regarding your Shipping & Export terms, flexible MOQs, and compliance certificates for an order.'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden text-stone-900 flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#faf7f2] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <ShieldCheck className="w-5 h-5 text-amber-800" />
            </div>
            <div className="text-left">
              <h2 className="font-display text-lg sm:text-xl font-bold text-stone-950">
                Export Compliance, Shipping & Trade Policies
              </h2>
              <span className="text-[11px] text-stone-500 block">
                Official terms of trade for domestic and international consignments
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs font-semibold px-4 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('shipping')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'shipping'
                ? 'border-amber-800 text-amber-800 bg-white rounded-t-lg'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Truck className="w-4 h-4 text-amber-800" />
            <span>Shipping & Logistics</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'border-amber-800 text-amber-800 bg-white rounded-t-lg'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Scale className="w-4 h-4 text-amber-800" />
            <span>Terms of Trade & Flexible MOQs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('returns')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'returns'
                ? 'border-amber-800 text-amber-800 bg-white rounded-t-lg'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <RotateCcw className="w-4 h-4 text-amber-800" />
            <span>Inspection & Replacements</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('faq')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'faq'
                ? 'border-amber-800 text-amber-800 bg-white rounded-t-lg'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-800" />
            <span>FAQ & Sourcing Guide</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('compliance')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'compliance'
                ? 'border-amber-800 text-amber-800 bg-white rounded-t-lg'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-800" />
            <span>Govt. Registrations (IEC / GST)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-left text-xs sm:text-sm text-stone-700 leading-relaxed">
          
          {/* TAB 1: SHIPPING & CUSTOMS */}
          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Logistics & Customs Procedures
                </span>
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Global Freight, Door Delivery & Customs Handling
                </h3>
                <p className="text-stone-600 text-xs mt-1">
                  We handle end-to-end logistics from our Odisha workshops to port terminals and direct recipient addresses globally.
                </p>
              </div>

              {/* Flexible MOQs Official Statement */}
              <div className="p-4 rounded-2xl bg-[#faf7f2] border border-amber-200 text-xs text-stone-800 space-y-1 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
                  <Boxes className="w-4 h-4 text-amber-800" />
                  <span>Flexible MOQs & Sample Shipments Policy</span>
                </div>
                <p className="font-normal text-stone-700 text-xs sm:text-sm leading-relaxed pt-0.5">
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                    <Plane className="w-4 h-4 text-amber-800" />
                    <span>Air Express Courier (5–9 Days)</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Handled via DHL Express, FedEx Priority, and UPS. Perfect for sample sets, fragile crafts, rolled Pattachitra paintings, and horn art orders under 100 kg. Direct door delivery with active tracking number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold text-xs">
                    <Ship className="w-4 h-4 text-amber-800" />
                    <span>Ocean Freight / Bulk Cargo (25–40 Days)</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    For commercial volumes of heavy sandstone sculptures or full store fit-outs. Dispatched via Paradip or Kolkata sea ports in palletized, fumigated ISPM-15 wooden crates on FOB or CIF terms.
                  </p>
                </div>
              </div>

              {/* Customs Documentation */}
              <div className="p-5 rounded-xl bg-[#faf7f2] border border-stone-200 space-y-3">
                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-800" />
                  <span>Mandatory Export Documentation Provided</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Commercial Invoice with HS Codes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Detailed Packing List & Weight Slips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Certificate of Origin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Horn Non-Wildlife / Cruelty-Free Declaration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>ISPM-15 Phytosanitary Crating Certificate</span>
                  </li>
                </ul>
              </div>

              {/* Domestic Shipping in India */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                <span className="font-bold text-stone-900 block">Domestic Deliveries Across India:</span>
                <p className="text-stone-600">
                  All domestic consignments to galleries, collectors, interior design firms, and stores across all Indian states and Union Territories are shipped with GST e-Way bills via BlueDart Express, Delhivery, or dedicated surface logistics with transit insurance.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF TRADE & FLEXIBLE MOQS */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Commercial Ordering Parameters
                </span>
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Terms of Trade, Flexible MOQs & Custom Proposals
                </h3>
                <p className="text-stone-600 text-xs mt-1">
                  We believe in building lasting relationships rather than enforcing rigid, barrier-heavy order minimums.
                </p>
              </div>

              {/* Flexible MOQs Official Statement */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#faf7f2] border border-amber-200 text-xs text-stone-800 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-amber-800" />
                  <span>Our Flexible Ordering Commitment</span>
                </div>
                <p className="font-normal text-stone-700 text-sm leading-relaxed">
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-amber-900 font-medium">
                  <span className="px-2.5 py-0.5 rounded bg-white border border-stone-200">✓ Single Sample Prototypes</span>
                  <span className="px-2.5 py-0.5 rounded bg-white border border-stone-200">✓ Individual Art Pieces</span>
                  <span className="px-2.5 py-0.5 rounded bg-white border border-stone-200">✓ Full Consignments</span>
                </div>
              </div>

              {/* Indicative Tiers */}
              <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-12 bg-stone-100 p-3 font-semibold text-stone-800 border-b border-stone-200">
                  <div className="col-span-4">Craft Tradition</div>
                  <div className="col-span-3">Flexible Order Guide</div>
                  <div className="col-span-2">Production Time</div>
                  <div className="col-span-3">Customization</div>
                </div>
                <div className="divide-y divide-stone-100 bg-white">
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-bold text-stone-900">Paralakhemundi Horn Art</div>
                    <div className="col-span-3 text-stone-600">Flexible (1 piece to bulk sets)</div>
                    <div className="col-span-2 text-stone-600">12–20 days</div>
                    <div className="col-span-3 text-emerald-700 font-medium">Bespoke carvings & motifs</div>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-bold text-stone-900">Raghurajpur Pattachitra</div>
                    <div className="col-span-3 text-stone-600">Flexible (Single master scrolls supported)</div>
                    <div className="col-span-2 text-stone-600">18–30 days</div>
                    <div className="col-span-3 text-emerald-700 font-medium">Custom sizes & themes</div>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-bold text-stone-900">Konark Sandstone Carvings</div>
                    <div className="col-span-3 text-stone-600">Flexible (Single sculptures supported)</div>
                    <div className="col-span-2 text-stone-600">20–30 days</div>
                    <div className="col-span-3 text-emerald-700 font-medium">Architectural & garden scale</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RETURNS & REPLACEMENTS */}
          {activeTab === 'returns' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Quality Assurance & Transit Protection
                </span>
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Pre-Shipment Inspection & Zero-Breakage Policy
                </h3>
                <p className="text-stone-600 text-xs mt-1">
                  Because every handmade artifact is unique, we prioritize transparent pre-dispatch photo approvals before sealing packages.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h4 className="font-bold text-stone-900 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>1. High-Resolution Pre-Dispatch Photo & Video Approval</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Before any piece is packed into cartons, we share high-definition photographs and 360° videos with the buyer over WhatsApp or email for final approval. This eliminates surprises in carving details, natural horn color grain, or scroll dimensions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h4 className="font-bold text-stone-900 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>2. Transit Damage & Replacement Guarantee</span>
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    If any fragile artifact arrives damaged due to freight handling, notify us within 48 hours of delivery with unboxing photographs or video showing the exterior carton and damaged item. We will promptly dispatch a replacement or issue an adjustment.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FAQ & SOURCING GUIDE */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Frequently Asked Questions
                </span>
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Inquiries, Quotations & Orders Explained
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <h4 className="font-bold text-stone-900 text-sm">
                    Q: Can individual art collectors buy single pieces directly?
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    Yes! While we supply retail shops and wholesale distributors, individual art lovers can purchase single heirloom artifacts with door delivery anywhere across India or abroad.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <h4 className="font-bold text-stone-900 text-sm">
                    Q: What is your Minimum Order Quantity (MOQ)?
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <h4 className="font-bold text-stone-900 text-sm">
                    Q: Are horn craft products legally certifiable and ethical?
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    Yes. All Paralakhemundi horn craft items are carved strictly from naturally shed domestic Asian water buffalo horn—a legal, non-wildlife agricultural byproduct. We provide non-wildlife declarations alongside official DGFT export documentation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: COMPLIANCE & LEGAL CERTIFICATIONS */}
          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                  Government of India Statutory Credentials
                </span>
                <h3 className="font-display text-xl font-bold text-stone-950">
                  Export Ready, Registered & Legally Verified Entity
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Udyam Card */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      MSME Registration
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                      Active & Verified
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    Udyam Registration Certificate
                  </h4>
                  <div className="font-mono text-xs text-stone-900 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-bold">
                    UDYAM-OD-19-0048219
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Issued by Ministry of Micro, Small and Medium Enterprises, Govt. of India for Handicraft Manufacturing & Artisan Support.
                  </p>
                </div>

                {/* IEC Card */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      Export License
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                      DGFT Verified
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    Importer Exporter Code (IEC)
                  </h4>
                  <div className="font-mono text-xs text-stone-900 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-bold">
                    0324089152
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Authorized by Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, Government of India.
                  </p>
                </div>

                {/* GST Card */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      Taxation ID
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                      GST Regular
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    Goods & Services Tax (GSTIN)
                  </h4>
                  <div className="font-mono text-xs text-stone-900 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-bold">
                    21AAHCH9821P1ZT
                  </div>
                  <p className="text-[11px] text-stone-500">
                    State Jurisdiction: Odisha (Code 21). Registered for domestic inter-state supply and tax-exempt international export billing.
                  </p>
                </div>

                {/* EPCH Compliance */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                      Export Council
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-semibold">
                      EPCH Compliant
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    Export Promotion Council for Handicrafts
                  </h4>
                  <div className="font-mono text-xs text-stone-900 bg-stone-50 p-2.5 rounded-lg border border-stone-200 font-bold">
                    EPCH Code: IN-ODISHA-HND-2024
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Committed to authentic handicraft export guidelines, fair artisan compensation, and zero child labor standards.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-[#faf7f2] flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-xs text-stone-500 text-left">
            <span>Official Sourcing Lead: <strong className="text-stone-900">{EXPORTER_PROFILE.name}</strong> ({EXPORTER_PROFILE.email})</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={directWhatsAppPolicyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
