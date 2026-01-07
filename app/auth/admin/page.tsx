export default function AdminLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-black text-2xl font-bold mb-6 text-center">
                    Admin Login
                </h2>
                <div className="text-black">
                    <input className="input" placeholder="Admin ID" />
                    <input className="input mt-4" type="password" placeholder="Password" />
                    {/* <input className="input mt-4" placeholder="OTP" /> */}
                </div>
                <button className="btn-primary w-full mt-6">
                    Login
                </button>
            </div>
        </div>
    );
}
