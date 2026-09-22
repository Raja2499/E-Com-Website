import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText, 
  Globe2, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

interface NavbarProps {
  onOpenCatalogueModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCatalogueModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappDirectLink = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am interested in sourcing authentic Indian handicrafts (Horn Artwork, Pattachitra, Stone Carvings).'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#16120e] text-stone-100 shadow-xl border-b border-amber-900/40">
      {/* Top Announcements Bar */}
      <div className="bg-[#241710] border-b border-amber-900/30 text-amber-200/90 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          
          {/* Left badge & announcement */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              ହସ୍ତଶିଳ୍ପ • ODISHA HERITAGE
            </span>
            <span className="text-stone-300 text-xs tracking-wide">
              Direct Artisan Sourcing • Domestic (India) & International Consignments
            </span>
          </div>

          {/* Right Direct Contacts */}
          <div className="flex items-center gap-3 sm:gap-5 text-xs">
            <a 
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors text-emerald-400 font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: {EXPORTER_PROFILE.whatsapp}</span>
            </a>
            <span className="text-amber-900/60 hidden sm:inline">|</span>
            <a 
              href={`mailto:${EXPORTER_PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors text-stone-300 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{EXPORTER_PROFILE.email}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.5rem] py-2 gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group text-left flex-shrink-0">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-600 via-amber-800 to-stone-900 border border-amber-500/50 flex items-center justify-center text-amber-100 shadow-md group-hover:border-amber-400 transition-colors">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-amber-100 block">
                HERITAGE CRAFTS INDIA
              </span>
              <span className="block text-[11px] tracking-wider uppercase text-amber-400/90 font-medium">
                Paralakhemundi Shringa Silpa • Pattachitra • Stone Carving
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#specialties" className="hover:text-amber-400 transition-colors">
              Odisha Traditions
            </a>
            <a href="#categories-guide" className="hover:text-amber-400 transition-colors">
              Craft Categories
            </a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors">
              Product Showcase
            </a>
            <a href="#wholesale-terms" className="hover:text-amber-400 transition-colors">
              Wholesale Sourcing
            </a>
            <a href="#artisan-heritage" className="hover:text-amber-400 transition-colors">
              Our Artisans
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact & Inquiries
            </a>
          </nav>

          {/* Actions & Utilities */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            
            {/* View Catalogue Button */}
            <button
              onClick={onOpenCatalogueModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-950/60 text-amber-300 hover:bg-amber-900/70 border border-amber-700/60 text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Digital Catalog & Guide</span>
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide transition-all shadow-md shadow-emerald-950/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1a130e] border-b border-amber-900/60 px-4 pt-3 pb-6 space-y-4 text-left shadow-2xl">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-stone-200">
            <a 
              href="#specialties" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Odisha Traditions
            </a>
            <a 
              href="#categories-guide" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Craft Categories
            </a>
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Product Showcase
            </a>
            <a 
              href="#wholesale-terms" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Wholesale Sourcing
            </a>
            <a 
              href="#artisan-heritage" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Our Artisans
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Contact & Inquiries
            </a>
          </nav>

          <div className="pt-3 border-t border-amber-950/80 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogueModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#281d15] text-amber-200 border border-amber-800/60 text-xs font-semibold"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Digital Catalog & Guide</span>
            </button>

            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat ({EXPORTER_PROFILE.whatsapp})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
