import { createFileRoute } from "@tanstack/react-router";
import { Section, Prose } from "@/components/SiteLayout";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "Our Story, Mission & Values — AI4Afghanistan" },
      {
        name: "description",
        content:
          "How AI4Afghanistan began, our mission to build AI capacity for Afghan students, and the values that guide our work.",
      },
    ],
  }),
  component: AboutIndex,
});

function AboutIndex() {
  return (
    <>
      <Section>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <aside className="lg:sticky lg:top-28 self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Founding Story
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              From a small reading group to a long-term commitment.
            </h2>
          </aside>
          <Prose>
            <p className="italic text-zinc-600">
              AI4Afghanistan began as a small effort to understand how fast AI was advancing, and
              quickly became a long-term commitment to help close a widening AI capacity gap for
              Afghan youth.
            </p>
            <p>
              In autumn 2025, we set ourselves a goal: to read short books on AI and share key
              takeaways in our online gatherings. The aim was to build understanding and early
              capability so we could keep pace with rapid advances in AI. What began as an
              after-hours routine became a lens for seeing the world differently. We kept connecting
              the chapters to what we were seeing around us: chatbots becoming commonplace, AI tools
              entering everyday workflows, and automation accelerating across industries. The
              discussions moved from what AI was already changing to what it could mean over the
              next decade. Then we reached the harder follow-up: who gets to keep up, and who gets
              left behind?
            </p>
            <p>
              For us, that question immediately pointed to Afghanistan. If AI-driven change benefits
              societies with strong education and skills-building infrastructure, what happens where
              access to AI learning, skills development, and global connections is limited? That led
              us to a question we could not ignore: how would Afghanistan participate meaningfully
              in an AI-driven world?
            </p>
            <p>
              To make sense of what that would really mean for Afghanistan, we had to separate "the
              arrival of AI tools and technologies" from "meaningful participation." AI tools and
              technologies can be imported into the country, but meaningful participation doesn't
              come the same way; it needs to be enabled. In concrete terms, young Afghans —
              especially students — can build AI knowledge, develop practical skills, and connect to
              global learning opportunities.
            </p>
            <p>
              We came to a clear conclusion: if Afghanistan is to participate meaningfully in an
              AI-driven world, AI capacity needs to be built first. That means students who can
              learn and apply AI responsibly, teachers who can guide them, and support structures
              that connect learning to real opportunities. Without these foundations in place,
              Afghanistan risks becoming an AI consumer rather than a contributor.
            </p>
            <p>
              The more we clarified what meaningful participation would mean, the clearer it became
              that we needed to get organized. That was when AI4Afghanistan began to take shape —
              first as a name, then as a shared mission. We moved into early planning, drafting our
              strategic framework and delivery approach, knowing we would keep refining our work
              through learning and practice.
            </p>
            <p>
              With lasting impact in mind, we chose upper secondary schools (grades 10–12) as our
              entry point. Starting in these grades helps Afghan students build core AI literacy,
              practical skills, and readiness before they enter higher education and make key study
              and career decisions. To deliver responsibly, we structured our approach into three
              phases: preparation and partnership-building in Germany, carefully scoped pilots in
              Afghanistan, and gradual expansion as conditions and implementation capacity allow.
            </p>
            <p>
              We knew that in fragile and constrained environments, lasting change comes from
              building carefully, not moving fast. Our founding story became less about a moment and
              more about a commitment: to grow beyond boundaries, step by step, with responsibility.
            </p>
          </Prose>
        </div>
      </Section>

      <Section className="bg-zinc-50 border-y border-zinc-950/5">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Mission
            </span>
            <p className="mt-4 font-display text-xl leading-snug text-balance">
              We build AI capacity for Afghan students through tailored learning programs,
              institutional cooperation, and access to global learning opportunities — enabling
              their meaningful participation in an AI-driven world.
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Vision
            </span>
            <p className="mt-4 font-display text-xl leading-snug text-balance">
              A future where every Afghan student can learn and apply AI responsibly — defined by
              fair access to AI learning, inclusion, and meaningful contribution to Afghanistan's
              digital economy.
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Values
            </span>
            <ul className="mt-4 space-y-4 text-zinc-700">
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
      </Section>
    </>
  );
}
