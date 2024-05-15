"use client";
import React, { useState } from "react";

const AboutContainer = () => {
  const [isFormerly, setIsFormerly] = useState(true);

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col items-center rounded-md mx-auto max-w-7xl sm:px-6 lg:px-8 p-5 bg-white">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-center prose-blue">
            <div className="w-full flex flex-col justify-center items-center">
              <img
                className="rounded-full p-5"
                height={400}
                width={400}
                src="./assets/images/chancellor.png"
                alt="mockup"
              />
              <h2 className="font-medium text-3xl m-2 p-2 text-indigo-500">
                Dr.S.Jayarama Reddy ( M.Sc., Ph.D )
              </h2>
              {isFormerly ? (
                <>
                  <h4 className="font-light mt-2 text-2xl">Formerly</h4>
                  <ul className="mt-2 leading-8">
                    <li>
                      {" "}
                      Chancellor, Sri Chandrasekharendra Saraswathi Viswa
                      Mahavidyalaya (Deemed to be University), Kanchipuram
                    </li>
                    <li>
                      {" "}
                      Vice-Chancellor, Sri Venkateswara University, Tirupati
                    </li>
                    <li>
                      {" "}
                      President, PRIST (Deemed to be University), Thanjavur
                    </li>
                    <li>
                      Chairman, University Advisory Board, Shri Guru Ram Rai
                      University, Dehradun
                    </li>
                    <li>
                      Chairman, University Task Force, Centurion University,
                      Bhubaneswar
                    </li>
                    <li>
                      {" "}
                      Chairman, University Task Force, Jain University,
                      Bengaluru
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h4 className="font-light mt-2 text-2xl">Presently</h4>
                  <ol className="mt-2 leading-8">
                    <li>
                      Member Advisory Board, Sri Sathya Sai University for Human
                      Excellence, Banglore
                    </li>
                    <li>
                      {" "}
                      Member Govering Council, SNS Institutions, Coimbatore
                    </li>
                  </ol>
                </>
              )}
            </div>
            <label className="flex items-center cursor-pointer justify-center mt-4">
              <button
                className="text-white bg-indigo-400 rounded-md py-2 px-4"
                onClick={() => setIsFormerly((p) => !p)}
              >
                {isFormerly ? "Switch to Presently" : "Switch to Formerly"}
              </button>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContainer;
