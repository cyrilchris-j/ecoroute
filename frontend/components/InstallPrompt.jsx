"use client";

import React, { useState, useEffect } from "react";
import { Download, X, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show the prompt after 3 seconds
      setTimeout(() => setShowPrompt(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Fallback for devices that don't support beforeinstallprompt (like iOS)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
       setTimeout(() => setShowPrompt(true), 4000);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      // Fallback instructions for iOS or other browsers
      alert("To install this app: \n1. Click the 'Share' button \n2. Select 'Add to Home Screen'");
    }
    setShowPrompt(false);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md"
        >
          <div className="bg-eco-darker border border-emerald-500/30 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Smartphone className="text-emerald-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">Install EcoRoute AI</h3>
                  <p className="text-gray-400 text-sm">Add to home screen for a better experience and offline access.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPrompt(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex gap-3 mt-2">
              <button
                onClick={handleInstall}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <Download size={18} />
                <span>Install Now</span>
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="px-6 py-3 text-gray-400 hover:text-white font-medium transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPrompt;
