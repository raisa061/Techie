import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { id: 1, title: "ERP for Pharmaceuticals", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", image: "images/projects/project1.png", color: "#98D2EB" },
  { id: 2, title: "Custom ERP Software", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "images/projects/project2.png", color: "#E1F2FE" },
  { id: 3, title: "Electro ERP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "images/projects/project3.png", color: "#B2B1CF" },
  { id: 4, title: "Textile ERP", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "images/projects/project4.png", color: "#FFEDE1" }
];

function Projects(){

  return (
    <section className="py-12 bg-gradient-to-r from-green-200 to-blue-200" id='projects'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-10'>
                <h2 className="py-5 mt-2  text-center text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900  font-latoR">Our Projects</h2>
                <p className="text-sm lg:text-xl lg:mx-auto mt-4 max-w-xl text-gray-700  font-opensans py-5">Explore our diverse and innovative projects that bring your visions to life.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {projects.map((project) => (
                <div key={project.id} className="relative group h-96 border border-1 rounded-lg " style={{ background: `${project.color}` }}>
                    <div className="text-9xl text-center text-gray-900 transition-opacity duration-500 group-hover:opacity-0">
                    {project.id}
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end items-start transition-opacity duration-500 group-hover:opacity-100 bg-contain bg-top bg-no-repeat opacity-0 rounded-t-lg" style={{ backgroundImage: `url(${project.image})` }}>
                        <div className="bg-black bg-opacity-50 p-4 w-full h-44 md:h-56 group-hover:bg-opacity-70 transition-colors duration-500 rounded-b-lg"> 
                        </div>
                        
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end items-start p-4 w-full">
                        <h3 className="text-lg font-latoR font-semibold transition-colors duration-500 group-hover:text-white">{project.title}</h3>
                        <div className='inline-flex'>
                            <p className="text-sm font-opensans transition-colors duration-500 group-hover:text-white">{project.description}</p>
                            <FontAwesomeIcon icon={faArrowUpLong} className='mt-28 transform-origin rotate-45 group-hover:text-white'/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Projects;
