import Link from "next/link";

export default function DoctorLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-black text-2xl font-bold mb-6 text-center">
                    Doctor Login
                </h2>
                <div className="text-black">
                    <input className="input" placeholder="Email / Username" />
                    <input className="input mt-4" type="password" placeholder="Password" />
                </div>
                <button className="btn-primary w-full mt-6">
                    Login
                </button>

                <p className="text-black text-center mt-4 text-sm">
                    New doctor?{" "}
                    <Link href="/auth/doctor/register" className="text-purple-600">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}
