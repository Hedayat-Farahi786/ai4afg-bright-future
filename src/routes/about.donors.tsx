import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/SiteLayout";

export const Route = createFileRoute("/about/donors")({
  head: () => ({
    meta: [
      { title: "Our Donors — AI4Afghanistan" },
      {
        name: "description",
        content: "Organizations and individuals supporting AI4Afghanistan's mission.",
      },
    ],
    links: [{ rel: "canonical", href: "/about/donors" }],
  }),
  component: DonorsPage,
});

const DONORS = ["Malala Fund", "Azizi Developments", "GIZ", "The World Bank"];

function DonorsPage() {
  return (
    <Section>
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Our Donors
        </span>
        <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-balance">
          Made possible by the generosity of our supporters.
        </h2>
        <p className="mt-4 text-navy/70 leading-relaxed">
          We are profoundly grateful to the organizations and individuals who fund the work of
          building AI capacity for Afghan students. Donor relationships listed below are example
          placeholders — to be confirmed as partnerships are formalized.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DONORS.map((d) => (
          <div
            key={d}
            className="aspect-[3/2] bg-white ring-1 ring-navy/10 rounded-2xl grid place-items-center text-center px-6"
          >
            <div className="font-display font-semibold text-lg text-navy/80">{d}</div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-navy/60">
        Interested in supporting our work?{" "}
        <a href="/donate" className="text-brand underline underline-offset-4">
          Make a donation
        </a>{" "}
        or{" "}
        <a href="/partner-with-us" className="text-brand underline underline-offset-4">
          partner with us
        </a>
        .
      </p>
    </Section>
  );
}
