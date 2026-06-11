import { createFileRoute } from "@tanstack/react-router";
import { Section, Prose } from "@/components/SiteLayout";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/about/transparency")({
  head: () => ({
    meta: [
      { title: "Transparency & Accountable Management — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Legal status, registration, donation account, statutes, and tax-privileged status of AI4Afghanistan e.V.",
      },
    ],
    links: [{ rel: "canonical", href: "/about/transparency" }],
  }),
  component: TransparencyPage,
});

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 py-4 border-b border-zinc-950/5">
      <dt className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function TransparencyPage() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        <aside className="lg:sticky lg:top-28 self-start">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Transparency & Accountable Management
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl text-balance">
            Our commitment to transparency.
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            AI4Afghanistan believes that transparency and accountability are essential to building
            trust. We openly share key information about our legal status, organizational structure,
            and how our resources are managed.
          </p>
        </aside>

        <Prose>
          <h3>1. Name, Legal Form, and Registration</h3>
          <dl>
            <Row label="Organization Name" value="AI for Afghanistan (AI4Afghanistan) e.V." />
            <Row label="Legal Form" value="e.V., Registered Association (eingetragener Verein)" />
            <Row label="Registration" value="VR 26146, Hamburg District Court (Amtsgericht Hamburg)" />
            <Row label="Year Founded" value="2025" />
          </dl>

          <h3>2. Address & Contact</h3>
          <dl>
            <Row label="Address" value="Randowstraße 7, 22547 Hamburg" />
            <Row
              label="Email"
              value={
                <a href="mailto:info@ai4afghanistan.org">info@ai4afghanistan.org</a>
              }
            />
            <Row label="Contact Person" value="Ing. Ahmad Siyar Sirat" />
            <Row
              label="Contact Email"
              value={<a href="mailto:sirat@ai4afghanistan.org">sirat@ai4afghanistan.org</a>}
            />
          </dl>

          <h3>3. Donation Account (Spendenkonto)</h3>
          <dl>
            <Row label="Recipient" value="AI for Afghanistan (AI4Afghanistan) e.V." />
            <Row label="IBAN" value={<span className="font-mono text-sm">DEXX XXXX XXXX XXXX XXXX XX</span>} />
            <Row label="BIC / SWIFT" value={<span className="font-mono text-sm">XXXXXXXXXXX</span>} />
          </dl>

          <h3>4. Statutes (Satzung)</h3>
          <p>
            <a
              href="#"
              className="inline-flex items-center gap-2 not-prose bg-zinc-100 hover:bg-zinc-200 text-ink px-4 py-2 rounded-full text-sm font-medium no-underline"
            >
              <FileText className="size-4" /> Download Satzung (PDF)
            </a>
          </p>

          <h3>5. Tax-privileged Status (Steuerbegünstigung)</h3>
          <p>
            Recognized as charitable/public-benefit (Gemeinnützigkeit) by the Hamburg tax office.
          </p>
          <dl>
            <Row label="Finanzamt" value="Hamburg-Nord" />
            <Row label="Steuernummer" value="To be provided" />
            <Row
              label="Freistellungsbescheid"
              value={
                <span>
                  Date and validity to be provided —{" "}
                  <a href="#" className="text-brand">
                    Download (PDF)
                  </a>
                </span>
              }
            />
            <Row label="USt-IdNr." value="To be provided (if applicable)" />
          </dl>

          <h3>6. Tätigkeitsbericht (2026)</h3>
          <p>
            <a
              href="#"
              className="inline-flex items-center gap-2 not-prose bg-zinc-100 hover:bg-zinc-200 text-ink px-4 py-2 rounded-full text-sm font-medium no-underline"
            >
              <FileText className="size-4" /> Activity Report 2026 (PDF) — coming soon
            </a>
          </p>
        </Prose>
      </div>
    </Section>
  );
}
