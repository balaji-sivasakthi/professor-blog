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
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.data &&
              Array.from(
                data?.data as unknown as {
                  id: number;
                  attributes: { Title: string; Description: string };
                }[]
              )
                .filter((card) => card.attributes.Title.toLowerCase().includes(searchTerm.toLowerCase()))
                .slice(0, numCardsToShow)
                .map((item) => {

                  return (
                    <>
                      <Card
                        id={item?.id}
                        title={item?.attributes?.Title}
                        description={item?.attributes?.Description}
                        date={"January 26, 2021"}
                        imgSrc={item?.attributes?.Image?.data[0]?.attributes?.url}
                        svgPath="M22 12h-4l-3 9L9 3l-3 9H2"
                      />
                    </>
                  );
                })}

          </div>
          <div className="flex justify-center">
            {numCardsToShow < data?.data?.length && (
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
                onClick={loadMorePosts}
              >
                Load more posts...
              </button>
            )}
          </div>
        </div>
      </section>
    </div>

    // {cardData.slice(0, numCardsToShow).map((card, index) => (
    //   <Card
    //     key={index}
    //     imgSrc={card.imgSrc}
    //     date={card.date}
    //     title={card.title}
    //     description={card.description}
    //     hidden={card.hidden}
    //   />
    // ))}
    // <div className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <section className="p-4 pt-20">
    //     <div className="flex flex-col text-center w-full mb-20">
    //       <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
    //         Blogs
    //       </h2>
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
    //         Recent Blogs
    //       </h1>
    //     </div>
    //     <div className=" mb-4">
    //       <section className="text-gray-600 body-font overflow-hidden">
    //         <div className="container mx-auto">
    //           <section className=" text-gray-600 body-font">
    //             <div className="px-5">
    //               <div className=" flex flex-wrap -m-4">
    //                 {data?.data &&
    //                   Array.from(
    //                     data?.data as unknown as {
    //                       id: number;
    //                       attributes: { Title: string; Description: string };
    //                     }[]
    //                   ).map((item) => {
    //                     return (
    //                       <>
    //                         <Card
    //                           id={item?.id}
    //                           title={item?.attributes?.Title}
    //                           description={item?.attributes?.Description}
    //                           svgPath="M22 12h-4l-3 9L9 3l-3 9H2"
    //                         />
    //                       </>
    //                     );
    //                   })}
    //               </div>
    //             </div>
    //           </section>
    //         </div>
    //       </section>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Blog;
