import Link from "next/link";

export default function RoleSelection() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white border-2 border-black shadow-xl rounded-xl p-10 w-full max-w-4xl">
                <h1 className="text-black text-3xl font-bold text-center mb-10">
                    Select Your Role
                </h1>

                <div className="text-black grid md:grid-cols-3 gap-6">
                    {[
                        { role: "Admin", href: "/auth/admin" },
                        { role: "Doctor", href: "/auth/doctor/login" },
                        { role: "Patient", href: "/auth/patient/login" },
                    ].map((item) => (
                        <Link
                            key={item.role}
                            href={item.href}
                            className="border rounded-xl p-6 text-center hover:shadow-lg transition"
                        >
                            <h2 className="text-xl font-semibold">{item.role}</h2>
                            <p className="text-gray-500 mt-2">
                                Continue as {item.role}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
