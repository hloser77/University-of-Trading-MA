"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

interface Section {
  title: string
  content: string
  subsection?: {
    title: string
    content: string
  }
}

export default function PrivacyPolicy() {
  const sections: Section[] = [
    {
      title: "Information Collection & Zero Financial Storage Mandate",
      content: `To ensure maximum security for our members, we adhere to a strict policy regarding the types of data we handle:`,
      subsection: {
        title: "Personal Identification:",
        content: `We collect basic information such as your name, email address, and Discord/Whop username solely to manage your membership and provide access to the Hloser Model and our educational videos.`,
      subsection: {
        title: "Zero Access to Banking Data (Critical):",
        content: `U.T.M does not store, process, host, or have any access to your sensitive financial information. All payment transactions, including credit card details, CVV codes, and billing addresses, are handled exclusively by our secure third-party processor, Whop. Your financial interaction is governed by Whop’s independent Privacy Policy and security protocols.`,
      subsection: {
        title: "Automated Technical Data:",
        content: `We collect limited technical data (such as IP addresses, device types, and operating systems) for the strict purposes of analytics and platform security, including the prevention of unauthorized account sharing.`,
    },
    {
      title: "Strategic Use of Information",
      content: `We use the data collected for operational excellence and protection of our intellectual property:

• Membership Management: To verify your active subscription and grant specific roles within our private Discord community.
• Service Updates: To notify you of critical changes to the Hloser Model, market forecasts, or updates to our Terms of Service.
• Intellectual Property Protection: To monitor for fraudulent activities, such as unauthorized screen recording or redistribution of our proprietary educational content.
• Legal Compliance: To meet our legal obligations and defend U.T.M against fraudulent chargeback claims or disputes.`,
    },
    {
      title: "Non-Disclosure & Data Sharing Policy",
      content: `We do not sell, rent, or trade your personal information to any third parties for marketing purposes. Data sharing is strictly limited to:

• Whop & Stripe: Only the metadata necessary to confirm payment status and manage your subscription.
• Legal Necessity: We will disclose information only when legally mandated by court orders or to protect our intellectual property rights in cases of theft or breach of our NDA.`,
    },
    {
      title: "Children’s Privacy & Age Restrictions",
      content: `U.T.M is a professional educational platform strictly intended for individuals aged 18 or older. We do not knowingly collect personal information from minors.`,
    },
    {
      title: "Governing Law and Jurisdiction",
      content: `U.T.M operates as an educational community. While we aim for global compliance, you agree that this Privacy Policy and any data disputes shall be governed by the laws of Morocco and international electronic commerce standards. Users are responsible for ensuring their participation complies with their specific local regulations.`,
    },
    {
      title: "Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time.
      
Any changes will be posted on this page, and continued use of U.T.M constitutes acceptance of the updated policy.`,
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
          
          <p className="text-base text-gray-600 mb-8">
            University of Trading-MA ("U.T.M", "we", "us", or "our") is dedicated to providing a secure educational environment for traders. This Privacy Policy outlines our rigorous standards for collecting, using, and safeguarding your personal information. By accessing our services, subscribing via Whop, or participating in our Discord community, you expressly acknowledge and agree to the practices described in this comprehensive policy.
          </p>

          <div className="mb-8 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <p className="text-base text-gray-700">
              By accessing or using U.T.M, you acknowledge and agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-8">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">{index + 1}. {section.title}</h2>
                <p className="whitespace-pre-wrap">{section.content}</p>
                {section.subsection && (
                  <div className="mt-4">
                    <h3 className="font-bold text-base mb-2 text-gray-900">{section.subsection.title}</h3>
                    <p className="whitespace-pre-wrap">{section.subsection.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">Contact Us</h2>
            <p className="text-base text-gray-700">
              For any questions, data requests, or concerns regarding your privacy, please contact our support team at:{" "}
              <a href="mailto:support@universityoftradingma.com" className="text-blue-600 underline hover:text-blue-800">
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
