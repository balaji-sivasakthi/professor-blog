import Feature from "@professor-blog/components/Feature";
import Hero from "@professor-blog/components/Hero";
import AboutContainer from "@professor-blog/components/about";
import Profile from "@professor-blog/components/Profile";
import Contribution from "@professor-blog/components/Contribution";
import Contact from "@professor-blog/components/Contact";
export function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <AboutContainer />
      <Profile />
      <Contribution />
      <Contact />
    </div>
  );
}

export default Home;
