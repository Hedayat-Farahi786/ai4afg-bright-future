import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Get in touch with AI4Afghanistan. Email, phone, address, and a contact form for questions, feedback, and partnership inquiries.",
      },
      { property: "og:title", content: "Contact — AI4Afghanistan" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Message sent", {
      description: "Thanks — we'll get back to you soon.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  }
  function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("You're on the list", {
      description: "We'll send updates straight to your inbox.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch."
        lead="Thank you for your interest in AI for Afghanistan e.V. We welcome questions, feedback, and partnership inquiries. Whether you'd like to learn more about our initiatives, volunteer, or explore collaboration — we'd be glad to hear from you."
      />

      <Section>
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          <div>
            <h2 className="font-display font-semibold text-2xl mb-6">Reach us directly</h2>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="mt-0.5 size-9 rounded-full bg-brand-soft/60 grid place-items-center text-brand shrink-0">
                  <Mail className="size-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-navy/60">Email</div>
                  <a
                    href="mailto:info@ai4afghanistan.org"
                    className="text-ink font-medium hover:text-brand"
                  >
                    info@ai4afghanistan.org
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 size-9 rounded-full bg-brand-soft/60 grid place-items-center text-brand shrink-0">
                  <Phone className="size-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-navy/60">Phone</div>
                  <a href="tel:+4917646294780" className="text-ink font-medium hover:text-brand">
                    +49 176 46294780
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-0.5 size-9 rounded-full bg-brand-soft/60 grid place-items-center text-brand shrink-0">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-navy/60">Address</div>
                  <div className="text-ink font-medium leading-relaxed">
                    Randowstraße 7<br />
                    22547 Hamburg, Germany
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-12 bg-navy text-white rounded-3xl p-8">
              <h3 className="font-display font-semibold text-xl mb-2">
                Stay updated
              </h3>
              <p className="text-sm text-white/75 mb-5">
                News, program updates, and stories — straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletter}>
                <input
                  required
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 placeholder:text-white/60 text-white outline-none border border-white/10 focus:border-white/30"
                />
                <button
                  type="submit"
                  className="bg-brand text-white text-sm font-medium px-5 py-3 rounded-full hover:brightness-110 transition"
                >
                  Join Our Email List
                </button>
              </form>
            </div>
          </div>

          <form
            onSubmit={handleContact}
            className="bg-white shadow-sm rounded-3xl p-8 lg:p-10 ring-1 ring-navy/10"
          >
            <h2 className="font-display font-semibold text-2xl mb-6">Send us a message</h2>
            <div className="grid gap-5">
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Name</span>
                <input
                  required
                  className="form-input"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Email</span>
                <input
                  required
                  className="form-input"
                  placeholder="your@email.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium">Message</span>
                <textarea required rows={6} className="form-input" placeholder="How can we help?" />
              </label>
              <button
                type="submit"
                className="justify-self-start bg-brand text-white text-sm font-medium px-6 py-3 rounded-full hover:brightness-110 transition"
              >
                Send
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
