"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  const sections = [
    {
      title: "Comprehensive Financial & Educational Disclaimer",
      content: [
        {
          label: "Educational Purpose Only",
          text: "All content provided by U.T.M, including Daily Trade Ideas, Weekly Forecasts, and Market Analysis, is strictly for educational and informational purposes.",
        },
        {
          label: "Not Financial Advice",
          text: "We are not registered financial advisors. Nothing shared within the community or on the website constitutes professional financial or trading advice.",
        },
        {
          label: "Risk of Trading",
          text: "Trading Forex and Futures involves a high level of risk and may not be suitable for all investors. You may lose some or all of your capital.",
        },
        {
          label: "No Guarantees",
          text: "U.T.M does not guarantee any specific profit or outcome. Your results depend on your execution and risk management.",
        },
      ],
    },

    {
      title: "Intellectual Property: The (Hloser Model) & Content Protection",
      content: [
        {
          label: "Ownership",
          text: "All materials, including the Hloser Model, video series, and forecasts, are exclusive intellectual property of University of Trading-MA.",
        },
        {
          label: "Limited License",
          text: "You are granted a non-transferable license to view content for personal education only.",
        },
        {
          label: "Strict Prohibitions",
          text: "You are forbidden from recording, downloading, screenshotting, or sharing content publicly.",
        },
        {
          label: "Consequences",
          text: "Any breach results in a permanent ban and possible legal action.",
        },
      ],
    },

    {
      title: "Subscription, Payments, & Non-Refundable Policy",
      content: [
        {
          label: "Instant Access",
          text: "Digital services such as videos, chat, and market analysis are delivered instantly.",
        },
        {
          label: "No Refunds",
          text: "All sales are final due to instant digital consumption.",
        },
        {
          label: "Cancellation",
          text: "You may cancel anytime to stop future billing while retaining access until cycle ends.",
        },
      ],
    },

    {
      title: "Community Conduct & Discord Access",
      content: [
        {
          label: "Chat Access",
          text: "Community groups are for professional discussion only.",
        },
        {
          label: "Account Sharing",
          text: "Sharing login or private links results in automatic ban.",
        },
      ],
    },

    {
      title: "Non-Disclosure Agreement (NDA)",
      content: [
        {
          label: "Confidentiality",
          text: "Members must keep strategies, models, and private discussions confidential.",
        },
      ],
    },

    {
      title: "Service Modifications",
      content: [
        {
          label: "Updates",
          text: "U.T.M may modify pricing, content, or services without notice.",
        },
      ],
    },

    {
      title: "Governing Law & Disputes",
      content: [
        {
          label: "Legal Jurisdiction",
          text: "These Terms follow Moroccan law and international digital commerce standards.",
        },
      ],
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
            Welcome to University of Trading-MA ("U.T.M"). By using our platform,
            you agree to these Terms of Service.
          </p>

          <div className="mb-8 bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-base text-red-800 font-medium">
              ⚠️ Important: By accessing U.T.M, you confirm you agree to these Terms.
            </p>
          </div>

          <div className="space-y-12 text-gray-700">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-semibold text-lg text-gray-900 mb-5">
                  {i + 1}. {section.title}
                </h2>

                <div className="space-y-6">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      <p className="font-semibold text-gray-900">
                        {item.label}:
                      </p>

                      {/* underline under mini title */}
                      <div className="w-28 h-[2px] bg-gray-300 my-2 rounded"></div>

                      <p className="text-gray-700">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">Contact</h2>
            <p className="text-base text-gray-700">
              Email support:{" "}
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
