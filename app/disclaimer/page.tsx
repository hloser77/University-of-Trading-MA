"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerRefund() {
  const disclaimerItems = [
    {
      title: "Risk of Loss",
      content: "Trading stocks, futures, forex, or cryptocurrencies involves significant risk and may result in partial or total loss of capital.",
    },
    {
      title: "Educational Purposes Only",
      content: "All content, including the Hloser Model, is for informational purposes only and does not constitute financial or trading advice.",
    },
    {
      title: "No Guarantees",
      content: "U.T.M does not guarantee accuracy, profitability, or specific trading results. Past performance does not guarantee future outcomes.",
    },
    {
      title: "Independent Evaluation",
      content: "You are solely responsible for your trading decisions and must conduct your own research.",
    },
    {
      title: "No Fund Management",
      content: "We do not manage user funds or execute trades on behalf of users.",
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
      title: "Final Sale:",
      content: "All payments are non-refundable once access to the digital platform, videos, or the Hloser Model is granted.",
    },
    {
      title: "Instant Access:",
      content: "By subscribing, you acknowledge that you receive immediate delivery of digital goods, which waives any right to a refund under consumer protection laws for digital content.",
    },
    {
      title: "Zero Access to Banking Data:",
      content: "U.T.M does not store or process your sensitive financial information (credit cards, CVV). All payments are handled securely by Whop, and we have no access to your full payment details.",
    },
    {
      title: "Subscription Renewals:",
      content: "Subscriptions renew automatically unless canceled at least 3 days before the next billing date. No refunds will be issued after a renewal is processed.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
      
          
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Disclaimer & Refund Policy: University of Trading-MA (U.T.M)</h1>
          
          <div className="text-base text-gray-700 leading-relaxed space-y-10">
            <div>
              <h2 className="font-semibold text-2xl mb-4 text-gray-900">Comprehensive Disclaimer</h2>
              <p className="mb-6">
                University of Trading-MA (U.T.M) is an educational community focused on sharing trading knowledge and experiences. By participating, you acknowledge the following:
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
              <p className="mt-6 font-medium">Due to the digital nature of our proprietary content, we maintain a strict No-Refund policy to protect our intellectual property.</p>
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
