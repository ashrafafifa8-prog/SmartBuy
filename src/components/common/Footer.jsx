import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F7F3EA] text-[#29483F]">

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}
      <section className="border-y border-[#DCD4C5] bg-[#F1ECE1]">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            {/* Text */}
            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#A5834E]">
                Stay Connected
              </p>

              <h2 className="font-serif text-2xl tracking-tight text-[#153F34] sm:text-3xl">
                Join the SmartBuy community
              </h2>

              <p className="mt-2 max-w-md text-xs leading-5 text-[#6D766F]">
                Be the first to discover new arrivals, special offers,
                and carefully selected products.
              </p>
            </div>

            {/* Newsletter Input */}
            <div className="flex w-full max-w-md overflow-hidden border border-[#CFC6B6] bg-[#FBF9F4]">

              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs text-[#153F34] outline-none placeholder:text-[#8D938D]"
              />

              <button
                type="button"
                className="flex items-center gap-2 bg-[#153F34] px-5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#F7F3EA] transition duration-300 hover:bg-[#A5834E]"
              >
                Subscribe
                <FiArrowRight size={15} />
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              BRAND
          ================================================== */}
          <div>

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              {/* Logo Mark */}
              <div className="relative flex h-12 w-12 items-center justify-center">

                <div className="absolute inset-0 rounded-[11px] border border-[#C8A96B]" />

                <div className="absolute inset-[4px] rounded-[8px] bg-[#153F34]" />

                <span className="relative z-10 font-serif text-[28px] text-[#F7F3EA]">
                  S
                </span>

                <span className="absolute -right-1 top-0 z-20 text-[12px] text-[#C8A96B]">
                  ❧
                </span>

              </div>

              {/* Brand Name */}
              <div>

                <h2 className="font-serif text-[25px] leading-none tracking-[-0.04em] text-[#153F34]">
                  Smart<span className="text-[#B4945B]">Buy</span>
                </h2>

                <div className="mt-1.5 flex items-center gap-1.5 text-[6px] tracking-[0.2em] text-[#737C75]">
                  <span className="h-px w-4 bg-[#C8A96B]" />
                  BETTER CHOICES
                  <span className="text-[#C8A96B]">•</span>
                  BRIGHTER DAYS
                </div>

              </div>

            </Link>


            <p className="mt-5 max-w-xs text-xs leading-6 text-[#707871]">
              Your trusted destination for thoughtfully selected products,
              meaningful value, and a simple shopping experience.
            </p>


            {/* Social Icons */}
            <div className="mt-6 flex gap-2.5">

              {[
                { icon: <FiFacebook size={14} />, label: "Facebook" },
                { icon: <FiInstagram size={14} />, label: "Instagram" },
                { icon: <FiTwitter size={14} />, label: "Twitter" },
                { icon: <FiYoutube size={14} />, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4CCBD] text-[#34544A] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:bg-[#153F34] hover:text-[#F7F3EA]"
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>

            <h3 className="mb-5 font-serif text-[17px] text-[#153F34]">
              Explore
            </h3>

            <div className="mb-4 h-px w-8 bg-[#C8A96B]" />

            <ul className="space-y-3 text-xs">

              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              CUSTOMER SERVICE
          ================================================== */}
          <div>

            <h3 className="mb-5 font-serif text-[17px] text-[#153F34]">
              Customer Care
            </h3>

            <div className="mb-4 h-px w-8 bg-[#C8A96B]" />

            <ul className="space-y-3 text-xs">

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-[#A5834E]"
                >
                  FAQs
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}
          <div>

            <h3 className="mb-5 font-serif text-[17px] text-[#153F34]">
              Get In Touch
            </h3>

            <div className="mb-4 h-px w-8 bg-[#C8A96B]" />


            <div className="space-y-5 text-xs">

              {/* Location */}
              <div className="flex items-start gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5CCBC] text-[#A5834E]">
                  <FiMapPin size={14} />
                </div>

                <div>
                  <p className="mb-1 font-medium text-[#29483F]">
                    Location
                  </p>

                  <p className="leading-5 text-[#777F79]">
                    Lahore, Pakistan
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="flex items-start gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5CCBC] text-[#A5834E]">
                  <FiPhone size={14} />
                </div>

                <div>
                  <p className="mb-1 font-medium text-[#29483F]">
                    Phone
                  </p>

                  <p className="leading-5 text-[#777F79]">
                    +92 300 1234567
                  </p>
                </div>

              </div>


              {/* Email */}
              <div className="flex items-start gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5CCBC] text-[#A5834E]">
                  <FiMail size={14} />
                </div>

                <div>
                  <p className="mb-1 font-medium text-[#29483F]">
                    Email
                  </p>

                  <p className="leading-5 text-[#777F79]">
                    support@smartbuy.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-[#DCD4C5] bg-[#153F34]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-[10px] tracking-wide text-[#D8D4C8] sm:px-8 md:flex-row lg:px-10">

          <p>
            © 2026{" "}
            <span className="font-serif text-[#E0C88F]">
              SmartBuy
            </span>
            . All rights reserved.
          </p>

          <p className="text-[#B9C0BA]">
            Crafted with{" "}
            <span className="mx-1 text-[#C8A96B]">♥</span>
            for better shopping.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;