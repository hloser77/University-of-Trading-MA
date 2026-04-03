"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const sections = [
    {
      id: "01",
      title: "Irrevocable No-Refund Mandate",
      content: `University of Trading-MA ("U.T.M") operates under a strict, non-negotiable No-Refund Policy. All sales of digital memberships, including the 'Hloser Model' and private ecosystem access, are final. 

By initiating a purchase, you acknowledge that our services consist of intangible digital assets delivered immediately upon transaction. Once access is granted, the full value of the product is deemed consumed. Under international digital commerce standards, this immediate delivery waives any right to withdrawal or cooling-off periods. We do not provide refunds for dissatisfaction, non-usage, or changes in personal financial status.`
    },
    {
      id: "02",
      title: "Subscription Management & Liability",
      content: `Users are solely responsible for managing their subscription lifecycle through the Whop dashboard. This includes monitoring billing dates and executing cancellations. 

Notice Requirements: Cancellations must be performed at least 48 hours prior to the next billing cycle. U.T.M does not issue retroactive refunds for forgotten renewals or late cancellations. If you encounter technical issues during the cancellation process, you are required to document the error and notify support@universityoftradingma.com immediately before the billing event occurs.`
    },
    {
      id: "03",
      title: "Lifetime Access & Product Evolution",
      content: `Lifetime memberships grant ongoing access to the current and future iterations of our core digital products for as long as the platform remains operational. 

Because digital content cannot be physically returned or 'un-seen', all lifetime membership sales are irrevocable. U.T.M reserves the right to update, modify, or evolve the platform's features to maintain educational standards. For inquiries regarding lifetime seat availability, contact support@universityoftradingma.com.`
    },
    {
      title: "04",
      title: "Chargeback Protection & Security",
      content: `Filing a fraudulent chargeback or payment dispute against a valid purchase is a material breach of our Terms of Service. 

U.T.m utilizes advanced IP-logging and session tracking to provide payment processors with comprehensive proof of service delivery and consumption. Any user who initiates an unauthorized dispute will be permanently blacklisted from the U.T.M ecosystem and reported to global fraud prevention databases. To resolve any billing discrepancies, users must first reach out to support@universityoftradingma.com.`
    },
    {
      id: "05",
      title: "The Single Technical Exception",
      content: `A refund may only be considered in the case of a verified systemic duplicate charge. This occurs only when our billing architecture processes two identical payments for the same user and same product within the same billing period due to a documented technical error. 

If you believe a duplicate charge has occurred, you must submit a claim to support@universityoftradingma.com within 7 days of the transaction. Verified duplicates will be refunded to the original payment method.`
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white">
      <Header />
      
      <main className="max-w-[1400px] mx-auto pt-44 pb-32 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="max-w-4xl mb-32">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-black"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black">
              Legal Division / 2026
            </p>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-bold text-black tracking-tighter leading-[0.8] mb-12">
            Return<br />
            <span className="text-gray-100">Policy.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            This document outlines the strict regulatory framework governing digital acquisitions and refund eligibility within the U.T.M ecosystem.
          </p>
        </div>

        {/* Content Section - Structured Grid */}
        <div className="grid grid-cols-1 gap-y-24">
          {sections.map((section, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gray-100 pt-16 group hover:border-black transition-colors duration-500">
              <div className="md:col-span-1">
                <span className="text-sm font-black text-gray-200 group-hover:text-black transition-colors">
                  {section.id}
                </span>
              </div>
              <div className="md:col-span-4">
                <h2 className="text-xl font-bold text-black uppercase tracking-tight">
                  {section.title}
                </h2>
              </div>
              <div className="md:col-span-7">
                <p className="text-gray-600 text-lg leading-relaxed font-light whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Acknowledgment */}
        <div className="mt-40 p-12 bg-gray-50 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-md">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Agreement at Checkout</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              By completing your transaction on the Whop platform, you warrant that you have read, understood, and voluntarily agreed to this Return Policy in its entirety.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase text-gray-400 mb-2 font-bold">Billing Inquiries</p>
            <a href="mailto:support@universityoftradingma.com" className="text-2xl font-bold text-black hover:tracking-widest transition-all duration-300">
              support@universityoftradingma.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
