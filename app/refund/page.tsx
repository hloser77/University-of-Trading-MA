"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const lastUpdated = "April 3, 2026";

  const sections = [
    {
      title: "1. ACQUISITION OF DIGITAL PROPRIETARY ASSETS",
      content: `Upon the successful processing of a transaction, University of Trading-MA ("U.T.M") provides immediate, irrevocable, and comprehensive access to its proprietary digital ecosystem. This ecosystem includes, but is not limited to, the Hloser Model, high-frequency video masterclasses, strategic blueprints, and real-time community engagement via Discord. 

By completing the checkout process, the user acknowledges and warrants that the product being acquired is a digital, intangible good. Under international digital commerce standards and the laws of the Kingdom of Morocco, the delivery of such assets occurs instantaneously at the moment of account activation. Therefore, the traditional concept of "returns" is technically and legally inapplicable, as the digital value cannot be restored to its original unconsumed state.`
    },
    {
      title: "2. STRICT ADHERENCE TO THE NO-REFUND MANDATE",
      content: `U.T.M operates under a rigid "Strict No-Refund" policy for all membership tiers (Monthly, Quarterly, Annual, and Lifetime). This policy is foundational to our operational integrity and is designed to protect our intellectual property from exploitation. 

There are NO exceptions to this mandate. This lack of exception applies regardless of:
• The volume of content accessed or the duration of login sessions.
• Subjective dissatisfaction with the market outcomes or trading performance.
• Technical limitations or software incompatibilities on the user's end.
• Claims of "accidental purchase" or "unauthorized use" by a family member or third party.
• Sudden changes in the user’s financial liquidity or personal circumstances.
• Failure to achieve specific profit targets or funded account benchmarks.`
    },
    {
      title: "3. AUTOMATED RENEWAL & BILLING OBLIGATIONS",
      content: `The user accepts full responsibility for the oversight and management of their subscription lifecycle. All memberships are configured for automatic renewal by default to ensure uninterrupted access to our high-level forecasts and live sessions. 

Notice of Cancellation: To terminate the billing cycle, users must execute a cancellation request through the Whop dashboard no later than seventy-two (72) hours prior to the scheduled rebilling event. 

Retroactive Refund Requests: Requests for refunds pertaining to automated renewals that have already been processed will be summarily denied. U.T.M is under no legal obligation to issue credits for users who fail to manage their subscription settings before the billing deadline.`
    },
    {
      title: "4. THE "CONSUMED ACCESS" DOCTRINE",
      content: `In accordance with the digital "Consumed Access" doctrine, once the unique digital key (Whop/Discord access) is utilized to enter the private domain of U.T.M, the service is deemed "fully performed." By accessing even a single proprietary video or receiving a single market forecast, the user waives any statutory right of withdrawal or cooling-off period. This waiver is a mandatory condition of the purchase agreement and is non-negotiable.`
    },
    {
      title: "5. FRAUDULENT CHARGEBACKS & REVERSAL PROTOCOLS",
      content: `Any attempt to bypass this Policy by initiating a fraudulent chargeback or payment dispute through a banking institution constitutes a material breach of our Terms of Service. 

Enforcement Actions: U.T.M monitors all user interaction via IP logging and metadata tracking. In the event of a dispute, we will provide the payment processor (Whop/Stripe) with granular evidence of service consumption. Furthermore, any user attempting a chargeback will be permanently de-platformed, their IP address blacklisted, and their details reported to cross-platform fraud prevention databases.`
    },
    {
      title: "6. VERIFIED DUPLICATE TRANSACTION EXCEPTION",
      content: `The sole and exclusive circumstance under which a refund may be contemplated is in the event of a verified systemic duplicate charge. This is strictly defined as an occurrence where the internal billing architecture of Whop processes two identical charges for the same product, at the same time, for the same user account. In such a documented technical failure, the redundant payment will be remitted to the original payment method. No other grievances or claims will qualify for this exception.`
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
            <p className="text-gray-500 font-medium">
              DOCUMENT ID: UTM-LGL-2026-REF | LAST REVISION: {lastUpdated}
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1">UTM LEGAL</span>
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
            <h3 className="text-red-900 font-bold text-lg mb-2 italic">Legal Acknowledgment</h3>
            <p className="text-red-800 text-sm leading-relaxed">
              By proceeding with the transaction, you acknowledge that you have read this expansive Return & Refund Policy in its entirety. You confirm your understanding that digital assets are non-returnable and that your access is delivered immediately. You hereby waive any and all future claims to refunds or payment reversals based on service dissatisfaction or non-usage.
            </p>
          </div>

          <footer className="mt-12 text-center text-gray-400 text-xs">
            © 2026 University of Trading-MA. All intellectual rights reserved. | Inquiry: support@universityoftradingma.com
          </footer>
        </div>
      </main>
      <Footer />
    </>
  );
}
