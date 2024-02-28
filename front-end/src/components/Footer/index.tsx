import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200antialiased">
      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="grid grid-cols-2 place-items-center md:place-items-start lg:place-items-start gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500">
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
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Help center
              </h2>
              <ul className="text-gray-500">
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
                  <span className="text-gray-500text-[14px]">
                    <strong className="text-black">
                      Dr. S. Jayarama Reddy, M.Sc., Ph.D
                    </strong>
                    <br />
                    Jayapadma Nivas, 12-13-853/22,
                    <br />
                    Street No. 13, Nagarjuna Nagar,
                    <br />
                    Tarnaka, Hyderabad -500 017, India.
                  </span>
                </div>
              </div>
              <div>
                <span className="text-white text-[14px]">
                  <strong className="text-black">Phone :</strong>{" "}
                  <a
                    className="hover:underline text-gray-500 "
                    href="tel:+919949027118"
                  >
                    9949027118
                  </a>
                  ,
                  <a
                    className="hover:underline text-gray-500 "
                    href="tel:+917989290324"
                  >
                    7989290324
                  </a>
                  <br />
                  <strong className="text-black">Email :</strong>{" "}
                  <a
                    className="hover:underline text-gray-500 "
                    href="mailto:profsjr@gmail.com"
                  >
                    profsjr@gmail.com
                  </a>
                  ,
                  <a
                    className="hover:underline text-gray-500 "
                    href="mailto:chancellor.sjr@gmail.com"
                  >
                    chancellor.sjr@gmail.com
                  </a>
                  <br />
                  <span className="text-gray-500">
                    <strong className="text-black">Hours : </strong>
                    8:30am – 5:00pm Monday – Friday
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-300 sm:mx-autolg:my-5" />
        <div className="text-center">
          <span className="block text-sm text-center text-gray-500">
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
