import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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
            <p className="text-lg sm:text-xl text-zinc-600 max-w-[52ch] text-pretty mb-10 leading-relaxed">
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
      <section className="px-6 py-16 lg:py-24 bg-zinc-50 border-y border-zinc-950/5">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Our Mission
          </span>
          <p className="mt-6 font-display text-2xl lg:text-4xl leading-tight text-balance text-ink">
            Empowering Afghan Youth through AI Learning, Skills Development, and Global Connections.
          </p>
          <p className="mt-6 text-zinc-600 max-w-[60ch] mx-auto text-pretty">
            We build AI capacity for Afghan students through tailored learning programs,
            institutional cooperation, and access to global learning opportunities, enabling their
            meaningful participation in an AI-driven world.
          </p>
        </div>
      </section>

      {/* WHAT / HOW / WHY */}
      <section className="px-6 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
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
              <p className="text-zinc-600 text-pretty max-w-[40ch]">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DARK MISSION BLOCK */}
      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-ink text-white p-12 lg:p-20 rounded-3xl overflow-hidden relative">
            <h2 className="font-display font-semibold text-3xl lg:text-5xl leading-tight text-balance max-w-[26ch]">
              Building a future where every Afghan student can learn and apply AI responsibly.
            </h2>
            <p className="mt-8 text-zinc-300 max-w-[55ch] text-pretty">
              A future defined by fair access to AI learning, inclusion, and meaningful contribution
              to Afghanistan's digital economy.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-ink text-sm font-medium py-2.5 px-5 rounded-full hover:bg-zinc-100 transition"
              >
                Our founding story <ArrowRight className="size-4" />
              </Link>
              <div className="text-sm text-zinc-400">
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
              alt="Notebook with handwritten code notes next to a tablet showing Python code"
              title="Training & Capacity-Building"
              body="Structured AI literacy and foundational skills for grades 10–12, plus train-the-trainer support for teachers."
            />
            <ProgramCard
              img={mentorshipImg}
              alt="Two people collaborating on data visualizations across two laptops"
              title="Applied AI Projects & Innovation"
              body="Guided student-led projects on locally relevant challenges, with mentorship from global practitioners."
            />
          </div>
        </div>
      </section>

      {/* TRANSPARENCY STRIP */}
      <section className="border-y border-zinc-950/5 py-10 bg-zinc-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-x-10 gap-y-4 text-zinc-500">
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

      {/* GET INVOLVED CTAs */}
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
    <div className="group bg-surface ring-1 ring-zinc-950/5 p-6 rounded-3xl transition-shadow hover:shadow-xl hover:shadow-zinc-950/5">
      <img
        src={img}
        alt={alt}
        loading="lazy"
        width={1280}
        height={720}
        className="w-full aspect-video object-cover rounded-2xl mb-6 ring-1 ring-black/5"
      />
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-zinc-600 text-pretty mb-6">{body}</p>
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
          : "bg-zinc-50 text-ink ring-1 ring-zinc-950/5"
      }`}
    >
      <h3 className="font-display font-semibold text-2xl mb-3">{title}</h3>
      <p className={`mb-8 text-pretty ${highlight ? "text-white/80" : "text-zinc-600"}`}>
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
