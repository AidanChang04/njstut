import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Coding Languages:</li>
                <li className = "ml-6">Java</li>
                <li className = "ml-6">Python</li>
                <li className = "ml-6">SQL</li>
                <li className = "ml-6">R</li>
                <li className = "ml-6">C</li>
                <li className = "ml-6">C++</li>
                <li className = "ml-6">PowerBI</li>
                
                <li>Design Skills:</li>
                <li className = "ml-6">Figma</li>
                <li className = "ml-6">DaVinci Resolve</li>
                <li className = "ml-6">FlutterFlow</li>
            </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-2">
                <li>TuneProtect Hackathon 2023</li>
                <li>Codegoda 2023</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Asia Pacific University (2nd Year Data Analytics)</li>
                <li>Sirius Scholar Skills (Graduated with 8A*s in IGCSE Oct/Nov 2020)</li>
            </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return (
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMeDraft.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }} />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">As a Data Analytics student at Asia Pacific University of Technology and Innovation (APU / APIIT), I am passionate about learning and applying new technologies and methodologies to solve real-world problems.
                        I have completed multiple projects using Python, SQL, and various data analysis tools and frameworks, such as Pandas, NumPy, Matplotlib, and Scikit-learn. </p>
                    <div className="flex flex-row mt-8">
                        {/* 1e */}
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >

                            Skills
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("experiences")}
                            active={tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>

                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;