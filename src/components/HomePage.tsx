"use client";
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSectionFirst";
import ProductCards from "@/components/ProductCards";
import AboutUs from "@/components/AboutUs";
import SunGif from "@/images/sun.gif";
import seaGif from "@/images/sea.gif";
import seaBottom from "@/images/sea-bottom.svg";
import ImageWText from "@/components/ImageWText";
import HeroSectionSecondary from "@/components/HeroSectionSecondary";
import ImageWTextSecondary from "@/components/ImageWTextSecondary";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
const HomePage: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <main>
        <img src={SunGif.src} alt="Sun" className="sun-gif" />
        <div className="sea-gif-ctr">
          <img src={seaGif.src} alt="Sea" className="sea-gif" />
          <img src={seaBottom.src} alt="Sea Bottom" className="sea-bottom" />
        </div>

        <HeroSection />
        <ProductCards />
        <AboutUs />
        <ImageWText />
        <HeroSectionSecondary />
        <ImageWTextSecondary />

        <div className="scroll-to-top" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
          >
            <g clip-path="url(#clip0_8309_812)">
              <path
                d="M1.5 65C1.5 29.9299 29.9299 1.5 65 1.5L128.5 1.49999L128.5 128.5L65 128.5C29.9299 128.5 1.5 100.07 1.5 65Z"
                fill="#FBCDA3"
                stroke="black"
                stroke-width="3"
              />
              <path
                d="M34 54.3559L65 33L96 54.3559V63L65 41.6441L34 63V54.3559Z"
                fill="#806144"
                stroke="#806144"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 76.3559L65 55L96 76.3559V85L65 63.6441L34 85V76.3559Z"
                fill="#806144"
                stroke="#806144"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_8309_812">
                <rect width="130" height="130" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </main>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default HomePage;
