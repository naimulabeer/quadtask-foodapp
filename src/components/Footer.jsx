import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col items-center mt-20 bg-amber-500 px-6 py-10 lg:flex-row lg:px-80 lg:py-4 lg:h-[400px]">
      {/* Mobile Section */}
      <div className="lg:hidden w-full">
        <div className="relative flex items-center mb-10">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-lg h-12 w-full placeholder:p-8 placeholder:text-xs shadow-md"
          />
          <button className="absolute right-5 font-bold text-orange-500 px-2 py-1.5 w-1/3 md:w-1/5 rounded-xl flex items-center gap-2 justify-center">
            Subscribe
            <FaArrowRightLong />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 mb-10">
          <img src="google2.svg" alt="google" className="rounded-full w-10" />
          <img src="twitter2.svg" alt="twitter" className="rounded-full w-10" />
          <img src="instagram2.svg" alt="ig" className="rounded-full w-10" />
        </div>
        <h1 className="font-bold text-3xl text-center mb-6">
          pti<span className="text-orange-600">.</span>
        </h1>
        <p className="font-bold text-center mb-10">
          Copyright©Tripp.All Right Reserved
        </p>
      </div>

      {/* Large Screen Section */}
      <div className="hidden lg:flex w-full lg:w-2/3 flex-col justify-around relative z-10 ">
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="rounded-2xl h-12 w-9/12 placeholder:p-6 shadow-md mb-4"
          />
          <button className="absolute right-52 top-1.5 bg-orange-600 text-white px-2 py-1.5 w-1/5 rounded-xl flex items-center gap-2 justify-center">
            Subscribe
            <FaArrowRightLong />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">
            pti<span className="text-orange-600">.</span>
          </h1>
          <div className="flex justify-between w-3/4 items-center">
            <p className="font-bold">Copyright©Tripp.All Right Reserved</p>
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
