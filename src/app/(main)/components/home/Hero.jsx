import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero h-[75vh] md:h-[85vh]"
      style={{
        backgroundImage:
          "url(https://miro.medium.com/v2/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg)",
      }}
    >
      <div className="hero-overlay bg-black/70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-bold">Find Your <span className="text-primaryy">Next Read</span></h1>
          <p className="mb-5 font-semibold text-base md:text-lg text-center lg:text-xl">
            Dive into a world of endless stories. Whether you're chasing adventure, seeking wisdom, or escaping reality your perfect book is waiting. Explore and read
          </p>
          <Link href="/allBooks" className="btn animate animate-pulse hover:scale-105 xl:btn-md shadow-none active:scale-90 bg-primaryy text-white border-none rounded-full">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
