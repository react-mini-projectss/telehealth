"use client";

import Image from "next/image";
import { ChevronRight, Check } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

            {/* Floating orbs */}
            <div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "4s" }}
            />
            <div
                className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "6s", animationDelay: "2s" }}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full border border-blue-200">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm text-blue-900 font-medium">
                                Available 24/7 for consultations
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900">
                                Quality Healthcare
                                <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                    at Your Fingertips
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Experience the future of healthcare with AI-powered consultations,
                                instant prescriptions, and verified doctors available anytime, anywhere.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105">
                                Book Consultation
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                Free Sign Up
                            </button>
                        </div>

                        {/* MINI STATS */}
                        <div className="flex gap-8 pt-2">
                            <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    98%
                                </div>
                                <div className="text-sm text-gray-500">Satisfaction Rate</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    5 min
                                </div>
                                <div className="text-sm text-gray-500">Avg. Wait Time</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <div className="relative z-10 bg-white p-3 rounded-3xl border-2 border-blue-100 shadow-2xl">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-blue-50">
                                <Image
                                    src="/assets/hero.png"
                                    alt="Telehealth Consultation"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
                            </div>
                        </div>

                        {/* FLOATING BADGES */}
                        <div
                            className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-emerald-500 p-3.5 rounded-2xl shadow-xl text-white animate-bounce z-20"
                            style={{ animationDuration: "3s" }}
                        >
                            <Check className="w-5 h-5" />
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-cyan-500 px-5 py-3 rounded-2xl shadow-xl text-white z-20">
                            <div className="text-xs font-semibold flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Next Available: 5 min
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
