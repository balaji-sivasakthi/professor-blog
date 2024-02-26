import React from "react";
import Link from "next/link";
interface CardProps {
  title: string;
  description: string;
  svgPath: string;
  id: number;
}

const Card: React.FC<CardProps> = ({ title, description, svgPath, id }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d={svgPath}></path>
            </svg>
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            {description.substring(0, 200) + "......"}
          </p>
          <Link
            href={`/blog/${id}`}
            className="mt-3 text-indigo-500 inline-flex items-center"
          >
            Read More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
