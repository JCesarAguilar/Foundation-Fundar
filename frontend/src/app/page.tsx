import Banner from "@/components/home/Banner";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <TestimonialsSection />
      <StatsSection />
    </main>
  );
}
