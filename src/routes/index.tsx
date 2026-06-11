import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Heart, Users, Globe, BookOpen, Lightbulb, Shield } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PartnerLogo } from "@/components/PartnerLogo";
import heroImg from "@/assets/hero-students.jpg";
import trainingImg from "@/assets/program-training.jpg";
import mentorshipImg from "@/assets/program-mentorship.jpg";

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
  { name: "Hedayatullah Farahi", role: "Program Development Lead" },
  { name: "Mir Mazhar Kawyani", role: "Program Development Lead" },
  { name: "Muhammad Mustafa Halim", role: "Program Development Lead" },
  { name: "Waheedullah Hakim", role: "Program Development Lead" },
  { name: "Matiullah Ahmadi", role: "Program Development Lead" },
];
const OPS: Person[] = [
  { name: "Ehsanullah Farahi", role: "Head of Operations" },
  { name: "Amanullah Farahi", role: "Head of Partnerships & Resource Mobilization" },
];
const DONORS = ["Malala Fund", "Azizi Developments", "GIZ", "The World Bank"];
const PARTNERS = [
  "Ministry of Education",
  "AI.GERMANY",
  "Bundesministerium für Bildung und Forschung",
  "Kardan University",
  "Initiative Transparente Zivilgesellschaft",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI4Afghanistan — Empowering Afghan Youth Through AI Innovation" },
      {
        name: "description",
        content:
          "We build AI capacity for Afghan students through tailored learning programs, institutional cooperation, and access to global learning opportunities.",
      },
      { property: "og:title", content: "AI4Afghanistan — Empowering Afghan Youth Through AI" },
      {
        property: "og:description",
        content:
          "A non-profit organization building AI capacity for Afghan upper-secondary students.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Decorative brand accents (mobile-focused, harmless on desktop) */}
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-40 h-40 bg-brand/[0.06] rounded-full -mr-20 -mt-10 blur-2xl lg:hidden" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 bg-brand/[0.06] rounded-full -ml-28 -mb-28 blur-2xl lg:hidden" />

        <div className="relative py-12 sm:py-20 lg:py-28 px-6 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
            <div className="lg:w-7/12 w-full min-w-0">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="hidden sm:inline-block w-5 h-px bg-brand/40" aria-hidden />
                A Nonprofit Building AI Capacity
              </span>

              {/* Mobile headline: forced 3-line break, no orphans */}
              <h1 className="mt-4 sm:mt-5 font-display font-extrabold tracking-tight text-ink text-balance">
                <span className="block lg:hidden text-[34px] leading-[1.05]">
                  Empowering<br />
                  Afghan Youth<br />
                  Through <span className="text-brand">AI Innovation</span>
                </span>
                <span className="hidden lg:block text-5xl lg:text-7xl leading-[1.02] max-w-[20ch]">
                  Empowering Afghan Youth Through <span className="text-brand">AI Innovation</span>
                </span>
              </h1>

              <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg lg:text-xl text-navy/70 max-w-[52ch] text-pretty leading-relaxed">
                We're training the next generation of Afghan innovators. Real skills, real
                opportunities, real change — built through tailored learning, institutional
                cooperation, and global connections.
              </p>

              {/* CTAs: full-width stacked on mobile, inline pills on tablet+ */}
              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/get-involved"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold py-4 sm:py-3.5 px-6 rounded-xl sm:rounded-full shadow-lg shadow-brand/20 hover:brightness-110 transition text-[15px]"
                >
                  <span>Join Our Mission</span>
                  <ArrowUpRight className="size-[18px]" strokeWidth={2.5} />
                </Link>
                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-ink text-ink font-semibold py-[14px] sm:py-3 px-6 rounded-xl sm:rounded-full hover:bg-ink hover:text-white transition text-[15px]"
                >
                  Support Our Mission
                </Link>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="relative">
                <img
                  src={heroImg}
                  alt="Afghan high school students collaborating around a laptop in a bright classroom"
                  width={1280}
                  height={1600}
                  className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-black/5 shadow-2xl shadow-black/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="px-5 sm:px-6 py-14 sm:py-16 lg:py-24 bg-brand-soft/40 border-y border-navy/10">
        <Reveal className="max-w-5xl mx-auto text-center">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Our Mission
          </span>
          <p className="mt-5 sm:mt-6 font-display text-xl sm:text-3xl lg:text-4xl leading-snug sm:leading-tight text-balance text-ink">
            Empowering Afghan Youth through AI Learning, Skills Development, and Global Connections.
          </p>
          <p className="mt-5 sm:mt-6 text-navy/70 max-w-[60ch] mx-auto text-pretty text-sm sm:text-base">
            We build AI capacity for Afghan students through tailored learning programs,
            institutional cooperation, and access to global learning opportunities, enabling their
            meaningful participation in an AI-driven world.
          </p>
        </Reveal>
      </section>

      {/* IMPACT STATS */}
      <section className="px-6 py-16 lg:py-20 border-b border-navy/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { n: "10–12", l: "Target school grades" },
            { n: "100%", l: "Volunteer-led" },
            { n: "e.V.", l: "Registered nonprofit · Hamburg" },
            { n: "Global", l: "Mentor network" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="flex flex-col gap-2">
              <span className="font-display font-semibold text-3xl lg:text-5xl text-ink">{s.n}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-navy/60 font-medium">{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT / HOW / WHY */}
      <section className="px-6 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-[44ch] mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our Approach</span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-balance">
              A clear focus: what we do, how we do it, and why it matters.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                eyebrow: "→ What",
                title: "Build AI capacity for Afghan students.",
                body: "Foundational AI literacy, applied skills, and responsible practice — starting in grades 10–12.",
              },
              {
                eyebrow: "→ How",
                title: "Tailored programs, partnerships, global reach.",
                body: "Through tailored learning, institutional cooperation, and access to global learning opportunities.",
              },
              {
                eyebrow: "→ Why",
                title: "Meaningful participation in an AI-driven world.",
                body: "So Afghan youth contribute to, not just consume from, the technologies shaping their future.",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.eyebrow} delay={i * 100} className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {pillar.eyebrow}
                </span>
                <h3 className="font-display font-semibold text-2xl text-balance">{pillar.title}</h3>
                <p className="text-navy/70 text-pretty max-w-[40ch]">{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="px-6 py-24 lg:py-28 bg-white shadow-sm border-y border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-20">
            <aside className="lg:sticky lg:top-28 self-start">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                About Us
              </span>
              <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-balance">
                From a small reading group to a long-term commitment.
              </h2>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2 transition-all"
              >
                Read our full story <ArrowRight className="size-4" />
              </Link>
            </aside>
            <div className="max-w-[68ch] text-navy/80 leading-relaxed text-[15.5px] lg:text-base space-y-5">
              <p className="italic text-navy/70">
                AI4Afghanistan began as a small effort to understand how fast AI was advancing, and
                quickly became a long-term commitment to help close a widening AI capacity gap for
                Afghan youth.
              </p>
              <p>
                In autumn 2025, we set ourselves a goal: to read short books on AI and share key
                takeaways in our online gatherings. What began as an after-hours routine became a lens
                for seeing the world differently. The discussions moved from what AI was already changing
                to what it could mean over the next decade. Then we reached the harder follow-up: who gets
                to keep up, and who gets left behind?
              </p>
              <p>
                For us, that question immediately pointed to Afghanistan. If AI-driven change benefits
                societies with strong education and skills-building infrastructure, what happens where
                access to AI learning is limited? We came to a clear conclusion: if Afghanistan is to
                participate meaningfully in an AI-driven world, AI capacity needs to be built first.
                That means students who can learn and apply AI responsibly, teachers who can guide them,
                and support structures that connect learning to real opportunities.
              </p>
              <p>
                With lasting impact in mind, we chose upper secondary schools (grades 10–12) as our
                entry point. We structured our approach into three phases: preparation and partnership-building
                in Germany, carefully scoped pilots in Afghanistan, and gradual expansion as conditions
                and implementation capacity allow.
              </p>
            </div>
          </div>

          {/* Mission / Vision / Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="p-8 rounded-3xl bg-surface ring-1 ring-navy/10">
              <div className="w-10 h-10 rounded-xl bg-brand-soft/60 flex items-center justify-center mb-5">
                <BookOpen className="size-5 text-brand" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our Mission
              </span>
              <p className="mt-4 font-display text-xl leading-snug text-balance">
                We build AI capacity for Afghan students through tailored learning programs,
                institutional cooperation, and access to global learning opportunities.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface ring-1 ring-navy/10">
              <div className="w-10 h-10 rounded-xl bg-brand-soft/60 flex items-center justify-center mb-5">
                <Globe className="size-5 text-brand" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our Vision
              </span>
              <p className="mt-4 font-display text-xl leading-snug text-balance">
                A future where every Afghan student can learn and apply AI responsibly — defined by
                fair access to AI learning, inclusion, and meaningful contribution to Afghanistan's
                digital economy.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-surface ring-1 ring-navy/10">
              <div className="w-10 h-10 rounded-xl bg-brand-soft/60 flex items-center justify-center mb-5">
                <Shield className="size-5 text-brand" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our Values
              </span>
              <ul className="mt-4 space-y-4 text-navy/80">
                <li>
                  <strong className="text-ink">Responsible AI</strong> — We promote safe, transparent,
                  and inclusive use of AI in Afghanistan.
                </li>
                <li>
                  <strong className="text-ink">Inclusion</strong> — We prioritize girls and women,
                  rural learners, and underserved communities.
                </li>
                <li>
                  <strong className="text-ink">Innovation</strong> — We pursue student-led AI projects
                  that address real challenges in Afghanistan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DARK MISSION BLOCK */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy text-white p-12 lg:p-20 rounded-3xl overflow-hidden relative">
            <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-tight text-balance max-w-[26ch]">
              Building a future where every Afghan student can learn and apply AI responsibly.
            </h2>
            <p className="mt-8 text-white/75 max-w-[55ch] text-pretty">
              A future defined by fair access to AI learning, inclusion, and meaningful contribution
              to Afghanistan's digital economy.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-ink text-sm font-medium py-2.5 px-5 rounded-full hover:bg-brand-soft/50 transition"
              >
                Our founding story <ArrowRight className="size-4" />
              </Link>
              <div className="text-sm text-white/60">
                Registered non-profit e.V. — Hamburg, Germany
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="px-6 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal className="flex justify-between items-end mb-12 lg:mb-16 gap-8 flex-wrap">
            <div className="max-w-[44ch]">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our Programs
              </span>
              <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-balance">
                Training, mentorship, and applied AI projects.
              </h2>
            </div>
            <Link
              to="/work"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2 transition-all"
            >
              View all programs <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={60}>
              <ProgramCard
                img={trainingImg}
                alt="Afghan students in a Kabul classroom learning AI and Python fundamentals"
                title="Training & Capacity-Building"
                body="Structured AI literacy and foundational skills for grades 10–12, plus train-the-trainer support for teachers."
              />
            </Reveal>
            <Reveal delay={160}>
              <ProgramCard
                img={mentorshipImg}
                alt="Afghan students collaborating on an AI project with data visualizations on laptops"
                title="Applied AI Projects & Innovation"
                body="Guided student-led projects on locally relevant challenges, with mentorship from global practitioners."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="px-6 py-24 lg:py-28 bg-white shadow-sm border-y border-navy/10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-[50ch] mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Team
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-balance">
              People behind AI4Afghanistan — volunteers, advisors, and founding members.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <TeamGroup
              eyebrow="Executive Board"
              title="Leading and representing the organization."
              description="Sets strategic direction, represents the organization externally and legally, and ensures accountability, compliance, and financial transparency."
              people={EXECUTIVE}
            />
          </Reveal>
          <Reveal delay={80}>
            <TeamGroup
              eyebrow="Scientific Advisory Board (Interim)"
              title="Guiding program design and responsible practice."
              description="Advises on context-aware learning content, delivery methods, teacher capacity-building, and responsible AI review for early pilots and student projects."
              people={SCIENTIFIC}
            />
          </Reveal>
          <Reveal delay={80}>
            <TeamGroup
              eyebrow="Program Development Team"
              title="Designing initiatives that are feasible and context-aware."
              description="Defines project requirements, learning content, facilitation materials, and flexible delivery models in close cooperation with the Scientific Advisory Board."
              people={PROGRAM}
            />
          </Reveal>
          <Reveal delay={80}>
            <TeamGroup
              eyebrow="Operations & Resource Mobilization"
              title="Keeping AI4Afghanistan effective and sustainable."
              description="Manages administration, finance, and HR, and leads fundraising and grant processes that strengthen long-term sustainability."
              people={OPS}
            />
          </Reveal>
          <div className="mt-12 text-center">
            <Link to="/about/team" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2 transition-all">
              View the full team <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DONORS & PARTNERS */}
      <section className="px-6 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our Donors
              </span>
              <h2 className="mt-4 font-display font-semibold text-3xl text-balance">
                Made possible by the generosity of our supporters.
              </h2>
              <p className="mt-4 text-navy/70 leading-relaxed max-w-[44ch]">
                Profound gratitude to organizations and individuals funding AI capacity for Afghan
                students. Relationships listed are placeholders to be confirmed.
              </p>
            </Reveal>
            <Reveal delay={80} className="mt-8 grid sm:grid-cols-2 gap-4">
              {DONORS.map((d) => (
                <PartnerLogo key={d} name={d} />
              ))}
            </Reveal>
          </div>
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Institutional Partners
              </span>
              <h2 className="mt-4 font-display font-semibold text-3xl text-balance">
                Building together with education and development partners.
              </h2>
              <p className="mt-4 text-navy/70 leading-relaxed max-w-[44ch]">
                Education bodies, public schools, NGOs, international development agencies, and
                civil society organizations. Listed partnerships are placeholders to be confirmed.
              </p>
            </Reveal>
            <Reveal delay={80} className="mt-8 grid sm:grid-cols-2 gap-4">
              {PARTNERS.map((p) => (
                <PartnerLogo key={p} name={p} />
              ))}
            </Reveal>
          </div>
        </div>
      </section>



      {/* SUPPORT OUR MISSION SECTION */}
      <section className="px-5 sm:px-6 py-16 sm:py-24 lg:py-28 bg-white shadow-sm border-y border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Support Our Mission
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl sm:text-3xl lg:text-5xl leading-tight text-balance">
              Every contribution moves a student forward.
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-navy/70 text-pretty leading-relaxed">
              Your support means investing in Afghan students who build AI knowledge and practical
              skills, teachers who guide them, and support structures that connect learning to real
              opportunities.
            </p>
          </div>

          {/* Impact amounts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {[
              { amount: "€25", desc: "Provides AI learning materials for one student" },
              { amount: "€50", desc: "Funds one week of programming training" },
              { amount: "€100", desc: "Supports mentorship for one month" },
              { amount: "€250", desc: "Sponsors a complete AI literacy course" },
            ].map((item) => (
              <div key={item.amount} className="p-4 sm:p-6 rounded-2xl bg-surface ring-1 ring-navy/10 text-center">
                <span className="font-display font-semibold text-xl sm:text-2xl lg:text-3xl text-brand">{item.amount}</span>
                <p className="mt-2 text-xs sm:text-sm text-navy/70 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Three ways to support */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-surface ring-1 ring-navy/10 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-brand-soft/60 flex items-center justify-center mb-5">
                <Heart className="size-5 text-brand" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Make a Donation</h3>
              <p className="text-navy/70 text-pretty mb-6 flex-1">
                Fund learning materials, teacher training, and mentorship for Afghan students. One-time
                or monthly — every euro counts.
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2 transition-all"
              >
                Donate now <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="p-8 rounded-3xl bg-brand text-white flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Users className="size-5 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Become a Volunteer</h3>
              <p className="text-white/80 text-pretty mb-6 flex-1">
                Join as a member and contribute through advisory support, program development,
                operations, or resource mobilization.
              </p>
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:gap-2 transition-all"
              >
                Apply to volunteer <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="p-8 rounded-3xl bg-surface ring-1 ring-navy/10 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-brand-soft/60 flex items-center justify-center mb-5">
                <Lightbulb className="size-5 text-brand" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">Partner With Us</h3>
              <p className="text-navy/70 text-pretty mb-6 flex-1">
                Education bodies, NGOs, and funding partners — let's build the foundations together
                for responsible AI capacity in Afghanistan.
              </p>
              <Link
                to="/partner-with-us"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2 transition-all"
              >
                Start a conversation <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY STRIP */}
      <section className="border-y border-navy/10 py-10 bg-brand-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-x-10 gap-y-4 text-navy/60">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase">
              Registered e.V. — Hamburg
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase">
              VR 26146 · Amtsgericht Hamburg
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase">
              Gemeinnützig anerkannt
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase">
              Initiative Transparente Zivilgesellschaft
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CTA CARDS */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <CtaCard
            title="Volunteer"
            body="Join as a member and contribute to programs, advisory, or operations."
            to="/get-involved"
            cta="Become a volunteer"
          />
          <CtaCard
            title="Donate"
            body="Fund learning materials, teacher training, and mentorship for Afghan students."
            to="/donate"
            cta="Make a donation"
            highlight
          />
          <CtaCard
            title="Partner With Us"
            body="Education bodies, NGOs, and funding partners — let's build the foundations together."
            to="/partner-with-us"
            cta="Start a conversation"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function ProgramCard({
  img,
  alt,
  title,
  body,
}: {
  img: string;
  alt: string;
  title: string;
  body: string;
}) {
  return (
    <div className="group bg-surface ring-1 ring-navy/10 p-6 rounded-3xl transition-shadow hover:shadow-xl hover:shadow-zinc-950/5">
      <img
        src={img}
        alt={alt}
        loading="lazy"
        width={1280}
        height={720}
        className="w-full aspect-video object-cover rounded-2xl mb-6 ring-1 ring-black/5"
      />
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-navy/70 text-pretty mb-6">{body}</p>
      <Link
        to="/work"
        className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
      >
        Details <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

function CtaCard({
  title,
  body,
  to,
  cta,
  highlight = false,
}: {
  title: string;
  body: string;
  to: "/get-involved" | "/donate" | "/partner-with-us";
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-8 rounded-3xl flex flex-col ${
        highlight
          ? "bg-brand text-white"
          : "bg-white text-ink ring-1 ring-navy/10"
      }`}
    >
      <h3 className="font-display font-semibold text-2xl mb-3">{title}</h3>
      <p className={`mb-8 text-pretty ${highlight ? "text-white/80" : "text-navy/70"}`}>
        {body}
      </p>
      <Link
        to={to}
        className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${
          highlight ? "text-white" : "text-brand"
        } hover:gap-2 transition-all`}
      >
        {cta} <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}

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
    <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 py-10 lg:py-14 border-t border-navy/10 first:border-t-0">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </span>
        <h3 className="mt-3 font-display font-semibold text-xl lg:text-2xl text-balance">
          {title}
        </h3>
        <p className="mt-3 text-navy/70 max-w-[42ch] leading-relaxed text-sm">{description}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {people.map((p) => (
          <div
            key={p.name}
            className="bg-surface ring-1 ring-navy/10 rounded-2xl p-4 flex items-center gap-3 transition hover:ring-brand/40 hover:-translate-y-0.5"
          >
            <div className="size-10 shrink-0 rounded-full bg-brand-soft/60 grid place-items-center text-brand font-display font-semibold text-sm">
              {p.name
                .split(" ")
                .map((w) => w[0])
                .filter((c) => /[A-Z]/.test(c))
                .slice(0, 2)
                .join("")}
            </div>
            <div className="min-w-0">
              <div className="font-medium text-ink text-sm truncate">{p.name}</div>
              <div className="text-xs text-navy/60 leading-snug">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

