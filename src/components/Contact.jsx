import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faLinkedin, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact(){
    return (
        <section id='contact'>
            <div className="bg-gradient-to-r from-green-200 to-blue-200 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight font-latoR text-center mb-8">Get In Touch</h2>
                <p className="text-sm lg:text-xl text-center text-gray-700 mb-12 font-opensans">
                Let's build an awesome project together, paving the way for you to grow your rankings, improve brand.
                </p>
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-wrap items-start justify-between">
                <div className="w-full lg:w-1/3 p-6 bg-blue1 text-white rounded-lg">
                    <h3 className="text-lg lg:text-xl sm:text-4xl font-latoR font-bold mb-4">Contact Information</h3>
                    <p className="mb-4 text-xs md:text-sm font-opensans">We’ll create high-quality linkable content and build at least 40 high-authority.</p>
                    <div className="mb-4 text-sm lg:text-base font-opensans">
                    <p><strong>Phone:</strong></p>
                    <p>+8801716-554840</p>
                    </div>
                    <div className="mb-4 text-sm lg:text-base font-opensans">
                    <p><strong>Email:</strong></p>
                    <p>info@logicielbd.com</p>
                    </div>
                    <div className='text-sm lg:text-base font-opensans'>
                    <p><strong>Location:</strong></p>
                    <p>House # 92, Road # 4, Block # B, Niketon, Gulshan-1</p>
                    <p>Dhaka-1212, Bangladesh</p>
                    </div>
                    <div className='rounded-lg'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116763.8138995637!2d90.34183275775987!3d23.858778560230686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70059d9ccf5%3A0x373e334186d532e8!2sNiketon%2CGulshan%2CDhaka.!5e0!3m2!1sen!2sbd!4v1718001426033!5m2!1sen!2sbd" 
                        width="100%" 
                        height="150"
                        className='rounded-md' 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 p-6">
                    <form>
                    <div className="mb-4 text-sm lg:text-base">
                        <label htmlFor="name" className="block text-gray-700 font-opensans">Your Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue1" placeholder="John Doe" />
                    </div>
                    <div className="mb-4 text-sm lg:text-base">
                        <label htmlFor="email" className="block text-gray-700 font-opensans">Your Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue1" placeholder="hello@gmail.com" />
                    </div>
                    <div className="mb-4 text-sm lg:text-base">
                        <label htmlFor="subject" className="block text-gray-700 font-opensans">Your Subject</label>
                        <input type="text" id="subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue1" placeholder="I want to hire you quickly" />
                    </div>
                    <div className="mb-4 text-sm lg:text-base">
                        <label htmlFor="message" className="block text-gray-700 font-opensans">Message</label>
                        <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue1" rows="4" placeholder="Write your message here"></textarea>
                    </div>
                    <button type="submit" className="bg-blue1 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">Send Message</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
};

export default Contact;