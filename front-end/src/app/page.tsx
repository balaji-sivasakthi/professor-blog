import Hero from "@professor-blog/components/Hero";
import AboutContainer from "@professor-blog/components/About";
import Profile from "@professor-blog/components/Profile";
import Contribution from "@professor-blog/components/Contribution";
import Contact from "./contact/page";

export default function Home() {
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
