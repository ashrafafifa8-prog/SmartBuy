import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiHeart,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products", dropdown: true },
    { name: "About", path: "/about" },
    { name: "Categories", path: "/categories", dropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#f8f5ed] text-[#123c32]">

      {/* ================= OFFER BAR ================= */}
      <div className="bg-[#123c32] px-4 py-2.5 text-center text-[11px] tracking-[0.18em] text-[#f5eee0] sm:text-xs">
        FREE SHIPPING ON ORDERS OVER $50
        <span className="mx-3 text-[#c6a96b]">•</span>
        EASY RETURNS
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="border-b border-[#dcd5c7] bg-[#f8f5ed]">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

          <div className="flex h-[88px] items-center justify-between gap-6">

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              className="group flex shrink-0 items-center"
            >
              <div className="flex items-center gap-3">

                {/* Logo Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-[13px] border border-[#c6a96b]/50 bg-[#123c32] shadow-sm transition duration-300 group-hover:scale-105">
                  <span className="font-serif text-[30px] font-medium leading-none text-[#f8f5ed]">
                    S
                  </span>
                </div>

                {/* Brand Name */}
                <div className="leading-none">
                  <div className="font-serif text-[25px] tracking-[-0.04em] text-[#123c32] sm:text-[28px]">
                    Smart<span className="text-[#b4965c]">Buy</span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-2 text-[7px] font-medium tracking-[0.22em] text-[#6d776f]">
                    <span className="h-px w-5 bg-[#c6a96b]" />
                    BETTER CHOICES
                    <span className="text-[#c6a96b]">•</span>
                    BRIGHTER DAYS
                    <span className="h-px w-5 bg-[#c6a96b]" />
                  </div>
                </div>

              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden items-center gap-8 xl:flex">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative flex items-center gap-1 py-3 font-serif text-[14px] tracking-wide transition duration-300 ${
                    isActive(link.path)
                      ? "text-[#b08d4f]"
                      : "text-[#24473f] hover:text-[#b08d4f]"
                  }`}
                >
                  {link.name}

                  {link.dropdown && (
                    <FiChevronDown
                      size={13}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}

                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#c6a96b] transition-all duration-300 ${
                      isActive(link.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="hidden items-center gap-5 xl:flex">

              {/* Search */}
              <button
                aria-label="Search"
                className="text-[#24473f] transition duration-300 hover:text-[#b08d4f]"
              >
                <FiSearch size={19} />
              </button>

              {/* Wishlist */}
              <button
                aria-label="Wishlist"
                className="group relative text-[#24473f] transition duration-300 hover:text-[#b08d4f]"
              >
                <FiHeart
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#c6a96b] text-[8px] font-medium text-white">
                  0
                </span>
              </button>

              {/* Cart */}
              <Link
                to="/cart"
                aria-label="Shopping cart"
                className="group relative text-[#24473f] transition duration-300 hover:text-[#b08d4f]"
              >
                <FiShoppingBag
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#c6a96b] text-[8px] font-medium text-white">
                  0
                </span>
              </Link>

              {/* Divider */}
              <span className="h-7 w-px bg-[#d8d0c0]" />

              {/* Account */}
              <Link
                to="/login"
                className="flex items-center gap-2 text-[#24473f] transition duration-300 hover:text-[#b08d4f]"
              >
                <FiUser size={19} />

                <span className="font-serif text-sm">
                  Account
                </span>

                <FiChevronDown size={13} />
              </Link>

            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="rounded-full border border-[#d9d1c2] p-2.5 text-[#123c32] transition duration-300 hover:border-[#c6a96b] hover:bg-[#f0eadc] xl:hidden"
            >
              {menuOpen ? (
                <FiX size={21} />
              ) : (
                <FiMenu size={21} />
              )}
            </button>

          </div>

          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (
            <div className="border-t border-[#ded7ca] py-5 xl:hidden">

              {/* Mobile Search */}
              <div className="mb-5 flex items-center rounded-full border border-[#d8d0c1] bg-white/50 px-4 py-3 transition focus-within:border-[#c6a96b]">

                <FiSearch
                  size={18}
                  className="mr-3 text-[#7b847e]"
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-transparent font-serif text-sm text-[#123c32] outline-none placeholder:text-[#929891]"
                />

              </div>

              {/* Mobile Links */}
              <div className="space-y-1">

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 font-serif text-sm transition duration-300 ${
                      isActive(link.path)
                        ? "bg-[#e9eee8] text-[#b08d4f]"
                        : "text-[#24473f] hover:bg-[#f0eadf] hover:text-[#b08d4f]"
                    }`}
                  >
                    <span>{link.name}</span>

                    {link.dropdown && (
                      <FiChevronDown size={14} />
                    )}
                  </Link>
                ))}

                {/* Mobile Cart */}
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3.5 font-serif text-sm text-[#24473f] transition hover:bg-[#f0eadf] hover:text-[#b08d4f]"
                >
                  <FiShoppingBag size={18} />
                  Cart
                  <span className="ml-auto rounded-full bg-[#c6a96b] px-2 py-0.5 text-[9px] text-white">
                    0
                  </span>
                </Link>

                {/* Mobile Wishlist */}
                <button
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3.5 font-serif text-sm text-[#24473f] transition hover:bg-[#f0eadf] hover:text-[#b08d4f]"
                >
                  <FiHeart size={18} />
                  Wishlist
                  <span className="ml-auto rounded-full bg-[#c6a96b] px-2 py-0.5 text-[9px] text-white">
                    0
                  </span>
                </button>

                {/* Mobile Account */}
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3.5 font-serif text-sm text-[#24473f] transition hover:bg-[#f0eadf] hover:text-[#b08d4f]"
                >
                  <FiUser size={18} />
                  Account
                </Link>

              </div>

            </div>
          )}

        </div>
      </nav>

    </header>
  );
};

export default Navbar;