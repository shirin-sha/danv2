"use client";
import { products } from "@/data/products";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "@/components/common/AnimatedText";

export default function Pricing({ shadow = false }) {
  const swiperOptions = {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, Pagination],
    pagination: {
      el: ".product-dot",
    },
    navigation: {
      prevEl: ".pnbp3",
      nextEl: ".pnbn3",
    },
    breakpoints: {
      1399: {
        slidesPerView: 4,
      },
      1199: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      575: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            Our Products
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="splt-txt wow">
            <AnimatedText text="High-Performance Products for Industrial Demands" />
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper {...swiperOptions} className="swiper product-slider">
          {products.map((product, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="product-card-items">
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <div className="product-pagi-items">
          <div className="product-dot" />
          <div className="array-buttons">
            <button className="array-prev pnbp3">
              <i className="fa-solid fa-arrow-left-long" />
            </button>
            <button className="array-next pnbn3">
              <i className="fa-solid fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
