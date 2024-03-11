import Feature from "@professor-blog/components/Feature";
import Hero from "@professor-blog/components/Hero";
import About from "./about/page";
import AboutContainer from "@professor-blog/components/about";
import Profile from "@professor-blog/components/Profile";
import Contribution from "@professor-blog/components/Contribution";
import Contact from "@professor-blog/components/Contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <AboutContainer />
      <Profile />
      <Contribution />
      <Contact />
    </main>
  );
}
