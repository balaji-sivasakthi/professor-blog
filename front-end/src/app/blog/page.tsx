"use client";
import Card from "@professor-blog/components/Card";
import useFetch from "@professor-blog/hooks/useFetch";
import React from "react";

const Blog = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );
  console.log(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="p-4 pt-20">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Blogs
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Recent Blogs
          </h1>
        </div>
        <div className=" mb-4">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container mx-auto">
              <section className=" text-gray-600 body-font">
                <div className="px-5">
                  <div className=" flex flex-wrap -m-4">
                    {data?.data &&
                      Array.from(
                        data?.data as unknown as {
                          id: number;
                          attributes: { Title: string; Description: string };
                        }[]
                      ).map((item) => {
                        return (
                          <>
                            <Card
                              id={item?.id}
                              title={item?.attributes?.Title}
                              description={item?.attributes?.Description}
                              svgPath="M22 12h-4l-3 9L9 3l-3 9H2"
                            />
                          </>
                        );
                      })}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Blog;
