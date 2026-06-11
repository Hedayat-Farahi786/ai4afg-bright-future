import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/SiteLayout";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Our Team — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Executive Board, Scientific Advisory Board, Program Development Team, and Operations & Resource Mobilization Team.",
      },
    ],
    links: [{ rel: "canonical", href: "/about/team" }],
  }),
  component: TeamPage,
});

type Person = { name: string; role: string };

const EXECUTIVE: Person[] = [
  { name: "Ing. Ahmad Siyar Sirat", role: "Chair, Founder" },
  { name: "Farshad Azimi", role: "Deputy Chair, Founding Member" },
  { name: "Sayed Amir Ziwari", role: "Treasurer, Founding Member" },
  { name: "Zuhra Ziwari", role: "Secretary, Founding Member" },
];

const SCIENTIFIC: Person[] = [
  { name: "Masihullah Ahmadi", role: "Scientific Advisor" },
  { name: "Obaidullah Abdi", role: "Scientific Advisor" },
  { name: "Ahmad Masih Parshan", role: "Scientific Advisor" },
  { name: "Hosam Stanikzai", role: "Scientific Advisor" },
];

const PROGRAM: Person[] = [
  { name: "Hedayatullah Farahi", role: "Program Development Lead, Founding Member" },
  { name: "Mir Mazhar Kawyani", role: "Program Development Lead, Founding Member" },
  { name: "Muhammad Mustafa Halim", role: "Program Development Lead, Founding Member" },
  { name: "Waheedullah Hakim", role: "Program Development Lead, Founding Member" },
  { name: "Matiullah Ahmadi", role: "Program Development Lead, Founding Member" },
];

const OPS: Person[] = [
  { name: "Ehsanullah Farahi", role: "Head of Operations" },
  { name: "Amanullah Farahi", role: "Head of Partnerships, Grants & Resource Mobilization" },
];

function TeamGroup({
  eyebrow,
  title,
  description,
  people,
}: {
  eyebrow: string;
  title: string;
  description: string;
  people: Person[];
}) {
  return (
    <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 py-12 lg:py-16 border-t border-navy/10 first:border-t-0">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display font-semibold text-2xl lg:text-3xl text-balance">
          {title}
        </h2>
        <p className="mt-4 text-navy/70 max-w-[42ch] leading-relaxed">{description}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {people.map((p) => (
          <div
            key={p.name}
            className="bg-white ring-1 ring-navy/10 rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="size-12 shrink-0 rounded-full bg-brand-soft/60 grid place-items-center text-brand font-display font-semibold">
              {p.name
                .split(" ")
                .map((w) => w[0])
                .filter((c) => /[A-Z]/.test(c))
                .slice(0, 2)
                .join("")}
            </div>
            <div className="min-w-0">
              <div className="font-medium text-ink truncate">{p.name}</div>
              <div className="text-sm text-navy/60 leading-snug">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamPage() {
  return (
    <Section>
      <TeamGroup
        eyebrow="Executive Board"
        title="Leading and representing the organization."
        description="The Executive Board sets strategic direction, represents the organization externally and legally, upholds mission alignment, and ensures accountability, compliance, and financial transparency."
        people={EXECUTIVE}
      />
      <TeamGroup
        eyebrow="Scientific Advisory Board (Interim)"
        title="Guiding program design and responsible practice."
        description="The Interim Scientific Advisory Board advises on context-aware learning content, AI educational resources, delivery methods, teacher capacity-building, and responsible AI review for early pilots and student projects."
        people={SCIENTIFIC}
      />
      <TeamGroup
        eyebrow="Program Development Team"
        title="Designing initiatives that are feasible and context-aware."
        description="The Program Development Team defines project requirements, learning content, facilitation materials, and flexible delivery models. It works closely with the Scientific Advisory Board and the Head of Partnerships to refine concepts and prepare technical descriptions for grant submissions."
        people={PROGRAM}
      />
      <TeamGroup
        eyebrow="Operations & Resource Mobilization"
        title="Keeping AI4Afghanistan effective and sustainable."
        description="The team manages core operational functions — administration, finance, HR — and leads fundraising and grant processes, building relationships with donors and partners that strengthen organizational sustainability."
        people={OPS}
      />
    </Section>
  );
}
