"use client";
import Card from "@professor-blog/components/Card";
import useFetch from "@professor-blog/hooks/useFetch";
import React, { useState } from "react";

const Blog = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  const [numCardsToShow, setNumCardsToShow] = useState(3); // Initially show 3 cards

  const loadMorePosts = () => {
    setNumCardsToShow(numCardsToShow + 3); // Show 3 more cards when the button is clicked
  };
  console.log(data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form className="w-full max-w-lg mx-auto m-5">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>


      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error magni, quam excepturi eveniet consequatur aut corporis id dolore. Inventore.</h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quibusdam quam vero veniam placeat ipsam corrupti nihil necessitatibus velit optio adipisci illum vel inventore deserunt, quod atque ipsum repudiandae blanditiis, distinctio autem? Vel repellat eius facilis ratione. Dolores veritatis incidunt excepturi architecto iure pariatur dolorem cum voluptatum fuga nulla expedita non quia blanditiis reprehenderit corporis nihil aliquid, amet cupiditate doloribus ratione tenetur voluptates facilis! Adipisci beatae, modi nostrum velit eos consectetur fugiat eveniet laboriosam recusandae facilis labore, </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;
