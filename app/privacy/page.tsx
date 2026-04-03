"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  const lastUpdated = "April 3, 2026";

  const sections = [
    {
      title: "1. DATA COLLECTION & SCOPE",
      content: `University of Trading-MA ("U.T.M") is committed to protecting the digital privacy of our global community. When you engage with our platform, we collect minimal personal identifiers necessary to provide our educational services. 

This includes your name, email address, and Discord identifier. We do not collect sensitive personal data such as physical addresses, government IDs, or private financial records unless explicitly required for high-level institutional verification.`
    },
    {
      title: "2. THIRD-PARTY PAYMENT PROCESSING",
      content: `All financial transactions, including subscriptions and renewals, are processed exclusively through Whop. 

Zero-Data Policy: U.T.M does not store, host, or have access to your credit card numbers, CVV codes, or sensitive banking details. Your financial information is protected under Whop's industry-leading encryption and PCI-DSS compliance. By using our service, you acknowledge that any billing-related data is governed by Whop's independent Privacy Policy.`
    },
    {
      title: "3. UTILIZATION OF INFORMATION",
      content: `Your data is utilized strictly for:
• Granting and managing access to the Hloser Model and private Discord channels.
• Communicating critical market forecasts and platform updates.
• Preventing unauthorized account sharing and protecting our intellectual property.
• Complying with international digital trade standards and legal obligations.`
    },
    {
      title: "4. ANALYTICS & SECURITY TRACKING",
      content: `To protect the integrity of our proprietary content, we utilize advanced IP-logging and device metadata tracking. This information is used solely to identify fraudulent 'account-sharing' or unauthorized distribution of our masterclasses. 

We do not sell, rent, or trade your personal information to third-party marketing firms. Your digital footprint within U.T.M remains confidential and is used only to optimize your learning experience.`
    },
    {
      title: "5. DATA RETENTION & DELETION",
      content: `U.T.M retains your information only for as long as your subscription is active. Upon permanent cancellation of your membership and exit from our Discord ecosystem, your personal data will be archived or deleted in accordance with digital record-keeping standards. 

Users may request a summary of the data we hold or request its deletion by contacting our support infrastructure, provided there are no outstanding legal or billing disputes.`
    },
    {
      title: "6. CONSENT & POLICY EVOLUTION",
      content: `By accessing U.T.M, you consent to the collection and use of information as outlined in this policy. As we integrate new technologies and features into the Hloser Model ecosystem, this Privacy Policy may evolve. 

Continued use of the platform following any updates constitutes acceptance of the revised terms. We encourage users to review this document periodically to stay informed about our data protection protocols.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-12">
        {/* العناوين الضخمة بنفس ستايل الصفحات السابقة */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
            Privacy Framework — 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
            Privacy <br /> 
            <span className="text-gray-200">Policy</span>
          </h1>
        </div>

        {/* تقسيم النصوص على شكل Grid كما في الصور التي أعجبتك */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 border-t border-gray-100 pt-16">
          {sections.map((section, index) => (
            <section key={index} className="group">
              <h2 className="text-sm font-bold text-black uppercase mb-6 tracking-widest">
                {section.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed font-light whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* الجزء السفلي للتواصل القانوني */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md">
              © 2026 University of Trading-MA. We take your digital privacy seriously. All data is handled with the highest standards of security.
            </p>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-400 mb-2">Data Protection Officer</p>
              <a href="mailto:support@universityoftradingma.com" className="text-black font-bold hover:underline">
                support@universityoftradingma.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
