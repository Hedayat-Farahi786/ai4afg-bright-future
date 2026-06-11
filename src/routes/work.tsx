import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import trainingImg from "@/assets/program-training.jpg";
import mentorshipImg from "@/assets/program-mentorship.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Programs, Approach & Pilots — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Our focus on grades 10–12, programs in training and applied AI, our phased delivery approach, and current pilot initiatives.",
      },
      { property: "og:title", content: "Our Work — AI4Afghanistan" },
      { property: "og:description", content: "Programs, approach, and pilot initiatives." },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Work"
        title="Building foundations for responsible AI learning in Afghanistan."
        lead="We build AI capacity for Afghan students, focused on upper secondary schools (grades 10–12), through tailored programs, teacher capacity-building, and global learning connections."
      />

      <Section>
        <div id="focus" className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 scroll-mt-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Focus
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              Grades 10–12, the right time to start.
            </h2>
          </div>
          <div className="text-navy/80 leading-relaxed space-y-5 max-w-[68ch]">
            <p>
              We build AI capacity for Afghan students, with a focus on upper secondary schools
              (grades 10–12). We do this in cooperation with public schools, education authorities,
              and other relevant stakeholders by delivering supplementary AI learning for students,
              supporting guided student-led applied AI projects, and running train-the-trainer
              capacity-building for teachers.
            </p>
            <p>
              Delivered outside the formal curriculum, our initiatives strengthen early readiness
              for responsible AI learning and skills development, and help prepare for potential
              future integration of AI into formal education — if and when Afghan education
              authorities adopt it. We also connect participating students and teachers to global
              mentorship and learning networks, and where feasible, to international opportunities
              such as applied-AI competitions and knowledge exchange.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white shadow-sm border-y border-navy/10">
        <div id="programs" className="scroll-mt-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Programs
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-balance">
              Two programs, one continuous learning journey.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-white ring-1 ring-navy/10 rounded-3xl p-8">
              <img
                src={trainingImg}
                alt="Notebook with Python notes next to a tablet showing code"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full aspect-video object-cover rounded-2xl mb-6 ring-1 ring-black/5"
              />
              <h3 className="font-display font-semibold text-2xl mb-3">
                Training & Capacity-Building
              </h3>
              <p className="text-navy/80 leading-relaxed">
                The foundation of our work. We help Afghan students take structured first steps into
                AI by building AI literacy and foundational skills through clear learning sequences
                and introductory hands-on exercises. In parallel, we provide train-the-trainer
                support for teachers so they can facilitate supplementary AI learning effectively,
                using step-by-step teaching guidance, structured lesson plans, and adaptable
                learning resources. The program also connects students and teachers to global
                mentorship and learning networks.
              </p>
            </article>
            <article className="bg-white ring-1 ring-navy/10 rounded-3xl p-8">
              <img
                src={mentorshipImg}
                alt="Collaborative workspace with two laptops"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full aspect-video object-cover rounded-2xl mb-6 ring-1 ring-black/5"
              />
              <h3 className="font-display font-semibold text-2xl mb-3">
                Applied AI Projects & Innovation
              </h3>
              <p className="text-navy/80 leading-relaxed">
                Early hands-on applied AI learning through guided student-led projects and
                pilot-based activities. The program enables Afghan students to develop applied AI
                skills with mentorship and review support, prioritizing locally relevant use cases
                and responsible practice. It builds gradual capacity for future innovation through
                learning-focused work on real-world challenges. Where feasible, we support student
                participation in knowledge exchange and international applied-AI competitions.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <div id="goal" className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 scroll-mt-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Long-Term Goal
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              An inclusive, sustainable pipeline for pre-university AI education.
            </h2>
          </div>
          <p className="text-navy/80 leading-relaxed max-w-[68ch]">
            To build an inclusive and sustainable pipeline for pre-university AI education in
            Afghanistan, enabling upper secondary school students to gain foundational AI knowledge,
            develop practical skills, and use AI responsibly — strengthening their readiness for
            higher education, employability, and locally relevant AI innovation.
          </p>
        </div>
      </Section>

      <Section className="bg-white shadow-sm border-y border-navy/10">
        <div id="approach" className="scroll-mt-24">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Our Delivery Approach
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl lg:text-4xl text-balance max-w-[26ch]">
            A phased, learning-first delivery approach.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                phase: "Phase 01",
                title: "Foundational",
                body: "Coordinated from Germany — partnership-building, program design, diaspora engagement, resource mobilization, content and material development with Afghan subject-matter experts.",
              },
              {
                phase: "Phase 02",
                title: "Pilot",
                body: "Carefully scoped pilots in Kabul with a selected number of upper secondary schools (grades 10–12), guided by learning and feedback to refine delivery.",
              },
              {
                phase: "Phase 03",
                title: "Scale",
                body: "Gradual expansion to additional schools and, as conditions and implementation capacity allow, to other provinces.",
              },
            ].map((p) => (
              <div key={p.phase} className="bg-white p-8 rounded-3xl ring-1 ring-navy/10">
                <div className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {p.phase}
                </div>
                <h3 className="mt-3 font-display font-semibold text-xl">{p.title}</h3>
                <p className="mt-3 text-navy/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div id="pilots" className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 scroll-mt-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Pilot Initiatives
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              Currently in the foundational phase.
            </h2>
          </div>
          <p className="text-navy/80 leading-relaxed max-w-[68ch]">
            AI4Afghanistan is currently in the foundational phase, preparing for pilot
            implementation in Afghanistan. We do this through early-stage, initiative-based work
            primarily coordinated from Germany, focusing on partnership building, program and
            content development, diaspora engagement, and resource mobilization.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
