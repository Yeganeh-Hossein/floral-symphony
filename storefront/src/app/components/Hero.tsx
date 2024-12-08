"use client";

import React from "react";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center lg:items-start w-full">
        {/* متن */}
        <div className="text-center lg:text-left px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Central Flower Shop</h1>
          <p className="text-lg leading-relaxed">
            Discover the finest selection of flowers for every occasion. We deliver beauty and elegance directly to your events, sourced from the best farms in Europe.
          </p>
        </div>

        {/* تصویر */}
        <img
          src="/images/Hero.jpg"
          alt="banner"
          className="w-full h-[12.5vh] object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
