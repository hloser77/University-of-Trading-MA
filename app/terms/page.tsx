"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. BINDING CONTRACTUAL RELATIONSHIP",
      content: `By accessing the University of Trading-MA ("U.T.M") platform, you are entering into a legally binding contract. This agreement governs your use of our proprietary trading models, including the Hloser Model, and all educational materials. 

If you do not agree to these terms, you must cease all use of our services immediately. For any legal inquiries regarding this contract, contact support@universityoftradingma.com. Your continued use of the service constitutes a digital signature of acceptance.`
    },
    {
      title: "2. INTELLECTUAL PROPERTY PROTECTION",
      content: `The Hloser Model and all associated masterclasses are the exclusive property of U.T.M. You are granted a personal, non-transferable license to view the content. 

Strict Prohibition: Recording, sharing, or reselling our content is a direct violation of this agreement. We actively monitor for intellectual property theft. Any breach will result in immediate termination of access without refund. If you notice any unauthorized use of our materials, please report it to support@universityoftradingma.com.`
    },
    {
      title: "3. FINANCIAL DISCLAIMER & RISK ACKNOWLEDGMENT",
      content: `Trading involves significant risk. U.T.M provides educational content and is not a registered financial advisor. 

All trade ideas and models are for pedagogical purposes only. You agree that U.T.M is not liable for any financial losses you may incur. You are solely responsible for your trading decisions and capital management. For detailed risk disclosures, you can reach out to our team at support@universityoftradingma.com.`
    },
    {
      title: "4. ZERO-TOLERANCE CHARGEBACK POLICY",
      content: `As outlined in our Return Policy, all sales are final. Initiating a chargeback for a delivered digital service is considered a violation of this contract. 

U.T.M reserves the right to contest any fraudulent disputes by providing access logs and proof of delivery to payment processors. If you have a billing issue, you are required to contact support@universityoftradingma.com first to seek a resolution before contacting your bank.`
    },
    {
      title: "5. COMMUNITY CONDUCT & ACCOUNT INTEGRITY",
      content: `Membership in our Discord community is a privilege. Harassment, spamming, or sharing login credentials will result in an immediate ban. 

We utilize IP-tracking to ensure account security. If our system detects multiple simultaneous logins from different locations, your account will be locked. To appeal a security lock, contact support@universityoftradingma.com.`
    },
    {
      title: "6. TERMINATION OF SERVICE",
      content: `U.T.M reserves the right to terminate or suspend access to our services at any time, without prior notice, for conduct that we believe violates these Terms. 

Upon termination, your right to use the platform will cease immediately. For questions regarding account status or termination, please email support@universityoftradingma.com.`
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      
      <main className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-12">
        {/* العناوين الضخمة */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
            Legal Infrastructure — 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
            Terms of <br /> 
            <span className="text-gray-200">Service</span>
          </h1>
        </div>

        {/* تقسيم النصوص على شكل Grid */}
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

        {/* الجزء السفلي مع الإيمايل فقط */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md">
              By accessing this platform, you acknowledge that you have read and agree to our Terms of Service. All rights reserved.
            </p>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-400 mb-2">Legal Support</p>
              <a href="mailto:support@universityoftradingma.com" className="text-black font-bold hover:underline tracking-tight">
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
