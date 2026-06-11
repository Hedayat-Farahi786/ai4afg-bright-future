import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { Copy, Check } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Support AI4Afghanistan" },
      {
        name: "description",
        content:
          "Your donation funds AI learning programs, teacher training, and global mentorship for Afghan students.",
      },
      { property: "og:title", content: "Donate — AI4Afghanistan" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const ONE_TIME = [10, 25, 50, 100, 250, 500];
const MONTHLY = [10, 25, 50, 100, 250, 500];

function DonatePage() {
  const [tab, setTab] = useState<"one" | "monthly">("one");
  const [amount, setAmount] = useState<number | null>(50);
  const [custom, setCustom] = useState("");
  const amounts = tab === "one" ? ONE_TIME : MONTHLY;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Donate · Make a Difference"
        title="Support building the foundations for responsible AI in Afghanistan."
        lead="Your donation means investing in Afghan students who build AI knowledge and practical skills, teachers who guide them, and support structures that connect learning to real opportunities."
      />

      <Section>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">
          {/* Donation selector */}
          <div className="min-w-0 bg-white shadow-sm rounded-3xl p-6 sm:p-8 lg:p-10 ring-1 ring-navy/10">
            <div className="inline-flex p-1 bg-white rounded-full ring-1 ring-navy/10 mb-8">
              <button
                onClick={() => setTab("one")}
                className={`px-5 py-2 text-sm font-medium rounded-full transition ${
                  tab === "one" ? "bg-navy text-white" : "text-navy/70"
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setTab("monthly")}
                className={`px-5 py-2 text-sm font-medium rounded-full transition ${
                  tab === "monthly" ? "bg-navy text-white" : "text-navy/70"
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={`py-4 rounded-2xl text-lg font-display font-semibold transition ${
                    amount === a && !custom
                      ? "bg-brand text-white"
                      : "bg-white ring-1 ring-zinc-950/10 text-ink hover:bg-brand-soft/50"
                  }`}
                >
                  €{a}
                </button>
              ))}
            </div>

            <label className="block">
              <span className="text-sm text-navy/70">Or enter custom amount</span>
              <div className="mt-2 flex items-center gap-2 bg-white rounded-2xl ring-1 ring-zinc-950/10 px-4">
                <span className="text-navy/60">€</span>
                <input
                  type="number"
                  min={1}
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setAmount(null);
                  }}
                  placeholder="Custom amount"
                  className="flex-1 py-3 bg-transparent outline-none"
                />
              </div>
            </label>

            <button
              className="mt-8 w-full bg-brand text-white font-medium py-4 rounded-full hover:brightness-110 transition disabled:opacity-50"
              disabled={!amount && !custom}
            >
              Donate €{custom || amount || 0}
              {tab === "monthly" && " / month"} via bank transfer
            </button>
            <p className="mt-3 text-xs text-navy/60 text-center">
              Online payment via Stripe coming soon — for now please use the bank details on the
              right.
            </p>
          </div>

          {/* Bank transfer details */}
          <BankDetails />
        </div>
      </Section>

      <Section className="bg-white shadow-sm border-y border-navy/10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Your Impact
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              Every contribution moves a student forward.
            </h2>
            <ul className="mt-6 space-y-3 text-navy/80">
              <li><strong>€25</strong> — provides AI learning materials for one student</li>
              <li><strong>€50</strong> — funds one week of programming training</li>
              <li><strong>€100</strong> — supports mentorship for one month</li>
              <li><strong>€250</strong> — sponsors a complete AI literacy course</li>
            </ul>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Your Donation Supports
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
              Real programs, real people, real impact.
            </h2>
            <ul className="mt-6 space-y-3 text-navy/80 list-disc pl-5">
              <li>
                Delivery of tailored AI learning programs for Afghan students, focused on practical
                skills and responsible AI use.
              </li>
              <li>
                Train-the-trainer capacity-building initiatives for teachers, fostering local
                expertise.
              </li>
              <li>
                Global mentorship networks connecting students with practitioners from Hamburg to
                Silicon Valley.
              </li>
              <li>Support structures that link learning to real opportunities.</li>
            </ul>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function BankDetails() {
  const [copied, setCopied] = useState<string | null>(null);
  const iban = "DEXX XXXX XXXX XXXX XXXX XX";
  const copy = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };
  return (
    <div className="bg-navy text-white p-8 lg:p-10 rounded-3xl">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
        Spendenkonto
      </span>
      <h2 className="mt-3 font-display font-semibold text-2xl">Bank transfer details</h2>
      <dl className="mt-6 space-y-5 text-sm">
        <div>
          <dt className="text-white/60">Recipient</dt>
          <dd className="mt-1 font-medium">AI for Afghanistan (AI4Afghanistan) e.V.</dd>
        </div>
        <div>
          <dt className="text-white/60">IBAN</dt>
          <dd className="mt-1 flex items-center gap-3">
            <span className="font-mono">{iban}</span>
            <button
              onClick={() => copy("iban", iban)}
              className="p-1.5 rounded-md hover:bg-white/10"
              aria-label="Copy IBAN"
            >
              {copied === "iban" ? <Check className="size-4" /> : <Copy className="size-4" />}
            </button>
          </dd>
        </div>
        <div>
          <dt className="text-white/60">BIC / SWIFT</dt>
          <dd className="mt-1 font-mono">XXXXXXXXXXX</dd>
        </div>
        <div>
          <dt className="text-white/60">Reference (Verwendungszweck)</dt>
          <dd className="mt-1">Donation – Your Full Name</dd>
        </div>
      </dl>
      <p className="mt-6 text-xs text-white/60 leading-relaxed">
        Donation receipts are currently issued manually. Email{" "}
        <a href="mailto:info@ai4afghanistan.org" className="underline">
          info@ai4afghanistan.org
        </a>{" "}
        if you need one.
      </p>
    </div>
  );
}
