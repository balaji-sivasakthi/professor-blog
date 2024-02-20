/** @format */

export const ContactData = {
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

export const FOOTER_DATA = [
   {
      title: "Latest Blogs",
      component: "link",
      data: BlogLinks,
   },
   {
      component: "link",
      title: "Class Resources",
      data: ResourceLinks,
   },
   {
      component: "contact",
      title: "Logo",
      data: ContactData,
   },
];
