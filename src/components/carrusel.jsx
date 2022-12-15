import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/home.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carrusel({img1, img2,img3,img4}) {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
)
useEffect(() => {
    window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches(e.matches));
}, []);

  return (
    <>
    {matches ? <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img src={img1} className='img-card'></img></SwiperSlide>
        <SwiperSlide ><img src={img2} className='img-card'></img></SwiperSlide>
        <SwiperSlide ><img src={img3} className='img-card'></img></SwiperSlide>
        <SwiperSlide ><img src={img4} className='img-card'></img></SwiperSlide>
        
      </Swiper> : 
      <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide ><img src={img1} className='img-card-mobile'></img></SwiperSlide>
      <SwiperSlide ><img src={img2} className='img-card-mobile'></img></SwiperSlide>
      <SwiperSlide ><img src={img3} className='img-card-mobile'></img></SwiperSlide>
      <SwiperSlide ><img src={img4} className='img-card-mobile'></img></SwiperSlide>
      
    </Swiper>}
    
    </>
  );
}
