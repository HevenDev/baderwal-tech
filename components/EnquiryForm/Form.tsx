"use client";

import React, { useState } from "react";

interface EnquiryFormProps {
  enquiryEmail: string;
}

export default function EnquiryForm({ enquiryEmail }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Implement your API call or email logic here.
    console.log("Submit to:", enquiryEmail, formData);
    setSubmitted(true);
  }

  return submitted ? (
    <p className="text-center text-green-600 font-semibold">
      Thank you for your enquiry! We will get back to you soon.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        value={formData.message}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
