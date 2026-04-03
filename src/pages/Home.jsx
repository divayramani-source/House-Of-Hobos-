import React from "react";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import VibeSection from "../components/home/VibeSection";
import GalleryPreview from "../components/home/GalleryPreview";
import CommunityLovePreview from "../components/home/CommunityLovePreview";
import CTASection from "../components/home/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f5efe6] overflow-x-hidden">

      {/* HERO */}
      <HeroSection />

      {/* STATS */}
      <StatsSection />

      {/* VIBE / FEATURES */}
      <VibeSection />

      {/* 🔥 REAL GALLERY PREVIEW (IMPORTANT SECTION) */}
      <GalleryPreview />

      {/* COMMUNITY LOVE */}
      <CommunityLovePreview />

      {/* CALL TO ACTION */}
      <CTASection />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
