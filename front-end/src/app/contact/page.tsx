import React from "react";


function Contact() {
 
  return (
    <div className="container mx-auto px-40 ">
    <div className="grid grid-cols-2 gap-8 ">
      {/* First Column: Contact Information */}
      <div>
        <h2 className="text-4xl my-6 tracking-wide">Contact</h2>
        <p className="pb-4">
          Get in touch with us if you have any questions, comments, or concerns!
        </p>
        <p className="pb-4 "><strong>Address:</strong><br />
         Hill Center for the Mathematical Sciences<br />
          110 Frelinghuysen Road<br />
          Piscataway, NJ 08854
        </p> 
        <p><strong>Phone:</strong> 848-445-4357<br />
        <strong>Fax:</strong> 732-445-5493<br />
        <strong>Email:</strong> help@oit.rutgers.edu<br />
        <p className="pt-4"><strong >Hours:</strong><br/> 8:30am – 5:00pm Monday – Friday
        </p></p>
      </div>
      
      {/* Second Column: Contact Form */}
      <div>
        <h2 className="text-4xl my-6 tracking-wide">Contact Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="message" rows="4" required className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
          </div>
          <button type="submit" className="bg-red-600  text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border border-black">Submit</button>
        </form>
      </div>
    </div>
    </div>


  );
}

export default Contact;
