"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const lastUpdated = "April 3, 2026";

  const sections = [
    {
      title: "1. IRREVOCABLE NO-REFUND POLICY",
      content: `Due to the proprietary and digital nature of the services provided by University of Trading-MA ("U.T.M"), we enforce a strict No-Refund Policy. 

Digital Goods Consumption: Our educational materials, including the 'Hloser Model', video masterclasses, and Discord access, are classified as digital goods. Access is granted immediately upon successful payment. 

Immediate Delivery Waiver: By subscribing, you explicitly acknowledge that you receive immediate access to our digital assets. This immediate delivery constitutes a full execution of the service and waives any 'right of withdrawal' or cooling-off period. All sales are final.`
    },
    {
      title: "2. SUBSCRIPTION CANCELLATIONS",
      content: `You have the right to cancel your subscription at any time to prevent future billing. 

Procedure: All cancellations must be processed via your user dashboard on Whop. To avoid being charged for the next billing cycle, you must cancel at least 48 hours before your renewal date. 

No Retroactive Refunds: Cancellations stop future charges but do not entitle the user to a refund for previous payments or the current active month. For assistance with cancellations, contact support@universityoftradingma.com.`
    },
    {
      title: "3. LIFETIME MEMBERSHIPS",
      content: `A lifetime membership is a one-time purchase that provides ongoing access to U.T.M for the lifespan of the product. 

Because digital content cannot be returned once access is provided, all lifetime membership sales are strictly final and non-refundable. If you have questions regarding lifetime access, reach out to support@universityoftradingma.com.`
    },
    {
      title: "4. CHARGEBACKS AND DISPUTES",
      content: `Initiating a chargeback for a valid and delivered purchase violates this policy. U.T.M monitors all user interaction via timestamped access logs. 

In the event of a dispute, we will provide full proof of service delivery to payment processors. Filing a fraudulent chargeback will result in permanent removal from the U.T.M platform and restrictions on future access. Please contact support@universityoftradingma.com to resolve any billing issues before contacting your bank.`
    },
    {
      title: "5. THE SINGLE EXCEPTION (DUPLICATE CHARGE)",
      content: `Refunds are issued only in the case of a verified duplicate charge for the exact same product purchased unintentionally within the same billing period. 

A duplicate charge means the customer was billed twice for the identical membership without placing a second order. If confirmed by our billing system, the duplicate payment will be refunded. All refund claims for duplicate charges must be sent to support@universityoftradingma.com.`
    },
    {
      title: "6. AGREEMENT AT CHECKOUT",
      content: `By completing a purchase, the user confirms:
• They have read and understand this Return and Refund Policy.
• They acknowledge that digital access is delivered immediately.
• They agree that all sales are final.
• They understand that refunds will not be issued after access is granted.
• For questions, they will contact support@universityoftradingma.com.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[800px] mx-auto pt-40 pb-24 px-6">
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

        {/* النص مرتب في عمود واحد باش ما يجيش مخربق في التلفون */}
        <div className="space-y-16 border-t border-gray-100 pt-16">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-sm font-bold text-black uppercase mb-6 tracking-widest">
                {section.title}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed font-light whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* الخاتمة مع الإيمايل */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md italic">
              Last Updated: {lastUpdated}. By purchasing, you agree to these terms in full.
            </p>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-400 mb-2 font-bold">Billing Support</p>
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
