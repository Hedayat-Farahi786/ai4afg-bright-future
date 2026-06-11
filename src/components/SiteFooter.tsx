import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logoAsset from "@/assets/ai4a-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-navy text-white mt-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-6 bg-white/95 rounded-2xl p-3 inline-block">
            <img
              src={logoAsset.url}
              alt="AI4Afghanistan"
              width={400}
              height={122}
              className="h-12 w-auto object-contain"
            />
          </div>

          <p className="text-sm text-white/70 max-w-[42ch] leading-relaxed mb-6">
            AI for Afghanistan (AI4Afghanistan) e.V. is a registered non-profit building AI capacity
            for Afghan upper-secondary students through tailored learning, institutional cooperation,
            and access to global learning opportunities.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/ai4afgorg/", label: "Facebook", Icon: Facebook },
              { href: "https://www.instagram.com/ai4afgorg/", label: "Instagram", Icon: Instagram },
              { href: "https://www.linkedin.com/in/ai4afgorg/", label: "LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white hover:text-navy text-white/80 transition"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="size-4" />
              </a>
            ))}
            <a
              href="https://x.com/AI4AfgOrg"
              aria-label="X"
              className="p-2 rounded-full ring-1 ring-white/20 hover:bg-white hover:text-navy text-white/80 text-[11px] font-semibold transition"
              target="_blank"
              rel="noreferrer"
            >
              <span className="size-4 grid place-items-center">X</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-brand">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/work" className="hover:text-white">Our Work</Link></li>
            <li><Link to="/get-involved" className="hover:text-white">Get Involved</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link to="/partner-with-us" className="hover:text-white">Partner With Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-brand">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>
              <a href="mailto:info@ai4afghanistan.org" className="hover:text-white">
                info@ai4afghanistan.org
              </a>
            </li>
            <li>
              <a href="tel:+4917646294780" className="hover:text-white">+49 176 46294780</a>
            </li>
            <li className="leading-relaxed">
              Randowstraße 7<br />
              22547 Hamburg, Germany
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-white/50 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} AI for Afghanistan (AI4Afghanistan) e.V.</span>
        <div className="flex flex-wrap gap-6">
          <Link to="/legal/imprint" className="hover:text-white">Imprint</Link>
          <Link to="/legal/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/legal/disclaimer" className="hover:text-white">Disclaimer</Link>
        </div>
      </div>

    </footer>
  );
}
