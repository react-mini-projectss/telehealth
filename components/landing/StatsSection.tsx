import { Star, Video, Clock, Shield } from "lucide-react";

const stats = [
    { value: "10K+", label: "Doctors", icon: Star },
    { value: "50K+", label: "Consults", icon: Video },
    { value: "99.9%", label: "Uptime", icon: Clock },
    { value: "24/7", label: "Support", icon: Shield },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-blue-50 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(({ value, label, icon: Icon }) => (
                    <div key={label} className="bg-white p-8 rounded-xl text-center">
                        <Icon className="mx-auto text-blue-600 mb-3" />
                        <h3 className="text-3xl font-bold">{value}</h3>
                        <p className="text-gray-600">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
