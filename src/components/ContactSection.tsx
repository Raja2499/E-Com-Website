import React, { useState } from 'react';
import { 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Globe2,
  UserCheck
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
    orderType: 'Individual / Single Piece Order',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct structured WhatsApp message
    const msg = `*NEW HANDICRAFTS ORDER / INQUIRY - HERITAGE CRAFTS INDIA*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Order Type:* ${formData.orderType}\n` +
      `*Company / Store:* ${formData.company || 'Private Buyer / Collector'}\n` +
      `*Location / Destination:* ${formData.location || 'India'}\n` +
      `*Email:* ${formData.email}\n` +
      `*WhatsApp / Phone:* ${formData.whatsapp || 'Provided in chat'}\n` +
      `*Craft Category:* ${formData.productInterest}\n` +
      `*Requirements / Message:* ${formData.message || 'Please provide pricing and ordering details.'}\n\n` +
      `Attn: Subhasish Choudhury`;

    const whatsappUrl = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const directWhatsAppLink = `https://wa.me/${EXPORTER_PROFILE.whatsappRaw}?text=${encodeURIComponent(
    'Hello Subhasish, I am contacting you regarding Odisha handicrafts and would like to discuss products and pricing.'
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#faf7f2] text-stone-900 border-b border-stone-200 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Direct Artisan Sourcing & Inquiries
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-950">
            Order Individual Pieces or Request Wholesale Proposals
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you want a single sacred Pattachitra painting for your home or a bulk container consignment for retail distribution, we provide itemized quotations and prompt assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Column: Direct Exporter Coordinates & Verification */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 space-y-5 shadow-xs">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block">
                  Direct Exporter Contact
                </span>
                <h3 className="font-display text-2xl font-bold text-stone-950">
                  Subhasish Choudhury
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  Supplier & Exporter • Heritage Crafts India
                </p>
              </div>

              <div className="space-y-3.5 pt-2 text-xs">
                {/* WhatsApp Direct Action */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-800 uppercase font-bold block">
                      Direct WhatsApp Assistance
                    </span>
                    <span className="font-mono text-stone-900 font-bold text-sm block mt-0.5">
                      {EXPORTER_PROFILE.whatsapp}
                    </span>
                  </div>
                  <a
                    href={directWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-transform hover:scale-105"
                  >
                    Chat Now
                  </a>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-bold block">
                      Official Email
                    </span>
                    <a 
                      href={`mailto:${EXPORTER_PROFILE.email}`}
                      className="font-mono text-stone-800 hover:text-amber-800 text-xs font-semibold block mt-0.5"
                    >
                      {EXPORTER_PROFILE.email}
                    </a>
                  </div>
                  <Mail className="w-4 h-4 text-stone-400" />
                </div>

                {/* Response SLA */}
                <div className="flex items-center gap-2 text-stone-600 pt-1">
                  <Clock className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                  <span>Prompt response within 2–4 hours (IST working hours)</span>
                </div>
              </div>
            </div>

            {/* Statutory Badges Card */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3 shadow-xs">
              <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wide block">
                Statutory Trade Verification
              </span>
              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">DGFT Import Export Code (IEC):</span>
                  <span className="font-mono font-bold text-stone-900">0324089152</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">MSME Udyam Registration:</span>
                  <span className="font-mono font-bold text-stone-900">OD-19-0048219</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">GST Registration:</span>
                  <span className="font-mono font-bold text-stone-900">21AAHCH9821P1ZT</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-stone-500">Artisan Guild Base:</span>
                  <span className="font-medium text-stone-900">Odisha, India</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              <h3 className="font-display text-xl font-bold text-stone-950 mb-1">
                Direct Order & Inquiry Form
              </h3>
              <p className="text-xs text-stone-500 mb-6 font-normal">
                Submit this form to instantly open WhatsApp with your pre-formatted order details.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Inquiry Opened in WhatsApp!</strong>
                    <span>If the WhatsApp window didn't open automatically, please click the green WhatsApp button on the left to connect directly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Order Type Radio / Selector */}
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                    Are you ordering for personal use or wholesale? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: 'Individual / Single Piece Order' })}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        formData.orderType === 'Individual / Single Piece Order'
                          ? 'bg-amber-800 text-white border-amber-800 shadow-2xs'
                          : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <span>Individual / 1 Piece Order</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: 'Wholesale Sourcing & Quotation' })}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        formData.orderType === 'Wholesale Sourcing & Quotation'
                          ? 'bg-amber-800 text-white border-amber-800 shadow-2xs'
                          : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <span>Wholesale / Bulk Consignment</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel / Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Heritage Gallery / Boutique / Personal"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      City, State & Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Mumbai, India / London, UK"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Primary Craft Discipline
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs"
                  >
                    <option value="Traditional Horn Artwork (ସିଙ୍ଗ କାମ)">Horn Artwork (Paralakhemundi Shringa Silpa)</option>
                    <option value="Pattachitra Cloth Scrolls (ପଟ୍ଟଚିତ୍ର)">Pattachitra Cloth Scrolls (Raghurajpur)</option>
                    <option value="Palm Leaf Tala Pothichitra (ତାଳ ପୋଥିଚିତ୍ର)">Palm Leaf (Tala Pothichitra Engravings)</option>
                    <option value="Stone Carvings & Jali (ପଥର ଖୋଦେଇ)">Stone Carvings & Jali Lanterns (Konark Tradition)</option>
                    <option value="Multiple Craft Categories">Multiple Categories / Comprehensive Sourcing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Order Details, Quantity or Customization Request
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify individual piece or target quantity, dimensions, or specific questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs focus:outline-hidden focus:border-amber-700 focus:bg-white transition-all shadow-2xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-stone-950 hover:bg-stone-800 text-amber-50 font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  🔒 Direct correspondence with Subhasish Choudhury. Zero spam guarantee.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
