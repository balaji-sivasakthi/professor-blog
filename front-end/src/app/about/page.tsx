import { data } from "@professor-blog/constants";
import React from "react";

function About() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2">
            {data.map((item: any) => {
              return (
                <>
                  <div className="py-8 flex flex-wrap md:flex-nowrap bg-white p-8 rounded-lg mb-10 items-center justify-center text-center gap-4">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-xl text-blue-600">
                        {item.title}
                      </span>
                    </div>
                    <div className="md:flex-grow leading-loose gap-y-2">
                      <ul>
                        {item.content.map((c: any, index: number) => {
                          return (
                            <li
                              key={index}
                              className="text-md text-left text-black"
                            >
                              • {c}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
