"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Disclaimer() {
  const sections = [
    {
      title: "1. EDUCATIONAL PURPOSES ONLY",
      content: `All information provided by University of Trading-MA ("U.T.M"), including the Hloser Model, video masterclasses, and community discussions, is for educational and pedagogical purposes only. 

None of the content shared within our ecosystem constitutes professional financial, investment, or legal advice. U.T.M is not a registered broker-dealer or financial advisor. You are encouraged to consult with a certified financial professional before making any investment decisions. For clarifications, contact support@universityoftradingma.com.`
    },
    {
      title: "2. HIGH-RISK INVESTMENT WARNING",
      content: `Trading financial instruments (Forex, Futures, Options) carries a substantial level of risk and may not be suitable for all individuals. The high degree of leverage can work against you as well as for you. 

You acknowledge that market participation can result in the partial or total loss of your initial capital. You should only invest money that you can afford to lose. U.T.M and its representatives shall not be held liable for any financial losses or damages resulting from your independent trading activities.`
    },
    {
      title: "3. NO PERFORMANCE GUARANTEES",
      content: `Past performance, whether actual or indicated by historical backtesting of the Hloser Model, is not indicative of future results. 

Trading involves psychological and market variables that cannot be fully predicted. U.T.M makes no warranties or representations regarding specific profit outcomes, success rates, or the suitability of any strategy for your personal circumstances. Any trade ideas shared are for illustrative purposes only. Questions regarding our data can be sent to support@universityoftradingma.com.`
    },
    {
      title: "4. TESTIMONIALS & RESULTS DISCLOSURE",
      content: `Testimonials and success stories shared by members of the U.T.M community are individual experiences and do not represent typical results. 

Individual performance depends on numerous factors, including personal dedication, risk management, and market conditions. We do not track the individual trading accounts of our students, and we cannot verify the accuracy of third-party profit claims. For more information on our community standards, contact support@universityoftradingma.com.`
    },
    {
      title: "5. THIRD-PARTY TOOLS & PLATFORMS",
      content: `U.T.M may mention or utilize third-party platforms such as Whop, Discord, or specific charting software. We do not assume responsibility for the technical performance, security, or privacy practices of these external entities. 

Your interaction with any third-party service is governed by their respective terms and policies. Any technical issues regarding your subscription billing should be directed to Whop or our support at support@universityoftradingma.com.`
    },
    {
      title: "6. INTELLECTUAL PROPERTY & COMPLIANCE",
      content: `All strategies and models, specifically the 'Hloser Model', are the proprietary intellectual property of U.T.M. 

Unauthorized sharing, recording, or commercial redistribution of this information is strictly prohibited and will result in immediate termination of access. We reserve the right to pursue legal remedies for intellectual property theft. If you suspect any violation of our proprietary rights, please report it to support@universityoftradingma.com.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[1200px] mx-auto pt-40 pb-24 px-6 md:px-12">
        {/* العناوين الضخمة والنقية */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-medium">
            Risk Disclosure — 2026
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter leading-[0.9]">
            Legal <br /> 
            <span className="text-gray-200">Disclaimer</span>
          </h1>
        </div>

        {/* التقسيم على 2 أعمدة المرتب */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 border-t border-gray-100 pt-16">
          {sections.map((section, index) => (
            <section key={index} className="group">
              <h2 className="text-sm font-bold text-black uppercase mb-6 tracking-widest uppercase">
                {section.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed font-light whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* التذييل مع الإيمايل */}
        <div className="mt-32 pt-12 border-t border-black">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-400 text-xs max-w-md">
              By continuing to use this platform, you acknowledge that you have read and fully understand the risks associated with financial trading and the limitations of our educational services.
            </p>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-400 mb-2 font-bold uppercase">Legal & Compliance</p>
              <a href="mailto:support@universityoftradingma.com" className="text-black font-bold hover:underline tracking-tight">
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
