import React from "react";
import Link from "next/link";

interface CardProps {
  id: number,
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  hidden?: boolean;
}


const Card: React.FC<CardProps> = ({ imgSrc, date, title, description, hidden, id }) => {
  return (

    <Link
      rel="noopener noreferrer"
      href={`/blog/${id}`}
      className={`max-w-sm mx-auto group border p-6 rounded-lg bg-indigo-100 hover:no-underline focus:no-underline dark:bg-gray-900 hover:bg-gray-200 ${hidden ? 'hidden sm:block' : ''}`}
    >
      <img
        role="presentation"
        className="object-cover w-full rounded-lg h-44 dark:bg-gray-500"
        // src={`http://localhost:1337${imgSrc}`}
        src={"https://source.unsplash.com/random/480x360?5"}
      />
      <div className="p-2 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs dark:text-gray-400">{date}</span>
        <p className="text-sm text- text-gray-400 leading-7">{description.substring(0, 200) + "......"}</p>
      </div>
    </Link>
  );
}

// interface CardProps {
//   title: string;
//   description: string;
//   svgPath: string;
//   id: number;
// }

// const Card: React.FC<CardProps> = ({ title, description, svgPath, id }) => {
//   return (
//     <div className="p-4">
//       <div className="flex rounded-lg h-full bg-white p-8 flex-col">
//         <div className="flex items-center mb-3">
//           <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-5 h-5"
//               viewBox="0 0 24 24"
//             >
//               <path d={svgPath}></path>
//             </svg>
//           </div>
//           <h2 className="text-gray-900 text-lg title-font font-medium">
//             {title}
//           </h2>
//         </div>
//         <div className="flex-grow">
//           <p className="leading-relaxed text-base">
//             {description.substring(0, 200) + "......"}
//           </p>
//           <Link
//             href={`/blog/${id}`}
//             className="mt-3 text-indigo-500 inline-flex items-center"
//           >
//             Read More
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-4 h-4 ml-2"
//               viewBox="0 0 24 24"
//             >
//               <path d="M5 12h14M12 5l7 7-7 7"></path>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };


export default Card;
