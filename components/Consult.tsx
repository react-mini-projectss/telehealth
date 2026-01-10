"use client";

import { X, Sparkles, Mic, Square, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ConsultProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Consult({ isOpen, onClose }: ConsultProps) {
    const [symptoms, setSymptoms] = useState("");
    const [listening, setListening] = useState(false);
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const SpeechRecognition =
            (window as any).SpeechRecognition ||
            (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error("Browser does not support Speech Recognition.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
            const transcript =
                event.results[event.results.length - 1][0].transcript;
            setSymptoms((prev) => prev + (prev ? " " : "") + transcript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            setListening(false);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognitionRef.current = recognition;
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            alert("Speech recognition is not supported in this browser.");
            return;
        }

        if (!listening) {
            try {
                recognitionRef.current.start();
                setListening(true);
            } catch (err) {
                console.error("Start error:", err);
            }
        } else {
            recognitionRef.current.stop();
            setListening(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-50 w-full max-w-lg bg-white rounded-3xl shadow-xl border overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-xl font-semibold text-slate-800">
                                Find Consult
                            </h2>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-full cursor-pointer"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>
                    </div>

                    {/* Sub Heading */}
                    <p className="mt-2 text-sm text-slate-700">
                        Describe your symptoms to get quick guidance
                    </p>
                </div>

                <div className="p-6 space-y-4">
                    {/* Section Heading */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-700">
                            Symptoms Details
                        </h3>
                        <p className="text-xs text-slate-900 flex items-center gap-1 mt-1">
                            <Info className="w-3 h-3" />
                            You can type or use voice input
                        </p>
                    </div>

                    {/* Textarea */}
                    <div className="relative">
                        <textarea
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="Example: Fever, headache, sore throat..."
                            rows={4}
                            className="w-full rounded-2xl p-5 pr-14 bg-slate-50 border-2 border-blue-400 outline-none focus:bg-white transition-all text-slate-700"
                        />

                        <button
                            onClick={toggleListening}
                            className={`absolute bottom-3 right-3 p-2 rounded-full transition cursor-pointer ${listening
                                ? "bg-red-500 text-white animate-pulse"
                                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                }`}
                        >
                            {listening ? (
                                <Square className="w-5 h-5" />
                            ) : (
                                <Mic className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Analyze Button (CENTERED) */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => console.log("Analyzing:", symptoms)}
                            className="group flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-all cursor-pointer active:scale-95 shadow-md"
                        >
                            Analyze
                            <Sparkles className="w-4 h-4 text-white animate-pulse" />
                        </button>
                    </div>

                    {/* Bottom Disclaimer */}
                    <div className="pt-4 border-t border-slate-500">
                        <p className="text-center text-[11px] text-slate-800 leading-relaxed">
                            This tool is for informational purposes only.
                            <br />
                            Always consult a professional doctor for medical advice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
