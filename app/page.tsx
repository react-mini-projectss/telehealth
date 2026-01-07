import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import LandingContent from "@/components/LandingContent";

import LandingContent from "@/components/landing/LandingContent";



export default function Home() {
  return (
    <>
      <Navbar />
      <LandingContent />
      <Footer />
    </>
  );
}