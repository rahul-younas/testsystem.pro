
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
