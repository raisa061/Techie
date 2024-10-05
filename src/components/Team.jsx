import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const team = [
    {
        name: "John Doe",
        position: "CEO/Co-founder",
        image: "images/team/1.jpg",
        icon1: faFacebook,
        icon2: faLinkedin,
        icon3: faInstagram,
        icon4: faGithub
    },
    {
       name: "Helene Engels",
        position: "CTO/Co-founder",
        image: "images/team/2.jpg",
        icon1: faFacebook,
        icon2: faLinkedin,
        icon3: faInstagram,
        icon4: faGithub 
    },
    {
        name: "Jese Leos",
         position: "SEO & Marketing",
         image: "images/team/3.jpg",
         icon1: faFacebook,
         icon2: faLinkedin,
         icon3: faInstagram,
         icon4: faGithub 
     },
     {
        name: "Joseph Mcfall",
         position: "Sales",
         image: "images/team/4.jpg",
         icon1: faFacebook,
         icon2: faLinkedin,
         icon3: faInstagram,
         icon4: faGithub 
     }

];

function Team(){
    return(
        <section className="bg-gradient-to-r from-green-200 to-blue-200" id="team">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="mb-4 text-lg lg:text-3xl sm:text-4xl leading-8 tracking-tight font-latoR font-extrabold text-gary-900">Our team</h2>
                <p className="font-light font-opensans text-sm lg:text-xl sm:text-xl text-gray-700">We make life easier for our customers and community through reliable, affordable and useful tech innoovations.</p>
            </div> 
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {team.map((card,index) => (
                    <div className="text-center text-gray-700">
                        <div key={index}>
                        <img className="mx-auto mb-4 w-36 h-36 rounded-lg" src={card.image} alt="Member-1"/>
                        <h3 className="mb-1 text-lg lg:text-xl font-bold font-latoR tracking-tight ">
                            {card.name}
                        </h3>
                        <p className="text-xs md:text-sm font-opensans">{card.position}</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-sky-300">
                                <FontAwesomeIcon icon={card.icon1} className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-sky-300">
                                <FontAwesomeIcon icon={card.icon2} className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-sky-300">
                                <FontAwesomeIcon icon={card.icon3} className="h-6 w-6" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-sky-300">
                                <FontAwesomeIcon icon={card.icon4} className="h-6 w-6" />
                                </a> 
                            </li> 
                        </ul>
                        </div>
                    </div>   
                ))}   
                
            </div>  
        </div>
        </section>
    )
};

export default Team;