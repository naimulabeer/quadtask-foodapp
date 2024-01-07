function Banner() {
  return (
    <>
      <div className="px-4 lg:block hidden">
        <div className="mt-20 bg-orange-400 rounded-3xl overflow-hidden px-8 flex items-center">
          <div className="flex-1 text-slate-100 px-12">
            <h1 className="text-4xl font-bold mb-4">
              Deliver Food To Your Door Step|
            </h1>
            <h2 className="text-lg text-slate-300">
              Authentic Food|,Quick Service,Fast Delivery
            </h2>
          </div>
          <div className="mr-16">
            <img
              src="Image1.png"
              alt="Food Delivery"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden block mt-20 px-1">
        <div className="flex flex-col gap-2 items-center px-5">
          <h1 className="text-3xl font-bold mb-4 self-center text-center">
            Deliver Food To Your Door Step|
          </h1>
          <h2 className="text-lg text-slate-600">
            Authentic Food|,Quick Service,Fast Delivery
          </h2>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-orange-500 w-full absolute inset-0 top-20 rounded-[28px]"></div>
          <img
            src="Image1.png"
            alt="Food Delivery"
            className="w-fit h-[310px] md:h-fit object-cover relative z-10"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
