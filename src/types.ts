export type ProductCategory = 'all' | 'horn-art' | 'pattachitra' | 'stone-carving' | 'silver-filigree' | 'custom-crafts';

export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';

export interface Product {
  id: string;
  title: string;
  regionalTitle?: string;
  category: 'horn-art' | 'pattachitra' | 'stone-carving' | 'silver-filigree' | 'custom-crafts';
  categoryLabel: string;
  tagline: string;
  description: string;
  material: string;
  origin: string;
  dimensionsCm: string;
  dimensionsInches: string;
  weightGrams: string;
  moq: string; // E.g. "15 pcs" or "5 pcs"
  productionLeadTime: string;
  customizationAvailable: boolean;
  featured: boolean;
  imageUrl: string;
  galleryImages: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  artisanalStory: string;
}

export interface RFQItem {
  product: Product;
  quantity: number;
  customNotes?: string;
}

export interface BuyerInquiry {
  companyName: string;
  contactPerson: string;
  country: string;
  email: string;
  whatsapp: string;
  businessType: 'Importer' | 'Wholesaler' | 'Retailer' | 'Interior Decor' | 'Gallery/Gift Shop' | 'Distributor' | 'Other';
  interests: string[];
  orderType: 'Sample Request' | 'Trial Wholesale Order' | 'Full Volume Container' | 'Custom Commission';
  message: string;
}
