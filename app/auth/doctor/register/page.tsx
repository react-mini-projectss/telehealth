import Link from "next/link";

export default function DoctorRegister() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
                <h2 className="text-black text-2xl font-bold mb-6 text-center">
                    Doctor Registration
                </h2>

                <div className="text-black grid md:grid-cols-2 gap-4">
                    <input className="text-black input" placeholder="Full Name" />
                    <input className="text-black input" placeholder="Gender" />
                    <input className="text-black input" type="date" />
                    <input className="text-black input" placeholder="Mobile Number" />
                </div>
                <div className="text-black">
                    <input className="input mt-4" placeholder="OTP" />
                    <input className="input mt-4" type="file" />
                </div>

                <input
                    className="text-black input mt-4"
                    type="password"
                    placeholder="Password"
                />

                <button className="btn-primary w-full mt-6">
                    Register
                </button>

                <p className="text-center mt-4 text-sm text-gray-500">
                    Your application will be reviewed by admin
                </p>
                <p className="text-black text-center mt-4 text-sm">
                    New doctor?{" "}
                    <Link href="/auth/doctor/login" className="text-purple-600">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}
