"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const sections = [
    {
      title: "1. IRREVOCABLE NO-REFUND POLICY",
      content: `University of Trading-MA ("U.T.M") operates under a strict No-Refund Policy. All purchases of digital memberships, including the 'Hloser Model' and private ecosystem access, are final once access is granted. 

Because digital goods cannot be returned, unconsumed, or revoked, the full value is considered delivered at the moment of activation. For any inquiries, contact support@universityoftradingma.com.`
    },
    {
      title: "2. USER RESPONSIBILITY & MANAGEMENT",
      content: `Customers are solely responsible for managing their subscriptions via the Whop dashboard. This includes cancelling before the renewal date and monitoring billing cycles. 

We do not issue refunds for late cancellations, forgotten renewals, or periods of inactivity. If you face technical issues, notify support@universityoftradingma.com immediately.`
    },
    {
      title: "3. LIFETIME MEMBERSHIPS",
      content: `A lifetime membership is a one-time purchase providing ongoing access. Because digital content cannot be returned once provided, all lifetime sales are final and non-refundable. 

U.T.M reserves the right to evolve the platform features over time. For questions regarding lifetime access, reach out to support@universityoftradingma.com.`
    },
    {
      title: "4. THE 'CONSUMED ACCESS' DOCTRINE",
      content: `In accordance with digital trade standards, once the unique digital key (Whop/Discord access) is utilized, the service is deemed 'fully performed.' 

By accessing our proprietary masterclasses or community, the user waives any statutory right of withdrawal. For more details on this protocol, email support@universityoftradingma.com.`
    },
    {
      title: "5. CHARGEBACKS & DISPUTES",
      content: `Initiating a chargeback for a delivered purchase violates this policy. U.T.M provides timestamped access logs to payment processors to contest invalid disputes. 

Filing a fraudulent chargeback will result in permanent removal from the platform. Please resolve billing issues directly with support@universityoftradingma.com before contacting your bank.`
    },
    {
      title: "6. SINGLE EXCEPTION (DUPLICATE CHARGE)",
      content: `Refunds are issued ONLY for verified systemic duplicate charges (billed twice for the same product at the same time). 

All duplicate charge claims must be submitted to support@universityoftradingma.com within 7 days. Verified duplicates will be refunded to the original payment method.`
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
