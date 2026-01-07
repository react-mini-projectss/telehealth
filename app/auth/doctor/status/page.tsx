export default function DoctorStatus() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow-md text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Application Under Review
                </h2>
                <p className="text-gray-600">
                    Your registration is being verified by admin.
                    You will be notified once approved.
                </p>
            </div>
        </div>
    );
}
