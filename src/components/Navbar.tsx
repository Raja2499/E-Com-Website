import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';
import { PolicyTab } from './PoliciesComplianceModal';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenCatalogueModal: () => void;
  onOpenPolicyModal?: (tab: PolicyTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCatalogueModal,
  onOpenPolicyModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('story-origin');

  const whatsappDirectLink = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am interested in sourcing authentic Odisha handicrafts (Horn Artwork, Pattachitra, Palm Leaf, Stone Carvings).'
  )}`;

  // Scroll spy effect: highlights whichever section the user is currently viewing
  useEffect(() => {
    const sectionIds = ['story-origin', 'catalog', 'about-us', 'policies', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('story-origin');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'story-origin', label: 'Story & Origin', href: '#story-origin' },
    { id: 'catalog', label: 'Products', href: '#catalog' },
    { id: 'about-us', label: 'About Us', href: '#about-us' },
    { id: 'policies', label: 'Trade Policies', href: '#policies' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-stone-800 shadow-xs border-b border-stone-200">
      {/* Top Announcements Bar: Domestic & International Consignments + Verification */}
      <div className="bg-[#fbf9f5] border-b border-stone-200 text-stone-600 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-center">
          
          {/* Badge & Sourcing announcement */}
          <div className="flex flex-wrap items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
              ହସ୍ତଶିଳ୍ପ • ODISHA HERITAGE
            </span>
            <span className="text-stone-700 text-xs tracking-wide">
              Direct Artisan Sourcing • Domestic & International Consignments
            </span>
          </div>

          {/* Quick Legal Credentials in top bar */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-stone-500">
            <span>IEC: <strong className="text-stone-800 font-mono">0324089152</strong></span>
            <span>•</span>
            <span>Udyam: <strong className="text-stone-800 font-mono">OD-19-0048219</strong></span>
            <span>•</span>
            <button
              type="button"
              onClick={() => onOpenPolicyModal && onOpenPolicyModal('compliance')}
              className="text-amber-800 hover:text-amber-900 underline font-medium cursor-pointer"
            >
              Verify Badges
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.25rem] py-2 gap-4">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center group text-left flex-shrink-0">
            <BrandLogo variant="horizontal" size="md" />
          </a>

          {/* Desktop Nav Links with Active Scroll Highlighting */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive
                      ? 'text-amber-800 font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions & Utilities: Catalog PDF & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            {/* View Catalogue Button */}
            <button
              type="button"
              onClick={onOpenCatalogueModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors cursor-pointer border border-stone-200"
            >
              <FileText className="w-3.5 h-3.5 text-amber-800" />
              <span>Catalog (PDF)</span>
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wide transition-all shadow-xs cursor-pointer hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-4 text-left shadow-lg">
          <nav className="flex flex-col space-y-1.5 text-sm font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-50 text-amber-800 font-bold'
                      : 'hover:bg-stone-50 text-stone-700'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalogueModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-800" />
              <span>Export Catalog (PDF)</span>
            </button>
            <a
              href={whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
