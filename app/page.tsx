import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] overflow-clip">
      <Header />
      <Hero />
      <Tools />
      <Footer />
    </div>
  );
}
