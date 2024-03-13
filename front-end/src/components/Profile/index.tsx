"use client";
import React, { useState } from "react";
import Positions from "./Positions";
import Awards from "./Honors-and-Awards";
import Fellow from "./Fellow";
import Research from "./Research";
import Academic from "./Academic-Assignments";
import {
  AccountCircle,
  Assignment,
  EmojiEvents,
  School,
  Troubleshoot,
} from "@mui/icons-material";

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState({
    title: "Positions held",
    component: <Positions />,
  });
  const data = [
    {
      title: "Positions held",
      component: <Positions />,
      icon: (className: string) => <AccountCircle className={className} />,
    },
    {
      title: "Honors and Awards",
      component: <Awards />,
      icon: (className: string) => <EmojiEvents className={className} />,
    },
    {
      title: "Fellow",
      component: <Fellow />,
      icon: (className: string) => <School className={className} />,
    },
    {
      title: "Research",
      component: <Research />,
      icon: (className: string) => <Troubleshoot className={className} />,
    },
    {
      title: "Academic Assignments",
      component: <Academic />,
      icon: (className: string) => <Assignment className={className} />,
    },
  ];
  return (
    <section className="h-full w-full p-5">
      <div className="w-full flex flex-col gap-2 justify-center">
        <ul className="grid grid-cols-5  gap-2 w-full -mb-px text-sm  font-medium text-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md">
          {data.map((item: any, index: number) => {
            return (
              <li
                key={index}
                className={` hover:bg-gray-300 w-full rounded-lg ${
                  activeComponent.title === item.title ? "bg-gray-300" : ""
                }  `}
                onClick={() => setActiveComponent(item)}
              >
                <div
                  className={` ${
                    activeComponent.title === item.title ? "text-gray-600" : ""
                  }  inline-flex w-full items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer`}
                >
                  {item.icon(
                    ` ${
                      activeComponent.title === item.title
                        ? "text-gray-600"
                        : ""
                    }  w-5 h-5 me-1 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300`
                  )}
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="h-full w-full">{activeComponent.component}</div>
      </div>
    </section>
  );
};

export default Profile;
