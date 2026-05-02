"use client";

import React, { useState } from "react";

const BorrowBook = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookTitle: "",
    borrowDuration: "7",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        bookTitle: "",
        borrowDuration: "7",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Request to <span className="text-primaryy">Borrow a Book</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below to request a book from our collection
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Request Submitted!</h3>
            <p>Thank you for your request. We'll contact you soon.</p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name *</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="input input-bordered input-sm focus:outline-none focus:border-primaryy"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email *</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="input input-bordered input-sm focus:outline-none focus:border-primaryy"
              />
            </div>

            {/* Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Phone Number *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="input input-bordered input-sm focus:outline-none focus:border-primaryy"
              />
            </div>

            {/* Borrow Duration */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Duration (days) *</span>
              </label>
              <select
                name="borrowDuration"
                value={formData.borrowDuration}
                onChange={handleChange}
                className="select select-bordered select-sm focus:outline-none focus:border-primaryy"
              >
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="21">21 days</option>
                <option value="30">30 days</option>
              </select>
            </div>
          </div>

          {/* Book Title - Full Width */}
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text font-semibold">Book Title *</span>
            </label>
            <input
              type="text"
              name="bookTitle"
              value={formData.bookTitle}
              onChange={handleChange}
              required
              placeholder="Enter the title of the book you want to borrow"
              className="input input-bordered focus:outline-none focus:border-primaryy"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-block bg-primaryy text-white hover:bg-primary border-none rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default BorrowBook;
