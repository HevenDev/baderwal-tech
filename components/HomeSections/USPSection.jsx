import {
  FaShieldAlt,
  FaLeaf,
  FaMapMarkerAlt,
  FaHome,
  FaRegLightbulb,
} from "react-icons/fa";

import React from "react";

export const USPSection = () => {
  return (
    <section className="w-full h-screen bg-white">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="w-full flex justify-center items-center">
            <img
              src="/assets/images/home/usp.jpg"
              alt="Project Visual"
              className="w-full max-w-[90%] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[800px] max-h-[600px] h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-[2.5rem] font-semibold text-black mb-8">
              Built on Legacy. Powered by Vision.
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaShieldAlt className="text-4xl  " />,
                  title: "Trusted Builder",
                  description: "Decades of excellence and reliability.",
                },
                {
                  icon: <FaLeaf className="text-4xl " />,
                  title: "Eco-Friendly",
                  description: "Green buildings with sustainable design.",
                },
                {
                  icon: <FaMapMarkerAlt className="text-4xl" />,
                  title: "Prime Location",
                  description: "Located at the heart of Yamuna Expressway.",
                },
                {
                  icon: <FaHome className="text-4xl " />,
                  title: "Modern Living",
                  description: "Luxury and comfort redefined.",
                },
                {
                  icon: <FaRegLightbulb className="text-4xl " />,
                  title: "Smart Infrastructure",
                  description: "Tech-enabled smart home systems.",
                },
              ].map((usp, idx) => (
                <div key={idx} className="flex items-start gap-4 ">
                  <div>{usp.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold ">{usp.title}</h4>
                    <p className="text-sm text-gray-700">{usp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
