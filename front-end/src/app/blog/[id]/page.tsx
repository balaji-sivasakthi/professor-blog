"use client";
import useFetch from '@professor-blog/hooks/useFetch';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

const Content = () => {
    const path = useParams();
    const { id } = path;
    const { data, loading, error } = useFetch(`http://localhost:1337/api/blogs/${id}?populate=*`)
    const originalData = data?.data?.attributes;
    console.log(originalData);
    const urlLink = originalData?.Image?.data[0]?.attributes?.formats?.large?.url;
    console.log(`http://localhost:1337${urlLink}`);
    const profileLink = originalData?.Profile?.data?.attributes?.url;
    console.log(profileLink);

    // http://localhost:1337/uploads/large_Programs_8232adea14.png
    return (
        <div>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="mr-4 w-32 h-32 rounded-full" src={`http://localhost:1337${profileLink}`} alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{originalData?.Author}</a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">{originalData?.Designation}</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">{originalData?.publishedAt}</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{originalData?.Title}</h1>
                            <p className="lead">{originalData?.Description}</p>
                        </header>
                        <div>
                            <img className="mr-4 w-full h-full" src={`http://localhost:1337${urlLink}`} alt="" />
                        </div>
                    </article>
                </div>
            </main>

            {/* <RelatedArticles /> */}




        </div>
    )
}

export default Content