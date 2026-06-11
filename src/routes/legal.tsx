import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const LEGAL = [
  { to: "/legal/imprint", label: "Imprint" },
  { to: "/legal/privacy", label: "Privacy Policy" },
  { to: "/legal/disclaimer", label: "Disclaimer" },
] as const;

export const Route = createFileRoute("/legal")({
  component: LegalLayout,
});

function LegalLayout() {
  const { pathname } = useLocation();
  return (
    <SiteLayout>
      <div className="px-6 pt-16 lg:pt-24 pb-8 border-b border-navy/10 bg-brand-soft/30">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Legal
          </span>
          <h1 className="mt-4 font-display font-semibold text-4xl lg:text-5xl leading-tight text-balance">
            Imprint, Privacy & Disclaimer
          </h1>
          <nav className="mt-8 flex flex-wrap gap-2">
            {LEGAL.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition ${
                    active
                      ? "bg-navy text-white"
                      : "bg-white ring-1 ring-navy/10 text-navy/80 hover:bg-brand-soft/50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <Outlet />
    </SiteLayout>
  );
}
