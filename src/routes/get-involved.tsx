import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { toast } from "sonner";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Volunteer with AI4Afghanistan" },
      {
        name: "description",
        content:
          "Join AI4Afghanistan as a volunteer member. Contribute through advisory support, program development, operations, or resource mobilization.",
      },
      { property: "og:title", content: "Get Involved — AI4Afghanistan" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  const [feeChoice, setFeeChoice] = useState("12");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Thank you for your application", {
      description: "We've received your membership request. Our team will be in touch shortly.",
    });
    (e.currentTarget as HTMLFormElement).reset();
    setFeeChoice("12");
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get Involved · Volunteer"
        title="Help build the foundations for AI capacity in Afghanistan."
        lead="We invite individuals from diverse cultures, backgrounds, and experiences to join AI4Afghanistan and contribute through voluntary engagement. Our volunteer members are a core part of the community that makes our programs happen."
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-3">Why Volunteer</h2>
            <p className="text-zinc-600 leading-relaxed">
              Your time and expertise can make a real difference, helping us reduce a widening AI
              capacity gap for Afghan students and enable their meaningful participation in an
              AI-driven world.
            </p>
          </div>
          <div>
            <h2 className="font-display font-semibold text-2xl mb-3">How You Can Contribute</h2>
            <p className="text-zinc-600 leading-relaxed">
              From advisory support and program development to operations and resource
              mobilization. Whether you bring deep expertise or simply the motivation to help, we
              can find the right fit.
            </p>
          </div>
          <div>
            <h2 className="font-display font-semibold text-2xl mb-3">Membership Fee</h2>
            <p className="text-zinc-600 leading-relaxed">
              Volunteer members pay a fee set by our General Assembly. The minimum is €12 per
              month. Members who can do so are welcome to contribute more on a voluntary basis.
            </p>
          </div>
        </div>

        <div className="bg-zinc-50 rounded-3xl p-8 lg:p-12 ring-1 ring-zinc-950/5">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Membership Application
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              Apply to become a member.
            </h2>
          </div>

          <form className="grid md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
            <Field label="Title" required>
              <select className="form-input" defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Prefer not to say</option>
              </select>
            </Field>
            <Field label="Full Name" required>
              <input required type="text" className="form-input" />
            </Field>
            <Field label="Address (Street, House No., PLZ, Ort, Country)" required full>
              <input required type="text" className="form-input" />
            </Field>
            <Field label="Age Category" required full>
              <div className="flex flex-wrap gap-6 pt-2">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="radio" name="age" value="18+" defaultChecked /> 18 years or older
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="radio" name="age" value="under18" /> Under 18 years
                </label>
              </div>
              <p className="text-xs text-zinc-500 mt-2">
                If under 18, we'll request written consent from a legal guardian after review.
              </p>
            </Field>
            <Field label="Email Address" required>
              <input required type="email" className="form-input" />
            </Field>
            <Field label="Phone Number" required>
              <input required type="tel" className="form-input" />
            </Field>
            <Field
              label="Background / Area of Involvement"
              hint="Education, studies, professional experience, or other relevant involvement."
              full
            >
              <textarea rows={3} className="form-input" />
            </Field>
            <Field label="Monthly Membership Fee" required full>
              <div className="flex flex-wrap gap-6 pt-2">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="fee"
                    value="12"
                    checked={feeChoice === "12"}
                    onChange={() => setFeeChoice("12")}
                  />{" "}
                  €12 per month
                </label>
                <label className="inline-flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="fee"
                    value="other"
                    checked={feeChoice === "other"}
                    onChange={() => setFeeChoice("other")}
                  />{" "}
                  Other amount
                </label>
                {feeChoice === "other" && (
                  <input
                    type="number"
                    min={12}
                    placeholder="€ amount"
                    className="form-input max-w-[140px]"
                  />
                )}
              </div>
              <p className="text-xs text-zinc-500 mt-2">You may enter a higher amount if you wish.</p>
            </Field>
            <Field
              label="What motivates you to apply for membership?"
              hint="A short note on why you would like to join and how you hope to contribute."
              full
            >
              <textarea rows={4} className="form-input" />
            </Field>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-zinc-500 max-w-[50ch]">
                Membership fees are paid via bank transfer. Payment details will be provided after
                you submit your application.
              </p>
              <button
                type="submit"
                className="bg-brand text-white text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                Submit Application
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
  full,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  full?: boolean;
  hint?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "md:col-span-2" : ""}`}>
      <span className="text-sm font-medium text-zinc-800">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-zinc-500">{hint}</span>}
    </label>
  );
}
