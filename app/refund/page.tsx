"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  const sections = [
    {
      title: "IRREVOCABLE NO-REFUND POLICY",
      content: `
Due to the proprietary and digital nature of the services provided by University of Trading-MA ("U.T.M"), we enforce a strict No-Refund Policy. 

Digital Goods Consumption: Our educational materials, including the "Hloser Model," video Masterclasses, and private Discord access, are classified as digital goods. Access is granted immediately upon successful payment. 

Immediate Delivery Waiver: By subscribing, you explicitly acknowledge that you receive immediate access to our digital assets. This immediate delivery constitutes a full execution of the service and, under international digital commerce standards and Moroccan law, waives any "right of withdrawal" or cooling-off period.
      `,
    },
    {
      title: "SUBSCRIPTION CANCELLATIONS",
      content: `
You have the right to cancel your subscription at any time to prevent future billing. 

Cancellation Procedure: All cancellations must be processed via your user dashboard on Whop. 

Notice Period: To avoid being charged for the next billing cycle, you must cancel your subscription at least 3 days prior to the scheduled billing date. 

Access Post-Cancellation: Upon cancellation, you will continue to have access to the platform until the end of your current paid billing period. No partial or prorated refunds will be issued for unused time.
      `,
    },
    {
      title: "CHARGEBACKS & DISPUTES",
      content: `
U.T.M maintains a zero-tolerance policy regarding fraudulent chargebacks. 

Protection of Intellectual Property: Any attempt to initiate a chargeback for services already delivered and accessed will result in an immediate and permanent ban from all U.T.M platforms and communities. 

Evidence Submission: In the event of a dispute, U.T.M reserves the right to provide payment processors (Whop/Stripe) with comprehensive access logs, IP addresses, and signed acceptance of these terms as evidence of service delivery.
      `,
    },
    {
      title: "PAYMENT PROCESSING & SECURITY",
      content: `
All financial transactions are handled exclusively by our authorized third-party processor, Whop. 

Data Security: U.T.M does not store, host, or process your sensitive banking or credit card details. Any issues related to payment failures or billing errors must be addressed through Whop's support infrastructure.
      `,
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Refund Policy
          </h1>

          <p className="text-base text-gray-600 mb-8">
            This Refund Policy outlines the terms and conditions regarding payments, cancellations, and the non-refundable nature of the digital services provided by University of Trading-MA ("U.T.M"). By purchasing a subscription, you agree to be bound by this policy in its entirety.
          </p>

          <div className="mb-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <p className="text-base text-blue-800 font-medium">
              ℹ️ Notice: All sales are final. Please review our policy carefully before completing your purchase.
              (Last Updated: April 3, 2026)
            </p>
          </div>

          <div className="text-base text-gray-700 leading-relaxed space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-semibold text-lg mb-3 text-gray-900">
                  {index + 1}. {section.title}
                </h2>
                <p className="whitespace-pre-wrap">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="font-semibold text-lg mb-3 text-gray-900">
              Questions?
            </h2>
            <p className="text-base text-gray-700">
              If you have any questions regarding our Refund Policy, please contact our support team:
              {" "}
              <a
                href="mailto:support@universityoftradingma.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                support@universityoftradingma.com
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
