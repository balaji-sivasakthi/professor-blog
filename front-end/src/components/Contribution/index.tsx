import React from 'react';

const ContributionEntry = ({ title, content, isLeftTimeline }: any) => (
    <div className={`mb-8 flex justify-between ${isLeftTimeline ? 'flex-row-reverse' : ''} items-center w-full timeline`}>
        <div className="order-1 w-5/12"></div>
        <div className={`order-1 w-5/12 px-1 py-4 ${isLeftTimeline ? 'text-right' : 'text-left'}`}>
            <h4 className="mb-3 font-bold text-lg md:text-2xl text-indigo-400">{title}</h4>
            {
                content.length !== 0 && (
                    <ul>
                        {content.split(",").map((item: any, index: number) => {
                            return (
                                <li key={index} className='mb-2 text-gray-500'>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                )
            }

        </div>
    </div>
);

const Contribution = () => {
    const contributionData = [
        {
            title: "Introduction of",
            content: "Choice Based Credit System, Bridge and vocational courses, “Earn While you Learn” SiChemex, 5-year integrated programme at PG level"
        },
        {
            title: "Establishment of",
            content: "IQAC, Grievance redressal cell, career awareness and counseling cell and internet hub"
        },
        {
            title: "Organisation of",
            content: "Open house/exhibition, Consumer GiClubs, Community development activities, adoption of some villages and inclusion of community development component in the regular curriculum."
        },
        {
            title: "Instrumental in preparing a road map to establish Yogi Vemana University, Kadapa",
            content: ""
        },
        {
            title: "Decentralization of administration",
            content: ""
        },
    ]
    return (
        <section className='w-full'>
            <div className="bg-white text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                        <p className="text-3xl md:text-4xl text-indigo-500 leading-normal md:leading-relaxed mb-2">Contribution as Vice Chancellor</p>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the fest.
                        </p>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div className="border-2-2 border-yellow-555 absolute h-full border right-1/2 border-solid border-yellow-300 rounded" />
                                <div className="border-2-2 border-yellow-555 absolute h-full border left-1/2 border-solid border-yellow-300 rounded" />
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    {contributionData.map((entry, index) => (
                                        <ContributionEntry
                                            key={index}
                                            title={entry.title}
                                            content={entry.content}
                                            isLeftTimeline={index % 2 === 0} // Alternate left and right timelines
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='mt-8'>
                                <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" alt="Tech Fest" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contribution;

