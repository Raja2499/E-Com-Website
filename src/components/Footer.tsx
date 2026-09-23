import React from 'react';
import { 
  Sparkles, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  FileCheck2, 
  FileText, 
  Award, 
  CheckCircle2, 
  RotateCcw, 
  Truck, 
  Scale,
  HelpCircle 
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';
import { PolicyTab } from './PoliciesComplianceModal';

interface FooterProps {
  onOpenPolicyModal?: (tab: PolicyTab) => void;
  onOpenCatalogueModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicyModal,
  onOpenCatalogueModal
}) => {
  return (
    <footer className="bg-[#120d09] text-stone-300 border-t border-amber-950/70 text-xs">
      
      {/* Statutory Trust Signals Bar - Udyam, IEC, GSTIN prominently highlighted */}
      <div className="bg-[#1a120b] border-b border-amber-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                Statutory Verifications & Trade Credentials
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-amber-100 flex items-center gap-2 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Legally Registered Indian Export Entity</span>
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onOpenPolicyModal && onOpenPolicyModal('compliance')}
                className="px-3.5 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-300 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                <span>View Full Compliance Certificates</span>
              </button>
            </div>
          </div>

          {/* 3 Prominent Statutory Badges: Udyam, IEC, GSTIN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            {/* Udyam */}
            <div className="p-3.5 rounded-xl bg-[#221710] border border-amber-900/50 hover:border-amber-700/60 transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold mb-1">
                <span>UDYAM (MSME GOVT OF INDIA)</span>
                <span className="text-emerald-400 flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
              <div className="font-mono text-xs font-bold text-amber-100 tracking-wide">
                {EXPORTER_PROFILE.compliance.udyam}
              </div>
              <p className="text-[10px] text-stone-400 mt-1">
                Handicrafts Manufacturing & Global Supply
              </p>
            </div>

            {/* IEC */}
            <div className="p-3.5 rounded-xl bg-[#221710] border border-amber-900/50 hover:border-amber-700/60 transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold mb-1">
                <span>IMPORT EXPORT CODE (IEC)</span>
                <span className="text-emerald-400 flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>DGFT</span>
                </span>
              </div>
              <div className="font-mono text-xs font-bold text-amber-100 tracking-wide">
                {EXPORTER_PROFILE.compliance.iec}
              </div>
              <p className="text-[10px] text-stone-400 mt-1">
                Directorate General of Foreign Trade Authorized
              </p>
            </div>

            {/* GSTIN */}
            <div className="p-3.5 rounded-xl bg-[#221710] border border-amber-900/50 hover:border-amber-700/60 transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold mb-1">
                <span>GSTIN (GOODS & SERVICES TAX)</span>
                <span className="text-emerald-400 flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>State 21</span>
                </span>
              </div>
              <div className="font-mono text-xs font-bold text-amber-100 tracking-wide">
                {EXPORTER_PROFILE.compliance.gstin}
              </div>
              <p className="text-[10px] text-stone-400 mt-1">
                Tax-Invoiced Pan-India & IGST Clearance
              </p>
            </div>

            {/* EPCH / Fair Trade */}
            <div className="p-3.5 rounded-xl bg-[#221710] border border-amber-900/50 hover:border-amber-700/60 transition-colors shadow-sm">
              <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold mb-1">
                <span>HANDICRAFT COUNCIL (EPCH)</span>
                <span className="text-amber-400 flex items-center gap-0.5">
                  <Award className="w-3 h-3" />
                  <span>Ethical</span>
                </span>
              </div>
              <div className="font-mono text-xs font-bold text-amber-100 tracking-wide">
                EPCH Fair Trade Aligned
              </div>
              <p className="text-[10px] text-stone-400 mt-1">
                Cruelty-Free Horn Byproducts & Living Wages
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer: Links, Policies & Profile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Brand & Craft Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-900 border border-amber-500/50 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wider text-amber-100 block">
                  HERITAGE CRAFTS INDIA
                </span>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold block">
                  Odisha Traditional Handicrafts
                </span>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs max-w-md">
              Direct master artisan guild procurement connecting the living heritage clusters of Odisha (Paralakhemundi, Raghurajpur, Konark, and Cuttack) with boutique retailers, museum gift shops, interior decor specialists, and international importers worldwide.
            </p>

            <div className="pt-2 text-stone-300 space-y-1">
              <div>Supplier & Sourcing Lead: <strong className="text-amber-200">{EXPORTER_PROFILE.name}</strong></div>
              <div>Official Email: <a href={`mailto:${EXPORTER_PROFILE.email}`} className="text-amber-300 hover:underline">{EXPORTER_PROFILE.email}</a></div>
              <div>Direct WhatsApp: <a href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}`} className="text-emerald-400 font-semibold hover:underline">{EXPORTER_PROFILE.whatsapp}</a></div>
            </div>
          </div>

          {/* Core Odisha Craft Traditions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-amber-100 uppercase tracking-wider">
              Odisha Craft Traditions
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Paralakhemundi Horn Art (ଶୃଙ୍ଗ ଶିଳ୍ପ)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Raghurajpur Pattachitra (ପଟ୍ଟଚିତ୍ର)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Konark Sandstone & Jali (ପଥର ଖୋଦେଇ)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-300 transition-colors">
                  Cuttack Tarakasi Silver Filigree (ତାରକସି)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-300 transition-colors">
                  Tala Pattachitra Palm Leaf Engravings (ତାଳପତ୍ର)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-amber-300 transition-colors">
                  Dhokra Lost-Wax Bell Metal & Pipili Applique
                </a>
              </li>
            </ul>
          </div>

          {/* Clear Policies & Compliance (User Request #5) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-amber-100 uppercase tracking-wider">
              Clear Policies & Compliance
            </h4>
            <ul className="space-y-2 text-stone-300">
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('shipping')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>International Shipping & Customs Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('returns')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Inspection & Replacement Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('terms')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <Scale className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Terms of Trade & Flexible MOQs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('faq')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Trade FAQ & Sourcing Guide</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicyModal && onOpenPolicyModal('compliance')}
                  className="hover:text-amber-300 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Udyam, IEC & GSTIN Verification</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Wholesale Downloads */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold text-amber-100 uppercase tracking-wider">
              Wholesale Assets
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenCatalogueModal}
                className="w-full text-left p-2.5 rounded-lg bg-[#221812] hover:bg-[#2c1f17] border border-amber-900/50 text-amber-300 text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Export Catalog (PDF)</span>
              </button>
              
              <a
                href={`mailto:${EXPORTER_PROFILE.email}?subject=Wholesale%20Handicrafts%20Inquiry`}
                className="w-full text-left p-2.5 rounded-lg bg-[#221812] hover:bg-[#2c1f17] border border-amber-900/50 text-stone-300 hover:text-amber-200 text-xs transition-colors flex items-center gap-2 block"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email Exporter Directly</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Odia Heritage note */}
      <div className="border-t border-amber-950/80 bg-[#0d0906] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Heritage Crafts India. Mastercrafted in Odisha, India. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-stone-400">
            <span>Udyam: {EXPORTER_PROFILE.compliance.udyam}</span>
            <span>•</span>
            <span>IEC: {EXPORTER_PROFILE.compliance.iec}</span>
            <span>•</span>
            <span>GSTIN: {EXPORTER_PROFILE.compliance.gstin}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
