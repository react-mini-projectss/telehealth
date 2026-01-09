"use client";

import { X, Sparkles, Mic, Square } from "lucide-react";
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

        if (!SpeechRecognition) return;

        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event: any) => {
            const transcript = event.results[event.results.length - 1][0].transcript;
            setSymptoms((prev) => prev + (prev ? " " : "") + transcript);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error:", event.error);
            setListening(false);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.current = recognition;
    }, []);

    const toggleListening = () => {
        if (!recognitionRef.current) return;

        if (!listening) {
            recognitionRef.current.start();
            setListening(true);
        } else {
            recognitionRef.current.stop();
            setListening(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Smooth backdrop fade */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-default animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Smooth Modal Scale-in */}
            <div className="relative z-50 w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border overflow-hidden animate-in zoom-in-95 duration-300 ease-out">
                <div className="flex items-center justify-between p-6 border-b bg-white/50">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold">Find Your Consult With AI</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full cursor-pointer transition-colors">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="relative">
                        <textarea
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="Type or speak your symptoms..."
                            rows={4}
                            className="w-full rounded-2xl p-5 pr-14 bg-slate-50 focus:bg-white border-2 border-blue-400 outline-none resize-none transition-all duration-300 text-slate-700 shadow-inner"
                        />
                        <button
                            onClick={toggleListening}
                            className={`absolute bottom-3 right-3 p-2 rounded-full transition cursor-pointer ${listening ? "bg-red-500 text-white animate-pulse" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                }`}
                        >
                            {listening ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={() => console.log("Analyzing:", symptoms)}
                            className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition cursor-pointer active:scale-95"
                        >
                            Analyze <Sparkles className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="mt-4 text-center text-xs text-slate-500">
                        Our AI provides insights based on your input. Always consult a professional doctor.
                    </p>
                </div>
            </div>
        </div>
    );
}