import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#F7F3EA] px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C8A96B]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#A5834E]">
              Contact Us
            </p>
          </div>

          <h1 className="font-serif text-4xl leading-tight text-[#153F34] md:text-5xl lg:text-6xl">
            Let's talk about
            <span className="block italic text-[#A5834E]">
              your shopping experience.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#737C75] md:text-base">
            Have a question, need help with an order, or simply want to
            share your feedback? Our team is always happy to help.
          </p>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}
          <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_15px_35px_rgba(21,63,52,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                <FiPhone size={18} />
              </div>

              <FiArrowUpRight
                className="text-[#C8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
              />
            </div>

            <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#A5834E]">
              Call Us
            </p>

            <h3 className="font-serif text-lg text-[#153F34]">
              +92 300 1234567
            </h3>

            <p className="mt-1 text-xs text-[#7D857F]">
              Mon - Sat, 9AM - 6PM
            </p>
          </div>

          {/* Email */}
          <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_15px_35px_rgba(21,63,52,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                <FiMail size={18} />
              </div>

              <FiArrowUpRight
                className="text-[#C8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
              />
            </div>

            <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#A5834E]">
              Email Us
            </p>

            <h3 className="break-all font-serif text-lg text-[#153F34]">
              support@smartbuy.com
            </h3>

            <p className="mt-1 text-xs text-[#7D857F]">
              We reply within 24 hours
            </p>
          </div>

          {/* Location */}
          <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_15px_35px_rgba(21,63,52,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                <FiMapPin size={18} />
              </div>

              <FiArrowUpRight
                className="text-[#C8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
              />
            </div>

            <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#A5834E]">
              Visit Us
            </p>

            <h3 className="font-serif text-lg text-[#153F34]">
              Sargodha, Pakistan
            </h3>

            <p className="mt-1 text-xs text-[#7D857F]">
              Our support center
            </p>
          </div>

          {/* Hours */}
          <div className="group border border-[#DED7C9] bg-[#FBF9F4] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A96B] hover:shadow-[0_15px_35px_rgba(21,63,52,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/50 text-[#A5834E] transition group-hover:bg-[#153F34] group-hover:text-[#F7F3EA]">
                <FiClock size={18} />
              </div>

              <FiArrowUpRight
                className="text-[#C8A96B] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                size={18}
              />
            </div>

            <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#A5834E]">
              Working Hours
            </p>

            <h3 className="font-serif text-lg text-[#153F34]">
              9:00 AM — 6:00 PM
            </h3>

            <p className="mt-1 text-xs text-[#7D857F]">
              Monday — Saturday
            </p>
          </div>
        </div>

        {/* ================= FORM AREA ================= */}
        <div className="grid overflow-hidden border border-[#DED7C9] bg-[#FBF9F4] lg:grid-cols-5">

          {/* ================= LEFT PANEL ================= */}
          <div className="relative overflow-hidden bg-[#153F34] p-8 md:p-10 lg:col-span-2">

            {/* Decorative Shapes */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#C8A96B]/20" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-[#C8A96B]/20" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>
                <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#C8A96B]">
                  SmartBuy Support
                </p>

                <h2 className="font-serif text-3xl leading-tight text-[#F7F3EA] md:text-4xl">
                  We're here to
                  <span className="block italic text-[#D8C49A]">
                    help you.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#C9D0CB]">
                  From product questions to order support, tell us what
                  you need and we'll do our best to make things simple.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#C8A96B]">
                    <FiMail size={16} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                      Email
                    </p>

                    <p className="mt-0.5 text-xs text-white/80">
                      support@smartbuy.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#C8A96B]">
                    <FiPhone size={16} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                      Phone
                    </p>

                    <p className="mt-0.5 text-xs text-white/80">
                      +92 300 1234567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#C8A96B]">
                    <FiMapPin size={16} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                      Location
                    </p>

                    <p className="mt-0.5 text-xs text-white/80">
                      Sargodha, Pakistan
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="p-7 md:p-10 lg:col-span-3">

            <div className="mb-8">
              <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#A5834E]">
                Send a Message
              </p>

              <h2 className="font-serif text-3xl text-[#153F34]">
                How can we help?
              </h2>

              <p className="mt-2 text-sm text-[#7D857F]">
                Fill in the details below and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#153F34]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b border-[#D4CCBD] bg-transparent px-1 py-3 text-sm text-[#153F34] outline-none transition placeholder:text-[#AAA69D] focus:border-[#C8A96B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#153F34]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-b border-[#D4CCBD] bg-transparent px-1 py-3 text-sm text-[#153F34] outline-none transition placeholder:text-[#AAA69D] focus:border-[#C8A96B]"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#153F34]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full border-b border-[#D4CCBD] bg-transparent px-1 py-3 text-sm text-[#153F34] outline-none transition placeholder:text-[#AAA69D] focus:border-[#C8A96B]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-[9px] font-medium uppercase tracking-[0.15em] text-[#153F34]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full resize-none border-b border-[#D4CCBD] bg-transparent px-1 py-3 text-sm text-[#153F34] outline-none transition placeholder:text-[#AAA69D] focus:border-[#C8A96B]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 bg-[#153F34] px-7 py-4 text-[9px] font-medium uppercase tracking-[0.2em] text-[#F7F3EA] transition-all duration-300 hover:bg-[#29483F]"
              >
                Send Message

                <FiSend
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>
          </div>
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-[#8A908B] md:flex-row md:text-left">
          <p>
            We usually respond within one business day.
          </p>

          <p className="font-serif italic text-[#A5834E]">
            Smart shopping. Simple support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;