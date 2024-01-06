// Popular.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Popular = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );

        // Assuming 'Items' is the array you want to filter
        const popularItems = response.data.Items.filter(
          (item) => item.IsPopular === true
        );

        setPopularItems(popularItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-20 p-5">
      <h1 className="text-lg font-bold mb-5">Popular</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation]}
        navigation={true}
      >
        {popularItems.map((item) => (
          <SwiperSlide key={item.Id}>
            <div className="">
              <img
                src={item.ImageUrl}
                alt={item.Name}
                className="w-[250px] h-[300px] border  object-cover mb-4 rounded-lg shadow-lg"
              />
              <h3 className="text-lg text-center mb-2">{item.Name}</h3>
              {/* Add other relevant details */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
