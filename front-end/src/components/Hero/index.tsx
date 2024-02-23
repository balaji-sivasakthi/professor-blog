"use client";

import React from 'react'


// Chancellor, Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya(Deemed to be University), Kanchipuram
// Formerly
// Vice - Chancellor, Sri Venkateswara University, Tirupati
// President, PRIST(Deemed to be University), Thanjavur
// Chairman, UTF, Centurion University, Bhubaneswar
// Chairman, University Advisory Board, Shri Guru Ram ai University, Dehradun
// Chairman, University task force, Jain University, Bangalore

const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12" >
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-3xl dark:text-white">CHANCELLOR'S PROFILE</h1>
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold md:text-5xl xl:text-5xl dark:text-white">PROF DR S JAYARAMA REDDY M.SC., PH.D.</h1>
                    <p className="max-w-2xl mb-2 text-sm font-light text-gray-500  md:text-lg lg:text-md dark:text-gray-400">Chancellor, Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya(Deemed to be University), Kanchipuram</p>
                    <p className="max-w-2xl mb-2 text-sm font-light text-gray-500  md:text-lg lg:text-md dark:text-gray-400">Vice - Chancellor, Sri Venkateswara University, Tirupati</p>
                    <p className="max-w-2xl mb-2 text-sm font-light text-gray-500  md:text-lg lg:text-md dark:text-gray-400">President, PRIST(Deemed to be University), Thanjavur.</p>
                    <p className="max-w-2xl mb-2 text-sm font-light text-gray-500  md:text-lg lg:text-md dark:text-gray-400">Chairman, UTF, Centurion University, Bhubaneswar.</p>
                    <p className="max-w-2xl mb-2 text-sm font-light text-gray-500  md:text-lg lg:text-md dark:text-gray-400">Chairman, University Advisory Board, Shri Guru Ram ai University, Dehradun.</p>
                    <p className="max-w-2xl mb-2 text-sm font-light text-gray-500  md:text-lg lg:text-md dark:text-gray-400">Chairman, University task force, Jain University, Bangalore.</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Hero