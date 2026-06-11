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

        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 ring-1 ring-navy/10 shadow-sm">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Membership Application
              </span>
              <h2 className="mt-3 font-display font-semibold text-2xl sm:text-3xl text-balance text-ink">
                Apply to become a member.
              </h2>
            </div>
            <span className="text-xs uppercase tracking-widest text-navy/60 font-medium">
              Step 1 of 1
            </span>
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
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                <RadioCard name="age" value="18+" label="18 years or older" defaultChecked />
                <RadioCard name="age" value="under18" label="Under 18 years" />
              </div>
              <p className="text-xs text-navy/60 mt-2">
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
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                <RadioCard
                  name="fee"
                  value="12"
                  label="€12 per month"
                  sublabel="Suggested minimum"
                  checked={feeChoice === "12"}
                  onChange={() => setFeeChoice("12")}
                />
                <RadioCard
                  name="fee"
                  value="other"
                  label="Other amount"
                  sublabel="Contribute more if you can"
                  checked={feeChoice === "other"}
                  onChange={() => setFeeChoice("other")}
                />
              </div>
              {feeChoice === "other" && (
                <div className="mt-3 flex items-center gap-2 max-w-[220px]">
                  <span className="text-sm font-medium text-navy/70">€</span>
                  <input
                    type="number"
                    min={12}
                    placeholder="Amount"
                    className="form-input"
                  />
                </div>
              )}
              <p className="text-xs text-navy/60 mt-2">You may enter a higher amount if you wish.</p>
            </Field>
            <Field
              label="What motivates you to apply for membership?"
              hint="A short note on why you would like to join and how you hope to contribute."
              full
            >
              <textarea rows={4} className="form-input" />
            </Field>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-navy/10 mt-2">
              <p className="text-xs text-navy/60 max-w-[50ch]">
                Membership fees are paid via bank transfer. Payment details will be provided after
                you submit your application.
              </p>
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand text-white text-sm font-semibold px-7 py-3 rounded-full hover:brightness-110 transition shadow-sm"
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
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 0.75rem;
          border: 1px solid color-mix(in oklch, var(--navy) 14%, transparent);
          font-size: 0.95rem;
          color: var(--ink);
          outline: none;
          font-family: var(--font-body);
          transition: border-color .15s, box-shadow .15s;
        }
        .form-input:hover { border-color: color-mix(in oklch, var(--navy) 24%, transparent); }
        .form-input:focus {
          border-color: var(--brand);
          box-shadow: 0 0 0 3px color-mix(in oklch, var(--brand) 18%, transparent);
        }
      `}</style>
    </SiteLayout>
  );
}

function RadioCard({
  name,
  value,
  label,
  sublabel,
  defaultChecked,
  checked,
  onChange,
}: {
  name: string;
  value: string;
  label: string;
  sublabel?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: () => void;
}) {
  const isControlled = checked !== undefined;
  return (
    <label
      className={`flex items-start gap-3 rounded-2xl border p-4 cursor-pointer transition ${
        (isControlled ? checked : undefined)
          ? "border-brand bg-brand-soft/40"
          : "border-navy/10 hover:border-navy/25 bg-white"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={isControlled ? checked : undefined}
        onChange={onChange}
        className="mt-1 accent-[var(--brand)]"
      />
      <span className="flex flex-col min-w-0">
        <span className="text-sm font-medium text-ink">{label}</span>
        {sublabel && <span className="text-xs text-navy/60 mt-0.5">{sublabel}</span>}
      </span>
    </label>
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
