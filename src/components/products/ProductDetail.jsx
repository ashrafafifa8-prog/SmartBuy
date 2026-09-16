import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiShoppingBag,
  FiHeart,
  FiStar,
  FiCheck,
} from "react-icons/fi";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  /* =========================================================
     LOADING
  ========================================================= */
  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#F7F3EA]">
        <div className="text-center">

          <div className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#C8A96B]" />

            <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#153F34]/10 border-t-[#C8A96B]" />
          </div>

          <p className="font-serif text-sm tracking-[0.2em] text-[#153F34]">
            Discovering Product
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#8A918B]">
            Please wait
          </p>

        </div>
      </section>
    );
  }

  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */
  if (!product) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#F7F3EA] px-5">

        <div className="max-w-md text-center">

          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A96B]">
            <span className="font-serif text-3xl text-[#153F34]">
              S
            </span>
          </div>

          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#A5834E]">
            SmartBuy
          </p>

          <h2 className="font-serif text-3xl text-[#153F34]">
            Product Not Found
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#737B75]">
            We couldn't find the product you're looking for.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 border border-[#153F34] bg-[#153F34] px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#F7F3EA] transition duration-300 hover:bg-[#A5834E] hover:border-[#A5834E]"
          >
            <FiArrowLeft size={15} />
            Back to Collection
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F7F3EA] px-5 py-10 sm:px-8 md:py-14 lg:px-12 lg:py-16">

      <div className="mx-auto max-w-[1400px]">

        {/* ===================================================
            BACK NAVIGATION
        ==================================================== */}
        <Link
          to="/products"
          className="group mb-9 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#64716A] transition duration-300 hover:text-[#A5834E]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4CCBD] transition duration-300 group-hover:border-[#C8A96B]">
            <FiArrowLeft size={15} />
          </span>

          Back to Collection
        </Link>


        {/* ===================================================
            PRODUCT LAYOUT
        ==================================================== */}
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">

          {/* =================================================
              PRODUCT IMAGE
          ================================================== */}
          <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden border border-[#DDD5C7] bg-[#EFE9DD] p-8 sm:min-h-[600px] md:p-14 lg:min-h-[680px]">

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C8A96B]/40" />

            <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full border border-[#C8A96B]/30" />

            {/* Small Label */}
            <div className="absolute left-7 top-7 flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-[#8B7650]">
              <span className="h-px w-6 bg-[#C8A96B]" />
              SmartBuy Collection
            </div>

            {/* Product Image Frame */}
            <div className="relative flex h-full w-full items-center justify-center">

              <div className="absolute h-[75%] w-[70%] rounded-full border border-[#D2C5AE]" />

              <img
                src={product.thumbnail}
                alt={product.title}
                className="relative z-10 max-h-[430px] w-full object-contain mix-blend-multiply transition duration-700 hover:scale-105 md:max-h-[510px]"
              />

            </div>

            {/* Product Category */}
            <div className="absolute bottom-7 left-7 text-[9px] uppercase tracking-[0.25em] text-[#667169]">
              {product.category}
            </div>

          </div>


          {/* =================================================
              PRODUCT INFORMATION
          ================================================== */}
          <div className="border border-t-0 border-[#DDD5C7] bg-[#FBF9F4] p-7 sm:p-10 md:p-14 lg:border-l-0 lg:border-t lg:p-16">

            {/* Category */}
            <p className="mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#A5834E]">

              <span className="h-px w-7 bg-[#C8A96B]" />

              {product.category}

            </p>


            {/* Title */}
            <h1 className="max-w-xl font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-[#153F34] sm:text-4xl md:text-5xl">
              {product.title}
            </h1>


            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(product.rating)
                        ? "fill-[#C8A96B] text-[#C8A96B]"
                        : "text-[#CFC8BA]"
                    }
                  />
                ))}

              </div>

              <span className="h-4 w-px bg-[#D6CEC0]" />

              <span className="text-xs text-[#68736C]">
                {product.rating} / 5
              </span>

            </div>


            {/* Divider */}
            <div className="my-7 h-px bg-[#DED7C9]" />


            {/* Description */}
            <p className="max-w-xl text-sm leading-7 text-[#68736C] md:text-[15px]">
              {product.description}
            </p>


            {/* Price */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <span className="font-serif text-3xl text-[#153F34] md:text-4xl">
                ${product.price}
              </span>

              <span className="border border-[#C8A96B] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-[#A5834E]">
                {Math.round(product.discountPercentage)}% Off
              </span>

            </div>


            {/* =================================================
                PRODUCT DETAILS
            ================================================== */}
            <div className="mt-9 grid grid-cols-2 border-y border-[#DED7C9] py-6">

              {/* Brand */}
              <div className="border-r border-[#DED7C9] pr-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#A5834E]">
                  Brand
                </p>

                <p className="mt-2 font-serif text-sm text-[#29483F]">
                  {product.brand || "SmartBuy"}
                </p>

              </div>


              {/* Stock */}
              <div className="pl-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#A5834E]">
                  Availability
                </p>

                <div className="mt-2 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C9A72]" />

                  <p className="font-serif text-sm text-[#29483F]">
                    {product.stock} Available
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                FEATURES
            ================================================== */}
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-[#68736C]">
                <FiCheck
                  size={13}
                  className="text-[#A5834E]"
                />
                Quality Checked
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-[#68736C]">
                <FiCheck
                  size={13}
                  className="text-[#A5834E]"
                />
                Easy Returns
              </div>

            </div>


            {/* =================================================
                ACTIONS
            ================================================== */}
            <div className="mt-9 flex gap-3">

              {/* Add Cart */}
              <button
                type="button"
                className="group flex flex-1 items-center justify-center gap-3 bg-[#153F34] px-6 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#F7F3EA] transition duration-300 hover:bg-[#A5834E]"
              >

                <FiShoppingBag
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                Add to Cart

              </button>


              {/* Wishlist */}
              <button
                type="button"
                aria-label="Add to wishlist"
                className="flex h-[53px] w-[53px] shrink-0 items-center justify-center border border-[#D1C8B9] bg-transparent text-[#29483F] transition duration-300 hover:border-[#C8A96B] hover:bg-[#153F34] hover:text-[#F7F3EA]"
              >
                <FiHeart size={19} />
              </button>

            </div>


            {/* Bottom Note */}
            <p className="mt-6 text-center text-[9px] uppercase tracking-[0.14em] text-[#969B95]">
              A thoughtful choice, made simple.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProductDetail;