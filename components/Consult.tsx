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

        if (!SpeechRecognition) {
            console.error("Browser does not support Speech Recognition.");
            return;
        }

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
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            {/* Modal */}
            <div className="relative z-50 w-full max-w-lg bg-white rounded-3xl shadow-xl border overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold text-slate-800">AI Consult</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full cursor-pointer">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <div className="p-6">
                    {/* Textarea Section */}
                    <div className="relative">
                        <textarea
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="Type or speak symptoms..."
                            rows={4}
                            className="w-full rounded-2xl p-5 pr-14 bg-slate-50 border-2 border-blue-400 outline-none focus:bg-white transition-all text-slate-700"
                        />
                        <button
                            onClick={toggleListening}
                            className={`absolute bottom-3 right-3 p-2 rounded-full transition cursor-pointer ${listening ? "bg-red-500 text-white animate-pulse" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                }`}
                        >
                            {listening ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Analyze Button */}
                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={() => console.log("Analyzing:", symptoms)}
                            className="group flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-all cursor-pointer active:scale-95 shadow-md"
                        >
                            Analyze
                            <div className="flex -space-x-1">
                                <Sparkles className="w-4 h-4 text-white animate-pulse" />
                                <Sparkles className="w-3 h-3 text-cyan-100 animate-bounce delay-75" />
                            </div>
                        </button>
                    </div>

                    {/* Important Bottom Text */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                        <p className="text-center text-[11px] text-slate-500 leading-relaxed">
                            Always consult a professional doctor for medical advice.
                            {/* <span className="block font-semibold text-slate-600 mt-1">
                                Always consult a professional doctor for medical advice.
                            </span> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}