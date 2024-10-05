import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="bg-blue1 text-white">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 font-latoR">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-items-start md:justify-items-center">
                {/* Left Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Logicel BD</h2>
                    <p className="text-sm">
                    LOGICIEL Solutions are designed around the unique operational needs of each industry and are available in the cloud, hosted, or on premises. Customers can better manage complexity and focus on core growth activities.
                    </p>
                </div>
                {/* Middle Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 font-latoR">Useful Links</h2>
                    <ul className="space-y-2">
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Services</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Projects</a>
                    </li>
                    </ul>
                </div>
                {/* Right Section */}
                <div>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Technologies</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Team</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Support</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Help Center</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Careers</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:text-gray-400 font-opensans">Contact</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3 font-latoR">Subscribe</h3>
                    <p className="text-gray-200 text-sm font-opensans mb-3">Join our community to recieve updates</p>
                    <form className="flex flex-col sm:flex-row">
                        <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md text-gray-900 text-sm w-full sm:w-auto sm:flex-1"/>
                        <button type="submit" className="p-2 bg-blue2 text-white font-medium rounded-r-md">Subscribe</button>
                    </form>
                    <p className="font-opensans text-xs text-gray-100 mt-3">By subscribing, you agree to our Privacy Policy</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white hover:scale-125 duration-500"><FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" /></a>
                        <a href="#" className="text-white hover:scale-125 duration-500"><FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" /></a>
                        <a href="#" className="text-white hover:scale-125 duration-500"><FontAwesomeIcon icon={faInstagram} className="h-5 w-5" /></a>
                        <a href="#" className="text-white hover:scale-125 duration-500"><FontAwesomeIcon icon={faTwitter} className="h-5 w-5" /></a>
                    </div>
                </div>
                </div>
                {/* Divider */}
                <hr className="my-8 border-gray-100" />
                {/* Copyright */}
                <div className="text-center text-sm">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;