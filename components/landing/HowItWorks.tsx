const steps = [
    {
        title: "Register",
        description: "Sign up using your phone number with quick OTP verification.",
    },
    {
        title: "Find Doctor",
        description: "Search doctors by specialty, language, and patient ratings.",
    },
    {
        title: "Book Slot",
        description: "Choose a convenient time and confirm your appointment securely.",
    },
    {
        title: "Consult Online",
        description: "Join video call, chat, share reports, and receive prescription.",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-32 px-6 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-4 text-gray-900">
                        Get Started in
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            {" "}4 Simple Steps
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Your journey to better healthcare begins here
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={step.title} className="relative group">
                            {/* Connecting line */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
                            )}

                            <div className="relative bg-white hover:bg-blue-50 p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 h-full shadow-sm hover:shadow-lg">
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                                        <span className="text-2xl font-bold">{i + 1}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
