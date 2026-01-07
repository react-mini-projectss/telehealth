import {
    Video,
    Calendar,
    FileText,
    Database,
    Brain,
    Shield,
    Star,
    Clock,
} from "lucide-react";

export const stats = [
    { value: "10K+", label: "Verified Doctors", icon: Star },
    { value: "50K+", label: "Consultations", icon: Video },
    { value: "99.9%", label: "Uptime", icon: Clock },
    { value: "24/7", label: "Support", icon: Shield },
];

export const features = [
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

export const steps = [
    { title: "Register", description: "Sign up using OTP verification." },
    { title: "Find Doctor", description: "Search by specialty & ratings." },
    { title: "Book Slot", description: "Choose a time and confirm." },
    { title: "Consult Online", description: "Video call & get prescription." },
];

export const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Patient",
        review:
            "The video consultation was seamless and professional.",
        rating: 5,
    },
    {
        name: "Dr. Anjali Verma",
        role: "Cardiologist",
        review:
            "Easy to manage patients securely.",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "Patient",
        review:
            "Booking appointments is super easy.",
        rating: 4,
    },
];
