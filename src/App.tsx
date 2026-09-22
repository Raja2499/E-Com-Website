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
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategoriesGuide = () => {
    const el = document.getElementById('categories-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickInquiry = (topic: string) => {
    const url = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
      `Hello Subhasish, I am interested in wholesale sourcing for ${topic}. Please share your available designs and quotation guide.`
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#120d09] text-stone-100 flex flex-col font-sans selection:bg-amber-800 selection:text-white">
      {/* Navigation Bar - Clean, non-overlapping header with Odisha aesthetic */}
      <Navbar
        onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
          onScrollToCatalog={scrollToCatalog}
        />

        {/* 3 Core Odisha Craft Specialties (Horn Art, Pattachitra, Stone Carving) */}
        <SpecialtyFocus
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToCatalog();
          }}
          onOpenQuickInquiry={handleQuickInquiry}
        />

        {/* Category Sourcing Guide - Sourcing criteria & policies across categories */}
        <CategoryPricing
          onOpenQuickInquiry={handleQuickInquiry}
        />

        {/* Handcrafted Masterpieces Showcase (Pure showcase with authentic descriptions & direct inquiry) */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectProduct={setSelectedProduct}
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        />

        {/* Wholesale Capabilities (Tailored for Domestic & Global Buyers) */}
        <WholesaleCapabilities
          onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
        />

        {/* Logistics, Safe Anti-Shock Packaging & Standards */}
        <ExportCompliance />

        {/* Artisan Heritage & Generational Guilds */}
        <ArtisanHeritage />

        {/* Direct Contact & Inquiry Form (Subhasish Choudhury, subhasish2499@gmail.com, WhatsApp, No address) */}
        <ContactSection />
      </main>

      {/* Website Footer */}
      <Footer />

      {/* Product Detail Specifications Modal (No prices, clean non-overlapping layout) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
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
