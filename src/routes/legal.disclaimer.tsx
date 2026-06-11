import { createFileRoute } from "@tanstack/react-router";
import { Section, Prose } from "@/components/SiteLayout";

export const Route = createFileRoute("/legal/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer & Legal Notice — AI4Afghanistan" },
      {
        name: "description",
        content:
          "Disclaimer, limitation of liability, external links, copyright, and special terms of use.",
      },
    ],
    links: [{ rel: "canonical", href: "/legal/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <Section>
      <Prose>
        <h2>1. Limitation of Liability</h2>
        <p>
          The content of this website has been prepared with the utmost care. However, AI for
          Afghanistan (AI4Afghanistan) e.V. makes no representations or warranties as to the
          accuracy, completeness, or currentness of the information provided. Use of this website
          and its content is at the user's own risk. Contributions identified by the name of a
          particular author reflect the views of that author and do not necessarily represent the
          views of AI for Afghanistan (AI4Afghanistan) e.V. Use of this website alone does not
          create any contractual relationship between the user and the provider.
        </p>

        <h2>2. External Links</h2>
        <p>
          This website may contain links to third-party websites. The respective operators are
          solely responsible for the content of those websites. At the time external links were
          first added, no unlawful content was apparent to us. We have no influence over the
          current or future design, content, or availability of linked third-party pages. The
          inclusion of external links does not mean that we adopt the linked content as our own.
          Permanent monitoring of linked pages is not reasonable without specific indications of a
          legal violation. If we become aware of any legal infringement, we will remove the
          relevant links without undue delay.
        </p>

        <h2>3. Copyright and Related Rights</h2>
        <p>
          The content published on this website is subject to German copyright and related rights
          law. Any use not permitted by applicable copyright law requires the prior written consent
          of the respective rights holder. This applies in particular to reproduction, editing,
          translation, storage, processing, and reproduction of content in databases or other
          electronic media and systems. Third-party content is identified as such where applicable.
          Unauthorized reproduction or distribution of individual content or complete pages is not
          permitted, except where legally allowed. Downloads and copies of this website are
          permitted only for personal, private, and non-commercial use. The display of this website
          in external frames is permitted only with prior written consent.
        </p>

        <h2>4. Special Terms of Use</h2>
        <p>
          Where specific terms apply to particular uses of this website that differ from the
          provisions above, this will be expressly indicated in the relevant place. In such cases,
          the specific terms shall apply.
        </p>

        <h2>Membership, Donations, and Partnership Inquiries</h2>

        <h3>1. Membership Applications</h3>
        <p>
          Individuals may apply for membership through the membership application form on our
          website. Applications are reviewed internally by the association. Submission of an
          application does not automatically create membership. If additional information is
          required, or if the application is accepted, we may contact the applicant by email. For
          applicants under the age of 18, we may require separate written consent from a legal
          guardian before the application can be processed or finalized.
        </p>

        <h3>2. Membership Fees</h3>
        <p>
          Membership fees are not processed through an online payment provider on this website. If
          an application is accepted, applicants may receive our bank details and payment
          instructions separately by email. Any standing order or bank transfer is arranged
          directly by the applicant through their own bank.
        </p>

        <h3>3. Donations</h3>
        <p>
          Donations may be made through the online donation options provided on our website. Donors
          may choose between one-time and monthly donations, select predefined amounts, or enter a
          custom amount. Online donations may be processed via Stripe or another third-party
          payment service provider. In such cases, donors may be redirected to the provider's
          hosted payment page in order to complete the payment. Payment data is entered directly
          with the respective payment service provider. Donation receipts are currently issued
          manually.
        </p>

        <h3>4. Partnership Inquiries</h3>
        <p>
          Organizations or individuals interested in collaboration may contact us through our
          partnership inquiry form. Submission of a partnership inquiry does not create a
          contractual relationship. We review each inquiry individually and respond where
          appropriate.
        </p>
      </Prose>
    </Section>
  );
}
