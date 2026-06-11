import malalaLogo from "@/assets/logos/malala-fund.png.asset.json";
import gizLogo from "@/assets/logos/giz.png.asset.json";
import worldbankLogo from "@/assets/logos/worldbank.png.asset.json";
import bmbfLogo from "@/assets/logos/bmbf.png.asset.json";
import kardanLogo from "@/assets/logos/kardan.png.asset.json";
import aziziLogo from "@/assets/logos/azizi.png.asset.json";
import itzLogo from "@/assets/logos/itz.png.asset.json";
import moeLogo from "@/assets/logos/moe-af.png.asset.json";

type Variant = {
  label: string;
  sub?: string;
  src?: string;
  // Fallback monogram styling when no logo is provided
  initials?: string;
  bg?: string;
  fg?: string;
  accent?: string;
};

const PARTNERS: Record<string, Variant> = {
  "Malala Fund": {
    label: "Malala Fund",
    sub: "Education for every girl",
    src: malalaLogo.url,
  },
  "Azizi Developments": {
    label: "Azizi Developments",
    sub: "Building communities",
    src: aziziLogo.url,
  },
  GIZ: {
    label: "GIZ",
    sub: "Deutsche Gesellschaft für Internationale Zusammenarbeit",
    src: gizLogo.url,
  },
  "The World Bank": {
    label: "The World Bank",
    sub: "IBRD · IDA",
    src: worldbankLogo.url,
  },
  "Ministry of Education": {
    label: "Ministry of Education",
    sub: "Afghanistan",
    src: moeLogo.url,
  },
  "AI.GERMANY": {
    label: "AI.GERMANY",
    sub: "Künstliche Intelligenz · Germany",
    initials: "AI",
    bg: "#0f172a",
    fg: "#f1f5f9",
    accent: "#38bdf8",
  },
  "Bundesministerium für Bildung und Forschung": {
    label: "Bundesministerium für Bildung und Forschung",
    sub: "Federal Ministry · Germany",
    src: bmbfLogo.url,
  },
  "Kardan University": {
    label: "Kardan University",
    sub: "Kabul · Afghanistan",
    src: kardanLogo.url,
  },
  "Initiative Transparente Zivilgesellschaft": {
    label: "Initiative Transparente Zivilgesellschaft",
    sub: "Transparency commitment",
    src: itzLogo.url,
  },
};

export function PartnerLogo({ name }: { name: string }) {
  const v = PARTNERS[name] ?? {
    label: name,
    initials: name.slice(0, 2).toUpperCase(),
    bg: "#f8fafc",
    fg: "#0f172a",
    accent: "#c2410c",
  };

  return (
    <div
      className="group aspect-[3/2] rounded-2xl ring-1 ring-navy/10 bg-white overflow-hidden flex flex-col transition hover:ring-brand/40 hover:-translate-y-0.5 shadow-sm"
      title={v.label}
    >
      <div className="flex-1 flex items-center justify-center px-5 py-5 min-h-0">
        {v.src ? (
          <img
            src={v.src}
            alt={v.label}
            loading="lazy"
            className="max-h-[64px] sm:max-h-[72px] max-w-[80%] w-auto object-contain"
          />
        ) : (
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="shrink-0 size-12 rounded-xl grid place-items-center font-bold text-lg text-white"
              style={{ background: v.accent }}
            >
              {v.initials}
            </div>
            <div className="min-w-0">
              <div
                className="font-semibold leading-tight text-[14px] text-ink"
                style={{ color: v.fg ?? "#0f172a" }}
              >
                {v.label}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="px-4 py-2.5 border-t border-navy/5 bg-surface/50">
        <div className="text-[11px] font-medium text-navy/80 truncate">{v.label}</div>
        {v.sub && <div className="text-[10px] text-navy/50 truncate">{v.sub}</div>}
      </div>
    </div>
  );
}
