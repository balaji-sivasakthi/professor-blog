import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 antialiased">
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="grid grid-cols-2 place-items-center md:place-items-start lg:place-items-start gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center lg:justify-start items-center mt-6 lg:mt-0 md:mt-0 lg:items-end">
            <div className="flex flex-col gap-2">
              <div className="lg:mt-0 flex lg:col-span-2 lg:flex gap-2">
                <img
                  className="rounded-full p-1"
                  height={80}
                  width={80}
                  src="./assets/images/chancellor.png"
                  alt="mockup"
                />
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-[14px]">
                    <strong className="text-black">
                      Dr. S. Jayarama Reddy, M.Sc., Ph.D
                    </strong>
                    <br />
                    Jayapadma Nivas, 12-13-853/22,
                    <br />
                    Street No. 13, Nagarjuna Nagar,
                    <br />
                    Tarnaka, Hyderabad -500 017, India.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-white text-[14px]">
                  <strong className="text-black">Phone :</strong>{" "}
                  <a
                    className="hover:underline text-gray-500 dark:text-gray-400"
                    href="tel:+919949027118"
                  >
                    9949027118
                  </a>
                  ,
                  <a
                    className="hover:underline text-gray-500 dark:text-gray-400"
                    href="tel:+917989290324"
                  >
                    7989290324
                  </a>
                  <br />
                  <strong className="text-black">Email :</strong>{" "}
                  <a
                    className="hover:underline text-gray-500 dark:text-gray-400"
                    href="mailto:profsjr@gmail.com"
                  >
                    profsjr@gmail.com
                  </a>
                  ,
                  <a
                    className="hover:underline text-gray-500 dark:text-gray-400"
                    href="mailto:chancellor.sjr@gmail.com"
                  >
                    chancellor.sjr@gmail.com
                  </a>
                  <br />
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong className="text-black">Hours : </strong>
                    8:30am – 5:00pm Monday – Friday
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-5" />
        <div className="text-center">
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © Copyright{" "}
            <a href="#" className="hover:underline">
              SNS College of Technology
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
