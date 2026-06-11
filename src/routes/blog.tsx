import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Career Opportunities — AI4Afghanistan" },
      {
        name: "description",
        content: "Updates from AI4Afghanistan and current career opportunities.",
      },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Stories, updates, and opportunities."
        lead="We share news from our programs, learnings from the field, and current career opportunities here."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-50 rounded-3xl p-10 ring-1 ring-zinc-950/5 text-center">
            <div className="mx-auto size-12 rounded-full bg-white ring-1 ring-zinc-950/10 grid place-items-center mb-5">
              <Briefcase className="size-5 text-brand" />
            </div>
            <h2 className="font-display font-semibold text-2xl mb-2">Stories coming soon</h2>
            <p className="text-zinc-600 max-w-[42ch] mx-auto">
              We're preparing our first set of stories from the foundational phase. Subscribe below
              to be notified when new posts go live.
            </p>
          </div>
          <div className="bg-zinc-50 rounded-3xl p-10 ring-1 ring-zinc-950/5 text-center">
            <div className="mx-auto size-12 rounded-full bg-white ring-1 ring-zinc-950/10 grid place-items-center mb-5">
              <Briefcase className="size-5 text-brand" />
            </div>
            <h2 className="font-display font-semibold text-2xl mb-2">Career Opportunities</h2>
            <p className="text-zinc-600 max-w-[42ch] mx-auto">
              No open roles right now. Open calls will be posted here as we expand our team.
            </p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
