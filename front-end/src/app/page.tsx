import Hero from "@professor-blog/components/Hero";
import PostsCard from "@professor-blog/components/PostCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <div className="w-full bg-[#333] md:flex p-12 justify-between">
        <h1 className="text-white text-xl mb-3">
          Office Hours for Summer 2019 Semester is by Appointment Only
        </h1>
        <button className="text-xl text-white">Learn More</button>
      </div>
      <div className="container">
        <div className="p-10">
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="text-xl font-bold mb-2">2018 Spring Semester</h2>
              <p className="mb-3">
                When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!
              </p>
              <p className="mb-3">
                Science cuts two ways, of course; its products can be used for both good and evil. But there’s no turning back from science. The early warnings about technological dangers also come from science.
              </p>
              <p className="mb-3">
                Spaceflights cannot be stopped. This is not the work of anyone man or even a group of men. It is a historical process that mankind is carrying out in accordance with the natural laws of human development.
              </p>
              <p>
                Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-2">
              <div className="w-auto bg-gray-100 p-5 rounded">
                <h2 className="text-xl font-medium">Recent Posts</h2>
                <p>
                  <a href="/" className="underline pl-5">Adventure of Human Space Exploration</a>
                </p>
                <h2 className="text-xl font-medium mt-4">Archives</h2>
                <p>
                  <a href="/" className="underline pl-5">December 2017</a>
                </p>
                <h2 className="text-xl font-medium mt-4">Categories</h2>
                <p>
                  <a href="/" className="underline pl-5">Theories</a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mt-5">Latest Posts</h2>
            <PostsCard image="" title="Adventure of Human Space Exploration" date="December 6, 2017 " author="Henry Rutgers" category="Theories" description="Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind. The sky is the limit only for those …" />
          </div>
        </div>
      </div>
    </main>
  );
}
