export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">
                        TeleHealth
                    </h2>
                    <p className="text-sm">
                        Secure, AI-powered telehealth platform connecting patients with
                        verified doctors anytime, anywhere.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Features</li>
                        <li className="hover:text-white cursor-pointer">How It Works</li>
                        <li className="hover:text-white cursor-pointer">Book Consultation</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">HIPAA Compliance</li>
                        <li className="hover:text-white cursor-pointer">Data Security</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: support@telehealth.com</li>
                        <li>Phone: +91 9510001788</li>
                        <li>Available: 24/7 Support</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 text-center py-4 text-sm">
                © 2025 TeleHealth Platform. All rights reserved.
            </div>
        </footer>
    );
}
