"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

interface SubSection {
  title: string
  content: string
}

interface Section {
  title: string
  content: string
  subsections?: SubSection[]
}

export default function PrivacyPolicy() {
  const sections: Section[] = [
    {
      title: "Information Collection & Zero Financial Storage Mandate",
      content: `To ensure maximum security for our members, we adhere to a strict policy regarding the types of data we handle:`,
      subsections: [
        {
          title: "Personal Identification:",
          content: `We collect basic information such as your name, email address, and Discord/Whop username solely to manage your membership and provide access to the Hloser Model and our educational videos.`,
        },
        {
          title: "Zero Access to Banking Data (Critical):",
          content: `U.T.M does not store, process, host, or have any access to your sensitive financial information. All payment transactions, including credit card details, CVV codes, and billing addresses, are handled exclusively by our secure third-party processor, Whop. Your financial interaction is governed by Whop’s independent Privacy Policy and security protocols.`,
        },
        {
          title: "Automated Technical Data:",
          content: `We collect limited technical data (such as IP addresses, device types, and operating systems) strictly for analytics and platform security, including prevention of unauthorized account sharing.`,
        },
      ],
    },

    {
      title: "Strategic Use of Information",
      content: `We use collected data for operational excellence and protection of intellectual property:

• Membership Management: Verify active subscriptions and assign Discord roles.
• Service Updates: Notify users of changes to models, forecasts, or Terms.
• IP Protection: Monitor fraud or unauthorized redistribution of content.
• Legal Compliance: Defend against disputes, chargebacks, or abuse.`,
    },

    {
      title: "Non-Disclosure & Data Sharing Policy",
      content: `We do not sell, rent, or trade your personal data. Limited sharing occurs only with:

• Whop & Stripe: Payment metadata required to manage subscriptions.
• Legal Authorities: Only when legally required or protecting intellectual property.`,
    },

    {
      title: "Children’s Privacy & Age Restrictions",
      content: `U.T.M is intended only for individuals aged 18 or older. We do not knowingly collect data from minors.`,
    },

    {
      title: "Governing Law and Jurisdiction",
      content: `This Privacy Policy is governed by the laws of Morocco and international digital commerce standards. Users must ensure compliance with their local regulations.`,
    },

    {
      title: "Changes to This Privacy Policy",
      content: `We may update this Privacy Policy at any time.

Any changes will be posted on this page. Continued use of U.T.M constitutes acceptance of the updated policy.`,
    },
  ]

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Privacy Policy
          </h1>

          <p className="text-base text-gray-600 mb-8">
            University of Trading-MA ("U.T.M", "we", "us", or "our") is dedicated to providing a secure educational environment. By subscribing via Whop or participating in Discord, you agree to this Privacy Policy.
          </p>

          <div className="mb-8 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <p className="text-base text-gray-700">
              By accessing or using U.T.M, you acknowledge and accept this Privacy Policy.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">
                  {index + 1}. {section.title}
                </h2>

                <p className="whitespace-pre-wrap">{section.content}</p>

                {section.subsections && (
                  <div className="mt-4 space-y-3">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="font-bold text-base text-gray-900">
                          {sub.title}
                        </h3>
                        <p className="whitespace-pre-wrap text-gray-700">
                          {sub.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">
              Contact Us
            </h2>

            <p className="text-base text-gray-700">
              For privacy-related questions, contact:
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
  )
}
