import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThreePillars from "@/components/ThreePillars";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ThreePillars />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
