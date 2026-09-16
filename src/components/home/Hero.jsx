import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-[#F7F3EA] px-5 pt-5 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-[#DED7C9] lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="relative flex min-h-[560px] items-center overflow-hidden bg-[#F1ECE1] px-8 py-16 md:px-14 lg:px-20">

          {/* Decorative Circle */}
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#C8A96B]/40" />

          <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border border-[#C8A96B]/30" />

          <div className="relative z-10 max-w-xl">

            {/* Small Heading */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C8A96B]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#A5834E]">
                Welcome To SmartBuy
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-5xl leading-[1.05] text-[#153F34] md:text-6xl lg:text-7xl">
              Smart Shopping
              <br />
              <span className="italic">Starts Here.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-md text-sm leading-7 text-[#737C75]">
              Discover thoughtfully selected products made for your
              everyday life. Quality, style and value — all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                to="/products"
                className="flex items-center gap-4 bg-[#153F34] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#F7F3EA] transition duration-300 hover:bg-[#29483F]"
              >
                Shop Now
                <FiArrowUpRight size={15} />
              </Link>

              <Link
                to="/products"
                className="flex items-center gap-4 border border-[#153F34] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#153F34] transition duration-300 hover:bg-[#153F34] hover:text-[#F7F3EA]"
              >
                Explore Collection
              </Link>

            </div>

            {/* Bottom Stats */}
            <div className="mt-12 flex gap-8 border-t border-[#D6CEBF] pt-7">

              <div>
                <p className="font-serif text-2xl text-[#153F34]">
                  500+
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#7D857F]">
                  Products
                </p>
              </div>

              <div className="h-10 w-px bg-[#D6CEBF]" />

              <div>
                <p className="font-serif text-2xl text-[#153F34]">
                  10K+
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#7D857F]">
                  Happy Customers
                </p>
              </div>

              <div className="h-10 w-px bg-[#D6CEBF]" />

              <div>
                <p className="font-serif text-2xl text-[#153F34]">
                  24/7
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#7D857F]">
                  Support
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative min-h-[560px] bg-[#E9E1D3]">

          {/* YAHAN APNI IMAGE LAGANA */}
          <div className="flex h-full min-h-[560px] items-center justify-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#A5834E]">
              Your Hero Image Here
            </p>
          </div>

          {/* Image Overlay Badge */}
          <div className="absolute bottom-8 right-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C8A96B] bg-[#153F34]/95 text-center">
            <p className="text-[8px] uppercase leading-4 tracking-[0.16em] text-[#F7F3EA]">
              Curated
              <br />
              For You
            </p>
          </div>

          {/* Decorative Corners */}
          <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#C8A96B]" />

          <div className="absolute bottom-6 left-6 h-10 w-10 border-b border-l border-[#C8A96B]" />

        </div>
      </div>
    </section>
  );
};

export default Hero;