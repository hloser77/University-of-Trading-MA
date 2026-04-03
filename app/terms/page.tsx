"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsOfService() {
  const sections = [
    {
      title: "Comprehensive Financial & Educational Disclaimer",
      content: `
Educational Purpose Only: All materials, including but not limited to "Daily Trade Ideas," "Weekly Forecasts," and market analysis, are provided strictly for pedagogical and informational purposes.
Non-Advisory Status: U.T.M and its affiliates are not registered financial advisors, brokers, or fiduciaries. Nothing shared within the platform constitutes professional investment, tax, or legal advice.
Assumption of Risk: Trading Forex, Futures, and other financial instruments involves a high degree of risk and substantial capital exposure. You acknowledge that market participation may result in the partial or total loss of your capital.
No Performance Guarantees: U.T.M makes no warranties regarding specific profit outcomes or success rates. Individual trading results are contingent upon personal execution, psychological discipline, and independent risk management.
      `,
    },

    {
      title: "Intellectual Property: The (Hloser Model) & Content Protection",
      content: `
Ownership: All materials, including the Hloser Model, How-To video series, strategy breakdowns, and forecast videos, are the exclusive intellectual property of University of Trading-MA.

Limited License: Upon payment, you are granted a single, non-transferable license to view content for personal educational use only.

Strict Prohibitions: Recording, downloading, screenshotting, or sharing any proprietary content is strictly forbidden.

Consequences: Any violation will result in immediate permanent ban without refund and may lead to legal action.
      `,
    },

    {
      title: "Subscription, Payments, & Strict Non-Refundable Policy",
      content: `
Instant Access: Our service provides immediate access to digital goods (videos, chat, market analysis).

Strict No-Refund Policy: Due to the digital nature of our products, all sales are final. No refunds will be issued under any circumstances.

Cancellation: You may cancel at any time to prevent future billing. Access remains until the end of your billing cycle.
      `,
    },

    {
      title: "Community Conduct & Discord Access",
      content: `
Professional Conduct: Our chat communities are for professional discussion only. Harassment, spam, or promotions will result in removal.

Account Sharing: Sharing Whop logins, Discord access, or Telegram links is strictly prohibited and will result in automatic ban.
      `,
    },

    {
      title: "Non-Disclosure Agreement (NDA) & Confidentiality",
      content: `
By joining U.T.M, you agree to a strict Non-Disclosure Agreement.

You must maintain confidentiality regarding internal strategies, entry models (Hloser Model), and private community discussions.

Sharing confidential content is a direct violation and may lead to legal consequences.
      `,
    },

    {
      title: "Service Modifications & Updates",
      content: `
U.T.M reserves the right to modify, update, or discontinue any part of the service at any time without prior notice.

We are not liable for changes, suspensions, or service interruptions.
      `,
    },

    {
      title: "Governing Law & Dispute Resolution",
      content: `
These Terms shall be governed by the laws of Morocco and international digital commerce standards.

Any dispute will be handled exclusively by the competent courts in the provider’s jurisdiction.
      `,
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Terms of Service
          </h1>

          <p className="text-base text-gray-600 mb-8">
            By accessing the platform provided by University of Trading-MA ("U.T.M"), purchasing any subscription, or participating in the private community (Discord/Whop), you hereby enter into a legally binding contract. You acknowledge that you have read, understood, and voluntarily accepted these Terms in their entirety. If you do not agree with any specific provision, you are strictly prohibited from using the service and must terminate your access immediately.
          </p>

          <div className="mb-8 bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-base text-red-800 font-medium">
              ⚠️ Important: By using U.T.M, you confirm that you have read, understood, and accepted these Terms.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                <p className="whitespace-pre-wrap">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">
              Contact
            </h2>
            <p className="text-base text-gray-700">
              For legal or support inquiries, contact:
              {" "}
              <a
                href="mailto:support@universityoftradingma.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                support@universityoftradingma.com
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
