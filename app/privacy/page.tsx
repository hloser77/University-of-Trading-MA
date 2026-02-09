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
      title: "Information We Collect",
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
      title: "How We Use Your Information",
      content: `We may use the information we collect for various purposes, including but not limited to:

• Operating and maintaining U.T.M and its features.
• Managing memberships and user access.
• Communicating with you regarding your account or subscription.
• Improving educational content and user experience.
• Monitoring platform usage and preventing misuse.
• Complying with applicable legal obligations and protecting our rights.`,
    },
    {
      title: "How We Share Your Information (We do not sell or rent your personal information)",
      content: `We may share limited information only under the following circumstances:

• With service providers (such as Whop) strictly for operational purposes.
• With your consent or when you voluntarily share information within the community.
• When required by law or to enforce our policies and protect our rights.`,
    },
    {
      title: "Your Choices",
      content: `You have certain options regarding the personal information we collect, including:

• Choosing not to provide some types of information, understanding that this may limit access to certain features of U.T.M.
• Requesting updates or corrections to your personal information by contacting us.
• Opting out of promotional communications by following the instructions included in such messages.`,
    },
    {
      title: "Data Security",
      content: `We implement reasonable administrative and technical measures to protect your information from unauthorized access, loss, or misuse.

However, no online platform can guarantee absolute security. By using U.T.M, you acknowledge that data transmission occurs at your own risk.`,
    },
    {
      title: "Children's Privacy",
      content: `U.T.M is not intended for individuals under the age of 18.

We do not knowingly collect personal information from minors.`,
    },
    {
      title: "Regulation & Jurisdiction",
      content: `U.T.M is not a licensed financial advisory firm and does not provide regulated financial services in Morocco or any other jurisdiction.
      
Users are solely responsible for ensuring that their participation in U.T.M complies with local laws and regulations applicable to them.`,
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
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:{" "}
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
