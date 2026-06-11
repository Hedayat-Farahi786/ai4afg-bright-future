import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Heart, Users, Globe, BookOpen, Lightbulb, Shield } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-students.jpg";
import trainingImg from "@/assets/program-training.jpg";
import mentorshipImg from "@/assets/program-mentorship.jpg";

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
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-12 lg:gap-16">
          <div className="lg:w-7/12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              A Nonprofit Building AI Capacity for Afghan Students
            </span>
            <h1 className="mt-5 font-display font-semibold text-4xl lg:text-7xl leading-[1.02] text-balance max-w-[20ch] mb-8">
              Empowering Afghan Youth Through AI Innovation
            </h1>
            <p className="text-lg sm:text-xl text-navy/70 max-w-[52ch] text-pretty mb-10 leading-relaxed">
              We're training the next generation of Afghan innovators. Real skills, real
              opportunities, real change — built through tailored learning, institutional
              cooperation, and global connections.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 bg-brand text-white py-3.5 pl-6 pr-3 rounded-full shadow-sm hover:brightness-110 transition"
              >
                <span className="text-sm font-semibold">Join Our Mission</span>
                <span className="bg-white/20 rounded-full p-1.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-navy text-white text-sm font-semibold hover:brightness-125 transition"
              >
                Support Our Mission
              </Link>
            </div>

          </div>
          <div className="lg:w-5/12 w-full">
            <img
              src={heroImg}
              alt="Afghan high school students collaborating around a laptop in a bright classroom"
              width={1280}
              height={1600}
              className="w-full aspect-[4/5] object-cover rounded-3xl ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="px-6 py-16 lg:py-24 bg-brand-soft/40 border-y border-navy/10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Our Mission
          </span>
          <p className="mt-6 font-display text-2xl lg:text-4xl leading-tight text-balance text-ink">
            Empowering Afghan Youth through AI Learning, Skills Development, and Global Connections.
          </p>
          <p className="mt-6 text-navy/70 max-w-[60ch] mx-auto text-pretty">
            We build AI capacity for Afghan students through tailored learning programs,
            institutional cooperation, and access to global learning opportunities, enabling their
            meaningful participation in an AI-driven world.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="px-6 py-16 lg:py-20 border-b border-navy/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { n: "10–12", l: "Target school grades" },
            { n: "100%", l: "Volunteer-led" },
            { n: "e.V.", l: "Registered nonprofit · Hamburg" },
            { n: "Global", l: "Mentor network" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-2">
              <span className="font-display font-semibold text-3xl lg:text-5xl text-ink">{s.n}</span>
              <span className="text-xs uppercase tracking-[0.16em] text-navy/60 font-medium">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT / HOW / WHY */}
      <section className="px-6 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-[44ch] mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our Approach</span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-balance">
              A clear focus: what we do, how we do it, and why it matters.
            </h2>
          </div>
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
            ].map((pillar) => (
              <div key={pillar.eyebrow} className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  {pillar.eyebrow}
                </span>
                <h3 className="font-display font-semibold text-2xl text-balance">{pillar.title}</h3>
                <p className="text-navy/70 text-pretty max-w-[40ch]">{pillar.body}</p>
              </div>
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
          <div className="flex justify-between items-end mb-12 lg:mb-16 gap-8 flex-wrap">
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
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProgramCard
              img={trainingImg}
              alt="Afghan students in a Kabul classroom learning AI and Python fundamentals"
              title="Training & Capacity-Building"
              body="Structured AI literacy and foundational skills for grades 10–12, plus train-the-trainer support for teachers."
            />
            <ProgramCard
              img={mentorshipImg}
              alt="Afghan students collaborating on an AI project with data visualizations on laptops"
              title="Applied AI Projects & Innovation"
              body="Guided student-led projects on locally relevant challenges, with mentorship from global practitioners."
            />
          </div>
        </div>
      </section>

      {/* SUPPORT OUR MISSION SECTION */}
      <section className="px-6 py-24 lg:py-28 bg-white shadow-sm border-y border-navy/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Support Our Mission
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-5xl text-balance">
              Every contribution moves a student forward.
            </h2>
            <p className="mt-6 text-navy/70 text-pretty leading-relaxed">
              Your support means investing in Afghan students who build AI knowledge and practical
              skills, teachers who guide them, and support structures that connect learning to real
              opportunities.
            </p>
          </div>

          {/* Impact amounts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { amount: "€25", desc: "Provides AI learning materials for one student" },
              { amount: "€50", desc: "Funds one week of programming training" },
              { amount: "€100", desc: "Supports mentorship for one month" },
              { amount: "€250", desc: "Sponsors a complete AI literacy course" },
            ].map((item) => (
              <div key={item.amount} className="p-6 rounded-2xl bg-surface ring-1 ring-navy/10 text-center">
                <span className="font-display font-semibold text-2xl lg:text-3xl text-brand">{item.amount}</span>
                <p className="mt-2 text-sm text-navy/70">{item.desc}</p>
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
