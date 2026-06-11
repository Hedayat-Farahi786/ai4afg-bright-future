import { createFileRoute } from "@tanstack/react-router";
import { Section, Prose } from "@/components/SiteLayout";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AI4Afghanistan" },
      {
        name: "description",
        content:
          "How AI4Afghanistan collects, uses, and protects personal data when you visit our website or contact us.",
      },
    ],
    links: [{ rel: "canonical", href: "/legal/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <Prose>
        <p>
          We take the protection of your personal data seriously. This Privacy Policy explains how
          we collect, use, and protect personal data when you visit our website or contact us
          through our online forms and donation functions.
        </p>

        <h2>1. Controller</h2>
        <p>The controller responsible for data processing on this website is:</p>
        <p>
          AI for Afghanistan (AI4Afghanistan) e.V.
          <br />
          Randowstraße 7, 22547 Hamburg, Germany
          <br />
          Email: <a href="mailto:info@ai4afghanistan.org">info@ai4afghanistan.org</a>
          <br />
          Phone: +49 176 46294780
        </p>

        <h2>2. General information on data processing</h2>
        <p>
          We process personal data only to the extent necessary to provide a functional website,
          respond to inquiries, process membership applications, review partnership requests, enable
          donations, and support the activities of our association. Personal data means any
          information relating to an identified or identifiable natural person.
        </p>

        <h2>3. Contact Form</h2>
        <p>When you use our contact form, we process the data you provide, in particular:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Message</li>
        </ul>
        <p>We use this data solely to process and respond to your inquiry.</p>

        <h2>4. Membership Application Form</h2>
        <p>When you submit a membership application, we process the data you provide, including:</p>
        <ul>
          <li>Title</li>
          <li>Full Name</li>
          <li>Address</li>
          <li>Age Category</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Background / Area of Involvement</li>
          <li>Monthly Membership Fee</li>
          <li>Motivation for Applying for Membership</li>
        </ul>
        <p>
          We process this data for the purpose of reviewing your application, contacting you,
          handling the membership process, and administering membership if your application is
          accepted. If your application is successful, we may also contact you separately by email
          with information relating to the payment of membership fees, including our bank details,
          payment frequency, and payment reference.
        </p>

        <h2>5. For Applicants Under 18</h2>
        <p>
          If an applicant is under 18 years of age, we may request additional confirmation from a
          legal guardian. In such cases, we process the data contained in the follow-up
          communication and any signed consent form provided by the legal guardian solely for the
          purpose of verifying consent and processing the application in a legally appropriate
          manner.
        </p>

        <h2>6. Partnership Inquiry Form</h2>
        <p>When you submit a partnership inquiry, we process the data you provide, including:</p>
        <ul>
          <li>Organization name</li>
          <li>Website, if provided</li>
          <li>Contact person</li>
          <li>Email address</li>
          <li>Information about the proposed collaboration, where provided</li>
        </ul>
        <p>
          We use this data to review and respond to partnership requests and to assess possible
          cooperation.
        </p>

        <h2>7. Donations</h2>
        <p>
          Our website offers online donation options, including one-time and monthly donations.
          Donors may select a predefined donation amount or enter a custom amount. To process online
          donations, we may use Stripe or a comparable third-party payment service provider. When a
          donor proceeds with an online donation, they may be redirected to a hosted payment page
          operated by the respective payment service provider. Payment details are entered directly
          on that provider's page and are processed there. In connection with donations, we may
          process or receive personal data such as the selected donation amount, donation frequency,
          contact details, transaction-related information, and any other information necessary to
          document and administer the donation. We process donation-related data for the purpose of
          handling and documenting donations, communicating with donors where necessary, and
          fulfilling any related legal, accounting, or tax obligations. Donation receipts, where
          issued, are currently issued manually.
        </p>

        <h2>8. Communication by Email</h2>
        <p>
          If you contact us by email, or if we follow up with you by email after receiving a form
          submission, membership application, partnership inquiry, or donation-related inquiry, we
          process the personal data contained in the correspondence for the purpose of handling
          your request, reviewing your application, or managing the relevant relationship with you.
        </p>

        <h2>9. Recipients of Data</h2>
        <p>
          Form submissions and related communications are processed through our official email
          systems and are accessible only to persons who require access for organizational
          purposes. This may include board members and, where authorized by the board,
          administrative personnel or volunteers acting on behalf of the association. Where
          donations are processed via third-party payment service providers, relevant personal data
          may also be processed by those providers to the extent necessary to complete and document
          the donation.
        </p>

        <h2>10. Storage Period</h2>
        <p>
          We store personal data only for as long as necessary for the respective purpose and to
          the extent required by law. As a general rule:
        </p>
        <ul>
          <li>
            Contact inquiries are stored for as long as necessary to handle the inquiry and any
            related follow-up.
          </li>
          <li>
            Partnership inquiries are stored for as long as necessary to evaluate and respond to
            the inquiry and maintain any resulting cooperation records.
          </li>
          <li>
            Membership application data is stored for the duration of the review process and, if
            accepted, for the duration of the membership and any applicable retention obligations.
          </li>
          <li>
            Data relating to terminated memberships is deleted when it is no longer required,
            subject to legal retention obligations.
          </li>
          <li>
            Legal guardian consent documents are stored only for as long as necessary to document
            valid consent and comply with applicable legal obligations.
          </li>
          <li>
            Donation-related data is stored for as long as necessary to process and document the
            donation and to comply with applicable legal, accounting, or tax retention obligations.
          </li>
        </ul>

        <h2>11. Domain, Email Services, Payment Services, and Technical Operation</h2>
        <p>
          Our domain is managed through Squarespace Domains. Our email services are provided
          through Google Workspace. Online donations may be processed through Stripe or another
          payment service provider used for the donation function on our website. We may also use
          technical service providers for the hosting, maintenance, and security of this website.
        </p>

        <h2>12. Google reCAPTCHA</h2>
        <p>
          We use Google reCAPTCHA to protect our website and forms against spam, abuse, and
          automated submissions. reCAPTCHA helps distinguish whether data entered on our website is
          made by a human user or by an automated program. In this context, data may be transmitted
          to Google.
        </p>

        <h2>13. Embedded Third-party Content</h2>
        <p>Our website may include embedded or linked content from third-party providers, including:</p>
        <ul>
          <li>YouTube</li>
          <li>Instagram</li>
          <li>Google Maps</li>
          <li>LinkedIn</li>
        </ul>
        <p>
          Such content is only displayed after user interaction or in accordance with the settings
          of our consent tool. When such content is loaded, the respective third-party provider may
          process personal data, including technical usage data such as IP address, browser
          information, or device information.
        </p>

        <h2>14. Cookies and Consent Management</h2>
        <p>
          Our website uses a consent mechanism that allows users to accept, reject, and later
          revise their cookie and external media preferences. Where technically necessary, certain
          cookies or similar technologies may be used to ensure the operation and security of the
          website. Any non-essential technologies are used only on the basis of user consent where
          required by law.
        </p>

        <h2>15. Your Rights</h2>
        <p>Under applicable data protection law, you may have the following rights:</p>
        <ul>
          <li>The right of access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to restriction of processing</li>
          <li>The right to data portability</li>
          <li>The right to object to processing</li>
          <li>The right to withdraw consent at any time, with effect for the future</li>
        </ul>
        <p>
          If you wish to exercise any of these rights, please contact us at{" "}
          <a href="mailto:info@ai4afghanistan.org">info@ai4afghanistan.org</a>.
        </p>

        <h2>16. Right to Lodge a Complaint</h2>
        <p>
          You also have the right to lodge a complaint with a competent data protection supervisory
          authority.
        </p>

        <h2>17. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy from time to time so that it remains
          accurate and reflects legal, technical, or organizational changes.
        </p>
      </Prose>
    </Section>
  );
}
