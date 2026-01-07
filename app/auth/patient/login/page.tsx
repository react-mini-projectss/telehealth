import Link from "next/link";

export default function PatientLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-black text-2xl font-bold mb-6 text-center">
                    Patient Login
                </h2>


                <input className="text-black input" placeholder="Mobile / Username" />
                <input className="text-black input mt-4" type="password" placeholder="Password" />

                <button className="btn-primary w-full mt-6">
                    Login
                </button>

                <p className="text-black text-center mt-4 text-sm">
                    New patient?{" "}
                    <Link href="/auth/patient/register" className="text-purple-600">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
