import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { EXPORTER_PROFILE } from '../data/products';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    location: '',
    email: '',
    whatsapp: '',
    productInterest: 'Traditional Horn Artwork (ସିଙ୍ଗ କାମ)',
    orderType: 'Wholesale Sourcing & Quotation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct structured WhatsApp message with correct name spelling
    const msg = `*NEW HANDICRAFTS INQUIRY - HERITAGE CRAFTS INDIA*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company / Store:* ${formData.company || 'Individual / Retail Buyer'}\n` +
      `*Location / Destination:* ${formData.location || 'Domestic India'}\n` +
      `*Email:* ${formData.email}\n` +
      `*WhatsApp / Phone:* ${formData.whatsapp || 'Provided in chat'}\n` +
      `*Craft Category Interest:* ${formData.productInterest}\n` +
      `*Inquiry Purpose:* ${formData.orderType}\n` +
      `*Requirements / Message:* ${formData.message || 'Please provide quotation and catalogue details.'}\n\n` +
      `Attn: Subhasish Choudhury`;

    const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const directWhatsAppLink = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am contacting you regarding Indian handicrafts sourcing and would like to discuss wholesale products and quotation details.'
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#16100c] text-stone-100 border-b border-amber-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (NO name in heading) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Direct Artisan Guild Sourcing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-amber-50">
            Wholesale Inquiries & Custom Orders
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Whether you are a retailer, wholesaler, interior decorator, gallery owner, or corporate buyer in India or internationally, 
            connect directly via WhatsApp or official email for prompt responses and customized quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Exporter Details (NO ADDRESS, Official Email: subhasish2499@gmail.com) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Primary Profile Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#211812] border border-amber-900/40 space-y-5 shadow-xl">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  Supplier & Exporter
                </span>
                <h3 className="font-display text-2xl font-bold text-amber-100 mt-0.5">
                  {EXPORTER_PROFILE.name}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Heritage Crafts India • Authentic Odisha Handicrafts
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3.5 text-xs text-stone-200">
                {/* WhatsApp */}
                <a
                  href={directWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/80 hover:border-emerald-500 transition-all flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                      <MessageSquare className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-emerald-400 block tracking-wider">
                        Direct WhatsApp (Fastest Response)
                      </span>
                      <span className="text-stone-100 font-bold text-sm">
                        {EXPORTER_PROFILE.whatsapp}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold group-hover:underline">
                    Chat Now →
                  </span>
                </a>

                {/* Official Email */}
                <a
                  href={`mailto:${EXPORTER_PROFILE.email}?subject=Handicrafts%20Wholesale%20Inquiry`}
                  className="p-4 rounded-xl bg-[#19110b] border border-amber-900/40 hover:border-amber-600/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400/90 block tracking-wider">
                        Official Business Email
                      </span>
                      <span className="text-amber-100 font-semibold text-xs sm:text-sm">
                        {EXPORTER_PROFILE.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-amber-400 font-bold group-hover:underline">
                    Write Email →
                  </span>
                </a>
              </div>

              {/* Working Hours & Availability */}
              <div className="pt-3 border-t border-amber-950/60 flex items-center justify-between text-[11px] text-stone-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mon – Sat: 08:30 – 21:30 IST</span>
                </div>
                <span className="text-emerald-400 font-semibold">Fast WhatsApp Replies</span>
              </div>
            </div>

            {/* Sourcing Scope Note */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/30 to-[#1e150f] border border-amber-900/40 text-xs space-y-2 text-stone-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                <Globe2 className="w-4 h-4 text-amber-400" />
                <span>Domestic & Global Sourcing Terms:</span>
              </div>
              <ul className="space-y-1.5 text-stone-300 text-[11px]">
                <li>• Flexible rates tailored for domestic shops in India and international consignments</li>
                <li>• Air courier & ocean cargo freight options with phytosanitary & origin certificates</li>
                <li>• Sample pieces available for inspection before placing full batches</li>
                <li>• Custom design commissions based on client photos, blueprints, or dimensions</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#211812] border border-amber-900/40 shadow-xl text-left">
              <div className="mb-6 space-y-1">
                <h3 className="font-display text-xl font-bold text-amber-100">
                  Send a Wholesale Inquiry
                </h3>
                <p className="text-xs text-stone-400">
                  Fill in your details below to directly prepare an inquiry for Subhasish Choudhury on WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-stone-100">Inquiry Prepared!</h4>
                  <p className="text-xs text-stone-300 max-w-md mx-auto">
                    Your details have been routed to Subhasish Choudhury on WhatsApp ({EXPORTER_PROFILE.whatsapp}). 
                    You can also reach us anytime at <strong className="text-amber-300">{EXPORTER_PROFILE.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-stone-800 text-xs text-stone-300 hover:text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel / Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500 placeholder:text-stone-600"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 font-semibold mb-1">Company / Store Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Heritage Decor / Retail Boutique"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500 placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 font-semibold mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500 placeholder:text-stone-600"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 font-semibold mb-1">City & Country / State *</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Bhubaneswar, India / Berlin, Germany"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500 placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 font-semibold mb-1">Craft Category of Interest</label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value="Paralakhemundi Shringa Silpa (ପାରଳାଖେମୁଣ୍ଡି ଶୃଙ୍ଗ ଶିଳ୍ପ)">Paralakhemundi Shringa Silpa (Horn Art - Elephants, Cranes, Combs)</option>
                        <option value="Pattachitra Cloth Paintings (ପଟ୍ଟଚିତ୍ର)">Pattachitra Cloth Paintings (Tree of Life, Krishna Leela)</option>
                        <option value="Handmade Stone Carvings (ପଥର ଖୋଦେଇ)">Stone Carvings & Konark Sun Wheel</option>
                        <option value="Custom & Metal Crafts (ଢୋକ୍ରା)">Dhokra Lost-Wax Bell Metal & Custom Crafts</option>
                        <option value="Multiple Craft Categories">Multiple Categories / Comprehensive Consignment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-300 font-semibold mb-1">Inquiry Scope</label>
                      <select
                        value={formData.orderType}
                        onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value="Wholesale Quotation Request">Wholesale Quotation (Domestic / Export)</option>
                        <option value="Sample Order Request">Sample Inspection Request</option>
                        <option value="Trial Wholesale Batch">Trial Wholesale Batch (10–25 pcs)</option>
                        <option value="Custom Design Commission">Custom Design from Sketch / Photo</option>
                        <option value="Bulk Volume / Container Consignment">Bulk Volume Commercial Consignment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-300 font-semibold mb-1">
                      Message / Quantities / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required quantities, motifs, preferred sizes, or delivery destination (Domestic India or International)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#17110c] border border-amber-950 text-stone-200 focus:outline-none focus:border-amber-500 placeholder:text-stone-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Submit Inquiry to WhatsApp (+91 9861097633)</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
