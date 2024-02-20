export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full h-[60vh] bg-green-600"></div>
      <div className="w-full bg-[#333] flex p-12 justify-between">
        <h1 className="text-white text-xl">
          Office Hours for Summer 2019 Semester is by Appointment Only
        </h1>
        <button className="text-xl text-white">Learn More</button>
      </div>
    </main>
  );
}
