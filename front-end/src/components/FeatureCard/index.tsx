import React from 'react'

interface FeatureCardProps {
    title: string;
    description: string;
    svgPath: any;
}


const FeatureCard = ({ svgPath, title, description }: FeatureCardProps) => (
    <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d={svgPath}></path>
                </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
            <p className="leading-relaxed text-base">{description}</p>
        </div>
    </div>
);

export default FeatureCard