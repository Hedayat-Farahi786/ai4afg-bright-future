import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/SiteLayout";
import { PartnerLogo } from "@/components/PartnerLogo";

export const Route = createFileRoute("/about/partners")({
  head: () => ({
    meta: [
      { title: "Our Institutional Partners — AI4Afghanistan" },
      {
        name: "description",
        content: "Education bodies, ministries, universities, and initiatives we work with.",
      },
    ],
    links: [{ rel: "canonical", href: "/about/partners" }],
  }),
  component: PartnersPage,
});

const PARTNERS = [
  "Ministry of Education",
  "AI.GERMANY",
  "Bundesministerium für Bildung und Forschung",
  "Kardan University",
  "Initiative Transparente Zivilgesellschaft",
];

function PartnersPage() {
  return (
    <Section>
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Our Institutional Partners
        </span>
        <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-balance">
          Building together with education and development partners.
        </h2>
        <p className="mt-4 text-navy/70 leading-relaxed">
          We work with education bodies, public schools, NGOs, international development agencies,
          foundations, and civil society organizations. Partnerships listed below are placeholders —
          to be confirmed as cooperation is formalized.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PARTNERS.map((p) => (
          <PartnerLogo key={p} name={p} />
        ))}
      </div>
    </Section>
  );
}
