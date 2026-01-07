"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Video,
    Calendar,
    FileText,
    Database,
    Brain,
    Shield,
    Sparkles,
    Check,
    ChevronRight,
} from "lucide-react";

const features = [
    {
        title: "Video Consultations",
        description:
            "Connect with verified doctors through secure, high-quality video calls from the comfort of your home.",
        icon: Video,
        image: "/assets/video.png",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        title: "Easy Appointment Booking",
        description:
            "Search doctors by specialty, check real-time availability, and book appointments instantly.",
        icon: Calendar,
        image: "/assets/appointment.png",
        gradient: "from-blue-600 to-indigo-600",
    },
    {
        title: "Digital Prescriptions",
        description:
            "Receive legally valid digital prescriptions instantly after consultation.",
        icon: FileText,
        image: "/assets/aicheck.png",
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        title: "Medical Records Storage",
        description:
            "Store and access your medical reports securely anytime, anywhere.",
        icon: Database,
        image: "/assets/storedata.png",
        gradient: "from-blue-400 to-cyan-500",
    },
    {
        title: "AI Symptom Checker",
        description:
            "Describe symptoms and get AI-powered insights before consulting a doctor.",
        icon: Brain,
        image: "/assets/aicheck.png",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        title: "HIPAA-Grade Security",
        description:
            "Your health data is protected with military-grade encryption.",
        icon: Shield,
        image: "/assets/hippa.png",
        gradient: "from-blue-600 to-blue-700",
    },
];

export default function FeaturesSection() {
    const [activeFeature, setActiveFeature] = useState(0);
    const ActiveIcon = features[activeFeature].icon;

    return (
        <section className="relative py-12 md:py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-1.5 rounded-full mb-3">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-900 font-medium">
                            Core Features
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Everything You Need for Better Healthcare
                    </h2>
                </div>

                {/* Feature Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8 max-w-3xl mx-auto">
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <button
                                key={f.title}
                                onClick={() => setActiveFeature(i)}
                                className={`group px-3 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-xs md:text-sm ${activeFeature === i
                                        ? `bg-gradient-to-r ${f.gradient} text-white shadow-md scale-105`
                                        : "bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200"
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                <span className="font-medium truncate">{f.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Feature Content */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left */}
                    <div className="space-y-4">
                        <div
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${features[activeFeature].gradient} shadow-lg text-white`}
                        >
                            <ActiveIcon className="w-7 h-7" />
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {features[activeFeature].title}
                            </h3>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                {features[activeFeature].description}
                            </p>
                        </div>

                        <ul className="space-y-2">
                            {["Instant access", "Secure & private", "Expert verified"].map(
                                (item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-gray-700"
                                    >
                                        <div
                                            className={`w-5 h-5 rounded-full bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center`}
                                        >
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                )
                            )}
                        </ul>

                        <button
                            className={`group bg-gradient-to-r ${features[activeFeature].gradient} px-6 py-2.5 rounded-xl font-semibold text-white transition-all duration-300 flex items-center gap-2`}
                        >
                            Get Started
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div
                            className={`relative bg-gradient-to-br ${features[activeFeature].gradient} p-0.5 rounded-[2rem] shadow-xl max-w-[320px] md:max-w-md w-full`}
                        >
                            <div className="bg-white rounded-[1.85rem] p-4 md:p-6">
                                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden">
                                    <Image
                                        src={features[activeFeature].image}
                                        alt={features[activeFeature].title}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}