import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainLayout from "@/components/layout/MainLayout";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CreatorSection from "@/components/sections/CreatorSection";
import FaqSection from "@/components/sections/FaqSection";
import FreeDiagnosticsSection from "@/components/sections/FreeDiagnosticsSection";
import HeroSection from "@/components/sections/HeroSection";
import PriceSection from "@/components/sections/PriceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import VideoSection from "@/components/sections/VideoSection";
import WhenNeededSection from "@/components/sections/WhenNeededSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <WhenNeededSection />
      <BenefitsSection />
      <VideoSection />
      <ReviewsSection />
      <PriceSection />
      <FreeDiagnosticsSection />
      <CreatorSection />
      <FaqSection />
    </MainLayout>
  );
}
