import React from "react";

function Contact() {
  const data = [
    {
      title: "Contact",
      content: [
        "Jayapadma Nivas, 12-13-853/22, Street No. 13, Nagarjuna Nagar, Tarnaka, Hyderabad -500 017, India.",
        "Mob: 9949027118,7989290324",
        "E-mail: profsjr@gmail.com , chancellor.sjr@gmail.com",
        "Date of Birth : 1st July 1945"
      ]
    },
    {
      title: "Position held",
      content: [
        "Vice-Chancellor, Sri Venkateswara University, Tirupati",
        "Founder Vice-Chancellor (in-Charge), Yogi Vemana University, Kadapa",
        "Vice-Chancellor (in-Charge), Dravidian University, Kuppam",
        "Vice-Chancellor (in-Charge), Sri Krishnadevaraya University, Anantapur",
        "Member, Andhra Pradesh Pollution Control Appellate Authority"
      ]
    },
    {
      title: "Visiting Professor",
      content: [
        "Universities of Tokyo, Japan",
        "Universities of Humboldt University-Berlin, Germany",
        "Universities of Kanazawa, Japan",
        "Senior Professor (C4), University of Greifswald, Germany"
      ]
    },
    {
      title: "Member, Executive Council",
      content: [
        "Central University of Haryana",
        "Sri Krishnadevaraya University",
        "Member, Board of Governors, Environmental Protection Training and Research Institute (EPTRI), Hyderabad",
        "Council Member, AP State Council of Higher Education, Hyderabad",
        "Chairma-Giovering Board, TEQUIP World Bank Project",
        "Principal and Vice-Principal, University of College of Art and Sciences, Sri Venkateswara University",
        "Professor of Chemistry, Sri Venkateswara University, Tirupati",
        "Dean, Faculty of Sciences, Sri Venkateswara University, Tirupati",
        "Dean, School of Mathematics and Physical Sciences, Sri Venkateswara University",
        "Member, Board of Governers, A P Residential Educational Institutions Society"
      ]
    },
    {
      title: "Head",
      content: [
        "Department of Chemistry, Sri Venkateswara University",
        "Department of Environmental Chemistry, S.V.U. College of Engineering Tirupati",
        "Scientific Officier, Twente University of Technology, Netherlands",
        "President, Sri Venkateswara University Teachers Association"
      ]
    },
    {
      title: "Honors and Awards",
      content: [
        "Chemical Research Society of India Bronze Medal for significant contributions to chemical research",
        "Best University Teacher Award by Andhra Pradesh State Government",
        "Life Time Achievement Award for Academic Excellence, National and International Collaboration, Administrative and Organisational Capability, S V University",
        "Executive Committee Member, Indian Society of Chemists and Biologists",
        "Executive Council Member, Indian Council of Chemists",
        "Founder President, Society for Environmental Chemists",
        "Sectional President, Environmental and Analytical Chemistry, IXth Annual conference of the Indian Council of Chemists",
      ]
    },
    {
      title: "Fellows",
      content: [
        "Alexander Von Humboldt (AvH) Foundation, Germany",
        "Japan Society for Promotion of Science (JSPS), Japan",
        "Andhra Pradesh/Telengana Akademi of Sciences",
        "ACTIM, France",
        "DAAD, Germany",
        "Electrchemical Society of India"
      ]
    },
    {
      title: "Visits Board",
      content: [
        "Visited Germany, Switzerland, Denmark, Sweden, Netherlands, Scottland, England, France, Ireland, Belgium, Finland, Spain, Canada, U.S.A, Austria, Poland, Japan, Singapore and Malaysia on various academic assignments."
      ]
    },
    {
      title: "Research",
      content: [
        "Guided 35 PhDs and 9 M.Phils",
        "270 research papers, 8 review articles and 16 general/popular articles in national and international journals, dailies such as The Hindu and Indian Express. Authored 4 books. Research work has been widely cited.",
        "Research projects from agencies ISRO, DST, CSIR, TTD, MOEF, DNES, DAE, UGC and Alexander Von Humboldt Foundation, Germany."
      ]
    },
    {
      title: "Academic Achievements",
      content: [
        "Chairman/Member, NAAC PEER Committee for various Universities",
        "Chairman/Member, UGC Assessment Committee (DEEMED Universities) for various Universities",
        "Chairman/Member, UGC Assessment Committee (9th, 10th and 11th plans)",
        "Chairman/Member, Planning and Monitoring Board, Sri Venkateswara University",
        "Member, Planning and Monitoring Board, Saurashtra University, Rajkot",
        "Member, High Power Advisory Committee, Karnataka State Open University, Mysore",
        "Member, Task Force on Reference Materials, CPCB, New Delhi",
        "International Scientific Committee member, Biological Environmental Specimen Banking, Sweden and Austria",
        "Advisory Committee member, Ministry of Environment and Forests, New Delhi",
        "Environment awareness committee of the A.P Government",
        "Committee for monitoring the development of the hill areas in the A.P State",
        "Chairman/Member, Academic Senate, Sri Venkateswara University, Cochin University of Science and Technology, ANGRAU, Hyderabad",
        "General Assembly Member, Indian Council for Cultural Relations",
        "Expert Cum Course Writers Committee Member, B.R.Ambedkar Open University, Hyderabad",
        "Curriculum Development Committee, Indira Gandhi National Open University",
        "Chairman/Member, Board of Studies in Chemistry, S.V.University and Various other Universities",
        "Editorial Board and Referee of various Scientific Journals",
        "Governing Board member of various graduate and post-graduate colleges",
        "Selection committees of various Universities"
      ]
    },

  ]
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {
              data.map((item: any) => {
                return (
                  <>
                    <div className="py-8 flex flex-wrap md:flex-nowrap bg-[#f3f3f3] p-8 rounded-lg mb-10 items-center justify-center text-center gap-4">
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-xl text-blue-600">{item.title}</span>
                      </div>
                      <div className="md:flex-grow leading-loose gap-y-2">
                        <ul>
                          {
                            item.content.map((c: any, index) => {
                              return <li key={index} className="text-md text-left text-black" >• {c}</li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
