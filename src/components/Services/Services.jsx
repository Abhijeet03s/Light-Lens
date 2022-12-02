import Circle from "../../assets/services/Circle.svg"
import Serv1 from "../../assets/services/servImg (1).png"
import Serv2 from "../../assets/services/servImg (2).png"
import Serv3 from "../../assets/services/servImg (3).png"

export default function Services() {
  return (
    <>
      <div
        id="services"
        className="max-w-full lg:min-h-[90vh] text-black flex flex-col justify-center items-center font-Inter px-5 py-16 space-y-10 relative"
      >
        <h1 className="text-center text-5xl font-Poppins">Why choose us</h1>
        <div className="hidden lg:block absolute top-[28%]">
          <img src={Circle} alt="moto-image" />
        </div>
        <div className="space-y-5 lg:space-y-0 lg:grid grid-flow-col gap-4">
          <img
            className="object-cover object-top w-[570px] h-[155px] lg:h-[400px] row-span-3 rounded-xl"
            src={Serv1}
            alt="adv-img"
          />
          <img
            className="object-cover object-top w-[570px] h-[155px] lg:h-[195px] col-span-2 rounded-xl"
            src={Serv2}
            alt="adv-img"
          />
          <img
            className="object-cover object-top w-[570px] h-[155px] lg:h-[190px] row-span-2 col-span-2 rounded-xl"
            src={Serv3}
            alt="adv-img"
          />
        </div>
        <div className="lg:grid grid-cols-3 place-items-center gap-4 font-Mukta font-medium space-y-5 lg:space-y-0">
          <div className="w-[378px] h-[102px] lg:h-[212px] bg-[#C6E7FF] flex flex-col justify-center items-center space-y-3 lg:space-y-10 rounded-xl shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <h1 className="text-lg">Super Fast and Free Delivery</h1>
          </div>
          <div className="flex flex-col justify-center items-center space-y-5 lg:space-y-2">
            <div className="flex flex-col justify-center items-center w-[378px] h-[102px] space-y-3 bg-[#C6E7FF] rounded-xl shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <h1 className="text-lg">Non-Contact System</h1>
            </div>
            <div className="flex flex-col justify-center items-center w-[378px] h-[102px] space-y-3 bg-[#C6E7FF] rounded-xl shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              <h1 className="text-lg">Money-back Guaranteed</h1>
            </div>
          </div>
          <div className="w-[378px] h-[102px] lg:h-[212px] bg-[#C6E7FF] flex flex-col justify-center items-center space-y-3 lg:space-y-10 rounded-xl shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
            <h1 className="text-lg">Super Secure Payment System</h1>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
