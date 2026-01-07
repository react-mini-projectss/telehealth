"use client";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* ABOUT INTRO */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Our Healthcare Platform
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We connect patients with verified doctors through secure online
                        consultations, making healthcare accessible, fast, and reliable.
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Our Services
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Online Consultation",
                                desc: "Secure video consultations with experienced doctors."
                            },
                            {
                                title: "Appointment Booking",
                                desc: "Book online or in-clinic visits in a few clicks."
                            },
                            {
                                title: "Digital Prescriptions",
                                desc: "Receive prescriptions instantly after consultation."
                            },
                            {
                                title: "Medical Records",
                                desc: "Access your health documents anytime securely."
                            },
                            {
                                title: "Follow-Up Care",
                                desc: "Continue treatment without repeated registrations."
                            },
                            {
                                title: "24/7 Support",
                                desc: "Healthcare assistance whenever you need it."
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="bg-blue-50 hover:bg-blue-100 transition p-6 rounded-2xl border border-blue-100"
                            >
                                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DOCTORS */}
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Meet Our Doctors
                    </h3>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                name: "Dr. Ananya Sharma",
                                specialty: "General Physician",
                                experience: "8+ Years Experience",
                                expertise: "Diabetes, Fever, BP",
                                img: "/assets/doctor1.jpg",
                            },
                            {
                                name: "Dr. Rahul Verma",
                                specialty: "Orthopedic Specialist",
                                experience: "12+ Years Experience",
                                expertise: "Joint Pain, Arthritis",
                                img: "/assets/doctor2.jpg",
                            },
                            {
                                name: "Dr. Neha Kapoor",
                                specialty: "Dermatologist",
                                experience: "6+ Years Experience",
                                expertise: "Skin, Hair, Acne",
                                img: "/assets/doctor3.jpg",
                            },
                        ].map((doc) => (
                            <div
                                key={doc.name}
                                className="bg-white border rounded-2xl p-6 hover:shadow-xl transition"
                            >
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-4 border-blue-100"
                                />

                                <h4 className="text-xl font-semibold text-center text-gray-900">
                                    {doc.name}
                                </h4>
                                <p className="text-blue-600 text-center font-medium">
                                    {doc.specialty}
                                </p>
                                <p className="text-sm text-gray-500 text-center">
                                    {doc.experience}
                                </p>

                                <p className="text-sm text-gray-600 text-center mt-3">
                                    <span className="font-medium">Expertise:</span> {doc.expertise}
                                </p>

                                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold transition">
                                    Book Consultation
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
