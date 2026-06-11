import malalaLogo from "@/assets/logos/malala-fund.png.asset.json";
import gizLogo from "@/assets/logos/giz.png.asset.json";
import worldbankLogo from "@/assets/logos/worldbank.png.asset.json";
import bmbfLogo from "@/assets/logos/bmbf.png.asset.json";
import kardanLogo from "@/assets/logos/kardan.png.asset.json";
import aziziLogo from "@/assets/logos/azizi.png.asset.json";
import itzLogo from "@/assets/logos/itz.png.asset.json";
import moeLogo from "@/assets/logos/moe-af.png.asset.json";
import ai4germanyLogo from "@/assets/logos/ai4germany.png.asset.json";

type Variant = {
  label: string;
  sub?: string;
  src?: string;
  initials?: string;
  accent?: string;
};

const PARTNERS: Record<string, Variant> = {
  "Malala Fund": { label: "Malala Fund", sub: "Education for every girl", src: malalaLogo.url },
  "Azizi Developments": { label: "Azizi Developments", sub: "Building communities", src: aziziLogo.url },
  GIZ: { label: "GIZ", sub: "Deutsche Gesellschaft für Internationale Zusammenarbeit", src: gizLogo.url },
  "The World Bank": { label: "The World Bank", sub: "IBRD · IDA", src: worldbankLogo.url },
  "Ministry of Education": { label: "Ministry of Education", sub: "Afghanistan", src: moeLogo.url },
  "AI.GERMANY": { label: "AI4Germany", sub: "AI initiative · Germany", src: ai4germanyLogo.url },
  "Bundesministerium für Bildung und Forschung": {
    label: "Bundesministerium für Bildung und Forschung",
    sub: "Federal Ministry · Germany",
    src: bmbfLogo.url,
  },
  "Kardan University": { label: "Kardan University", sub: "Kabul · Afghanistan", src: kardanLogo.url },
  "Initiative Transparente Zivilgesellschaft": {
    label: "Initiative Transparente Zivilgesellschaft",
    sub: "Transparency commitment",
    src: itzLogo.url,
  },
};

export function PartnerLogo({ name }: { name: string }) {
  const v =
    PARTNERS[name] ?? {
      label: name,
      initials: name.slice(0, 2).toUpperCase(),
      accent: "#c2410c",
    };

  return (
    <figure
      className="group relative flex flex-col items-center justify-center text-center py-8 sm:py-10 px-4 transition-all duration-300"
      title={v.label}
    >
      <div className="flex h-20 sm:h-24 w-full items-center justify-center">
        {v.src ? (
          <img
            src={v.src}
            alt={v.label}
            loading="lazy"
            className="max-h-full max-w-[180px] sm:max-w-[200px] w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="grid h-16 w-16 place-items-center rounded-2xl font-bold text-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-[1.04]"
            style={{ background: v.accent }}
          >
            {v.initials}
          </div>
        )}
      </div>
      <figcaption className="mt-4 text-[11px] uppercase tracking-[0.16em] font-semibold text-navy/50 transition-colors group-hover:text-navy">
        {v.label}
      </figcaption>
    </figure>
  );
}
