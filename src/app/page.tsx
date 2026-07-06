import { AthleteBackground } from "@/components/AthleteBackground";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { PlatformHeader } from "@/components/PlatformHeader";
import { SportsIconBar } from "@/components/SportsIconBar";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <AthleteBackground />

      <PlatformHeader />

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-4 py-6 md:px-6 md:py-10">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <FeatureCard variant="club" href="/club/login" />
          <FeatureCard variant="national" href="/national/login" />
        </div>

        <div className="mt-8 md:mt-12">
          <SportsIconBar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
