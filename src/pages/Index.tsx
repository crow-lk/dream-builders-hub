import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DescriptionSection } from "@/components/home/DescriptionSection";
import { ProjectsGallerySection } from "@/components/home/ProjectsGallerySection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ConsultantsSection } from "@/components/home/ConsultantsSection";
import { HardwareSection } from "@/components/home/HardwareSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DescriptionSection />
      <ProjectsGallerySection />
      <ExperienceSection />
      <PackagesSection />
      <ConsultantsSection />
      <HardwareSection />
      <TestimonialsSection />
      <CTASection />
      <FloatingWhatsApp />
    </Layout>
  );
};

export default Index;
