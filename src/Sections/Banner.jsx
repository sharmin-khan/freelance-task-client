import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image4.jpg";

const Banner = () => {
  return (
    <div className="w-full my-20 px-4">
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-xl p-8 
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
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {/* Image 1 - Up Down */}
          <motion.img
            src={img1}
            alt="Freelancer"
            className="w-full h-48 object-cover rounded-lg shadow"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Image 2 - Left Right */}
          <motion.img
            src={img2}
            alt="Work"
            className="w-full h-48 object-cover rounded-lg shadow"
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Image 3 - Slow Up Down */}
          <motion.img
            src={img3}
            alt="Task"
            className="col-span-2 w-full h-64 object-cover rounded-lg shadow"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
