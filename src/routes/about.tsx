import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const SUB: ReadonlyArray<{ to: "/about" | "/about/team" | "/about/donors" | "/about/partners" | "/about/transparency"; label: string; exact?: boolean }> = [
  { to: "/about", label: "Story & Mission", exact: true },
  { to: "/about/team", label: "Our Team" },
  { to: "/about/donors", label: "Donors" },
  { to: "/about/partners", label: "Partners" },
  { to: "/about/transparency", label: "Transparency" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Our founding story, mission, vision, values, team, donors, partners, and our commitment to transparency.",
      },
      { property: "og:title", content: "About — AI4Afghanistan" },
      {
        property: "og:description",
        content: "A long-term commitment to building AI capacity for Afghan students.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutLayout,
});

function AboutLayout() {
  const { pathname } = useLocation();
  return (
    <SiteLayout>
      <div className="px-6 pt-16 lg:pt-24 pb-8 border-b border-zinc-950/5 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            About AI4Afghanistan
          </span>
          <h1 className="mt-4 font-display font-semibold text-4xl lg:text-6xl leading-[1.05] text-balance max-w-[22ch]">
            We grow beyond boundaries.
          </h1>
          <nav className="mt-10 flex flex-wrap gap-2">
            {SUB.map((s) => {
              const active = s.exact ? pathname === s.to : pathname.startsWith(s.to);
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition ${
                    active
                      ? "bg-ink text-white"
                      : "bg-white ring-1 ring-zinc-950/10 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {s.label}
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
