import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServerInfo from "@/components/ServerInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServerInfo />
      <Footer />
    </main>
  );
}
