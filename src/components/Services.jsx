import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLaptopCode,faChartColumn, faSliders,faDatabase,faFileLines } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        id:1,
        icon: faDesktop,
        color: '#FFAE00',
        title: "Modern Design",
        content: "Enterprise Resource Planning (ERP) implementation is often seen as customization or integration, but it can also be seen as a complete lifecycle from inception to completion."
    },
    {
        id:2,
        icon: faLaptopCode,
        color:'#FF4E6E',
        title: "Development & Logic",
        content:"LOGIC's flexible and scalable ERP and Retail & POS Software have helped thousands of customers meet their business goals."
    },
    {
        id:3,
        icon: faChartColumn,
        color: '#4682B4',
        title:"Develop ERP",
        content:"Design, develop, and implement comprehensive ERP solutions to optimize business processes and improve efficiency."
    },
    {
        id:4,
        icon: faSliders,
        color: '#1b4332',
        title: "Easy To Customize",
        content: "Over 1000 methodologies proposed, each detailing practices for successful systems development."
    },
    {
        id:5,
        icon: faDatabase,
        color: '#f4d35e',
        title: "Database Implementation",
        content: "This research aims to assess benefits of using a development methodology in ERP implementations and compare traditional vs. modern methodologies' effectiveness."
    },
    {
        id:6,
        icon: faFileLines,
        color: '#8d0226',
        title: "Documentation",
        content: "The findings are derived from textual analysis of project documents and attendance at project team-client meetings, providing insight into client needs and expectations."
    },

]

function Services(){
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="bg-gray-50 text-center py-12" id="services">
        <div className="flow-root max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8 ">
            <p className="text-sm text-gray-900 font-latoR">Our Services</p>
            <h1 className="pt-5 mt-2 text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900  font-latoR">Tailored Solutions for You</h1>
            <p className=" text-sm lg:text-xl lg:mx-auto mt-4 max-w-xl text-gray-500  font-opensans py-5">We focus on building enduring business relationships as your reliable software development partner</p>
            <div className=" h-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  place-items-center p-10 ">
               {services.map((service)=>(
                <div key={service.id} className="h-80 w-80 p-8 rounded-xl shadow-xl bg-white flex flex-col hover:bg-gradient-to-b  from-sky-50 from-15% via-[#6EFCFD] via-50% to-[#1AC4FA] to-90%"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="">
                      {/* icons */}
                        <span className="inline-flex items-center justify-center p-3  rounded-full shadow-lg" style={{ background: `${service.color}` }}>
                            <FontAwesomeIcon icon={service.icon} className="w-8 h-8 text-white" />
                        </span>
                        {/* content */}
                        <div className="text-center py-2">
                            <p className="font-semibold text-black text-lg font-latoR pb-2">{service.title}</p>
                            <p className={`font-opensans text-base ${isHovered ? 'text-gray-700' : 'text-gray-500'}`} >{service.content}</p>
                        </div>
                    </div>   
                </div>
               ))}
                
            </div>
        </div>
        </section>
    );
}

export default Services;