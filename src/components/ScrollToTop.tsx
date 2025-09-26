"use client";

import React from "react";

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
      >
        <g clipPath="url(#clip0_8309_812)">
          <path
            d="M1.5 65C1.5 29.9299 29.9299 1.5 65 1.5L128.5 1.49999L128.5 128.5L65 128.5C29.9299 128.5 1.5 100.07 1.5 65Z"
            fill="#FBCDA3"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M34 54.3559L65 33L96 54.3559V63L65 41.6441L34 63V54.3559Z"
            fill="#806144"
            stroke="#806144"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34 76.3559L65 55L96 76.3559V85L65 63.6441L34 85V76.3559Z"
            fill="#806144"
            stroke="#806144"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_8309_812">
            <rect width="130" height="130" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollToTop;
