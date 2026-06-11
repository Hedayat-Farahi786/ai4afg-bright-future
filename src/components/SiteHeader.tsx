import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoAsset from "@/assets/ai4a-logo.png.asset.json";

const NAV = [
  { to: "/about", label: "About" },
  { to: "/work", label: "Our Work" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/85 backdrop-blur-md border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center min-w-0 shrink" onClick={() => setOpen(false)} aria-label="AI4Afghanistan home">
          <img
            src={logoAsset.url}
            alt="AI4Afghanistan"
            width={400}
            height={122}
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-navy/70 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/partner-with-us"
            className="hidden md:inline-flex text-sm font-medium px-4 py-2 text-navy/70 hover:text-ink"
          >
            Partner With Us
          </Link>
          <Link
            to="/donate"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand text-white text-sm font-medium py-2.5 px-5 rounded-full hover:brightness-110 transition"
          >
            Support Our Mission
            <ArrowUpRight className="size-4" />
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-surface">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-2 text-base font-medium text-navy/70"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/partner-with-us"
              className="py-2 text-base font-medium text-navy/70"
              onClick={() => setOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              to="/donate"
              className="mt-3 inline-flex items-center justify-center gap-1.5 bg-brand text-white text-sm font-medium py-3 px-5 rounded-full"
              onClick={() => setOpen(false)}
            >
              Support Our Mission <ArrowUpRight className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
