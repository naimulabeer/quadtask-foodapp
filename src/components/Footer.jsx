function Footer() {
  return (
    <div className="flex mt-20 bg-amber-500 lg:px-80 py-4 h-[400px]">
      <div className="w-full lg:w-2/3 flex flex-col justify-around relative z-10 ">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-2xl h-12 w-9/12 placeholder:p-6 shadow-md mb-4"
          />
          <button className="absolute right-52 top-1.5 bg-orange-600 text-white px-2 py-1.5 w-1/4 rounded-xl">
            Subscribe
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">
            pti<span className="text-orange-600">.</span>
          </h1>
          <div className="flex justify-between w-3/4 items-center">
            <p className="font-bold">Copyright©Tripp.All Rights Reserved</p>
            <div className="flex  gap-2 w-8 cursor-pointer">
              <img src="google.svg" alt="google" className="rounded-full" />
              <img src="twitter.svg" alt="twitter" className="rounded-full" />
              <img src="instagram.svg" alt="ig" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/3 relative">
        <img
          src="Image2.png"
          alt="FooterImage"
          className="object-cover h-full w-full rounded-l-lg"
        />
      </div>
    </div>
  );
}

export default Footer;
