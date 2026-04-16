import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import Bestsellers from '@/components/Bestsellers';
import Features from '@/components/Features';
import WhyPurvaja from '@/components/WhyPurvaja';
import VideoSection from '@/components/VideoSection';
import HealNaturally from '@/components/HealNaturally';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <Bestsellers />
      <Features />
      <WhyPurvaja />
      <VideoSection />
      <HealNaturally />
      <Newsletter />
    </div>
  );
}
