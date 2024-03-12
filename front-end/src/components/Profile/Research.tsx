import React from 'react'

const Research = () => {
    const researchData = [
        {
            label: "PhD and M.Phil Guidance",
            content: "Guided 35 PhDs and 9 M.Phils",
        },
        {
            label: "Publications",
            content: "Authored 270 research papers, 8 review articles, and 16 general/popular articles in national and international journals, including dailies such as The Hindu and Indian Express. Research work has been widely cited.",
        },
        {
            label: "Research Projects",
            content: "Completed research projects funded by agencies such as ISRO, DST, CSIR, TTD, MOEF, DNES, DAE, UGC, and Alexander Von Humboldt Foundation, Germany.",
        },
    ];

    return (
        <div className="flex justify-around p-4 text-gray-600">

            <div className='flex items-center justify-center'>
                <img
                    className="p-1"
                    height={400}
                    width={400}
                    src="./assets/images/research.png"
                    alt="mockup"
                />
            </div>
            <div>
                {/* <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">My Research</h1> */}
                <ul className="place-content-center space-y-8">
                    {
                        researchData.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex">
                                    <div className="px-4 text-5xl font-extralight text-indigo-700">{index + 1}.</div>
                                    <div>
                                        <div className="text-xl font-bold text-indigo-800">{item.label}</div>
                                        <p className="max-w-xs py-2 text-sm text-indigo-900">{item.content}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Research