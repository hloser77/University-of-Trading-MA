"use client"

import { Check, Zap, Target, Rocket, X } from "lucide-react"
import { useEffect, useState } from "react"

const plans = [
  {
    name: "Monthly",
    price: "150",
    period: "p/month",
    badge: "Starter",
    description: "Begin your journey",
    icon: Target,
    features: [
      { name: "Education videos", included: true },
      { name: "4 Advanced videos every month", included: true },
      { name: "Daily & Weekly Forecasts", included: true },
      { name: "One to one <1h per month>", included: true },
      { name: "Live trading <Forex and future>", included: false },
      { name: "Hloser Model <Forex & future>", included: false },
      { name: "Weekly Entry Strategy Videos", included: false },
      { name: "Priority Vip Support", included: false },
    ],
    cta: "SOON",
    link: "#",
    popular: false,
  },
  {
    name: "Quarterly",
    price: "133",
    period: "p/month",
    badge: "Popular",
    description: "Accelerate growth",
    icon: Zap,
    features: [
      { name: "Education videos", included: true },
      { name: "4 Advanced videos every month", included: true },
      { name: "Daily & Weekly Forecasts", included: true },
      { name: "One to one <2h per month>", included: true },
      { name: "Weekly Entry Strategy Videos", included: true },
      { name: "Live trading <Forex and future>", included: false },
      { name: "Hloser Model <Forex & future>", included: false },
      { name: "Priority Vip Support", included: false },
    ],
    cta: "SOON",
    link: "#",
    popular: false,
    elite: true,
    saving: "07 april",
  },
  {
    name: "Yearly",
    price: "125",
    period: "p/month",
    badge: "Value",
    description: "Master the market",
    icon: Zap,
    features: [
      { name: "Live trading <Forex and future>", included: true },
      { name: "Hloser Model <Forex & future>", included: true },
      { name: "One to one <Unlimited>", included: true },
      { name: "Education videos", included: true },
      { name: "4 Advanced videos every month", included: true },
      { name: "Daily & Weekly Forecasts", included: true },
      { name: "Weekly Entry Strategy Videos", included: true },
      { name: "Priority Vip Support", included: true },
    ],
    cta: "SOON",
    link: "#",
    popular: true,
    saving: "07 april",
  },
  {
    name: "Free Community",
    price: "Free",
    period: "",
    badge: "Community",
    description: "Join for free",
    icon: Rocket,
    features: [
      { name: "Basic market insights", included: true },
      { name: "Supportive community chat", included: true },
      { name: "Occasional market updates", included: true },
      { name: "Access to general discussions", included: true },
      { name: "A simple start before upgrading", included: true },
    ],
    cta: "Join Free discord",
    link: "https://whop.com/university-of-trading-ma/universityoftradingma/",
    popular: false,
  },
]

export default function PlansSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("plans-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div id="plans-section" className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4" id="plans">
          <div className="inline-block">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30">
              Simple, Transparent Pricing
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
            Choose your <span className="text-accent">trading path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start where you are. Grow at your pace. Unlock unlimited potential with our private trading community.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative group ${isVisible ? `animate-slide-up` : "opacity-0"}`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white transition-all ${
                      plan.popular
                        ? "bg-accent shadow-lg shadow-accent/50"
                        : plan.elite
                          ? "bg-gradient-to-r from-accent to-primary shadow-lg shadow-accent/50"
                          : "bg-muted"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div
                  className={`rounded-2xl border transition-all duration-300 h-full flex flex-col p-8 group-hover:shadow-2xl ${
                    plan.elite
                      ? "border-accent/50 bg-gradient-to-br from-card to-card/50 shadow-xl shadow-accent/20 hover:shadow-accent/40"
                      : plan.popular
                        ? "border-accent/40 bg-card shadow-lg shadow-accent/10 hover:border-accent/60"
                        : "border-border bg-card/50 hover:border-accent hover:bg-card"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      plan.elite || plan.popular ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Plan Info */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                      {plan.saving && (
                        <span className="px-2 py-1 rounded text-xs font-bold text-green-400 bg-green-500/10 border border-green-500/30">
                          {plan.saving}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      {plan.name === "Free Community" ? (
                        <span className="text-4xl font-bold text-blue-500">Free</span>
                      ) : (
                        <>
                          <span
                            className={`text-4xl font-bold ${plan.elite || plan.popular ? "text-accent" : "text-foreground"}`}
                          >
                            ${plan.price}
                          </span>
                          <span className="text-muted-foreground text-sm">{plan.period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href={plan.link} className="w-full block">
                    <button
                      className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-300 hover:scale-105 active:scale-95 text-sm ${
                        plan.elite
                          ? "bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/30"
                          : plan.popular
                            ? "bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20"
                            : "border-2 border-accent/30 text-accent hover:border-accent hover:bg-accent/10"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </a>

                  {/* Features */}
                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature.name} className={`flex items-start gap-3 ${!feature.included && "opacity-40"}`}>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? plan.elite || plan.popular
                                ? "bg-accent/20"
                                : "bg-muted"
                              : "bg-muted/10"
                          }`}
                        >
                          {feature.included ? (
                            <Check
                              className={`w-3 h-3 ${plan.elite || plan.popular ? "text-accent" : "text-muted-foreground"}`}
                            />
                          ) : (
                            <X className="w-3 h-3 text-muted-foreground/30" />
                          )}
                        </div>
                        <span className={`text-sm leading-relaxed ${feature.included ? "text-foreground/90" : "text-muted-foreground"}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 pt-20 border-t border-border text-center ">
          <div className="mb-16">
            <div className="inline-block">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/30">
                Included in all plans
              </span>
            </div>
            <h3 className="text-5xl md:text-4xl font-bold text-foreground mt-4 mb-2">
              Everything you need to <span className="text-accent">succeed</span>
            </h3>
            <p className="text-muted-foreground text-lg">Professional tools and resources for every level of trader</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Private Community", desc: "Join a high-caliber network of professional traders. Surround yourself with a serious community focused on growth, real-time collaboration, and shared success." },
              { title: "Daily ICT Execution", desc: "Gain an unfair advantage with exclusive daily breakdowns. We identify high-probability ICT setups, liquidity pools, and institutional order flow so you know exactly where the market is headed." },
              { title: "The Weekly Playbook", desc: "Strategic weekend analysis to map out the upcoming week. Identify key HTF (Higher Time Frame) levels and bias before the London open on Monday." },
              { title: "The Masterclass Vault", desc: "Instant access to our full curriculum. From ICT core essentials to advanced Hloser Model execution—everything you need to build a mechanical trading system." },
              { title: "Capital Preservation", desc: "Master the math behind the money. Learn the exact risk-management protocols used by 7-figure funded traders to protect capital and ensure long-term survival." },
              { title: "Direct Mentorship", desc: "No more guessing. Get direct, priority access to mentors to audit your trades, answer your questions, and bridge the gap between theory and consistent profits." },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-gradient-to-br from-card to-card/50 border border-border rounded-xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Professional numbered badge */}
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 font-semibold text-sm group-hover:bg-accent/20 transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-sm mb-2">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
