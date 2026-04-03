"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const sections = [
    {
      title: "1. ACQUISITION OF DIGITAL PROPRIETARY ASSETS",
      content: `Upon the successful processing of a transaction, University of Trading-MA ("U.T.M") provides immediate, irrevocable, and comprehensive access to its proprietary digital ecosystem. This ecosystem includes, but is not limited to, the Hloser Model, high-frequency video masterclasses, strategic blueprints, and real-time community engagement via Discord. 

By completing the checkout process, the user acknowledges and warrants that the product being acquired is a digital, intangible good. Under international digital commerce standards and the laws of the Kingdom of Morocco, the delivery of such assets occurs instantaneously at the moment of account activation. Therefore, the traditional concept of 'returns' is technically and legally inapplicable, as the digital value cannot be restored to its original unconsumed state.`
    },
    {
      title: "2. STRICT ADHERENCE TO THE NO-REFUND MANDATE",
      content: `U.T.M operates under a rigid 'Strict No-Refund' policy for all membership tiers. This policy is foundational to our operational integrity and is designed to protect our intellectual property from exploitation. 

There are NO exceptions to this mandate. This lack of exception applies regardless of:

• The volume of content accessed or the duration of login sessions.
• Subjective dissatisfaction with market outcomes or trading performance.
• Technical limitations or software incompatibilities on the user's end.
• Claims of 'accidental purchase' or 'buyer’s remorse'.
• Failure to achieve specific profit targets or funded account benchmarks.`
    },
    {
      title: "3. AUTOMATED RENEWAL & BILLING OBLIGATIONS",
      content: `The user accepts full responsibility for the oversight and management of their subscription lifecycle. All memberships are configured for automatic renewal by default. 

Notice of Cancellation: To terminate the billing cycle, users must execute a cancellation request through the Whop dashboard no later than seventy-two (72) hours prior to the scheduled rebilling event. 

Retroactive Refund Requests: Requests for refunds pertaining to automated renewals that have already been processed will be summarily denied. U.T.M is under no legal obligation to issue credits for users who fail to manage their subscription settings before the billing deadline.`
    },
    {
      title: "4. THE 'CONSUMED ACCESS' DOCTRINE",
      content: `In accordance with the digital 'Consumed Access' doctrine, once the unique digital key (Whop/Discord access) is utilized to enter the private domain of U.T.M, the service is deemed 'fully performed.' By accessing even a single proprietary video or receiving a single market forecast, the user waives any statutory right of withdrawal or cooling-off period. This waiver is a mandatory condition of the purchase agreement.`
    },
    {
      title: "5. FRAUDULENT CHARGEBACKS & REVERSAL PROTOCOLS",
      content: `Any attempt to bypass this Policy by initiating a fraudulent chargeback through a banking institution constitutes a material breach of our Terms of Service. 

Enforcement Actions: U.T.M monitors all user interaction via IP logging. In the event of a dispute, we will provide the payment processor with granular evidence of service consumption. Any user attempting a chargeback will be permanently de-platformed and their details reported to fraud prevention databases.`
    },
    {
      title: "6. VERIFIED DUPLICATE TRANSACTION EXCEPTION",
      content: `The sole and exclusive circumstance under which a refund may be contemplated is in the event of a verified systemic duplicate charge. This is strictly defined as an occurrence where the internal billing architecture processes two identical charges for the same product, at the same time, for the same user account. No other grievances or claims will qualify for this exception.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-12">
        {/* العناوين الكبار بحال لي في الصورة */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
            Legal Documentation — 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
            Return <br /> 
            <span className="text-gray-200">Policy</span>
          </h1>
        </div>

        {/* تقسيم الهضرة بنفس ستايل الصورة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {sections.map((section, index) => (
            <section key={index} className="border-t border-gray-100 pt-8">
              <h2 className="text-sm font-bold text-black uppercase mb-6 tracking-widest">
                {section.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* الجزء التحتاني ديال التواصل */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md">
              By accessing this platform, you acknowledge that you have read and agree to our strict Return & Refund Policy. All digital access is considered delivered upon purchase.
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
