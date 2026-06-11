import { createFileRoute } from "@tanstack/react-router";
import { Section, Prose } from "@/components/SiteLayout";

export const Route = createFileRoute("/legal/imprint")({
  head: () => ({
    meta: [
      { title: "Imprint — AI4Afghanistan" },
      { name: "description", content: "Imprint (Impressum) for AI for Afghanistan e.V." },
    ],
    links: [{ rel: "canonical", href: "/legal/imprint" }],
  }),
  component: ImprintPage,
});

function ImprintPage() {
  return (
    <Section>
      <Prose>
        <h2>AI for Afghanistan (AI4Afghanistan) e.V.</h2>
        <p>
          Randowstraße 7
          <br />
          22547 Hamburg
          <br />
          Germany
        </p>

        <h3>Represented by</h3>
        <p>
          Ing. Ahmad Siyar Sirat, Chair
          <br />
          Farshad Azimi, Deputy Chair
        </p>

        <h3>Board Members</h3>
        <ul>
          <li>Ing. Ahmad Siyar Sirat — Chair</li>
          <li>Farshad Azimi — Deputy Chair</li>
          <li>Sayed Amir Ziwari — Treasurer</li>
          <li>Zuhra Ziwari — Secretary</li>
        </ul>

        <h3>Register Entry</h3>
        <p>Registered in the Register of Associations at Hamburg Local Court: VR 26146.</p>

        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:info@ai4afghanistan.org">info@ai4afghanistan.org</a>
          <br />
          Phone: <a href="tel:+4917646294780">+49 176 46294780</a>
        </p>
      </Prose>
    </Section>
  );
}
