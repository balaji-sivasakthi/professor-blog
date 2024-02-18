
import React from "react";
import { LinkItemProps, TopFooterSectionItemProps } from "./types";
import { RenderItem } from "@professor-blog/utils";

const ContactData = {
  name: "Prof. Dr. S. Jayarama Reddy",
  address: "01 Ameya Towers, Street No. 12, Tarnaka, Hyderabad  - 500 017, A.P.,  INDIA",
  phone: ["+91 9949027118"],
  email: ["profsjr@gmail.com"],
};

const BlogLinks = [
  {
    label: "Adventure of Human Space Exploration",
    link: "",
    posted_on: "December 6, 2017",
  },
  {
    label: "Adventure of Human Space Exploration",
    link: "",
    posted_on: "December 6, 2017",
  },
];
const ResourceLinks = [
  {
    label: "2018 Course List",
    link: "",
  },
  {
    label: "Programs",
    link: "",
  },
  {
    label: "Lectures",
    link: "",
  },
  {
    label: "Research",
    link: "",
  },
];

const TopFooterSectionItem = ({ children, title }: TopFooterSectionItemProps) => {
  return (
    <div className="px-2 w-[100%] h-[100%]">
      <div className="text-primary_color text-sm">{title}</div>
      <div className="flex flex-col gap-2 mt-4">
        {children}
      </div>
    </div>
  );
};

const LinkItem = ({ label, description, link }: LinkItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="py-1 text-white_color hover:underline hover:text-primary_color flex flex-col" >
        <span>{label}</span>
      </div>
      {description && <div className="text-xs text-[#9C9C9C]" >{description}</div>}
    </div>
  )
};


const ContactDetails = () => {
  return (
    <div className="text-xs text-white_light flex flex-col gap-2">
      <div>{ContactData.name}</div>
      <div>
        {ContactData.address.split(',').map(item => <span>{item}</span>)}
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-xs text-[#9C9C9C]">Email:</span>
        {ContactData.email.map(item => <span> {item}</span>)}
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-xs text-[#9C9C9C]">Phone:</span>
        {ContactData.phone.map(item => <span>{item}</span>)}
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="w-[100%] bg-black_color text-white_color p-2 h-[45vh] flex items-center justify-center">
      <div className="w-[75%] h-[75%] grid grid-cols-4 gap-2">
        <TopFooterSectionItem
          children={<></>}
          title=""
        />
        <TopFooterSectionItem
          title="Latest Blogs"
          children={<RenderItem
            component={(item: any) => <LinkItem {...item} description={item.posted_on} />}
            data={BlogLinks}
          />
          }
        />
        <TopFooterSectionItem
          children={<RenderItem
            component={(item: any) => <LinkItem {...item} />}
            data={ResourceLinks}
          />}
          title="Class Resources"
        />
        <TopFooterSectionItem
          children={<ContactDetails />}
          title="Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
