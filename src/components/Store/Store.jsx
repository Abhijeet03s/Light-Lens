export default function Hero() {
  return (
    <>
      <div className="max-w-full lg:h-[100vh] bg-[#f4f4f4] text-black font-Inter relative px-3">
        <div className="flex flex-row justify-start items-center space-x-3 lg:p-4 lg:space-x-4 h-[50px] bg-[#FCFCFC]">
          <button className="font-medium">EYEGLASSES</button>
          <button className="font-medium">SUNGLASSES</button>
          <button className="font-medium">BLUEGLASSES</button>
        </div>
        <div className="max-w-full flex flex-col justify-center items-center py-10">
          <div className="lg:absolute top-32 left-40 space-y-3">
            <div className="lg:w-full">
              <img
                className="object-cover"
                src="/images/sunglasses/sunGlasses (2).png"
                alt=""
              />
            </div>
            <div className="space-y-3">
              <h1 className="lg:text-4xl lg:mt-10 font-Mukta font-bold text-2xl">SunGlasses</h1>
              <div>
                <p className="font-bold">View More</p>
                <div className="mx-2 w-[16%] border-b-2 border-b-black"></div>
              </div>
            </div>
          </div>
          <div className="lg:absolute bottom-32 right-40 space-y-3">
            <div className="w-full">
              <img
                className="object-cover"
                src="/images/blueglasses/blueGlasses (4).png"
                alt=""
              />
            </div>
            <div className="space-y-3">
              <h1 className="lg:text-4xl lg:mt-10 font-Mukta font-bold text-2xl">BlueGlasses</h1>
              <div>
                <p className="font-bold">View More</p>
                <div className="mx-2 w-[16%] border-b-2 border-b-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
