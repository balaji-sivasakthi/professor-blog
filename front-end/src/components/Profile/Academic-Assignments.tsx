import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from 'flowbite-react';

function AcademicCard({ label }: any) {
    return (
        <Card href="#" className="max-w-sm mb-4 p-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {label}
            </h5>
        </Card>
    );
}

function Academic() {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );
            return updatedIndexes;
        });
    };

    const cardLabels = [
        "Chairman/Member, NAAC PEER Committee for various Universities",
        "Chairman/Member, UGC Assessment Committee (DEEMED Universities) for various Universities",
        "Chairman/Member, UGC Assessment Committee (9th, 10th and 11th plans)",
        "Chairman/Member, Planning and Monitoring Board, Sri Venkateswara University",
        "Member, Planning and Monitoring Board, Saurashtra University, Rajkot",
        // "Member, High Power Advisory Committee, Karnataka State Open University, Mysore",
        // "Member, Task Force on Reference Materials, CPCB, New Delhi",
        // "International Scientific Committee member, Biological Environmental Specimen Banking, Sweden and Austria",
        // "Advisory Committee member, Ministry of Environment and Forests, New Delhi",
        // "Environment awareness committee of the A.P Government",
        // "Committee for monitoring the development of the hill areas in the A.P State",
        // "Chairman/Member, Academic Senate, Sri Venkateswara University, Cochin University of Science and Technology, ANGRAU, Hyderabad",
        // "General Assembly Member, Indian Council for Cultural Relations",
        // "Expert Cum Course Writers Committee Member, B.R.Ambedkar Open University, Hyderabad",
        // "Curriculum Development Committee, Indira Gandhi National Open University",
        // "Chairman/Member, Board of Studies in Chemistry, S.V.University and Various other Universities",
        // "Editorial Board and Referee of various Scientific Journals",
        // "Governing Board member of various graduate and post-graduate colleges",

    ];

    const positions = ["left1", "left", "right", "right1"];

    const cardVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };

    return (
        <div className="flex items-center flex-col justify-center h-screen">
            {cardLabels.map((label, index) => (
                <motion.div
                    key={index}
                    className="rounded-[12px] max-w-sm p-4"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                    style={{ width: "90%", position: "absolute" }}
                >
                    <AcademicCard label={label} />
                </motion.div>
            ))}
            <div className="flex flex-row gap-3">
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Academic;
