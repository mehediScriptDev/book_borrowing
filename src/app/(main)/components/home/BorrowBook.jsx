"use client";

import React, { useState } from "react";
import { BookOpen } from 'lucide-react';


const BorrowBook = () => {

  return (
    <section className="py-8 px-4 bg-linear-to-br from-primary/10 to-secondary/10">
      <div className="max-w-2xl mx-auto">
       
        <div className="text-center mb-8">
          
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-2">
            Request to <span className="text-primaryy">Borrow a Book</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to request a book from our collection
          </p>
        </div>

        <div className="bg-base-100 rounded-2xl border border-base-200 p-6">
          <form >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-sm">
                    Full name *
                  </span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  className="input input-bordered input-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-sm">
                    Email *
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered input-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-sm">
                    Phone number *
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="input input-bordered input-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-sm">
                    Duration (days) *
                  </span>
                </label>
                <select
                  name="borrowDuration"
                  className="select select-bordered select-sm focus:outline-none focus:border-primary"
                >
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="21">21 days</option>
                  <option value="30">30 days</option>
                </select>
              </div>
            </div>

            <div className="form-control flex flex-col mb-6">
              <label className="label">
                <span className="label-text font-medium text-sm">
                  Book title *
                </span>
              </label>
              <input
                type="text"
                name="bookTitle"
                required
                placeholder="Enter the title of the book you want to borrow"
                className="input w-full input-bordered focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="btn btn-block bg-primaryy text-white border-none rounded-full"
            >
              Submit request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BorrowBook;
