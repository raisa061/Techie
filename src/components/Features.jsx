import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';

const cards = [
  {
    icon: faLaptopCode,
    title: 'Innovative Solutions',
    description: 'We provide cutting-edge software solutions tailored to your business needs.',
    color: '#19297C'
  },
  {
    icon: faUsers,
    title: 'Expert Team',
    description: 'Our team of experts is dedicated to delivering top-notch service.',
    color: '#386FA4'
  },
  {
    icon: faHandshake,
    title: 'Customer Focused',
    description: 'We prioritize your satisfaction and work to build long-lasting partnerships.',
    color: '#59A5D8'
  },
];

function Features(){
    return (
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="pt-5 text-sm text-gray-900 font-latoR">Our Best Features</p>
            <p className="mt-2 text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900  font-latoR">
              We Build Lasting Relationships
            </p>
            <p className="text-sm lg:text-xl lg:mx-auto mt-4 max-w-xl text-gray-500  font-opensans py-5">
            Our mission is to be your trusted software development partner, focusing on cultivating lasting business partnerships.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-gray-50 hover:bg-gray-200 rounded-lg shadow-md px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3  rounded-md shadow-lg" style={{ background: `${card.color}` }}>
                            <FontAwesomeIcon icon={card.icon} className="h-6 w-6 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight font-latoR">{card.title}</h3>
                      <p className="mt-5 text-base text-gray-500 font-opensans">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default Features;