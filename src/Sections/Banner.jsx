import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image4.jpg";

const Banner = () => {
  return (
    <div className="w-full my-20 px-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-xl px-8 py-12
              bg-gradient-to-r from-blue-50 to-purple-50 
              dark:from-gray-800 dark:via-purple-900 dark:to-indigo-900"
      >
        {/* Left Side (Content) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Find the Best Freelancers for Your Task
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg">
            Post your project and connect with skilled freelancers worldwide.
            Get your work done quickly and professionally.
          </p>
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-3xl cursor-pointer shadow hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition">
            Get Started
          </button>
        </motion.div>

        {/* Right Side (Images with Animation) */}
        <div className="relative w-full h-80">
          {/* Main Image */}
          <motion.img
            src={img3}
            alt="Task"
            className="absolute top-0 left-1/4 w-2/4 h-full object-cover rounded-xl shadow-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Left Image */}
          <motion.img
            src={img1}
            alt="Freelancer"
            className="absolute top-10 left-0 w-1/3 h-2/3 object-cover rounded-xl shadow-lg"
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Right Image */}
          <motion.img
            src={img2}
            alt="Work"
            className="absolute top-20 right-0 w-1/3 h-2/3 object-cover rounded-xl shadow-lg"
            animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
