'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-10 px-6 md:px-16">
      {/* Footer Main Container */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Contact Information Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#04acaa]">Contact Us</h2>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@techstudios.com</p>
          <p>Address: 123 Tech Street, Silicon Valley, CA</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#04acaa]">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#04acaa]">Home</a></li>
            <li><a href="#" className="hover:text-[#04acaa]">Projects</a></li>
            <li><a href="#" className="hover:text-[#04acaa]">About Us</a></li>
            <li><a href="#" className="hover:text-[#04acaa]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#04acaa]">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Inquiry Form Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#04acaa]">Enquiry Form</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#222222] text-white rounded-md border-none"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-[#222222] text-white rounded-md border-none"
              rows="4"
            />
            <button
              type="submit"
              className="w-full p-3 bg-[#04acaa] hover:bg-[#048a88] rounded-md text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Social Media Links Section */}
        <div className="space-y-4 flex flex-col gap-5">
          <h2 className="text-xl font-bold text-[#04acaa]">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-[#04acaa]" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-[#04acaa]" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-[#04acaa]" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl hover:text-[#04acaa]" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Copyright & Legal Links) */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 TechStudios. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-[#04acaa]">Privacy Policy</a> | 
          <a href="#" className="hover:text-[#04acaa]"> Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;