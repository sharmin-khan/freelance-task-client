import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/images/img.jpg";
import { Helmet } from "react-helmet";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="w-full my-20 px-4">
      <Helmet>
        <title>TaskNest | About</title>
        <meta
          name="description"
          content="Learn about TaskNest, the platform connecting clients and freelancers."
        />
      </Helmet>
      {/* Main About Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-xl p-8 
        bg-gradient-to-r from-blue-50 to-purple-50 
        dark:from-gray-800 dark:via-purple-900 dark:to-indigo-900"
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About TaskNest"
            className="rounded-xl shadow-lg w-full md:w-4/5 object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About TaskNest
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg">
            TaskNest is a modern freelance task management platform where
            clients can post projects and connect with skilled freelancers
            worldwide. We make collaboration simple, fast, and efficient.
          </p>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li> Post and manage tasks with ease.</li>
            <li> Connect with trusted freelancers.</li>
            <li> Track offers, progress, and payments securely.</li>
            <li> Work smarter, anytime, anywhere.</li>
          </ul>

          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-3xl cursor-pointer shadow hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition">
            Join TaskNest Today
          </button>
        </motion.div>
      </div>

      {/* Extra Content Block */}
      <div className="mt-16 space-y-12 text-center">
        {/* Our Mission Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 
  dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon/Image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Our Mission"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300 md:text-lg leading-relaxed">
                At TaskNest, our mission is to empower freelancers and clients
                by creating a trusted, transparent, and collaborative platform.
                We aim to simplify task management, reduce the barriers of
                freelancing, and bring opportunities closer to everyone,
                regardless of location or experience level.
                <br />
                <br />
                With a focus on{" "}
                <span className="font-semibold text-blue-600 dark:text-pink-400">
                  innovation, security, and efficiency
                </span>
                , TaskNest ensures that every project becomes a success story —
                helping freelancers grow their careers and clients achieve their
                goals faster.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call To Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Launch Your Projects with TaskNest Today
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 md:text-lg">
            Join thousands of freelancers and clients who trust TaskNest for
            seamless collaboration, efficient task management, and successful
            project delivery.
          </p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-3xl shadow hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
