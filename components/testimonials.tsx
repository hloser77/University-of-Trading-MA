"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import NextImage from "next/image"

const testimonials = [
  {
    title: "Omar Saidi",
    content: "I’ve been in so many groups, but this one is on another level. The daily trade ideas are just so clear and easy to execute, even if you’re busy. Thanks to your guidance and the weekly forecasts, I finally managed to secure a $2,400 payout today! It feels amazing to finally see some real profit after all the struggle. If you're serious about passing your funding and actually getting paid, don't sleep on this service. Big thanks bro! 🚀💪",
    rating: 5,
    image: "",
  },
  {
    title: "Salma Bennani",
    content: "Best investment I’ve ever made in my trading career. الخدمة ناضية بزاف، خصوصاً الـ Weekly Forecast لي كيعطيك الخريطة ديال السوق. I just received my first payout, thanks to your guidance brother!",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532273/images_ewk8wa.jpg",

  },
  {
    title: "Youssef Alami",
    content: "What I love most is the 24/7 chat access, ديما كاين لي يجاوبك ويوجهك. The community is very supportive and the trade ideas are high probability. My trading account is finally in the green, l3az!",
    rating: 5,
    image: "https://res.cloudinary.com/da63nggkh/image/upload/v1767382619/premium_photo-1689568126014-06fea9d5d341_ntvse7.jpg",
  },
  {
    title: "Hind Elidrissi",
    content: "Daily trade ideas are fire! 🔥 ديما كاينين فرص واعرين وكلشي مشروح فالفيديوهات. Since I joined, my win rate has increased significantly. Passing the funding test was just a matter of time with you.",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532392/images_1_lclmbm.jpg",
  },
  {
    title: "Mohamed Tazi",
    content: "Big thanks for the 24/7 support and the high-quality content. الكروب فيه ناس ناضيين والمعلومات لي كتبارطاجي نادرة. I successfully passed my test and I’m now managing a funded account comfortably.",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532342/141d097317cfdbbfbf193d398907ae22_yuqa9f.jpg",
  },
  {
    title: "Sara Elfassi",
    content: "My trading results improved 100% since I joined the Whop group. التحليلات اليومية ديالك خلاتني ناخد صفقات واعرين بزاف. I just finished my evaluation and I’m officially a funded partner now. Amazing",
    rating: 5,
    image: "",
  },
  {
    title: "Hamza Alaoui",
    content: "The ROI on this service is insane! خلصت الاشتراك ورجعتو أضعاف مضاعفة من أول صفقة. Your analysis is top tier and helped me pass my funding challenge in record time. Totally worth it!",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532365/88e34a0b78b1dde29b84845a3f83e144_hr1mxn.jpg",
  },
  {
    title: "Meriem Belkhayat",
    content: "A five-star service without any doubt! كلشي كاين هنا: التعليم، التوصيات، والكومينيطي الواعرة. I’m officially a funded trader today and I couldn’t have done it without your help. Thank you so much!",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532439/istockphoto-1490542759-2048x2048_yalafc.jpg",
  },
  {
    title: "Ahmed Mansouri",
    content: "Honestly, this service is a game changer! بسباب الـ Daily ideas ديالك قدرت نفاليدي التست ديالي فقل من سيمانة. The analysis is super clean and very easy to follow for anyone looking for real results",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532474/fad5e79954583ad50ccb3f16ee64f66d_ocs4wk.jpg",
  },
  {
    title: "Zineb Chraibi",
    content: "I’ve never seen such accurate analysis in my life. بفضل الله ثم بفضلك قدرت نخرج من الدوامة ديال الخسارة. I passed the 50K test and already made enough for my first payout. You are a legend!",
    rating: 5,
    image: "",
  },
  {
    title: "Yassine Berrada",
    content: "Your 'How-To' videos are better than most paid courses out there. شرح مبسط وعملي كيعطيك الخلاصة ديال التداول. Just hit my payout target and I’m so thankful for this opportunity you gave us.",
    rating: 5,
    image: "https://res.cloudinary.com/dd3dc5oum/image/upload/v1767532174/360_F_1357240730_5qwRRFPbwIS2URtqsDAdq05YKRN0LHMD_kup6fa.jpg",
  },
  {
    title: "Layla Amrani",
    content: "If you are serious about trading, you need this service in your life. التحليل ديال الويكاند بوحدو كافي باش تربح السيمانة كاملة. I just received my payout and it’s all thanks to your amazing community.",
    rating: 5,
    image: "",
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div id="testimonials-section" className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            What our <span className="text-accent">members</span> say
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        {isMobile ? (
          <div className="relative flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 z-10 p-2 bg-[#dad8d8] hover:bg-gray-100 rounded-3xl transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white hover:text-black" />
            </button>

            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-[90%]"
            >
              <div 
                onClick={() => window.open('https://whop.com/loserict/reviews/', '_blank')}
                className="bg-background rounded-xl p-8 border border-border min-h-[280px] flex flex-col cursor-pointer hover:border-accent transition-colors"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {"★★★★★".split("").map((star, i) => (
                    <motion.span
                      key={`${currentIndex}-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: i * 0.05,
                        type: "spring",
                        stiffness: 700,
                      }}
                      className="text-[#7a9898] text-lg"
                    >
                      {star}
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author with Verified Badge */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  {testimonials[currentIndex].image ? (
                    <NextImage 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].title}
                      width={40}
                      height={40}
                      className="rounded-full object-cover shrink-0 aspect-square"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                      {testimonials[currentIndex].title.slice(0, 2)}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonials[currentIndex].title}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-600">Verified Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 bg-[#dad8d8] hover:bg-gray-100 rounded-3xl transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white hover:text-black" />
            </button>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  onClick={() => window.open('https://whop.com/loserict/reviews/', '_blank')}
                  className="bg-background rounded-xl p-8 border border-border hover:border-accent transition-all h-full flex flex-col group cursor-pointer"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {"★★★★★".split("").map((star, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: i * 0.04,
                          type: "spring",
                          stiffness: 700,
                        }}
                        className="text-[#7a9898] text-lg"
                      >
                        {star}
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-sm leading-relaxed flex-1 mb-4">"{testimonial.content}"</p>

                  {/* Author with Verified Badge */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                    {testimonial.image ? (
                      <NextImage 
                        src={testimonial.image} 
                        alt={testimonial.title}
                        width={40}
                        height={40}
                        className="rounded-full object-cover shrink-0 aspect-square"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">
                        {testimonial.title.slice(0, 2)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.title}</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-600">Verified Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
