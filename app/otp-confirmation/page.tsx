"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

export default function OTPConfirmationPage() {
  const [otp, setOtp] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate OTP verification success - redirect to login
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-orange-400 to-amber-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Verify Your Email</h1>
          <p className="text-white/80">Enter the 6-digit code sent to your email</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">Verification Code</label>
            <div className="relative">
              <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" size={18} />
              <Input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 text-center text-lg tracking-widest"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Verify Email
          </Button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <button className="text-white/80 hover:text-white transition-colors text-sm underline">Resend Code</button>
          <div>
            <Link
              href="/register"
              className="inline-flex items-center text-white/60 hover:text-white/80 transition-colors text-sm underline"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
