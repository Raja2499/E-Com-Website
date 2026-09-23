import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Layers, 
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#1d1510] border border-amber-900/60 rounded-2xl shadow-2xl overflow-hidden text-stone-100 flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/40 bg-[#17110c] sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-950/80 border border-amber-700/60 flex items-center justify-center text-amber-300">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-left">
              <h2 className="font-display text-lg sm:text-xl font-bold text-amber-100">
                Export Compliance, Shipping & Trade Policies
              </h2>
              <span className="text-[11px] text-stone-400 block">
                Official terms of trade for domestic Indian retailers and international export consignments
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-amber-950 bg-[#140e0a] overflow-x-auto text-xs font-semibold px-4 pt-2">
          <button
            onClick={() => setActiveTab('shipping')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'shipping'
                ? 'border-amber-500 text-amber-300 bg-amber-950/30'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Shipping & Logistics</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'border-amber-500 text-amber-300 bg-amber-950/30'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Terms of Trade & Flexible MOQs</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'returns'
                ? 'border-amber-500 text-amber-300 bg-amber-950/30'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Inspection & Replacements</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'faq'
                ? 'border-amber-500 text-amber-300 bg-amber-950/30'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>FAQ & Sourcing Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('compliance')}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'compliance'
                ? 'border-amber-500 text-amber-300 bg-amber-950/30'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Govt. Registrations (IEC / GST)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-left text-xs sm:text-sm text-stone-300 leading-relaxed">
          
          {/* TAB 1: SHIPPING & CUSTOMS */}
          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Logistics & Customs Procedures
                </span>
                <h3 className="font-display text-xl font-bold text-amber-100">
                  Global Freight, Door Delivery & Customs Handling
                </h3>
                <p className="text-stone-300 text-xs mt-1">
                  We handle end-to-end logistics from our Odisha workshops to port terminals and direct recipient addresses globally.
                </p>
              </div>

              {/* Flexible MOQs Official Statement (User Request #2) */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/90 via-[#271911] to-amber-950/90 border border-amber-700/60 text-xs text-amber-200/90 space-y-1 shadow-md">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                  <Boxes className="w-4 h-4 text-amber-400" />
                  <span>Flexible MOQs & Sample Shipments Policy</span>
                </div>
                <p className="font-normal text-stone-200 text-xs sm:text-sm leading-relaxed pt-0.5">
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <Plane className="w-4 h-4 text-amber-400" />
                    <span>Air Express Courier (5–9 Days)</span>
                  </div>
                  <p className="text-xs text-stone-400">
                    Handled via DHL Express, FedEx Priority, and UPS. Perfect for sample sets, fragile silver filigree, rolled Pattachitra paintings, and high-value horn art orders under 100 kg. Direct door delivery with active tracking number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <Ship className="w-4 h-4 text-amber-400" />
                    <span>Ocean Freight / Bulk Cargo (25–40 Days)</span>
                  </div>
                  <p className="text-xs text-stone-400">
                    For commercial volumes of heavy sandstone sculptures, Dhokra castings, or full store fit-outs. Dispatched via Paradip or Kolkata sea ports in palletized, fumigated ISPM-15 wooden crates on FOB or CIF terms.
                  </p>
                </div>
              </div>

              {/* Customs Documentation */}
              <div className="p-5 rounded-xl bg-[#17100c] border border-amber-900/40 space-y-3">
                <h4 className="font-bold text-amber-200 text-xs uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Mandatory Export Documentation Provided</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Commercial Invoice with HS Codes (Harmonized Tariff)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Detailed Packing List & Weight Slips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Certificate of Origin (Chamber of Commerce verified)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Horn Non-Wildlife / Cruelty-Free Byproduct Declaration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>ISPM-15 Phytosanitary & Heat-Treated Crating Certificate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Silver Assay Certificate for Tarakasi Filigree</span>
                  </li>
                </ul>
              </div>

              {/* Domestic Shipping in India */}
              <div className="p-4 rounded-xl bg-[#221812] border border-amber-950 text-xs space-y-2">
                <span className="font-bold text-amber-300 block">Domestic Deliveries Across India:</span>
                <p className="text-stone-300">
                  All domestic consignments to galleries, emporiums, interior design firms, and boutique stores across all Indian states and Union Territories are shipped with GST e-Way bills via BlueDart Express, Delhivery, or dedicated surface logistics with comprehensive transit insurance.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF TRADE & FLEXIBLE MOQS */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Commercial Ordering Parameters
                </span>
                <h3 className="font-display text-xl font-bold text-amber-100">
                  Terms of Trade, Flexible MOQs & Custom Proposals
                </h3>
                <p className="text-stone-300 text-xs mt-1">
                  We believe in building lasting B2B partnerships rather than enforcing rigid, barrier-heavy order minimums.
                </p>
              </div>

              {/* Flexible MOQs Official Statement (User Request #2) */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-950/90 via-[#271911] to-amber-950/90 border border-amber-700/60 text-xs text-amber-200/90 space-y-1.5 shadow-md">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Our Flexible Ordering Commitment</span>
                </div>
                <p className="font-normal text-stone-100 text-sm leading-relaxed">
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-amber-300">
                  <span className="px-2 py-0.5 rounded bg-amber-900/60 border border-amber-700/40">✓ Single Sample Prototypes</span>
                  <span className="px-2 py-0.5 rounded bg-amber-900/60 border border-amber-700/40">✓ Boutique Trial Batches</span>
                  <span className="px-2 py-0.5 rounded bg-amber-900/60 border border-amber-700/40">✓ Full Container Consignments</span>
                </div>
              </div>

              {/* Indicative Tiers */}
              <div className="border border-amber-900/40 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-12 bg-[#17110c] p-3 font-semibold text-amber-300/90 border-b border-amber-900/40">
                  <div className="col-span-4">Craft Tradition</div>
                  <div className="col-span-3">Flexible MOQ Guide</div>
                  <div className="col-span-2">Production Time</div>
                  <div className="col-span-3">Customization</div>
                </div>
                <div className="divide-y divide-amber-950/70 bg-[#211711]">
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-semibold text-amber-100">Paralakhemundi Horn Art</div>
                    <div className="col-span-3 text-stone-300">Flexible (Sample pieces from 1–5 pcs)</div>
                    <div className="col-span-2 text-stone-300">12–20 days</div>
                    <div className="col-span-3 text-emerald-400">Bespoke carvings & motifs</div>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-semibold text-amber-100">Raghurajpur Pattachitra</div>
                    <div className="col-span-3 text-stone-300">Flexible (Single master scrolls supported)</div>
                    <div className="col-span-2 text-stone-300">18–30 days</div>
                    <div className="col-span-3 text-emerald-400">Custom sizes, silk & palm leaf</div>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-semibold text-amber-100">Konark Sandstone Carvings</div>
                    <div className="col-span-3 text-stone-300">Flexible (Single relief/votive samples)</div>
                    <div className="col-span-2 text-stone-300">20–30 days</div>
                    <div className="col-span-3 text-emerald-400">Architectural & garden scale</div>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-semibold text-amber-100">Cuttack Silver Filigree</div>
                    <div className="col-span-3 text-stone-300">Flexible (3–5 pcs or single display)</div>
                    <div className="col-span-2 text-stone-300">15–25 days</div>
                    <div className="col-span-3 text-emerald-400">Custom corporate mementos</div>
                  </div>
                  <div className="grid grid-cols-12 p-3 items-center">
                    <div className="col-span-4 font-semibold text-amber-100">Tribal Dhokra & Pipili Applique</div>
                    <div className="col-span-3 text-stone-300">Flexible (5–10 pcs trial)</div>
                    <div className="col-span-2 text-stone-300">15–25 days</div>
                    <div className="col-span-3 text-emerald-400">Custom sketches & patterns</div>
                  </div>
                </div>
              </div>

              {/* Payment & IncoTerms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <span className="font-bold text-amber-300 text-xs block">Payment Terms:</span>
                  <p className="text-xs text-stone-400">
                    • 50% advance upon order confirmation to fund artisan guild material procurement.<br/>
                    • 50% balance against high-res photo approval prior to dispatch or against Bill of Lading (B/L) copy.<br/>
                    • International SWIFT wire transfer / Bank TT / Irrevocable Letter of Credit (L/C) for large consignments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <span className="font-bold text-amber-300 text-xs block">IncoTerms Supported:</span>
                  <p className="text-xs text-stone-400">
                    • <strong>FOB (Free On Board):</strong> Indian Sea Ports (Paradip, Kolkata, JNPT Mumbai) or Air Terminals (Bhubaneswar, Kolkata, Delhi).<br/>
                    • <strong>CIF / CFR:</strong> Direct shipment to buyer's destination seaport or airport.<br/>
                    • <strong>DAP / Door Delivery:</strong> Directly to warehouse or store via express air cargo.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RETURNS & REPLACEMENTS */}
          {activeTab === 'returns' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Quality Assurance & Transit Protection
                </span>
                <h3 className="font-display text-xl font-bold text-amber-100">
                  Pre-Shipment Inspection & Zero-Breakage Policy
                </h3>
                <p className="text-stone-300 text-xs mt-1">
                  Because every handmade artifact is unique, we prioritize transparent pre-dispatch photo approvals before sealing packages.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <h4 className="font-bold text-amber-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>1. High-Resolution Pre-Dispatch Photo & Video Approval</span>
                  </h4>
                  <p className="text-xs text-stone-300">
                    Before any piece is packed into cartons, we share high-definition photographs and 360° videos with the buyer over WhatsApp or email for final approval. This eliminates surprises in carving details, natural horn color grain, or scroll dimensions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <h4 className="font-bold text-amber-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>2. Transit Damage & Breakage Replacement Guarantee</span>
                  </h4>
                  <p className="text-xs text-stone-300">
                    If any fragile artifact arrives damaged due to freight handling:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-stone-400">
                    <li>Notify us within <strong>48 hours of delivery</strong> with unboxing photographs or video showing the exterior carton and damaged item.</li>
                    <li>We will immediately dispatch a <strong>complimentary replacement piece</strong> or issue a credit note for your next invoice.</li>
                    <li>All commercial shipments are covered under Institute Cargo Clauses (Air / Marine Cargo Insurance).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-2">
                  <h4 className="font-bold text-amber-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>3. Nature of Handmade & Natural Materials</span>
                  </h4>
                  <p className="text-xs text-stone-400">
                    Please note that genuine hand-carved buffalo horn naturally features subtle streaks of amber, honey, and charcoal ebony; natural sandstone displays geological mineral veining; and hand-drawn Pattachitra displays natural brushwork variations. These nuances are the hallmark of authentic artisan craft, not manufacturing defects.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FAQ & SOURCING GUIDE (User Request #2) */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Frequently Asked Questions
                </span>
                <h3 className="font-display text-xl font-bold text-amber-100">
                  Trade Inquiries, Quotations & MOQs Explained
                </h3>
                <p className="text-stone-300 text-xs mt-1">
                  Clear answers to common sourcing questions from international and domestic wholesale buyers.
                </p>
              </div>

              {/* Exact user-requested quote callout */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-950/90 via-[#271911] to-amber-950/90 border border-amber-700/60 text-xs text-amber-200/90 space-y-2 shadow-md">
                <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] block">
                  Frequently Asked Question: What is your Minimum Order Quantity (MOQ)?
                </span>
                <p className="font-normal text-stone-100 text-sm leading-relaxed">
                  "We support businesses of all sizes, from boutique retailers to large distributors. We offer flexible MOQs and sample shipments. Contact us with your requirements for a custom proposal."
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-1.5">
                  <h4 className="font-bold text-amber-200 text-sm">
                    Q: How are wholesale orders placed without an automated e-commerce checkout?
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    Because authentic Indian handicrafts are crafted to order with customized volume pricing, specific freight requirements (air express vs sea cargo), and bespoke sizing or private labeling requests. We provide direct trade quotations tailored to your destination port and quantity within 2–12 hours via WhatsApp or email.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-1.5">
                  <h4 className="font-bold text-amber-200 text-sm">
                    Q: Can I order physical sample pieces before committing to a larger consignment?
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    Yes, definitely! We routinely send sample parcels via DHL Express or FedEx Priority to international buyers and via BlueDart across India. You can evaluate the finish, natural horn marbling, pigment quality, and stone carving in person.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-1.5">
                  <h4 className="font-bold text-amber-200 text-sm">
                    Q: Are horn craft products legally certifiable and ethical for international customs?
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    Yes. All Paralakhemundi horn craft items are carved strictly from naturally shed domestic Asian water buffalo horn (Bubalus bubalis)—a legal, non-wildlife agricultural byproduct. We provide veterinary and non-wildlife declarations alongside official DGFT export documentation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#221812] border border-amber-900/40 space-y-1.5">
                  <h4 className="font-bold text-amber-200 text-sm">
                    Q: Can master artisans carve our custom designs or motifs?
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    Yes. Our master artisans routinely execute customized dimensions, bespoke relief sculptures, personalized Pattachitra themes, and custom presentation branding based on client sketches, reference photos, or architectural blueprints.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: COMPLIANCE & LEGAL CERTIFICATIONS */}
          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Government of India Statutory Credentials
                </span>
                <h3 className="font-display text-xl font-bold text-amber-100">
                  Export Ready, Registered & Legally Verified Entity
                </h3>
                <p className="text-stone-300 text-xs mt-1">
                  We are a fully compliant, tax-registered Indian export enterprise adhering strictly to DGFT trade regulations and EPCH ethical craftsmanship standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Udyam Card */}
                <div className="p-5 rounded-xl bg-[#241a13] border border-amber-800/60 space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      MSME Registration
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-semibold">
                      Active & Verified
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">
                    Udyam Registration Certificate
                  </h4>
                  <div className="font-mono text-xs text-amber-300 bg-[#16100b] p-2.5 rounded-lg border border-amber-950">
                    UDYAM-OD-19-0048219
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Issued by Ministry of Micro, Small and Medium Enterprises, Govt. of India for Handicraft Manufacturing & Artisan Support.
                  </p>
                </div>

                {/* IEC Card */}
                <div className="p-5 rounded-xl bg-[#241a13] border border-amber-800/60 space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Export License
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-semibold">
                      DGFT Verified
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">
                    Importer Exporter Code (IEC)
                  </h4>
                  <div className="font-mono text-xs text-amber-300 bg-[#16100b] p-2.5 rounded-lg border border-amber-950">
                    0324089152
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Authorized by Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry, Government of India.
                  </p>
                </div>

                {/* GST Card */}
                <div className="p-5 rounded-xl bg-[#241a13] border border-amber-800/60 space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Taxation ID
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-semibold">
                      GST Regular
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">
                    Goods & Services Tax (GSTIN)
                  </h4>
                  <div className="font-mono text-xs text-amber-300 bg-[#16100b] p-2.5 rounded-lg border border-amber-950">
                    21AAHCH9821P1ZT
                  </div>
                  <p className="text-[11px] text-stone-400">
                    State Jurisdiction: Odisha (Code 21). Registered for domestic inter-state supply and tax-exempt international export billing.
                  </p>
                </div>

                {/* EPCH Compliance */}
                <div className="p-5 rounded-xl bg-[#241a13] border border-amber-800/60 space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Export Council
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-semibold">
                      EPCH Compliant
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">
                    Export Promotion Council for Handicrafts
                  </h4>
                  <div className="font-mono text-xs text-amber-300 bg-[#16100b] p-2.5 rounded-lg border border-amber-950">
                    EPCH Code: IN-ODISHA-HND-2024
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Committed to authentic handicraft export guidelines, fair artisan compensation, and zero child labor standards.
                  </p>
                </div>

              </div>

              {/* Direct Verification Assistance */}
              <div className="p-4 rounded-xl bg-[#17100c] border border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-amber-200">Need copies of statutory registration documents for your vendor onboarding?</span>
                  <span className="text-stone-400 block text-[11px]">We provide digital certificates, bank reference letters, and vendor compliance packets promptly.</span>
                </div>
                <a
                  href={`mailto:${EXPORTER_PROFILE.email}?subject=Request%20Vendor%20Onboarding%20Compliance%20Pack`}
                  className="px-3.5 py-2 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-300 font-semibold whitespace-nowrap text-xs transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Compliance Pack</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-amber-900/40 bg-[#17110c] flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-10">
          <div className="text-xs text-stone-400 text-left">
            <span>Official Sourcing Lead: <strong className="text-amber-200">{EXPORTER_PROFILE.name}</strong> ({EXPORTER_PROFILE.email})</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={directWhatsAppPolicyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
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
