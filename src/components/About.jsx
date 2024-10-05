import React from "react";

function About(){
    return(
        <section className="bg-gradient-to-r from-green-200 to-blue-200 py-12" id="about">
            <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="">
                        <div className="text-left">
                            <p className="text-sm text-gray-900 font-latoR">About Us</p>
                            <p className="mt-2 text-lg lg:text-3xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900 font-latoR">
                            Our Journey
                            </p>
                            <p className="text-sm lg:text-lg lg:mx-auto mt-4 max-w-xl text-gray-700 font-opensans">
                            Driven by a belief in the transformative power of ERP systems, Logicel began as a small team with big ambitions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                           
                                <div className="relative bg-white p-3 rounded-lg">
                                    <p className="font-bold font-latoR text-xl">50+ years</p>
                                    <p className="text-gray-600 font-latoR">of shaping businesses</p>
                                </div>
                                
                                <div className="bg-white p-3 rounded-lg">
                                    <p className="font-bold font-latoR text-xl">100+ Projects</p>
                                    <p className="text-gray-600 font-latoR">successfully delivered with excellence</p>
                                </div>

                                <div className="bg-white p-3 rounded-lg">
                                    <p className="font-bold font-latoR text-xl">20+ Awards</p>
                                    <p className="text-gray-600 font-latoR">won underscoring our dedication to innovation</p>
                                </div>

                                <div className="bg-white p-3 rounded-lg">
                                    <p className="font-bold font-latoR text-xl">99% Success</p>
                                    <p className="text-gray-600 font-latoR">reflects our client centric approach</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src="images/about2.jpg" className="rounded-xl" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;