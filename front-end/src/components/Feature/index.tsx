import { data } from '@professor-blog/constants'
import React from 'react'
import FeatureCard from '../FeatureCard'

const Feature = () => {
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 p-6">

                    {data.map((item: any) => {
                        return (
                            <>
                                <FeatureCard
                                    svgPath="M22 12h-4l-3 9L9 3l-3 9H2"
                                    title={item.title}
                                    description={item.content}
                                />
                            </>
                        )
                    })}
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </section>

    )
}

export default Feature