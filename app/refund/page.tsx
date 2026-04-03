import React from 'react';

export default function RefundPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      
      <section className="space-y-8 text-gray-300 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">1. No-Refund Mandate</h2>
          <p>
            Due to the proprietary nature of the digital content provided by University of Trading-MA ("U.T.M"), 
            all sales are final. Once access is granted to our private Discord, the Hloser Model, or our video library, 
            the service is considered "consumed" in full. Therefore, no refunds, partial or full, 
            will be issued under any circumstances[cite: 16, 62].
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">2. Immediate Delivery & Waiver</h2>
          <p>
            By subscribing, you acknowledge that you receive immediate delivery of digital goods, 
            which waives any right to a refund under consumer protection laws for digital content[cite: 15, 64].
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-3">3. Subscription Renewals</h2>
          <p>
            Subscriptions renew automatically unless canceled at least 3 days before the next billing date[cite: 17, 67]. 
            No refunds will be issued after a renewal is processed[cite: 17, 68].
          </p>
        </div>

        <div className="pt-10 border-t border-gray-800">
          <p className="text-sm">
            For questions regarding this policy, contact: <strong>support@universityoftradingma.com</strong> [cite: 28, 50, 70]
          </p>
        </div>
      </section>
    </main>
  );
}
