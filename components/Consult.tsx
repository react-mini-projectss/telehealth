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
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
            <div className="relative z-50 w-full max-w-lg bg-white rounded-3xl shadow-xl border overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold">AI Consult</h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="relative">
                        <textarea
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            placeholder="Type or speak symptoms..."
                            rows={4}
                            className="w-full rounded-2xl p-5 pr-14 bg-slate-50 border-2 border-blue-400 outline-none"
                        />
                        <button
                            onClick={toggleListening}
                            // FIXED: Added proper template literals for dynamic classes
                            className={`absolute bottom-3 right-3 p-2 rounded-full transition ${listening ? "bg-red-500 text-white animate-pulse" : "bg-slate-200 text-slate-700"
                                }`}
                        >
                            {listening ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className="mt-5 flex justify-end">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
                            Analyze
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}