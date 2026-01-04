"use client";

import { useState, useEffect } from "react";
import { X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText("HLoser");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90%] max-w-md"
          >
            <div className="relative bg-gradient-to-br from-[#1a1f2e] via-[#252d3d] to-[#1a1f2e] rounded-3xl shadow-2xl overflow-hidden border border-white/10">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-white/60 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="relative px-8 py-10 text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30">
                    Updated Daily
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                >
                  Limited Offer.
                  <br />
                  <span className="text-white/90">Trade with edge </span>
                  <br />
                  <span className="text-white/90">Scale your profits.</span>
                  <span className="text-blue-400">.</span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-base mb-8"
                >
                  All the best available offers in one place
                </motion.p>

                {/* Promo Code Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 flex flex-col items-center"
                >
                  <button
                    onClick={handleCopyCode}
                    className="group relative bg-[#2d4a6b] hover:bg-[#344f73] text-white px-8 py-3.5 rounded-[22px] transition-all duration-300 shadow-2xl hover:shadow-blue-900/40 hover:scale-[1.02] border-b-4 border-[#1a8fff]/60"
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-white/90 text-sm font-medium">Use code</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[#5eb3ff] font-bold text-2xl tracking-wide">HLoser</span>
                        <div className="flex items-center bg-[#5eb3ff]/20 p-1.5 rounded-lg">
                          {isCopied ? (
                            <Check className="w-5 h-5 text-[#5eb3ff]" />
                          ) : (
                            <Copy className="w-5 h-5 text-[#5eb3ff] group-hover:scale-110 transition-transform" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>

                {/* Discount Text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl px-6 py-4"
                >
                  <p className="text-green-300 font-semibold text-lg">
                    Get 20% OFF Your First Month
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
