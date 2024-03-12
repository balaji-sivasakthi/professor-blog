import React from 'react'

const Positions = () => {


    const positionData = [
        {
            position: "Vice-Chancellor, Sri Venkateswara University, Tirupati",
            place: "",
        },
        {
            position: "Chancellor, Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (Deemed to be University), Kanchipuram",
            place: "",
        },
        {
            position: "Founder Vice-Chancellor (in-Charge), Yogi Vemana University, Kadapa",
            place: "",
        },
        {
            position: "Vice-Chancellor (in-Charge), Dravidian University, Kuppam",
            place: "",
        },
        {
            position: "Vice-Chancellor (in-Charge), Sri Krishnadevaraya University, Anantapur",
            place: "",
        },
        {
            position: "Member, Andhra Pradesh Pollution Control Appellate Authority",
            place: "",
        },
        {
            position: "Senior Professor (C4), University of Greifswald, Germany",
            place: "",
        },
        {
            position: "Member, Executive Council",
            place: "",
        },
        {
            position: "Member, Board of Governors, Environmental Protection Training and Research Institute (EPTRI), Hyderabad",
            place: "",
        },
        {
            position: "Council Member, AP State Council of Higher Education, Hyderabad",
            place: "",
        },
        {
            position: "Chairma-Govering Board, TEQUIP World Bank Project",
            place: "",
        },
        {
            position: "Principal and Vice-Principal, University of College of Art and Sciences, Sri Venkateswara University",
            place: "",
        },
        {
            position: "Professor of Chemistry, Sri Venkateswara University, Tirupati",
            place: "",
        },
        {
            position: "Dean, Faculty of Sciences, Sri Venkateswara University, Tirupati",
            place: "",
        },
        {
            position: "Dean, School of Mathematics and Physical Sciences, Sri Venkateswara University",
            place: "",
        },
        {
            position: "Member, Board of Governers, A P Residential Educational Institutions Society",
            place: "",
        },
        {
            position: "Scientific Officier, Twente University of Technology, Netherlands",
            place: "",
        },
        {
            position: "President, Sri Venkateswara University Teachers Association",
            place: "",
        },
        {
            position: "Head",
            place: "Department of Chemistry, Sri Venkateswara University, Department of Environmental Chemistry, S.V.U. College of Engineering Tirupati",
        },
        {
            position: "Vice-Chancellor, Sri Venkateswara University, Tirupati",
            place: "Central University of Haryana, Sri Krishnadevaraya University",
        },
        {
            position: "Visiting Professor",
            place: "Universities of Tokyo, Japan, Universities of Humboldt University-Berlin, Germany, Universities of Kanazawa, Japan",
        },
    ]
    return (
        <div className="flex flex-col h-full">
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {
                    positionData.map((item: any, index: number) => {
                        return (
                            <div key={index} className="flex items-center rounded-xl bg-white p-4 shadow-lg">
                                <div className="ml-4">
                                    <h2 className="font-normal">{item.position}</h2>
                                    <div className="mt-2 text-sm text-gray-500">
                                        {
                                            item.place.length !== 0 && (
                                                <div>
                                                    <ul>
                                                        {item.place.split(",").map((i: any, index: number) => {
                                                            return (
                                                                <li key={index}>
                                                                    {i}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Positions