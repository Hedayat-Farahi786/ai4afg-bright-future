import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Career Opportunities — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Career opportunities at AI4Afghanistan. Open roles will be posted here as our work expands.",
      },
      { property: "og:title", content: "Careers — AI4Afghanistan" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get Involved · Careers"
        title="Career opportunities at AI4Afghanistan."
        lead="Open roles will be posted here as our work expands. In the meantime, we welcome volunteer members and partnership inquiries."
      />

      <Section>
        <div className="max-w-3xl mx-auto bg-white ring-1 ring-navy/10 rounded-3xl p-10 sm:p-14 text-center shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            No open roles right now
          </span>
          <h2 className="mt-4 font-display font-semibold text-3xl text-balance">
            We're not hiring yet — but we're growing.
          </h2>
          <p className="mt-4 text-navy/70 leading-relaxed">
            AI4Afghanistan is in its foundational phase. As our pilots in Afghanistan move forward,
            we'll publish open roles on this page. Until then, the best way to contribute is to
            volunteer or explore a partnership with us.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
            >
              Become a volunteer member <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/partner-with-us"
              className="inline-flex items-center justify-center gap-2 bg-white ring-1 ring-navy/15 text-ink text-sm font-semibold px-6 py-3 rounded-full hover:bg-surface transition"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
