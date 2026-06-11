import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-ink font-body antialiased flex flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="px-6 pt-20 pb-16 lg:pt-32 lg:pb-20 border-b border-navy/10">
      <div className="max-w-7xl mx-auto">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display font-semibold text-4xl lg:text-6xl leading-[1.05] text-balance max-w-[22ch]">
          {title}
        </h1>
        {lead && (
          <p className="mt-6 text-lg lg:text-xl text-navy/70 max-w-[60ch] text-pretty leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-content max-w-[68ch] text-navy/80 leading-relaxed text-[15.5px] lg:text-base space-y-5 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-display [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-ink [&_strong]:text-ink [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2">
      {children}
    </div>
  );
}
