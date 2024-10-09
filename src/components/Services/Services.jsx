import React from "react";
import serviceImage1 from "../../assets/services/service-image-1.png"
import serviceImage2 from "../../assets/services/service-image-2.png"
import serviceImage3 from "../../assets/services/service-image-3.png"

export default function Services() {
  return (
    <>
      <div
        id="services"
        className="container max-w-7xl mx-auto text-black flex flex-col justify-center items-center font-Inter px-5 py-16 space-y-12 relative"
      >
        <h1 className="text-center text-3xl sm:text-5xl font-Poppins font-bold text-gray-800">Why Choose Us</h1>
        <div className="space-y-5 lg:space-y-0 lg:grid grid-flow-col gap-6">
          <img
            className="object-cover object-top w-full h-full row-span-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110"
            src={serviceImage1}
            alt="service-image-1"
            loading="lazy"
          />
          <img
            className="object-cover object-top w-full h-full col-span-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110"
            src={serviceImage2}
            alt="service-image-2"
            loading="lazy"
          />
          <img
            className="object-cover object-top w-full h-full row-span-2 col-span-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110"
            src={serviceImage3}
            alt="service-image-3"
            loading="lazy"
          />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 font-Mukta font-medium">
          {[
            { title: "Super Fast and Free Delivery", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
            { title: "Non-contact Shipping", icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
            { title: "Money-back Guaranteed", icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" },
            { title: "Super Secure Payment System", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
            { title: "24/7 Customer Support", icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" },
            { title: "Best Price Guarantee", icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-[#C6E7FF] to-[#E6F4FF] flex flex-col justify-center items-center p-4 sm:p-6 space-y-3 sm:space-y-4 rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
              </svg>
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 text-center">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}