"use client";

import { motion } from "framer-motion";

export const TestimonialSection = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12">
          Hear from the People Who’ve Built Their Dreams With Us.
        </h2>

        {/* Local Video */}
        <div className="w-full max-w-4xl mx-auto aspect-video mb-12 shadow-lg rounded-lg overflow-hidden">
          <video
            src="/assets/videos/home/mobile.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sample Quotes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {[
            {
              quote:
                "We didn’t just buy a plot. We built a future. Baderwals made everything transparent and easy.",
              author: "– Pradeep & Sunita, Yamunanagar",
            },
            {
              quote:
                "This is where my son will grow up — in a place we call our own.",
              author: "– Aman Khurana, Mahendergarh",
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-left h-full flex flex-col justify-between"
            >
              <p className="text-lg text-gray-700 italic mb-4">{t.quote}</p>
              <p className="font-semibold text-gray-900">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
