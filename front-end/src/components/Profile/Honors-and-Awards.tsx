import React from 'react'

const Awards = () => {

    const awardsData = [
        {
            award: "Chemical Research Award",
            title: "Chemical Research Society of India Bronze Medal for significant contributions to chemical research"
        },
        {
            award: "Best Teacher Award",
            title: "Best University Teacher Award by Andhra Pradesh State Government"
        },
        {
            award: "Life Time Achievement Award",
            title: "Life Time Achievement Award for Academic Excellence, National and International Collaboration, Administrative and Organisational Capability, S V University"
        },
        {
            award: "Executive Committee Member",
            title: "Executive Committee Member, Indian Society of Chemists and Biologists"
        },
        {
            award: "Executive Council Member",
            title: "Executive Council Member, Indian Council of Chemists"
        },
        {
            award: "Founder President",
            title: "Founder President, Society for Environmental Chemists"
        },
        {
            award: "Sectional President",
            title: "Sectional President, Environmental and Analytical Chemistry, IXth Annual Conference of the Indian Council of Chemists"
        }
    ]
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"> Honors and <span className="underline decoration-blue-500">Awards</span></h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {
                        awardsData.map((item: any) => {
                            return (
                                <>
                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </span>
                                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{item.award}</h1>
                                        <p className="text-gray-500 dark:text-gray-300 text-lg">
                                            {item.title}
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Awards