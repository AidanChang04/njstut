import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Purchase Order Management System (Java) ",
        description: "A project I worked on during my undergraduate studies. I coded this using the Java programming language.",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/AidanChang04/Purchase-Order-Management-System-Java-"

    },
    {
        id: 2,
        title: "Leave Management System (C Programming) ",
        description: "A project I worked on during my undergraduate studies. I coded this using the C-programming language.",
        image: "C:/Users/aidan/njstut/public/LeaveManagement.png",
        gitUrl: "https://github.com/AidanChang04/Leave-Management-System-C-Programming-"
    },

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
