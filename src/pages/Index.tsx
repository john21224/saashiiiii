import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import OurStory from "@/components/OurStory";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import LoveLetter from "@/components/LoveLetter";
import SurpriseSection from "@/components/SurpriseSection";
import ThreeMonthsPopup from "@/components/ThreeMonthsPopup";
import RomanticFooter from "@/components/RomanticFooter";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  return (
    <div className="relative">
      <FloatingHearts />
      <MusicToggle />
      <HeroSection />
      <OurStory />
      <ReasonsILoveYou />
      <PhotoGallery />
      <VideoGallery />
      <LoveLetter />
      <SurpriseSection />
      <RomanticFooter />
    </div>
  );
};

export default Index;
