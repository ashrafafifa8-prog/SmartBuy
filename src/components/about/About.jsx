import React from "react";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiTruck,
  FiHeart,
  FiArrowUpRight,
  FiCheck,
  FiShoppingBag,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const About = () => {
  return (
    <section className="min-h-screen bg-[#F7F3EA] text-[#153F34]">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">

        {/* =====================================================
            HERO
        ===================================================== */}
        <div
          className="relative mt-5 min-h-[620px] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#153F34]/75" />

          {/* Gold Decorative Circles */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-[#C8A96B]/30" />
          <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full border border-[#C8A96B]/20" />

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-[620px] items-center px-8 py-20 md:px-14 lg:px-20">

            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C8A96B]" />

                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#D8C49A]">
                  About SmartBuy
                </p>
              </div>

              <h1 className="font-serif text-5xl leading-[1.05] text-[#F7F3EA] md:text-6xl lg:text-7xl">
                Shopping should
                <span className="block italic text-[#D8C49A]">
                  feel effortless.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#D9E0DB] md:text-base">
                SmartBuy is built around a simple idea — make online shopping
                easier, clearer, and more enjoyable. Discover products you love
                without the unnecessary complexity.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">

                <Link
                  to="/products"
                  className="group flex items-center gap-3 bg-[#F7F3EA] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#153F34] transition duration-300 hover:bg-[#C8A96B]"
                >
                  Explore Products

                  <FiArrowUpRight
                    size={15}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <div className="flex items-center gap-3 text-sm text-[#E0E5E1]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B] text-[#C8A96B]">
                    <FiCheck size={15} />
                  </span>

                  Quality you can trust
                </div>

              </div>

              {/* Hero Stats */}
              <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-7">

                <div>
                  <p className="font-serif text-3xl text-[#F7F3EA]">
                    500+
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                    Products
                  </p>
                </div>

                <div className="h-10 w-px bg-white/20" />

                <div>
                  <p className="font-serif text-3xl text-[#F7F3EA]">
                    10K+
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                    Customers
                  </p>
                </div>

                <div className="h-10 w-px bg-white/20" />

                <div>
                  <p className="font-serif text-3xl text-[#F7F3EA]">
                    24/7
                  </p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/50">
                    Support
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Hero Badge */}
          <div className="absolute bottom-8 right-8 z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#C8A96B] bg-[#153F34]/90 text-center">
            <p className="text-[8px] uppercase leading-4 tracking-[0.18em] text-[#F7F3EA]">
              Smart
              <br />
              Shopping
            </p>
          </div>
        </div>

        {/* =====================================================
            STATS
        ===================================================== */}
        <div className="my-20 grid grid-cols-2 border-y border-[#DED7C9] md:grid-cols-4">

          <div className="border-b border-[#DED7C9] px-5 py-8 text-center md:border-b-0 md:border-r">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/60 text-[#A5834E]">
              <FiShoppingBag size={17} />
            </div>

            <h3 className="font-serif text-3xl text-[#153F34]">
              500+
            </h3>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#8A918C]">
              Products
            </p>
          </div>

          <div className="border-b border-[#DED7C9] px-5 py-8 text-center md:border-b-0 md:border-r">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/60 text-[#A5834E]">
              <FiUsers size={17} />
            </div>

            <h3 className="font-serif text-3xl text-[#153F34]">
              10K+
            </h3>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#8A918C]">
              Customers
            </p>
          </div>

          <div className="border-b border-[#DED7C9] px-5 py-8 text-center md:border-b-0 md:border-r">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/60 text-[#A5834E]">
              <FiTruck size={17} />
            </div>

            <h3 className="font-serif text-3xl text-[#153F34]">
              Fast
            </h3>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#8A918C]">
              Delivery
            </p>
          </div>

          <div className="px-5 py-8 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96B]/60 text-[#A5834E]">
              <FiAward size={17} />
            </div>

            <h3 className="font-serif text-3xl text-[#153F34]">
              100%
            </h3>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#8A918C]">
              Customer Focus
            </p>
          </div>

        </div>

        {/* =====================================================
            OUR STORY
        ===================================================== */}
        <div className="mb-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="lg:sticky lg:top-28">

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#A5834E]">
                Our Story
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#153F34] md:text-5xl">
                Created for
                <span className="block italic text-[#A5834E]">
                  modern shoppers.
                </span>
              </h2>

              <div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#737C75]">
                <span className="h-px w-8 bg-[#C8A96B]" />
                SmartBuy
              </div>

            </div>
          </div>

          <div className="space-y-6">

            <p className="text-lg leading-8 text-[#29483F]">
              We believe shopping online shouldn't feel overwhelming.
              There are thousands of products available, but finding the
              right one should still feel simple.
            </p>

            <p className="leading-8 text-[#737C75]">
              That's where SmartBuy comes in. We created a clean and
              straightforward shopping experience where customers can
              discover products, compare options, and make confident choices
              without getting lost in unnecessary details.
            </p>

            <p className="leading-8 text-[#737C75]">
              From the way products are presented to the overall browsing
              experience, every detail is designed around convenience,
              clarity, and value.
            </p>

            {/* Quote */}
            <div className="mt-8 border-l-2 border-[#C8A96B] bg-[#F1ECE1] px-7 py-6">
              <p className="font-serif text-xl leading-8 italic text-[#153F34]">
                “Good shopping isn't about having more choices. It's about
                making the right choice easier.”
              </p>
            </div>

          </div>
        </div>

        {/* =====================================================
            VALUES
        ===================================================== */}
        <div className="mb-20">

          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#A5834E]">
                What We Stand For
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#153F34]">
                Our values
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#7D857F]">
              The principles behind every part of the SmartBuy experience.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {/* Value 1 */}
            <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_18px_40px_rgba(21,63,52,0.08)]">

              <div className="mb-8 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                  <FiShield size={21} />
                </div>

                <span className="font-serif text-4xl text-[#E6E0D5]">
                  01
                </span>

              </div>

              <h3 className="font-serif text-xl text-[#153F34]">
                Trust first
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#7D857F]">
                We want every interaction with SmartBuy to feel reliable,
                transparent, and comfortable.
              </p>

            </div>

            {/* Value 2 */}
            <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_18px_40px_rgba(21,63,52,0.08)]">

              <div className="mb-8 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                  <FiTruck size={21} />
                </div>

                <span className="font-serif text-4xl text-[#E6E0D5]">
                  02
                </span>

              </div>

              <h3 className="font-serif text-xl text-[#153F34]">
                Keep it simple
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#7D857F]">
                From browsing to buying, we remove unnecessary friction and
                keep the experience easy to understand.
              </p>

            </div>

            {/* Value 3 */}
            <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_18px_40px_rgba(21,63,52,0.08)]">

              <div className="mb-8 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                  <FiHeart size={21} />
                </div>

                <span className="font-serif text-4xl text-[#E6E0D5]">
                  03
                </span>

              </div>

              <h3 className="font-serif text-xl text-[#153F34]">
                Customer first
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#7D857F]">
                Every decision starts with one question: does this make
                shopping better for our customers?
              </p>

            </div>

          </div>
        </div>

        {/* =====================================================
            HOW WE WORK
        ===================================================== */}
        <div className="mb-20 border border-[#DED7C9] bg-[#F1ECE1] p-8 md:p-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#A5834E]">
                The SmartBuy Way
              </p>

              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#153F34]">
                Simple from
                <span className="block italic text-[#A5834E]">
                  start to finish.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#737C75]">
                We've designed the experience around the way people actually
                shop online.
              </p>
            </div>

            <div className="space-y-7">

              <div className="flex gap-5 border-b border-[#D6CEBF] pb-7">
                <span className="font-serif text-2xl text-[#A5834E]">
                  01
                </span>

                <div>
                  <h3 className="font-serif text-xl text-[#153F34]">
                    Discover
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#7D857F]">
                    Explore products through a clean and organized shopping
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-[#D6CEBF] pb-7">
                <span className="font-serif text-2xl text-[#A5834E]">
                  02
                </span>

                <div>
                  <h3 className="font-serif text-xl text-[#153F34]">
                    Compare
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#7D857F]">
                    Understand your options and find products that fit your
                    needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="font-serif text-2xl text-[#A5834E]">
                  03
                </span>

                <div>
                  <h3 className="font-serif text-xl text-[#153F34]">
                    Shop confidently
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#7D857F]">
                    Make your choice and enjoy a smooth shopping journey.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            MISSION
        ===================================================== */}
        <div className="relative mb-20 overflow-hidden bg-[#153F34] p-8 md:p-12 lg:p-14">

          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C8A96B]/20" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#C8A96B]/10" />

          <div className="relative z-10 max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C8A96B]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#C8A96B]">
                Our Mission
              </p>
            </div>

            <h2 className="font-serif text-3xl leading-tight text-[#F7F3EA] md:text-5xl">
              Make every shopping decision
              <span className="italic text-[#D8C49A]">
                {" "}a little easier.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#C9D0CB] md:text-base">
              SmartBuy exists to bring simplicity back to online shopping.
              We want customers to discover great products, understand their
              options, and shop with confidence.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#C8A96B]">
                <FiCheck size={16} />
              </div>

              Designed around you
            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <div className="border-t border-[#DED7C9] py-16 text-center">

          <p className="text-[9px] uppercase tracking-[0.3em] text-[#A5834E]">
            Discover SmartBuy
          </p>

          <h2 className="mt-3 font-serif text-4xl text-[#153F34] md:text-5xl">
            Better shopping starts here.
          </h2>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-3 bg-[#153F34] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#F7F3EA] transition hover:bg-[#29483F]"
          >
            Explore Products
            <FiArrowUpRight size={15} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default About;