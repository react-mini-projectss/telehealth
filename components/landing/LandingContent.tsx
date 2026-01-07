import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTASection from "./CTASection";

export default function LandingContent() {
    return (
        <main className="bg-white text-gray-900 overflow-hidden">
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <HowItWorks />
            <Testimonials />
            <CTASection />
        </main>
    );
}
