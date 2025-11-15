import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "صفحه اصلی وب سایت",
};

import {
  FeaturesSection,
  Footer,
  HeroSection,
  Navbar,
  StartSection,
} from "@/components/pages";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <StartSection />

      <Footer />
    </div>
  );
}
