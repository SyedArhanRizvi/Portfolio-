"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can integrate backend API here
    alert("Enquiry Submitted Successfully!");
  };

  return (
    <section className="bg-[#0d0d0d] text-white py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-[#1a1a1a]/80 backdrop-blur-md p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-4xl font-bold text-[#04acaa] mb-6 text-center">
          📩 Send Your Enquiry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04acaa]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04acaa]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04acaa]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Your Enquiry</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-[#101010] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04acaa]"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#04acaa] hover:bg-[#048a88] transition px-8 py-3 rounded-full font-semibold"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default EnquiryForm;
