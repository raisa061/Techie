import React from "react";

function Clients(){
  return (
    <div className="text-center p-10 bg-blue-50 m-5 rounded-lg mx-auto sm:px-7 px-4 max-w-screen-xl">
      <div className="grid items-center lg:grid-cols-3">
        <p className="font-semibold text-center lg:text-left lg:max-w-[270px] text-base lg:text-lg text-gray-600 font-opensans mx-14">Trusted by teams of 10 to 50+</p>
          <div className="lg:grid-cols-2 lg:col-span-2 max-lg:mt-6">
            <div className="grid gap-10 items-center grid-cols-2 max-xl:gap-6 xl:grid-cols-2 xl:flex justify-items-center">
              <img src="images/ambee-logo.png" className="h-16 hover:transform hover:scale-125 hover:duration-500"></img>
              <img src="images/TataMF-Logo.png" className="h-12 hover:transform hover:scale-125 hover:duration-500"></img>
              <img src="images/nipro.svg" className="h-10 hover:transform hover:scale-125 hover:duration-500"></img>
              <img src="images/team-logo.png" className="h-12 hover:transform hover:scale-125 hover:duration-500"></img>
            </div>
          </div>
      </div>
        
    </div>
  );
};

export default Clients;