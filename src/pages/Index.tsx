import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DescriptionSection } from "@/components/home/DescriptionSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ConsultantsSection } from "@/components/home/ConsultantsSection";
import { HardwareSection } from "@/components/home/HardwareSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DescriptionSection />
      <PackagesSection />
      <ConsultantsSection />
      <HardwareSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
