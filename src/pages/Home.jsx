import React from 'react';
import HeroSection from '../components/home/HeroSection';
import VibeSection from '../components/home/VibeSection';
import GalleryPreview from '../components/home/GalleryPreview';
import CTASection from '../components/home/CTASection';
import CommunityLovePreview from '../components/home/CommunityLovePreview';
import StatsSection from '../components/home/StatsSection';
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <VibeSection />
      <GalleryPreview />
      <CommunityLovePreview />
      <CTASection />

      {/* 🔥 YOU MISSED THESE */}
      <Footer />
    </div>
  );
}