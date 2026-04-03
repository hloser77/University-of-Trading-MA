"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const lastUpdated = "April 3, 2026";

  const sections = [
    {
      title: "1. ACQUISITION OF DIGITAL PROPRIETARY ASSETS",
      content: `Upon the successful processing of a transaction, University of Trading-MA ("U.T.M") provides immediate, irrevocable, and comprehensive access to its proprietary digital ecosystem. This ecosystem includes, but is not limited to, the Hloser Model, high-frequency video masterclasses, strategic blueprints, and real-time community engagement via Discord.`
    },
    {
      title: "2. STRICT ADHERENCE TO THE NO-REFUND MANDATE",
      content: `U.T.M operates under a rigid 'Strict No-Refund' policy for all membership tiers. All sales are final[cite: 116, 162, 180]. Digital products cannot be returned, unconsumed, or revoked[cite: 179]. Refunds are not provided under any circumstance after access is delivered[cite: 180].`
    },
    {
      title: "3. AUTOMATED RENEWAL & BILLING OBLIGATIONS",
      content: `Subscriptions renew automatically unless canceled at least 3 days before the next billing date[cite: 167]. Users are solely responsible for managing and cancelling their subscriptions via the Whop dashboard[cite: 183, 199]. No refunds will be granted for processed renewals[cite: 117, 168].`
    },
    {
      title: "4. THE 'CONSUMED ACCESS' DOCTRINE",
      content: `In accordance with the digital 'Consumed Access' doctrine, once access is granted to our digital goods, the service is considered fully performed[cite: 115, 179]. By subscribing, you waive any right to a refund under consumer protection laws for digital content[cite: 164].`
    },
    {
      title: "5. FRAUDULENT CHARGEBACKS & REVERSAL PROTOCOLS",
      content: `Initiating a chargeback for a valid and delivered purchase violates this policy[cite: 192]. We provide timestamped access logs and delivery confirmations to payment processors to contest invalid disputes[cite: 193]. Filing a chargeback may result in permanent removal from the U.T.M platform[cite: 194].`
    },
    {
      title: "6. VERIFIED DUPLICATE TRANSACTION EXCEPTION",
      content: `The sole exception is a verified duplicate charge for the same product purchased unintentionally within the same billing period[cite: 195]. A duplicate charge means the customer was billed twice for the identical membership without placing a second order[cite: 196]. Both transactions must be verifiable in our billing system[cite: 197].`
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-gray-200 pb-8 mb-12 text-center">
            <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
              Return & Refund Policy
            </h1>
            <p className="text-gray-500 font-medium tracking-widest text-xs">
              DOCUMENT ID: UTM-LGL-2026-REF | LAST REVISION: {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-1 uppercase">UTM Legal</span>
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight uppercase">
                    {section.title}
                  </h2>
                </div>
                <div className="p-6 bg-gray-50 border border-gray-100 rounded-lg group-hover:border-gray-300 transition-colors">
                  <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line font-light">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 p-10 bg-red-50 border-2 border-red-100 rounded-xl">
            <h3 className="text-red-900 font-bold text-lg mb-2 italic uppercase text-sm tracking-wider">Legal Acknowledgment</h3>
            <p className="text-red-800 text-sm leading-relaxed">
              By completing your purchase, you confirm that you have read and understood this Return and Refund Policy[cite: 199]. You acknowledge that digital access is delivered immediately and agree that all sales are final[cite: 199].
            </p>
          </div>

          <footer className="mt-12 text-center text-gray-400 text-[10px] uppercase tracking-widest">
            © 2026 University of Trading-MA. All intellectual rights reserved.
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
