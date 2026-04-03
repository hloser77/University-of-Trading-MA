"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. LEGAL BINDING AGREEMENT & JURISDICTION",
      content: `By accessing, browsing, or utilizing the digital infrastructure provided by University of Trading-MA ("U.T.M"), including but not limited to our proprietary Discord servers, Whop storefront, and educational web portal, you (the "User") hereby enter into a legally binding contractual agreement. 

This agreement is governed by and construed in accordance with the laws of the Kingdom of Morocco and international digital commerce standards. Your continued interaction with the platform constitutes an absolute and irrevocable acceptance of these Terms. If you do not agree with any specific provision outlined herein, you are strictly prohibited from using the service and must terminate your access immediately. U.T.M reserves the right to update these terms at any time without prior individual notice.`
    },
    {
      title: "2. INTELLECTUAL PROPERTY & PROPRIETARY ACCESS",
      content: `All educational assets, including but not limited to the 'Hloser Model', video masterclasses, strategy blueprints, trade idea frameworks, proprietary algorithms, and real-time market forecasts, are the exclusive intellectual property of U.T.M. 

License Grant: Upon successful payment, users are granted a single, non-exclusive, non-transferable, and revocable license for personal, non-commercial, pedagogical use only. 

Strict Prohibitions: Any attempt to record, screenshot, download, redistribute, or reverse-engineer the proprietary content is a material breach of this contract. Unauthorized dissemination of intellectual property will result in immediate, permanent termination of access without refund, and U.T.M explicitly reserves the right to pursue civil and criminal legal action for damages, lost revenue, and intellectual theft.`
    },
    {
      title: "3. COMPREHENSIVE FINANCIAL RISK DISCLOSURE",
      content: `Trading financial instruments, including Foreign Exchange (Forex), Futures, and Options, carries an inherent and substantial degree of risk. 

Educational Purpose Only: U.T.M and its representatives are not registered financial advisors, brokers, or fiduciaries. All materials provided are strictly for pedagogical purposes and do not constitute professional investment, tax, or legal advice. 

Assumption of Risk: You acknowledge that market participation may result in the partial or total loss of your invested capital. U.T.M makes no warranties regarding specific profit outcomes or success rates. Past performance shared within the community is not indicative of future results, and you are solely responsible for your independent risk management and trading execution.`
    },
    {
      title: "4. THE 'NO-REFUND' MANDATE & DIGITAL PERFORMANCE",
      content: `In accordance with the digital 'Consumed Access' doctrine, U.T.M enforces a strict no-refund policy for all subscription tiers. Because our services provide immediate and full access to intangible digital goods (including the Hloser Model and private community resources), the service is considered 'fully performed' at the moment of account activation. 

By completing a purchase, the user explicitly waives any statutory right of withdrawal or 'cooling-off' period. Refunds will not be issued under any circumstances, including but not limited to: dissatisfaction with the content, lack of participation, changes in personal financial status, or technical issues on the user's side. All sales are final and non-negotiable.`
    },
    {
      title: "5. SUBSCRIPTION LIFECYCLE & RENEWAL OBLIGATIONS",
      content: `The User accepts full and sole responsibility for the management and oversight of their subscription. All memberships are configured for automatic renewal by default to ensure continuity of service. 

Cancellation Notice: To prevent the next billing cycle, users must process a cancellation via their Whop dashboard at least seventy-two (72) hours prior to the renewal date. 

No Retroactive Credits: Cancellations stop future billing but do not entitle the user to a refund for previous or currently active billing periods. U.T.M will not issue refunds for forgotten cancellations or periods of inactivity.`
    },
    {
      title: "6. COMMUNITY CONDUCT & IP PROTECTION PROTOCOLS",
      content: `To maintain the integrity of the U.T.M ecosystem, users must adhere to a strict code of professional conduct. Harassment, spamming, or unauthorized promotion of external services will lead to immediate removal. 

Anti-Sharing Security: Sharing login credentials (Whop/Discord) with third parties is strictly prohibited. U.T.M utilizes advanced IP-tracking and metadata analysis to monitor for unauthorized access. Any detected account-sharing will result in an automatic, permanent ban without refund. We reserve the right to report fraudulent activity to payment processors and fraud-prevention databases.`
    },
    {
      title: "7. LIMITATION OF LIABILITY & INDEMNIFICATION",
      content: `U.T.M shall not be held liable for any direct, indirect, incidental, or consequential losses resulting from the use of our educational materials. You agree to indemnify and hold harmless U.T.M from any claims, damages, or expenses (including legal fees) arising from your trading activities, breach of these Terms, or violation of third-party rights.`
    },
    {
      title: "8. MANDATORY NON-DISCLOSURE AGREEMENT (NDA)",
      content: `By accessing U.T.M, you are legally bound by a duty of strict confidentiality. You agree not to disclose internal strategies, entry models, proprietary indicators, or private community discussions to any third party or public forum. This obligation survives the termination of your subscription and remains in effect indefinitely. Any breach of this confidentiality constitutes a material violation of this agreement.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-12">
        {/* العناوين الكبيرة بنفس ستايل الصورة */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
            Legal Framework — 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
            Terms of <br /> 
            <span className="text-gray-200">Service</span>
          </h1>
        </div>

        {/* تقسيم الهضرة المطولة على شكل Grid */}
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

        {/* التوقيع القانوني في الأسفل */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md">
              © 2026 University of Trading-MA. All intellectual property rights are reserved globally. By continuing, you confirm your absolute agreement to these Terms.
            </p>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-400 mb-2">Primary Jurisdiction</p>
              <p className="text-black font-bold tracking-tight">
                Kingdom of Morocco
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
