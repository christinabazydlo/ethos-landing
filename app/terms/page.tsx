import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Ethos",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-[family-name:var(--font-jakarta)]">
      <div className="max-w-2xl mx-auto px-6 sm:px-16 py-16">
        <Link href="/" className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
          &larr; Back to Ethos
        </Link>

        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mt-8 mb-2">Terms of Service</h1>
        <p className="text-sm text-[#6B6B6B] mb-10">Last updated: June 19, 2026</p>

        <div className="space-y-8 text-[#1A1A1A] leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of Ethos (the &quot;App&quot;), operated by{" "}
            <strong>Christina Bazydlo</strong> (&quot;Ethos,&quot; &quot;we,&quot; &quot;us&quot;). By creating an
            account or using the App, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-lg font-bold mb-3">The Service</h2>
            <p>Ethos analyzes your reading history to build a literary fingerprint and recommend books based on it. Recommendations are generated using AI and reflect patterns in your reading history, they are suggestions, not guarantees you&apos;ll enjoy every book.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Accounts</h2>
            <p>You need an account, created via Sign in with Apple, to use Ethos. You&apos;re responsible for keeping your account secure. You must be at least 13 years old to use Ethos.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Subscriptions</h2>
            <p>Ethos offers a free tier and a Premium subscription ($4.99/month or $34.99/year at time of writing). Premium is billed through the Apple App Store and managed through your Apple ID. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel your subscription in your Apple ID account settings. Refunds are handled by Apple according to their policies, we do not process refunds directly.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Acceptable Use</h2>
            <p>Don&apos;t use Ethos to violate any law, attempt to access other users&apos; data, reverse-engineer the App, or interfere with its normal operation.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Content and Recommendations</h2>
            <p>Book recommendations, your literary fingerprint, and your archetype are generated based on the data you provide and are intended for personal entertainment and discovery purposes. We don&apos;t guarantee the accuracy, completeness, or suitability of any recommendation.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Intellectual Property</h2>
            <p>Ethos, its design, logo, and underlying technology are owned by us. Your reading history and the data you add to your library remain yours, we use it only as described in our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Termination</h2>
            <p>You can delete your account at any time. We may suspend or terminate accounts that violate these Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Disclaimer and Limitation of Liability</h2>
            <p>Ethos is provided &quot;as is&quot; without warranties of any kind. To the extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Governing Law</h2>
            <p>These Terms are governed by the laws of <strong>Virginia</strong>, without regard to conflict-of-law principles.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Changes to These Terms</h2>
            <p>We may update these Terms from time to time. If we make material changes, we&apos;ll notify you in the app before they take effect. Continued use of Ethos after changes take effect means you accept the new Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">Contact</h2>
            <p>Questions about these Terms: <a href="mailto:hello@readethos.app" className="text-[#1A1A1A] underline">hello@readethos.app</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
