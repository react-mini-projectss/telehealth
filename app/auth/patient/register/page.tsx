import Link from "next/link";

export default function PatientRegister() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-black text-2xl font-bold mb-6 text-center">
                    Patient Registration
                </h2>

                <div className="text-black">
                    <input className="input" placeholder="Full Name" />
                    <input className="input mt-4" placeholder="Mobile Number" />
                    <input className="input mt-4" placeholder="OTP" />
                    <input className="input mt-4" type="password" placeholder="Password" />
                </div>

                <button className="btn-primary w-full mt-6">
                    Register
                </button>
                <p className="text-black text-center mt-4 text-sm">
                    Existing patient?{" "}
                    <Link href="/auth/patient/login" className="text-purple-600">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
