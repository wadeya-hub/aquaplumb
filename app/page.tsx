'use client';

import { motion } from 'framer-motion';
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel';
import ServicesOverview from '@/components/ServicesOverview/ServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import ProjectsShowcase from '@/components/ProjectsShowcase/ProjectsShowcase';
import CallToAction from '@/components/CallToAction/CallToAction';

export default function Home() {
  return (
    <div className="pt-[120px] md:pt-[140px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroCarousel />
        <ServicesOverview />
        <WhyChooseUs />
        <ProjectsShowcase />
        <CallToAction />
      </motion.div>
    </div>
  );
}