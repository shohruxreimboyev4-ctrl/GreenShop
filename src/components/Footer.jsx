import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import service1 from "../assets/img/service1.png";
import service2 from "../assets/img/service2.png";
import service3 from "../assets/img/service3.png";
import logo from "../assets/svg/Logo.svg";
import paypal from "../assets/img/paypal.png";
import mastercard from "../assets/img/mastercard.png";
import visa from "../assets/img/visa.png";
import AmericanExpress from "../assets/img/AmericanExpress.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-700 mt-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10">
          <div className="flex flex-col gap-4 items-start">
            <img src={service1} alt="Garden Care" className="w-30 h-30" />
            <div>
              <h3 className="font-bold text-lg">Garden Care</h3>
              <p className="text-sm text-gray-500">
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <img src={service2} alt="Plant Renovation" className="w-30 h-30" />
            <div>
              <h3 className="font-bold text-lg">Plant Renovation</h3>
              <p className="text-sm text-gray-500">
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <img src={service3} alt="Watering Garden" className="w-30 h-30" />
            <div>
              <h3 className="font-bold text-lg">Watering Garden</h3>
              <p className="text-sm text-gray-500">
                We are an online plant shop <br /> offering a wide range of
                cheap <br /> and trendy plants.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg whitespace-nowrap">
              Would you like to join newsletters?
            </h3>

            <div className="flex mt-3">
              <input
                type="email"
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm outline-none"
                placeholder="enter your email address..."
              />
              <button className="bg-green-600 text-white px-5 py-2 rounded-r-md text-sm font-medium hover:bg-green-700 transition cursor-pointer">
                Join
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              We usually post offers and challenges in newsletter. We’re <br /> your
              online houseplant destination. We offer a wide range <br /> of
              houseplants and accessories shipped directly from our <br /> (green)house
              to yours!
            </p>
          </div>
        </div>

        <div className="bg-[#E8F5E1] rounded-md flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20 px-6 py-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GreenShop logo" className="cursor-pointer" />
          </div>

          <div className="flex items-start gap-3">
            <FiMapPin className="text-green-700 text-xl" />
            <p className="text-sm text-gray-600">
              70 West Buckingham Ave.
              <br />
              Farmingdale, NY 11735
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FiMail className="text-green-700 text-xl" />
            <a
              href="mailto:contact@greenshop.com"
              className="text-sm hover:text-green-700 transition cursor-pointer"
            >
              contact@greenshop.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-green-700 text-xl" />
            <a
              href="tel:+8801911717490"
              className="text-sm hover:text-green-700 transition cursor-pointer"
            >
              +88 01911 717 490
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-12">
          <div>
            <h4 className="font-bold mb-4">My Account</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  My Account
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Our stores
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Career
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Specials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Help & Guide</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  How to Buy
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Product Policy
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  How to Return
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  House Plants
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Potter Plants
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Seeds
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Small Plants
                </a>
              </li>
              <li>
                <a className="hover:text-green-700 transition cursor-pointer">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social Media</h4>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="p-2 w-10 h-10 border rounded-md text-green-700 hover:bg-green-700 hover:text-white cursor-pointer transition" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="p-2 w-10 h-10 border rounded-md text-green-700 hover:bg-green-700 hover:text-white cursor-pointer transition" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="p-2 w-10 h-10 border rounded-md text-green-700 hover:bg-green-700 hover:text-white cursor-pointer transition" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="p-2 w-10 h-10 border rounded-md text-green-700 hover:bg-green-700 hover:text-white cursor-pointer transition" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="p-2 w-10 h-10 border rounded-md text-green-700 hover:bg-green-700 hover:text-white cursor-pointer transition" />
              </a>
            </div>

            <h4 className="font-bold mt-6 mb-3">We accept</h4>

            <div className="flex gap-4 items-center">
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={paypal}
                  className="h-8 cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"
                  alt="PayPal"
                />
              </a>

              <a
                href="https://www.mastercard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={mastercard}
                  className="h-6 cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"
                  alt="Mastercard"
                />
              </a>

              <a
                href="https://www.visa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={visa}
                  className="h-6 cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"
                  alt="Visa"
                />
              </a>

              <a
                href="https://www.americanexpress.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={AmericanExpress}
                  className="h-6 cursor-pointer transition duration-200 hover:scale-110 hover:opacity-80"
                  alt="American Express"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Faqat container ichidagi oxirgi divga yashil chiziq qo‘shildi */}
        <div className="border-t border-green-200 py-5 text-center text-sm text-gray-500">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
