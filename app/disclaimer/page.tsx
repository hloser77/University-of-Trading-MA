"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerRefund() {
  const disclaimerItems = [
    {
      title: "Risk of Loss",
      content: "Trading stocks, futures, forex, or cryptocurrencies involves significant risk and may result in partial or total loss of capital. Only trade with money you can afford to lose.",
    },
    {
      title: "Educational Purposes Only",
      content: "All content provided within U.T.M is for educational and informational purposes only and does not constitute financial, investment, or trading advice.",
    },
    {
      title: "No Guarantees",
      content: "U.T.M does not guarantee accuracy, profitability, or specific trading results. Past performance is not indicative of future outcomes.",
    },
    {
      title: "Independent Evaluation",
      content: "All trading decisions are made independently by you. You are solely responsible for evaluating any information shared.",
    },
    {
      title: "No Fund Management",
      content: "U.T.M does not manage user funds, execute trades on behalf of users, or provide personalized investment advice.",
    },
    {
      title: "Testimonials",
      content: "Any testimonials or shared results reflect individual experiences and do not represent typical or guaranteed outcomes.",
    },
    {
      title: "Not an Endorsement",
      content: "Mentions of brokers, platforms, or financial tools do not constitute endorsements. Always perform your own due diligence.",
    },
    {
      title: "Accepted Risk",
      content: "By using U.T.M, you accept all risks associated with trading and agree that U.T.M is not liable for any losses or damages.",
    },
  ]

  const refundItems = [
    {
      title: "All Sales Are Final",
      content: "Due to the digital nature of our services and immediate access to content, all payments are non-refundable.",
    },
    {
      title: "Recurring Payments",
      content: "Subscriptions renew automatically unless canceled at least 3 days before the next billing date.",
    },
    {
      title: "Cancellation Responsibility",
      content: "Late cancellations do not prevent the next charge",
    },
    {
      title: "No Refund After Renewal",
      content: "Once a renewal payment is processed, no refunds will be issued under any circumstances.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
      
          
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Disclaimer & Refund Policy</h1>
          
          <div className="text-base text-gray-700 leading-relaxed space-y-10">
            <div>
              <h2 className="font-semibold text-2xl mb-4 text-gray-900">Disclaimer</h2>
              <p className="mb-6">
                University of Trading MA (U.T.M) is an educational community focused on sharing trading knowledge, insights, and experiences. By participating in U.T.M, you acknowledge and agree to the following:
              </p>
              <div className="space-y-4">
                {disclaimerItems.map((item) => (
                  <div key={item.title}>
                    <span className="font-semibold text-gray-900">{item.title}:</span> {item.content}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-2xl mb-4 text-gray-900">Refund Policy</h2>
              <div className="space-y-4">
                {refundItems.map((item) => (
                  <div key={item.title}>
                    <span className="font-semibold text-gray-900">{item.title}:</span> {item.content}
                  </div>
                ))}
              </div>
              <p className="mt-6 font-medium">By subscribing, you confirm that you have read, understood, and agreed to this Refund Policy.</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="font-semibold text-xl mb-3 text-gray-900">Contact</h2>
              <p>
                For any questions or concerns regarding these policies, please contact:{" "}
                <a href="mailto:support@universityoftradingma.com" className="text-blue-600 underline hover:text-blue-800">
                  support@universityoftradingma.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
