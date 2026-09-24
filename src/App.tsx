import React, { useState } from 'react';
import { Product, ProductCategory } from './types';
import { EXPORTER_PROFILE } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryAndOrigin } from './components/StoryAndOrigin';
import { ProductBannerCarousel } from './components/ProductBannerCarousel';
import { ProductCatalog } from './components/ProductCatalog';
import { AboutUs } from './components/AboutUs';
import { ExportCompliance } from './components/ExportCompliance';
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

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-800 selection:text-white">
      {/* Navigation Bar with Active Scroll Highlighting */}
      <Navbar
        onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        onOpenPolicyModal={handleOpenPolicy}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
          onScrollToCatalog={scrollToCatalog}
        />

        {/* 2. Story and Origin Section: Odisha's Ancient Handmade Artworks */}
        <StoryAndOrigin />

        {/* 3. Product Showcase Banner: Slides through every product every 20 seconds */}
        <ProductBannerCarousel
          onSelectProduct={(product) => setSelectedProduct(product)}
          onScrollToCatalog={scrollToCatalog}
        />

        {/* 4. Products Section (Showing 2 products per row, open for individual & wholesale orders) */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectProduct={setSelectedProduct}
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        />

        {/* 5. About Us Section: Why Source With Us & Comprehensive Wholesale Capabilities */}
        <AboutUs
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        />

        {/* 6. Trade Policies, Anti-Shock Packaging & Export Compliance */}
        <ExportCompliance />

        {/* 7. Direct Contact & Dual Order Inquiry Form */}
        <ContactSection />
      </main>

      {/* Website Footer */}
      <Footer
        onOpenPolicyModal={handleOpenPolicy}
        onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
      />

      {/* Product Detail Specifications Modal with Individual vs Wholesale Ordering Options */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestExportCatalog={() => setIsCatalogueModalOpen(true)}
      />

      {/* Export Policies & Legal Compliance Modal */}
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

      {/* Floating Direct WhatsApp Assistance */}
      <FloatingWhatsApp />
    </div>
  );
}
