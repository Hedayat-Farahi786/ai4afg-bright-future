type Variant = {
  initials: string;
  label: string;
  sub?: string;
  bg: string; // background tint
  fg: string; // initials/text color
  accent: string; // accent bar color
  font?: "serif" | "sans" | "mono";
};

const PARTNERS: Record<string, Variant> = {
  // Donors
  "Malala Fund": {
    initials: "MF",
    label: "Malala Fund",
    sub: "Education for every girl",
    bg: "#fdf2f8",
    fg: "#9d174d",
    accent: "#ec4899",
    font: "serif",
  },
  "Azizi Developments": {
    initials: "AZ",
    label: "Azizi",
    sub: "Developments",
    bg: "#fef9c3",
    fg: "#854d0e",
    accent: "#ca8a04",
    font: "sans",
  },
  GIZ: {
    initials: "giz",
    label: "GIZ",
    sub: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
    bg: "#fef2f2",
    fg: "#991b1b",
    accent: "#dc2626",
    font: "sans",
  },
  "The World Bank": {
    initials: "WB",
    label: "The World Bank",
    sub: "IBRD · IDA",
    bg: "#eff6ff",
    fg: "#1e3a8a",
    accent: "#1d4ed8",
    font: "serif",
  },
  // Institutional partners
  "Ministry of Education": {
    initials: "MoE",
    label: "Ministry of Education",
    sub: "Afghanistan",
    bg: "#ecfdf5",
    fg: "#065f46",
    accent: "#059669",
    font: "serif",
  },
  "AI.GERMANY": {
    initials: "AI",
    label: "AI.GERMANY",
    sub: "Künstliche Intelligenz",
    bg: "#1e293b",
    fg: "#f1f5f9",
    accent: "#38bdf8",
    font: "mono",
  },
  "Bundesministerium für Bildung und Forschung": {
    initials: "BMBF",
    label: "Bundesministerium",
    sub: "für Bildung und Forschung",
    bg: "#fef3c7",
    fg: "#1c1917",
    accent: "#f59e0b",
    font: "sans",
  },
  "Kardan University": {
    initials: "KU",
    label: "Kardan University",
    sub: "Kabul · Afghanistan",
    bg: "#faf5ff",
    fg: "#581c87",
    accent: "#7e22ce",
    font: "serif",
  },
  "Initiative Transparente Zivilgesellschaft": {
    initials: "ITZ",
    label: "Initiative Transparente",
    sub: "Zivilgesellschaft",
    bg: "#f0fdfa",
    fg: "#134e4a",
    accent: "#0d9488",
    font: "sans",
  },
};

export function PartnerLogo({ name }: { name: string }) {
  const v = PARTNERS[name] ?? {
    initials: name.slice(0, 2).toUpperCase(),
    label: name,
    bg: "#f8fafc",
    fg: "#0f172a",
    accent: "#16a34a",
    font: "sans" as const,
  };
  const fontFamily =
    v.font === "serif"
      ? "'Times New Roman', Georgia, serif"
      : v.font === "mono"
      ? "ui-monospace, 'JetBrains Mono', monospace"
      : "Poppins, ui-sans-serif, system-ui, sans-serif";

  return (
    <div
      className="group aspect-[3/2] rounded-2xl ring-1 ring-navy/10 overflow-hidden flex flex-col transition hover:ring-brand/40 hover:-translate-y-0.5 shadow-sm"
      style={{ background: v.bg }}
    >
      <div className="flex-1 flex items-center justify-center px-6 py-4">
        <div className="flex items-center gap-3.5 min-w-0">
          <div
            className="shrink-0 size-12 rounded-xl grid place-items-center font-bold text-lg"
            style={{
              background: v.accent,
              color: "#fff",
              fontFamily,
              letterSpacing: v.font === "mono" ? "-0.04em" : "-0.02em",
            }}
          >
            {v.initials}
          </div>
          <div className="min-w-0">
            <div
              className="font-semibold leading-tight truncate text-[15px]"
              style={{ color: v.fg, fontFamily }}
              title={v.label}
            >
              {v.label}
            </div>
            {v.sub && (
              <div
                className="text-[11px] leading-tight mt-1 opacity-75 line-clamp-2"
                style={{ color: v.fg }}
              >
                {v.sub}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="h-1.5 w-full" style={{ background: v.accent }} />
    </div>
  );
}
