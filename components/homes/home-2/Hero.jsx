"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import ModalVideo from "react-modal-video";
export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        className="hero-section hero-2 bg-cover"
        style={{ backgroundImage: 'url("/assets/img/hero/hero-bg.jpg")' }}
      >
        <div className="hero-image wow fadeInUp" data-wow-delay=".3s">
          <Image
            src="/assets/img/hero/hero-1.webp"
            width={653}
            height={653}
            alt="img"
          />
        </div>
        <div className="hero-image-2 wow fadeInUp" data-wow-delay=".7s">
          <Image
            src="/assets/img/hero/heroimg.png"
            width={653}
            height={653}
            alt="img"
          />
        
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row g-4">
              <div className="col-xxl-8 wow fadeInUp" data-wow-delay=".5s">
                <h1 className="splt-txt wow">
                  <AnimatedText text="PARTNERING IN INDUSTRY, POWERING PROGRESS" />{" "}
                  <b>
                    <AnimatedText text="Reality" />{" "}
                  </b>
                </h1>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <p className="wow fadeInUp" data-wow-delay=".3s">
            With decades of proven expertise, DAN General Trading stands as a reliable and resourceful
partner to leading industries across Kuwait and the region. We combine global partnerships
with local strength to deliver smart, sustainable, and future-ready industrial solutions.
            </p>
            <Link
              href={`#`}
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              Our Services
              <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Cn4G2lZ_g2I"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
