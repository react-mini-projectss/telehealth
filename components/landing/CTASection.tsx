export default function CTASection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-700 to-cyan-600" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent)]" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Ready to Transform Your Healthcare?
                </h2>

                <p className="text-xl md:text-2xl mb-10 text-blue-100">
                    Join thousands of patients and doctors using secure, AI-powered
                    healthcare.
                </p>

                {/* Trust */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-100">
                    <span>✔ 50K+ Patients</span>
                    <span>✔ 10K+ Doctors</span>
                    <span>✔ HIPAA Compliant</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                        Get Started Today
                    </button>

                    <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
