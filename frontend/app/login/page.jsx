"use client";

import React from "react";
import { useAuth } from "@/components/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import Link from "next/link";

const LoginPage = () => {
  const { loginWithGoogle, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  // If user is already logged in, show a different state or redirect (handled in context but good to have)
  if (user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Welcome back, {user.displayName}!</h2>
          <p className="text-gray-400 mb-8">You are already signed in.</p>
          <Link 
            href="/dashboard"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-medium transition-all shadow-lg shadow-emerald-900/20"
          >
            Go to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <svg 
              className="w-8 h-8 text-emerald-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">EcoRoute</h1>
          <p className="text-gray-400">Sustainable logistics, optimized for the future.</p>
        </div>

        <div className="space-y-6">
          <button
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white text-black hover:bg-gray-100 rounded-2xl font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
          >
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="bg-[#0a0a0a] px-4 text-gray-500">Secure Authentication</span>
            </div>
          </div>

          <p className="text-xs text-center text-gray-500 leading-relaxed px-4">
            By continuing, you agree to EcoRoute&apos;s 
            <span className="text-emerald-500 cursor-pointer"> Terms of Service </span> 
            and 
            <span className="text-emerald-500 cursor-pointer"> Privacy Policy</span>.
          </p>
        </div>
      </motion.div>

      {/* Subtle Bottom Credits */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-600 text-sm">
        &copy; 2026 EcoRoute AI. All rights reserved.
      </div>
    </div>
  );
};

export default LoginPage;
