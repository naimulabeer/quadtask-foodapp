function Banner() {
  return (
    <>
      <div className="px-4 lg:block hidden">
        <div className="mt-20 bg-orange-400 rounded-3xl overflow-hidden px-8 flex items-center">
          <div className="flex-1 text-white px-16">
            <h1 className="text-4xl font-bold mb-4">
              Deliver Food To Your Door Step|
            </h1>
            <h2 className="text-lg text-slate-200">
              Authentic Food|, Quick Service, Fast Delivery
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
      <div className="lg:hidden block mt-5">
        <div className="flex flex-col gap-2 items-center px-5">
          <h1 className="text-3xl font-bold mb-4 self-center">
            Deliver Food To Your Door Step|
          </h1>
          <h2 className="text-lg text-slate-600">
            Authentic Food|, Quick Service, Fast Delivery
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="Image1.png"
            alt="Food Delivery"
            className="w-fit object-cover "
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
