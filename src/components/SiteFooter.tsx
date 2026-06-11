import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-zinc-50 border-t border-zinc-950/5 mt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex flex-col mb-6">
            <span className="font-display font-semibold text-xl tracking-tight">AI4Afghanistan</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1.5">
              we grow beyond boundaries
            </span>
          </div>
          <p className="text-sm text-zinc-600 max-w-[42ch] leading-relaxed mb-6">
            AI for Afghanistan (AI4Afghanistan) e.V. is a registered non-profit building AI capacity
            for Afghan upper-secondary students through tailored learning, institutional cooperation,
            and access to global learning opportunities.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/ai4afgorg/"
              aria-label="Facebook"
              className="p-2 rounded-full ring-1 ring-zinc-950/10 hover:bg-white text-zinc-700"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="https://www.instagram.com/ai4afgorg/"
              aria-label="Instagram"
              className="p-2 rounded-full ring-1 ring-zinc-950/10 hover:bg-white text-zinc-700"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ai4afgorg/"
              aria-label="LinkedIn"
              className="p-2 rounded-full ring-1 ring-zinc-950/10 hover:bg-white text-zinc-700"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="https://x.com/AI4AfgOrg"
              aria-label="X"
              className="p-2 rounded-full ring-1 ring-zinc-950/10 hover:bg-white text-zinc-700 text-[11px] font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              <span className="size-4 grid place-items-center">X</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-zinc-900">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li><Link to="/about" className="hover:text-ink">About</Link></li>
            <li><Link to="/work" className="hover:text-ink">Our Work</Link></li>
            <li><Link to="/get-involved" className="hover:text-ink">Get Involved</Link></li>
            <li><Link to="/donate" className="hover:text-ink">Donate</Link></li>
            <li><Link to="/partner-with-us" className="hover:text-ink">Partner With Us</Link></li>
            <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-zinc-900">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li>
              <a href="mailto:info@ai4afghanistan.org" className="hover:text-ink">
                info@ai4afghanistan.org
              </a>
            </li>
            <li>
              <a href="tel:+4917646294780" className="hover:text-ink">+49 176 46294780</a>
            </li>
            <li className="leading-relaxed">
              Randowstraße 7<br />
              22547 Hamburg, Germany
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-950/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-zinc-500 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} AI for Afghanistan (AI4Afghanistan) e.V.</span>
        <div className="flex flex-wrap gap-6">
          <Link to="/legal/imprint" className="hover:text-ink">Imprint</Link>
          <Link to="/legal/privacy" className="hover:text-ink">Privacy</Link>
          <Link to="/legal/disclaimer" className="hover:text-ink">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
