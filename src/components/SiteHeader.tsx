import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-surface/85 backdrop-blur-md border-b border-zinc-950/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display font-semibold text-xl tracking-tight">AI4Afghanistan</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1.5">
            we grow beyond boundaries
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-zinc-600 hover:text-ink transition-colors"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/partner-with-us"
            className="hidden md:inline-flex text-sm font-medium px-4 py-2 text-zinc-700 hover:text-ink"
          >
            Partner With Us
          </Link>
          <Link
            to="/donate"
            className="hidden md:inline-flex items-center gap-1.5 bg-brand text-white text-sm font-medium py-2.5 px-5 rounded-full hover:brightness-110 transition"
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
        <div className="lg:hidden border-t border-zinc-950/5 bg-surface">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-2 text-base font-medium text-zinc-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/partner-with-us"
              className="py-2 text-base font-medium text-zinc-700"
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
