import React, { useState } from 'react';
import { MessageSquare, X, Sparkles } from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  const whatsappDirectUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am on your Indian Handicrafts website and would like to discuss wholesale products and customized quotation.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {!minimized && (
        <div className="mb-2 bg-stone-900 border border-stone-800 text-stone-100 rounded-xl p-3 shadow-2xl max-w-xs text-left animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-amber-800 flex items-center justify-center font-bold text-amber-200 text-xs">
                  SC
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-stone-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-stone-100">{EXPORTER_PROFILE.name}</h4>
                <span className="text-[10px] text-emerald-400 font-medium">Online • Indian Exporter</span>
              </div>
            </div>
            <button
              onClick={() => setMinimized(true)}
              className="text-stone-400 hover:text-white p-0.5"
              title="Minimize chat prompt"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[11px] text-stone-300 mt-2 leading-relaxed">
            Looking for authentic Horn Artwork, Pattachitra, or Stone Carvings? Reach out directly on WhatsApp:
          </p>
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 w-full py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold text-center block transition-colors"
          >
            Chat: {EXPORTER_PROFILE.whatsapp}
          </a>
        </div>
      )}

      {/* Floating Action Trigger */}
      <a
        href={whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all duration-200 hover:scale-105"
        title="Chat with Subhasish Choudhury on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
};
