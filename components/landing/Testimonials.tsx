// ❌ NO "use client" needed (no state, no effects)

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Patient",
        review:
            "The video consultation was seamless and the doctor was very professional. I got my prescription instantly.",
        rating: 5,
    },
    {
        name: "Dr. Anjali Verma",
        role: "Cardiologist",
        review:
            "This platform makes it easy to manage appointments and consult patients remotely with complete security.",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "Patient",
        review:
            "Booking an appointment was super easy. I could also access my medical records anytime.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What Our Users Say
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Trusted by patients and doctors for secure, fast, and AI-powered
                        healthcare.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl border border-gray-200 p-6
              overflow-hidden transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500"
                        >
                            {/* Badge */}
                            <div
                                className="absolute top-4 left-4 w-12 h-12 rounded-xl
                bg-blue-600 text-white flex items-center justify-center
                font-bold text-lg shadow-md
                transition-transform duration-300
                group-hover:scale-110"
                            >
                                {t.name.charAt(0)}
                            </div>

                            {/* Content */}
                            <div className="pt-16">
                                <h4 className="text-lg font-semibold text-gray-900">
                                    {t.name}
                                </h4>
                                <p className="text-sm text-gray-500 mb-4">
                                    {t.role}
                                </p>

                                <p className="text-gray-700 mb-5 leading-relaxed">
                                    “{t.review}”
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-yellow-400 text-lg">
                                    {"★".repeat(t.rating)}
                                    <span className="text-gray-300">
                                        {"★".repeat(5 - t.rating)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
