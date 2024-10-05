import React from 'react';


const technologies = [
  { name: 'Java', image: 'images/techStack/java.png' },
  { name: 'Asp.net', image: 'images/techStack/asp.net.png' },
  { name: 'PHP', image: 'images/techStack/php.png' },
  { name: 'Code Igniter', image: 'images/techStack/codeigniter.png' },
  { name: 'HTML', image: 'images/techStack/html.png' },
  { name: 'CSS', image: 'images/techStack/css.png' },
  { name: 'Bootstrap', image: 'images/techStack/bootstrap.png' },
  { name: 'Oracle', image: 'images/techStack/oracle.png' },
  { name: 'MySql', image: 'images/techStack/mysql.png' },
  { name: 'Microsoft Sql', image: 'images/techStack/msq.png' },
  // Add more technologies as needed
];

function Technology(){
  return (
    <section className="py-16 bg-gray-50" id='tech'>
      <div className="container mx-auto text-center">
        <h2 className="pt-5 mt-2 text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900  font-latoR">Our Technology Stack</h2>
        <p className="text-sm lg:text-xl lg:mx-auto mt-4 max-w-xl text-gray-500  font-opensans py-5">
          Streamline your workflow with our 20+ integrations.
        </p>
        
      </div>
      <div className="relative flex flex-wrap justify-center mt-12">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item p-2">
            <img src={tech.image} alt={tech.name} className="h-28 w-28 mx-auto mb-2 hover:transform hover:scale-125 hover:duration-500"/>
            <p className="text-center text-gray-700 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
