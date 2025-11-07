// app/page.tsx

import { GoogleGeminiEffectDemo } from "@/components/ui/google-gemini-demo";
import { StatsSection } from "@/components/ui/stats-section";
import { AboutSection } from "@/components/ui/about-section";
import { HowToSection } from "@/components/ui/how-to-section";
import SolutionsTypesSection from "@/components/ui/solutions-types-section";
import AsSeenOnSection from "@/components/ui/as-seen-on";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import Footer4Col from "@/components/ui/footer-column";

export default function Page() {
  return (
    <>
      {/* HERO: Google Gemini Effect (pinned until animation completes) */}
      <GoogleGeminiEffectDemo />

      {/* As Seen On - Media Logos */}
      <AsSeenOnSection />

      {/* ====== Build the rest of the site below ====== */}
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Centered Title & Description Section */}
        <section id="about" className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Exactly We Can Do For You
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Add your description text here. This section is perfectly centered with ample spacing. 
            Replace this text with your actual content to describe your services, mission, or value proposition.
          </p>
        </section>

        {/* Animated Stats Section */}
        <StatsSection />

        {/* About Us Section */}
        <AboutSection />

        {/* How to Get Your Advantage Section */}
        <HowToSection />
      </main>

      {/* Services Cloud Section - Full Width */}
      <SolutionsTypesSection />

      {/* Logo Cloud - Companies We Collaborate With */}
      <section className="w-full bg-black py-12 pb-0">
        <div className="w-full place-content-center px-4 py-16">
          <div className="relative mx-auto grid max-w-3xl">
            <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
              Companies we{" "}
              <span className="font-semibold text-primary">collaborate</span> with.
            </h2>

            <LogoCloud />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
        </div>
        <StaggerTestimonials />
      </section>

      {/* Background Paths Section */}
      <BackgroundPaths title="Your Vision Our Innovation" />

      {/* Footer Section */}
      <Footer4Col />
    </>
  );
}

