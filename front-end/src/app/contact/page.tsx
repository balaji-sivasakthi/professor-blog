import React from "react";

function Contact() {
  return (
    <div className="mx-auto px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-40 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div>
          <h2 className="text-4xl my-6 tracking-wide">Contact</h2>
          <p className="pb-4">
            Get in touch with us if you have any questions, comments, or
            concerns!
          </p>
          <p className="pb-4">
            <strong>Address:</strong>
            <br />
            Jayapadma Nivas, 12-13-853/22,
            <br />
            Street No. 13, Nagarjuna Nagar,
            <br />
            Tarnaka, Hyderabad -500 017, India.
          </p>
          <p>
            <strong>Phone:</strong> 9949027118, 7989290324
            <br />
            <strong>Email:</strong> profsjr@gmail.com , chancellor.sjr@gmail.com
            <br />
            <p className="pt-4">
              <strong>Hours:</strong>
              <br /> 8:30am – 5:00pm Monday – Friday
            </p>
          </p>
        </div>

        <div>
          <h2 className="text-4xl my-6 tracking-wide">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="block w-full   border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="block w-full  border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full ring-1 ring-inset ring-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border border-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
