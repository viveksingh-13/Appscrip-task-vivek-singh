import {
  amex,
  apple,
  currency,
  gpay,
  groupOfCards,
  groupOfCardsMobile,
  instagramIcon,
  linkedIcon,
  masterCard,
  pay,
  paypal,
} from "@/assets/icon";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black w-full p-6 md:py-10 md:px-16">
      {/* footer top part */}
      <main className="flex flex-col md:flex-row justify-between  md:py-10 text-white border-b-2 border-gray-400">
        <section className="space-y-4 md:space-y-8 border-b-2 md:border-b-0 pb-6 md:pb-0">
          <div className="space-y-3">
            <h3 className="font-bold text-xl">Be the first to know</h3>
            <p className="text-base block md:hidden">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <p className="text-base hidden md:block">
              Sign up for updates from mettā muse.
            </p>
          </div>
          <div className="w-full flex flex-wrap gap-1 md:gap-4">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="p-4 md:min-w-96"
            />
            <button className="text-gray-400 bg-black border border-gray-400 rounded-md p-4 md:min-w-44">
              Subscribe
            </button>
          </div>
        </section>
        <section className=" text-white">
          <div className="space-y-2 md:py-0 py-4  border-b-2 md:border-b-0 md:pb-6">
            <h3 className="font-bold text-lg">
              <span className="hidden md:inline-block">CONTACT US</span>
              <span className="md:hidden">Call Us</span>
            </h3>
            <p className="hidden md:inline-block text-base">+44 221 133 5360</p>
            <p className="hidden md:inline-block text-base">
              customercare@mettamuse.com
            </p>
            <p className="md:hidden text-base flex justify-between gap-2 flex-wrap">
              <span className="text-sm">+44 221 133 5360</span>
              <span className="text-sm">customercare@mettamuse.com</span>
            </p>
          </div>
          <div className="space-y-2 py-4 md:py-0 md:pb-6">
            <h3 className="font-bold text-lg">Currency</h3>
            <p>{currency}</p>
            <p className="hidden md:inline-block text-sm">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </section>
      </main>
      {/* footer top part end */}
      {/* ----------------------------------------------------------------------------------------------------------------- */}
      {/* footer bottom part */}
      <main className="flex flex-col md:flex-row justify-between  md:py-10 text-white ">
        <section className="space-y-4 text-white">
          <div className="space-y-2 py-4 md:py-0 border-b-2 md:border-b-0">
            <h3 className="font-bold text-lg mb-3">mettā muse</h3>
            <p className="text-base hidden md:inline-block">About Us</p>
            <p className="text-base hidden md:inline-block">Stories</p>
            <p className="text-base hidden md:inline-block">Artisans</p>
            <p className="text-base hidden md:inline-block">Boutiques</p>
            <p className="text-base hidden md:inline-block">Contact Us</p>
            <p className="text-base hidden md:inline-block">
              EU Compliances Docs
            </p>
          </div>
        </section>
        <section className="space-y-4 text-white">
          <div className="space-y-2 py-4 md:py-0 border-b-2 md:border-b-0">
            <h3 className="font-bold text-lg mb-3 ">Quick Links</h3>
            <p className="text-base hidden md:inline-block">
              Orders & Shipping
            </p>
            <p className="text-base hidden md:inline-block">
              Join/Login as a Seller
            </p>
            <p className="text-base hidden md:inline-block">
              Payment & Pricing
            </p>
            <p className="text-base hidden md:inline-block">Return & Refunds</p>
            <p className="text-base hidden md:inline-block">FAQs</p>
            <p className="text-base hidden md:inline-block">Privacy Policy</p>
            <p className="text-base hidden md:inline-block">
              Terms & Conditions
            </p>
          </div>
        </section>
        <section className="space-y-4 md:space-y-12 text-white">
          <div className="space-y-2 py-4 md:py-0 border-b-2 md:border-b-0">
            <h3 className="font-bold  text-lg mb-3">Follow Us</h3>
            <div className=" justify-start gap-2 hidden md:flex">
              <span>{instagramIcon}</span> <span>{linkedIcon}</span>
            </div>
            <p className="text-base hidden md:inline-block">
              customercare@mettamuse.com
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg md:mb-0 mb-4">
              mettā muse Accepts
            </h3>
            <div className="flex flex-wrap gap-2">
              <span>{gpay}</span>
              <span>{masterCard}</span>
              <span>{paypal}</span>
              <span>{amex}</span>
              <span>{apple}</span>
              <span>{pay}</span>
            </div>
          </div>
        </section>
      </main>
      <main className="w-full text-white flex justify-center py-4 md:py-0">
        <span className="text-sm">
          Copyright © 2023 mettamuse. All rights reserved.
        </span>
      </main>
      {/* footer bottom part end */}
    </footer>
  );
};

export default Footer;
