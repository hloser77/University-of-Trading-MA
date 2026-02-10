"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  const sections = [
    {
      title: "Comprehensive Financial & Educational Disclaimer",
      content: `Educational Purpose Only: All content provided by U.T.M, including but not limited to Daily Trade Ideas, Weekly Forecasts, and Market Analysis, is strictly for educational and informational purposes.

Not Financial Advice: We are not registered financial advisors. Nothing shared within the community or on the website constitutes professional investment, financial, or trading advice.

Risk of Trading: Trading Forex and Futures involves a high level of risk and may not be suitable for all investors. You acknowledge that you can lose some or all of your capital.

No Guarantees: U.T.M does not guarantee any specific profit or outcome. Your trading results depend on your own execution and risk management.`,
    },

    {
      title: "Intellectual Property: The (Hloser Model) & Content Protection",
      content: `Ownership: All materials, including the Hloser Model, the How-To video series, entry strategy breakdowns, and all weekly/daily forecast videos, are the exclusive intellectual property of University of Trading-MA.

Limited License: Upon payment, you are granted a single, non-transferable license to view the content for your personal education only.

Strict Prohibitions: You are forbidden from recording, downloading, screenshotting, or sharing any part of the Hloser Model or educational videos on social media, YouTube, or with non-members.

Consequences: Any breach of this section will result in an immediate permanent ban without a refund and may lead to legal action for intellectual property theft.`,
    },

    {
      title: "Subscription, Payments, & Strict Non-Refundable Policy",
      content: `Instant Access: Our service provides instant access to digital goods such as (videos, chat, and market analysis) .

Strict No-Refunds: Because our product is digital and consumed immediately upon access, all sales are final. No refunds will be issued under any circumstances, including dissatisfaction or accidental purchases.

Cancellation: You may cancel your subscription at any time to prevent future billing, but you will retain access until the end of your current billing cycle.`,
    },

    {
      title: "Community Conduct & Discord Access",
      content: `Chat Access (24/7): Our chat groups are for professional discussion only. Any member engaging in harassment, spamming, or promoting other services will be removed immediately.

Account Sharing: Your subscription is for your eyes only. Sharing Telegram links or Whop login details with others will result in an automatic system ban.`,
    },

    {
      title: "Non-Disclosure Agreement (NDA) & Confidentiality",
      content: `By joining U.T.M, you agree to a strict Non-Disclosure Agreement.You must maintain full confidentiality regarding internal trading strategies, specific entry models (Hloser Model), and private member discussions.Sharing internal forecasts or confidential materials with third parties is a direct violation of this agreement.`,
    },

    {
      title: "Service Modifications & Updates",
      content: `U.T.M reserves the right to change, update, or discontinue any part of the service (including pricing, video content, or strategy updates) at any time without prior notice.We are not liable for any modification, suspension, or discontinuation of the service.`,
    },

    {
      title: "Governing Law & Dispute Resolution",
      content: `These Terms shall be governed by the laws of Morocco and international digital commerce standards.Any dispute that cannot be resolved through support will be handled exclusively by the competent courts in the provider's jurisdiction.`,
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Terms of Service
          </h1>

          <p className="text-base text-gray-600 mb-8">
            Welcome to University of Trading-MA ("U.T.M"). By accessing our website, purchasing any of our subscription plans (Starter, Popular, or Value), or joining our private Discord/Whop community, you enter into a legally binding agreement with us. These Terms of Service govern your entire experience with our platform. If you disagree with any part of these terms, you are prohibited from using our services or accessing our proprietary content.
          </p>

          <div className="mb-8 bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-base text-red-800 font-medium">
              ⚠️ Important: By accessing or using U.T.M, you confirm that you have read, understood, and agreed to these Terms.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
               <h2 className="font-semibold text-lg text-gray-900 mb-4">
                {index + 1}. {section.title}
               </h2>
                <p className="whitespace-pre-wrap">
                  {section.content}
                  <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mt-2 rounded"></div>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">Contact</h2>
            <p className="text-base text-gray-700">
              For any legal inquiries or support questions, please reach out to us at:{" "}
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
  )
}
