"use client";
import React, { useState } from 'react'
import Positions from './Positions'
import Awards from './Honors-and-Awards'
import Fellow from './Fellow'
import Research from './Research'
import Academic from './Academic-Assignments'

const Profile = () => {
    const [activeComponent, setActiveComponent] = useState(<Positions />)
    const data = [
        {
            title: "Positions held",
            component: <Positions />
        },
        {
            title: "Honors and Awards",
            component: <Awards />
        },
        {
            title: "Fellow",
            component: <Fellow />
        },
        {
            title: "Research",
            component: <Research />
        },
        {
            title: "Academic Assignments",
            component: <Academic />
        },
    ]
    return (
        <section className='h-full w-full p-4'>
            <div className="w-full flex flex-col justify-center">
                <ul className="flex flex-wrap w-full justify-evenly -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700" >
                    {
                        data.map((item: any, index: number) => {
                            return (
                                <li key={index} className="me-2 hover:bg-gray-300 rounded-lg" onClick={() => setActiveComponent(item.component)}>
                                    <div className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer">
                                        <svg className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                        </svg>{item.title}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='h-full'>
                    {activeComponent}
                </div>
            </div>

        </section>
    )
}

export default Profile