"use client";
import { clients } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Brands() {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2500,
    loop: true,
    modules: [Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1199: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      575: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
  };

  const brandLogos = Array.from(new Set((clients || []).map((c) => c.logo).filter(Boolean)));

  return (
    <div className="container">
      <Swiper {...swiperOptions} className="swiper brand-slider">
        {brandLogos.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="brand-image center">
              <Image
                width={150}
                height={180}
                style={{ objectFit: "contain" }}
                src={src}
                alt={`Brand logo ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
