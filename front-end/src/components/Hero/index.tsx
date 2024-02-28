"use client";
import React from "react";
const Hero = () => {
  return (
    <section className="w-full">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto my-[100px] lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-6 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-3xl">
            Chancellor&apos;s Profile
          </h1>
          <h1 className="max-w-2xl mb-10 text-3xl font-extrabold md:text-5xl xl:text-5xl">
            Professor Dr. S. Jayarama Reddy, M.Sc., Ph.D.
          </h1>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
          >
            Get started
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex mx-auto">
          <img
            className="rounded-full"
            height={400}
            width={400}
            src="./assets/images/chancellor.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
