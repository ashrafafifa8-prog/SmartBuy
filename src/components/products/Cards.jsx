import React from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiArrowUpRight,
} from "react-icons/fi";

const Cards = ({ product }) => {
  return (
    <div className="group border border-[#DED7C9] bg-[#FBF9F4] transition-all duration-500 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_18px_45px_rgba(21,63,52,0.10)]">

      {/* =====================================================
          IMAGE
      ====================================================== */}
      <div className="relative h-72 overflow-hidden bg-[#EFE9DD]">

        {/* Decorative corner */}
        <div className="absolute left-4 top-4 z-10 h-8 w-8 border-l border-t border-[#C8A96B]/70" />

        <div className="absolute bottom-4 right-4 z-10 h-8 w-8 border-b border-r border-[#C8A96B]/70" />

        {/* Discount */}
        <span className="absolute left-6 top-6 z-20 bg-[#153F34] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-[#F7F3EA]">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4CCBD] bg-[#FBF9F4]/90 text-[#29483F] backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96B] hover:bg-[#153F34] hover:text-[#F7F3EA]"
        >
          <FiHeart size={17} />
        </button>

        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-7 mix-blend-multiply transition duration-700 group-hover:scale-105"
        />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="p-6">

        {/* Category */}
        <p className="mb-2 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.22em] text-[#A5834E]">
          <span className="h-px w-5 bg-[#C8A96B]" />
          {product.category}
        </p>


        {/* Title */}
        <h2 className="mb-2 line-clamp-1 font-serif text-xl text-[#153F34]">
          {product.title}
        </h2>


        {/* Description */}
        <p className="mb-5 line-clamp-2 text-xs leading-6 text-[#737C75]">
          {product.description}
        </p>


        {/* =================================================
            RATING
        ================================================== */}
        <div className="mb-5 flex items-center gap-2">

          <div className="flex items-center gap-1">

            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar
                key={star}
                size={12}
                className={
                  star <= Math.round(product.rating)
                    ? "fill-[#C8A96B] text-[#C8A96B]"
                    : "text-[#D4CEC1]"
                }
              />
            ))}

          </div>

          <span className="h-3 w-px bg-[#D7D0C2]" />

          <span className="text-[10px] text-[#78817A]">
            {product.rating}
          </span>

        </div>


        {/* =================================================
            PRICE + CART
        ================================================== */}
        <div className="mb-6 flex items-center justify-between">

          <div>
            <p className="mb-1 text-[8px] uppercase tracking-[0.18em] text-[#929891]">
              Price
            </p>

            <span className="font-serif text-2xl text-[#153F34]">
              ${product.price}
            </span>
          </div>


          <button
            type="button"
            aria-label="Add to cart"
            className="flex h-11 w-11 items-center justify-center border border-[#CFC6B6] bg-transparent text-[#153F34] transition-all duration-300 hover:border-[#153F34] hover:bg-[#153F34] hover:text-[#F7F3EA]"
          >
            <FiShoppingCart size={17} />
          </button>

        </div>


        {/* =================================================
            VIEW PRODUCT
        ================================================== */}
        <Link
          to={`/products/${product.id}`}
          className="group/link flex w-full items-center justify-between border border-[#153F34] px-4 py-3.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#153F34] transition-all duration-300 hover:bg-[#153F34] hover:text-[#F7F3EA]"
        >

          <span>
            View Product
          </span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover/link:rotate-45">
            <FiArrowUpRight size={14} />
          </span>

        </Link>

      </div>

    </div>
  );
};

export default Cards;