"use client";
import { Button } from 'flowbite-react';
import React, { useState } from 'react'

const AboutContainer = () => {
    const [isFormerly, setIsFormerly] = useState(true)

    return (
        <>
            <section className='w-full bg-white'>
                <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col w-full max-w-3xl mx-auto prose text-center prose-blue">
                        <div className="w-full mx-auto">
                            <h2 className='font-medium text-3xl m-2 p-2 text-indigo-500'>Hello! I'm Dr.S.Jayarama Reddy ( M.Sc., Ph.D )</h2>
                            {isFormerly ? (
                                <>
                                    <h4 className='font-light mt-2 text-2xl'>Formerly</h4>
                                    <p className='mt-2 leading-8'>Chancellor, Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (Deemed to be
                                        University), Kanchipuram
                                        Vice-Chancellor, Sri Venkateswara University, Tirupati
                                        President, PRIST (Deemed to be University), Thanjavur
                                        Chairman, University Advisory Board, Shri Guru Ram Rai University, Dehradun
                                        Chairman, University Task Force, Centurion University, Bhubaneswar
                                        Chairman, University Task Force, Jain University, Bengaluru</p>
                                </>
                            ) : (
                                <>
                                    <h4 className='font-light mt-2 text-2xl'>Presently</h4>
                                    <p className='mt-2 leading-8'>Member Advisory Board, Sri Sathya Sai University for Human Excellence, Bengaluru
                                        Member Govering Council, SNS Institutions, Coiambatore</p>
                                </>
                            )}
                        </div>
                        <label className="flex items-center cursor-pointer justify-center mt-4">
                            <Button onClick={() => setIsFormerly(p => !p)}>{isFormerly ? 'Switch to Presently' : 'Switch to Formerly'}</Button>
                        </label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutContainer