import { Mail, MapPin, Phone, MessageSquare, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-10 sm:py-16 px-4 sm:px-8 text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-sm">
        
        {/* Brand & Proprietors */}
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="font-serif text-2xl font-bold tracking-wider text-white">Subha Modeling Studio</h2>
            <p className="text-orange-400 text-xs italic mt-1 font-medium">"Turning Moments Into Timeless Art"</p>
          </div>
          <div className="mt-2 text-xs text-zinc-400">
            <p className="font-semibold text-zinc-300">Proprietors:</p>
            <p className="mt-0.5">N. S. Velan & S. Mala</p>
          </div>
        </div>

        {/* Addresses */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold tracking-widest text-orange-500">Our Studio Locations</h3>
          <div className="flex items-start gap-2.5 text-zinc-300 text-xs leading-relaxed">
            <MapPin className="h-4 w-4 shrink-0 text-orange-500 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Branch 1 (Opp. Lakshmi Theatre):</p>
              <p>#25, Arni Road, Arcot - 632503</p>
              <p className="text-zinc-500">Ranipet District</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 text-zinc-300 text-xs leading-relaxed">
            <MapPin className="h-4 w-4 shrink-0 text-orange-500 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Branch 2:</p>
              <p>#53, Arni Road, Arcot - 632503</p>
              <p className="text-zinc-500">Ranipet District</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold tracking-widest text-orange-500">Contact Us</h3>
          
          <div className="flex items-center gap-2 text-zinc-300 text-xs">
            <Mail className="h-4 w-4 shrink-0 text-orange-500" />
            <a href="mailto:subhastudioarcot@gmail.com" className="hover:text-white transition-colors">
              subhastudioarcot@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-2 text-zinc-300 text-xs">
            <Phone className="h-4 w-4 shrink-0 text-orange-500 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <a href="tel:7868084814" className="hover:text-white transition-colors">
                +91 7868084814
              </a>
              <a href="tel:9677511384" className="hover:text-white transition-colors">
                +91 9677511384
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-300 text-xs">
            <MessageSquare className="h-4 w-4 shrink-0 text-emerald-500" />
            <a 
              href="https://wa.me/916383775280" 
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-400 hover:underline transition-colors"
            >
              WhatsApp: +91 6383775280
            </a>
          </div>
        </div>

        {/* Social Media & Directories */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase font-bold tracking-widest text-orange-500">Connect With Us</h3>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/photossubha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-pink-500"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram (@photossubha)</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/velan.shan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-blue-500"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            <span>Facebook Page</span>
          </a>

          {/* Justdial */}
          <a
            href="https://jsdl.in/DT-99IIIAYQA6Q"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-300 hover:text-orange-400 transition-colors"
          >
            <ExternalLink className="h-4 w-4 text-orange-500" />
            <span>Justdial Listing</span>
          </a>
        </div>

      </div>

      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center gap-2 text-center">
        <div className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Subha Modeling Studio. All rights reserved.
        </div>
        <a 
          href="https://tnwebz.com" 
          title="Top Web Developers and Web Designers in Arcot, Ranipet District" 
          aria-label="Web Design in Arcot by TNWebz"
          target="_blank" 
          rel="noopener" 
          className="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          Designed by TNWebz
        </a>
      </div>
    </footer>
  );
}
