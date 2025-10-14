import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = [];

  console.log("✅ Page loaded - SSR check running");

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      {console.log("✅ HeroSection OK")}
      <AboutSection />
      {console.log("✅ About OK")}
      <Experience />
      {console.log("✅ Experience OK")}
      <Skills />
      {console.log("✅ Skills OK")}
      <Projects />
      {console.log("✅ Projects OK")}
      <Education />
      {console.log("✅ Education OK")}
      <Blog blogs={blogs} />
      {console.log("✅ Blog OK")}
      <ContactSection />
      {console.log("✅ Contact OK")}
    </div>
  )
};