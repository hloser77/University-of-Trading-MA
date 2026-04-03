"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const sections = [
    {
      title: "1. IRREVOCABLE NO-REFUND POLICY",
      content: `University of Trading-MA ("U.T.M") operates under a strict, non-negotiable No-Refund Policy.
      
This applies to all membership tiers: Monthly ($150), Quarterly ($400), and Yearly ($1500). 

Due to the digital nature of the 'Hloser Model' and immediate delivery of proprietary trading strategies, all sales are final once access is granted. We do not offer pro-rated refunds or credit for unused subscription time.`
    },
    {
      title: "2. AUTOMATED RENEWAL & BILLING OBLIGATIONS",
      content: `By subscribing to any U.T.M plan via Whop, you acknowledge and agree that your subscription will automatically renew at the end of each billing cycle. 

You are solely responsible for managing your subscription lifecycle. To avoid future charges, cancellations must be processed through your Whop dashboard at least 48 hours before the renewal date.

U.T.M is not liable for forgotten renewals or failure to cancel in time.`
    },
    {
      title: "3. DIGITAL ASSET CONSUMPTION (THE 'HLOSER' PROTOCOL)",
      content: `Our services consist of intangible, digital assets including video masterclasses, daily forecasts, and private ecosystem access. 

In accordance with international digital trade standards, once the unique access key is utilized or the content is viewed, the service is deemed 'fully performed'.

This immediate consumption constitutes a waiver of any statutory 'right of withdrawal' or cooling-off period.`
    },
    {
      title: "4. ZERO-TOLERANCE CHARGEBACK POLICY",
      content: `Initiating a chargeback or payment dispute for a delivered and active membership is a direct violation of these terms. U.T.M utilizes advanced IP-logging and timestamped session tracking to provide payment processors with comprehensive proof of service delivery.

Any user who initiates a fraudulent dispute will be permanently banned from the U.T.M platform. For billing discrepancies, you must contact support@universityoftradingma.com before contacting your bank.`
    },
    {
      title: "5. SUBSCRIPTION UPGRADES & MODIFICATIONS",
      content: `If you choose to upgrade from a Monthly to a Yearly plan, the new billing rate will apply immediately. Previous payments for the current month are non-refundable and cannot be applied as a discount towards the upgrade unless specified by a promotional offer. 

U.T.M reserves the right to modify pricing or service features at its discretion to maintain educational standards.`
    },
    {
      title: "6. THE SINGLE TECHNICAL EXCEPTION",
      content: `The only circumstance under which a refund may be considered is a verified systemic duplicate charge. This is defined as the billing system charging the same user twice for the exact same product and billing period due to a technical error. 

Claims for duplicate charges must be submitted to support@universityoftradingma.com within 7 days of the transaction.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-12">
        {/* العنوان الضخم والنقي */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
            Legal Documentation — 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
            Return <br /> 
            <span className="text-gray-200">Policy</span>
          </h1>
        </div>

        {/* التقسيم على 2 أعمدة لي كيعجبك (Grid Layout) */}
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

        {/* التذييل مرتب فيه الإيمايل فقط */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md">
              By completing a purchase, you confirm that you have read and agree to this Return Policy in its entirety.
            </p>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-400 mb-2">Legal Support</p>
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
