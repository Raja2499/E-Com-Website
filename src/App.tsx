import React, { useState } from 'react';
import { Product, ProductCategory } from './types';
import { EXPORTER_PROFILE } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtyFocus } from './components/SpecialtyFocus';
import { CategoryPricing } from './components/CategoryPricing';
import { ProductCatalog } from './components/ProductCatalog';
import { WholesaleCapabilities } from './components/WholesaleCapabilities';
import { ExportCompliance } from './components/ExportCompliance';
import { ArtisanHeritage } from './components/ArtisanHeritage';
import { ContactSection } from './components/ContactSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CatalogueDownloadModal } from './components/CatalogueDownloadModal';
import { PoliciesComplianceModal, PolicyTab } from './components/PoliciesComplianceModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTab>('shipping');

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPolicy = (tab: PolicyTab) => {
    setActivePolicyTab(tab);
    setIsPolicyModalOpen(true);
  };

  const handleQuickInquiry = (topic: string) => {
    const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
      `Hello Subhasish, I would like to inquire about wholesale sourcing for ${topic}.`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#120d09] text-stone-100 flex flex-col font-sans selection:bg-amber-800 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        onOpenPolicyModal={handleOpenPolicy}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
          onScrollToCatalog={scrollToCatalog}
        />

        {/* Core Odisha Craft Specialties (Horn Art, Pattachitra, Stone Carving, Silver Filigree) */}
        <SpecialtyFocus
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToCatalog();
          }}
          onOpenQuickInquiry={handleQuickInquiry}
        />

        {/* Story and Origin: Deep-dive into Raghurajpur, Paralakhemundi, Cuttack & Konark */}
        <ArtisanHeritage />

        {/* Handcrafted Masterpieces Showcase (Crisp lighting, studio backgrounds, wholesale specs) */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectProduct={setSelectedProduct}
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        />

        {/* Category Sourcing Guide - Sourcing criteria & policies across categories */}
        <CategoryPricing
          onOpenQuickInquiry={handleQuickInquiry}
        />

        {/* Wholesale Capabilities (Tailored for Domestic & Global Buyers) */}
        <WholesaleCapabilities
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        />

        {/* Logistics, Safe Anti-Shock Packaging & Standards */}
        <ExportCompliance />

        {/* Direct Contact & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Website Footer with Prominent Trust Signals (Udyam, IEC, GSTIN) and Policy links */}
      <Footer
        onOpenPolicyModal={handleOpenPolicy}
        onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
      />

      {/* Product Detail Specifications Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestExportCatalog={() => setIsCatalogueModalOpen(true)}
      />

      {/* Export Policies & Legal Compliance Modal (Shipping, Returns, Terms of Trade, Statutory Registrations) */}
      <PoliciesComplianceModal
        isOpen={isPolicyModalOpen}
        initialTab={activePolicyTab}
        onClose={() => setIsPolicyModalOpen(false)}
      />

      {/* Catalogue & Sourcing Guide Modal */}
      <CatalogueDownloadModal
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
      />

      {/* Floating Direct WhatsApp Assistance (Clean icon trigger) */}
      <FloatingWhatsApp />
    </div>
  );
}
