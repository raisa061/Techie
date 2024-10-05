import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    image: "images/testimonial/1.jpg",
    quote: "This product has transformed our business!"
  },
  {
    name: "Jane Smith",
    role: "CTO, Another Company",
    image: "images/testimonial/2.jpg",
    quote: "An essential tool for our daily operations."
  },
  {
    name: "Sam Wilson",
    role: "Product Manager, Tech Corp",
    image: "images/testimonial/3.jpg",
    quote: "I can't imagine working without it now."
  }
];

function Testimonial(){
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="pt-5 mt-2 text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900  font-latoR">Testimonials</h2>
          <p className="text-sm lg:text-xl lg:mx-auto mt-4 max-w-xl text-gray-500  font-opensans py-5">
            See what our satisfied customers are saying about us.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-24 h-24 rounded-full object-cover mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-latoR font-bold text-gray-900">{testimonial.name}</p>
                  <p className="font-opensans text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faQuoteLeft} className='text-gray-700'/>
              <p className="font-opensans text-gray-600">{testimonial.quote}</p>
              <FontAwesomeIcon icon={faQuoteRight} className=' ml-72 md:ml-80 text-gray-700 ' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
