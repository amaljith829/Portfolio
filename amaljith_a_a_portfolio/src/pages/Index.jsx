import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amaljith A A",
    jobTitle: "Web Developer",
    url: "/",
    sameAs: [
      "https://linkedin.com/in/amaljith-a-a-11202322a",
      "mailto:amaljith829@gmail.com",
    ],
    worksFor: { "@type": "Organization", name: "Mozilor Technologies" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thrissur",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


