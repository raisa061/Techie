import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BorderBeam } from "./magicui/border-beam.tsx";



function Hero(){
    const [text] = useTypewriter({
        words: ['ERP Solutions!', 'API Integrations!', 'Website!', 'IOT Solutions!', 'Lab Solutions!'],
        loop: {}
    });

    return (
        <section className="bg-gradient-to-r from-green-200 to-blue-200 py-18 md:py-20">
            <div id="home" className="container mx-auto flex flex-col-reverse md:flex-row gap-4 items-center pt-6">
                <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 text-center">
                    <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4 font-latoB">Revolutionize Your Business with Lightning-Fast  
                    <span className="text-blue1 ml-3">
                        {text}
                    </span> 
                    <span className="text-blue1"> 
                        <Cursor />
                    </span> 
                    <br />Join Us for a Seamless Transformation</h1>
                    <p className="text-gray-600 text-lg mb-8 font-opensans">Discover the best products for your needs</p>

                    <div>
                    <button className="bg-blue1 text-white shadow-xl text-xs md:text-base lg:text-xl lg:px-6 px-4 lg:py-3 py-2 lg:w-64 rounded-full font-semibold hover:bg-cyan hover:text-white transition duration-300 font-opensans">Explore Now</button>
                    </div>
                </div>
                <div className="pt-20 pr-6 pl-6 md:w-1/2 overflow-clip">
                    <div className="relative rounded-xl overflow-clip">
                        <BorderBeam size={250} borderWidth={3} duration={8} delay={9} />
                        <img className="w-full h-auto shadow-xl rounded-xl" src="images/group.png" alt=""/>
                    </div>
                </div>       
            </div> 
        </section>  
    );
}

export default Hero;