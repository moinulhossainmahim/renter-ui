import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const PropertySwipper = ({ images }) => {
  return (
    <div className="w-full h-full">
      <Swiper
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ width: "100%", height: "500px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertySwipper;
