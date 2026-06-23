import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Ethos",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-[family-name:var(--font-jakarta)]">
      <div className="max-w-2xl mx-auto px-6 sm:px-16 py-16">
        <Link href="/" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
          &larr; Back to Ethos
        </Link>

        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mt-8 mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6B6B6B] mb-10">Last updated: June 19, 2026</p>

        <div className="space-y-8 text-[#1A1A1A] leading-relaxed">
          <p>
            This Privacy Policy explains what information Ethos (&quot;Ethos,&quot; &quot;we,&quot; &quot;us&quot;) collects, how we
            use it, and the choices you have. Ethos is operated by{" "}
            <strong>Christina Bazydlo</strong>. If you have questions, contact us at{" "}
            <a href="mailto:hello@readethos.app" className="text-[#1A1A1A] underline">hello@readethos.app</a>.
          </p>

          <section>
            <h2 className="text-lg font-bold mb-3">Information We Collect</h2>
            <p className="mb-3"><strong>Account information.</strong> When you create an account, you sign in with Apple. We receive your email address (or Apple&apos;s private relay email if you choose to hide your email) and a unique identifier for your account. We do not receive your Apple password.</p>
            <p className="mb-3"><strong>Reading history.</strong> The books you add to your library, including titles, authors, your read / want-to-read / did-not-finish status, your ratings, and any notes you leave about books you didn&apos;t finish.</p>
            <p className="mb-3"><strong>Your literary fingerprint.</strong> A profile we generate from your reading history that describes the kind of reader you are: voice, themes, pacing, and other patterns we detect. This is the core of how Ethos works.</p>
            <p className="mb-3"><strong>Recommendation activity.</strong> The book recommendations we generate for you, and which ones you dismiss.</p>
            <p className="mb-3"><strong>Subscription status.</strong> Whether you have an active Premium subscription, managed through Apple&apos;s App Store and RevenueCat.</p>
            <p className="mb-3"><strong>Waitlist email.</strong> If you joined our waitlist before the app launched, we collected only your email address through Buttondown, our email service provider.</p>
            <p>We do not collect your location, contacts, photos, or any data from your device beyond what&apos;s listed above.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">How We Use Your Information</h2>
            <p>We use your reading history to build your literary fingerprint and generate book recommendations. We use your account information to manage your account and subscription. We use your email to send you product updates and, if you&apos;re on the waitlist, to let you know when the app is ready. We do not use your data for advertising, and we do not sell your data to anyone.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">How Your Data Is Processed</h2>
            <p>Building your literary fingerprint and generating recommendations requires sending your reading history (book titles, authors, ratings, and notes) to Anthropic, the company that provides the AI model we use. Anthropic processes this data to generate your fingerprint and recommendations and does not use it to train their models. No other AI provider receives your reading data.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Who We Share Data With</h2>
            <p className="mb-3">We share data with the service providers who help us run Ethos, and only as needed for them to do that job:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Supabase</strong> hosts our database and handles authentication. Your account and reading data are stored here.</li>
              <li><strong>Anthropic</strong> processes your reading history to generate your literary fingerprint and recommendations, as described above.</li>
              <li><strong>Apple</strong> processes Sign in with Apple and any App Store purchases. We never see your Apple ID password or payment details.</li>
              <li><strong>RevenueCat</strong> manages subscription status so we know whether your account is on Premium. They receive your subscription status, not your payment information.</li>
              <li><strong>Buttondown</strong> stores waitlist email addresses, if you joined before the app launched.</li>
            </ul>
            <p className="mt-3">We do not share your data with advertisers or data brokers. We do not sell your data.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Data Retention and Deletion</h2>
            <p>We keep your data for as long as your account is active. You can delete your account and all associated data (reading history, fingerprint, recommendations) at any time from Settings, or by emailing hello@readethos.app. Deletion is permanent, recommendations and fingerprints already generated cannot be recovered once deleted.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Children&apos;s Privacy</h2>
            <p>Ethos is not intended for children under 13, and we do not knowingly collect information from children under 13. If you believe a child has created an account, contact us and we will delete it.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Your Rights</h2>
            <p>Depending on where you live, you may have the right to access, correct, or delete your personal data, or to object to how we process it. You can exercise these rights through the app&apos;s Settings or by contacting us at hello@readethos.app.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Security</h2>
            <p>We use industry-standard security practices, including encrypted connections and database-level access controls, to protect your data. No system is perfectly secure, but we take reasonable steps to protect your information.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Changes to This Policy</h2>
            <p>If we make material changes to this policy, we&apos;ll notify you in the app or by email before the changes take effect.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Contact</h2>
            <p>Questions about this policy: <a href="mailto:hello@readethos.app" className="text-[#1A1A1A] underline">hello@readethos.app</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
