import React from 'react';
import { 
  Sparkles, 
  Mail, 
  MessageSquare, 
  ShieldCheck,
  Globe2,
  FileText
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120d09] text-stone-300 border-t border-amber-950/70 text-xs">
      {/* Upper Footer: Brand & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          
          {/* Brand & Craft Mission */}
          <div className="lg:col-span-5 space-y-4">
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
              Connecting heritage artisan communities of Odisha with domestic and international buyers, retailers, 
              galleries, and interior decor specialists. Sourcing authentic traditional horn artwork, Pattachitra scrolls, 
              stone carvings, and bespoke Indian artworks.
            </p>

            <div className="pt-2 text-stone-300 space-y-1">
              <div>Supplier & Sourcing Lead: <strong className="text-amber-200">{EXPORTER_PROFILE.name}</strong></div>
              <div>Direct Email: <a href={`mailto:${EXPORTER_PROFILE.email}`} className="text-amber-300 hover:underline">{EXPORTER_PROFILE.email}</a></div>
              <div>WhatsApp: <a href={`https://wa.me/${EXPORTER_PROFILE.whatsappRaw}`} className="text-emerald-400 font-semibold hover:underline">{EXPORTER_PROFILE.whatsapp}</a></div>
            </div>
          </div>

          {/* Core Odisha Craft Traditions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold text-amber-100 uppercase tracking-wider">
              Odisha Traditions
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Traditional Horn Artwork (ସିଙ୍ଗ କାମ)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Pattachitra Cloth Paintings (ପଟ୍ଟଚିତ୍ର)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Konark Stone Carvings (ପଥର ଖୋଦେଇ)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Dhokra Lost-Wax Bell Metal (ଢୋକ୍ରା)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-amber-300 transition-colors">
                  Palm Leaf Engravings (ତାଳପତ୍ର)
                </a>
              </li>
            </ul>
          </div>

          {/* Sourcing & Wholesale Policies */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold text-amber-100 uppercase tracking-wider">
              Wholesale & Client Sourcing
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>• Direct artisan wholesale pricing on request for all crafts</li>
              <li>• Direct artisan guild procurement without intermediate middlemen</li>
              <li>• Available for pan-India domestic stores & global trade partners</li>
              <li>• High-resolution batch inspections prior to packaging</li>
              <li>• Secure multi-layer protective packaging for safe transit</li>
              <li>• Custom dimensions & bespoke motifs tailored to order</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Odia Heritage note */}
      <div className="border-t border-amber-950/80 bg-[#0d0906] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
          <p>© {new Date().getFullYear()} Heritage Crafts India. Mastercrafted in Odisha, India.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Official Contact:</span>
            <a href={`mailto:${EXPORTER_PROFILE.email}`} className="text-amber-300 hover:underline">
              {EXPORTER_PROFILE.email}
            </a>
            <span>•</span>
            <span className="text-emerald-400">{EXPORTER_PROFILE.whatsapp}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
