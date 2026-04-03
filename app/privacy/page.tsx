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
      title: "DATA COLLECTION & MINIMALIST ARCHITECTURE",
      content: `To ensure maximum security and mitigate risks, U.T.M adheres to a strict policy of data minimization:`,
      subsections: [
        {
          title: "Personal Identification:",
          content: `We collect basic profile data such as your name, email address, and Discord/Whop usernames exclusively to manage your membership and grant access to proprietary content like the Hloser Model.`,
        },
        {
          title: "Zero Financial Storage Mandate (Critical):",
          content: `U.T.M does not store, process, host, or have any access to your sensitive financial information, including credit card numbers, CVV codes, or billing addresses. All financial interactions are handled securely by Whop, our authorized third-party processor, and are governed by their independent security protocols.`,
        },
        {
          title: "Automated Technical Metadata:",
          content: `We collect limited technical data, including IP addresses, device identifiers, and operating system types. This information is used strictly for platform security and to prevent unauthorized account sharing or intellectual property theft.`,
        },
      ],
    },

    {
      title: "STRATEGIC DATA UTILIZATION",
      content: `We utilize collected information solely for operational excellence and the protection of our educational assets:
      
• Membership Management: Verifying active subscriptions and assigning appropriate roles within our private Discord community.
• Service Updates: Notifying users of critical changes to market models, forecasts, or amendments to our legal terms.
• Intellectual Property Protection: Monitoring for fraudulent activities, automated scraping, or unauthorized redistribution of our proprietary content.
• Legal Compliance: Defending against potential disputes, chargebacks, or violations of our Terms of Service.`,
    },

    {
      title: "NON-DISCLOSURE & DATA SHARING LIMITATIONS",
      content: `U.T.M operates a zero-tolerance policy regarding the sale, rental, or trading of your personal data. Limited data sharing occurs only with the following entities:

• Whop & Stripe: Essential payment metadata required for subscription lifecycle management.
• Legal Authorities: Disclosure occurs only when mandated by law or when necessary to protect our intellectual property rights from infringement.`,
    },

    {
      title: "SECURITY PROTOCOLS & USER OBLIGATIONS",
      content: `While we leverage the institutional-grade security of Whop for financial transactions, users are responsible for maintaining the confidentiality of their own account credentials. Unauthorized account access due to user negligence is not the responsibility of U.T.M.`,
    },

    {
      title: "AGE RESTRICTIONS & COMPLIANCE",
      content: `U.T.M is strictly intended for individuals aged 18 or older. We do not knowingly collect or solicit data from minors. If we discover that a minor has provided us with personal information, we will terminate the account and purge the data immediately.`,
    },

    {
      title: "JURISDICTION & GOVERNING LAW",
      content: `This Privacy Policy is governed by the laws of the Kingdom of Morocco and is aligned with international digital commerce standards. Users accessing our services from other jurisdictions are responsible for ensuring compliance with their respective local regulations.`,
    },

    {
      title: "AMENDMENTS & UPDATES",
      content: `U.T.M reserves the right to modify this Privacy Policy at any time to reflect changes in our services or legal obligations. Continued use of the platform after any modifications constitutes an irrevocable acceptance of the updated policy.`,
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
            Last Updated: April 3, 2026
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
              For inquiries regarding your data, contact:
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
