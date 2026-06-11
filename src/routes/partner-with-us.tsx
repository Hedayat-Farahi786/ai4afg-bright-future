import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { toast } from "sonner";

export const Route = createFileRoute("/partner-with-us")({
  head: () => ({
    meta: [
      { title: "Partner With Us — AI4Afghanistan" },
      {
        name: "description",
        content:
          "We seek partnerships with education bodies, NGOs, foundations, and funding partners committed to advancing responsible AI education for Afghan students.",
      },
      { property: "og:title", content: "Partner With Us — AI4Afghanistan" },
    ],
    links: [{ rel: "canonical", href: "/partner-with-us" }],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Thank you for your inquiry", {
      description: "We've received your message. Our team will contact you to discuss next steps.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Partner With Us"
        title="Let's build the foundations together."
        lead="We seek partnerships with organizations engaged in education and development cooperation with a focus on Afghanistan — and with initiatives that share an interest in advancing responsible AI education and innovation."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-4">Who we partner with</h2>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Education bodies, public schools, education and capacity-building focused NGOs,
              international development agencies, foundations and funding partners, and civil
              society organizations — including those focused on girls' and women's empowerment. We
              also welcome national and international organizations advancing responsible AI
              education and innovation.
            </p>
            <h3 className="font-display font-semibold text-xl mb-3 mt-8">Partnership Impact</h3>
            <p className="text-zinc-700 leading-relaxed">
              Your partnership helps build the foundations that enable Afghanistan to adapt to AI
              gradually and responsibly. By "foundations," we mean Afghan students who build AI
              knowledge and practical skills, teachers who guide them, and support structures that
              connect learning to real opportunities.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-50 rounded-3xl p-8 lg:p-10 ring-1 ring-zinc-950/5"
          >
            <h2 className="font-display font-semibold text-2xl mb-6">Partnership Inquiry</h2>
            <div className="grid gap-5">
              <Field label="Organization Name" required>
                <input required type="text" className="form-input" />
              </Field>
              <Field label="Website (if available)">
                <input type="url" placeholder="https://" className="form-input" />
              </Field>
              <Field label="Contact Person" required>
                <input required type="text" className="form-input" />
              </Field>
              <Field label="Email Address" required>
                <input required type="email" className="form-input" />
              </Field>
              <Field
                label="How would you like to collaborate with us?"
                hint="E.g. institutional cooperation, program delivery, advisory support, technical collaboration, inclusion support, knowledge exchange, or funding support."
              >
                <textarea rows={5} className="form-input" />
              </Field>
              <button
                type="submit"
                className="justify-self-start bg-brand text-white text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </Section>
      <style>{`
        .form-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          background: white;
          border-radius: 0.625rem;
          border: 1px solid rgb(228 228 231);
          font-size: 0.9rem;
          outline: none;
        }
        .form-input:focus { border-color: var(--brand); box-shadow: 0 0 0 3px color-mix(in oklch, var(--brand) 18%, transparent); }
      `}</style>
    </SiteLayout>
  );
}

function Field({
  label,
  children,
  required,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-zinc-800">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-zinc-500">{hint}</span>}
    </label>
  );
}
