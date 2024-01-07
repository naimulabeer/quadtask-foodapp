import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Recommended = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [hasPrevious, setHasPrevious] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );

        const recommendedItems = response.data.Items.filter(
          (item) => item.IsRecommended === true
        );

        setRecommendedItems(recommendedItems);
        setHasPrevious(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setHasPrevious(true);
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();

      setHasPrevious(swiperRef.current.swiper.isBeginning === false);
    }
  };

  return (
    <div className="mt-20 p-5">
      <div className="flex justify-between items-baseline">
        <h1 className="text-lg font-bold mb-5">Recommended</h1>
        <div className="flex gap-1 items-center mr-6">
          <button className="text-orange-500">AddMore</button>
          <button
            onClick={handlePrev}
            disabled={!hasPrevious}
            style={{ opacity: hasPrevious ? 1 : 0.3 }}
          >
            <AiOutlineLeft />
          </button>
          <button onClick={handleNext}>
            <AiOutlineRight />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation]}
        breakpoints={{
          100: {
            slidesPerView: 2.7,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {recommendedItems.map((item) => (
          <SwiperSlide key={item.Id}>
            <div className="">
              <img
                src={item.ImageUrl}
                alt={item.Name}
                className="w-[140px] h-[180px] md:w-[250px] md:h-[280px] object-cover mb-4 rounded-lg shadow-md"
              />
              <h3 className="text-lg text-center mb-2">{item.Name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
