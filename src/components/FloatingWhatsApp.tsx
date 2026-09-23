import React from 'react';
import { MessageSquare } from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappDirectUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am on your Indian Handicrafts website and would like to discuss wholesale products and customized quotation.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Action Trigger */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all duration-200 hover:scale-105"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};
