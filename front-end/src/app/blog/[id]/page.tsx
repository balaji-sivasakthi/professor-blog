"use client";
import useFetch from "@professor-blog/hooks/useFetch";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Content = () => {
  const path = useParams();
  const { id } = path;
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  const originalData = data?.data?.attributes;
  console.log(originalData);

  let urlLink;
  if (originalData?.Image?.data && originalData?.Image?.data[0]) {
    urlLink = originalData?.Image?.data[0]?.attributes?.formats?.large?.url;
  }
  console.log(`http://localhost:1337${urlLink}`);
  const profileLink = originalData?.Profile?.data?.attributes?.url;
  console.log(profileLink);

  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                {originalData?.Title}
              </h1>
              <p className="lead">{originalData?.Description}</p>
            </header>
            <div>
              {urlLink && (
                <img
                  className="mr-4 w-full h-full"
                  src={`http://localhost:1337${urlLink}`}
                />
              )}
            </div>
          </article>
        </div>
      </main>

      {/* <RelatedArticles /> */}
    </div>
  );
};

export default Content;
