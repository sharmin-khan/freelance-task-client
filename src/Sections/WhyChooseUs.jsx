import React from "react";
import { FaBolt, FaHeadset, FaLock, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt className=" text-blue-700 dark:text-yellow-400 w-7 h-7 mb-3" />,
    title: "Fast Matching",
    desc: "Our platform quickly connects freelancers and clients based on skills, budget, and deadlines, ensuring efficient project starts.",
  },
  {
    icon: <FaLock className="text-blue-600 dark:text-yellow-400 w-7 h-7 mb-3" />,
    title: "Secure Payments",
    desc: "All payments are securely managed and released only when both parties are fully satisfied with the work.",
  },
  {
    icon: <FaHeadset className="text-blue-600 dark:text-yellow-400 w-7 h-7 mb-3" />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions or concerns.",
  },
  {
    icon: <FaCheckCircle className="text-blue-600 dark:text-yellow-400 w-7 h-7 mb-3" />,
    title: "Verified Professionals",
    desc: "All freelancers on TaskNest are verified to ensure quality and trust, giving you confidence in your project.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="my-20 px-4 w-full text-center">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-center mb-6">
        Why Choose TaskNest?
      </h2>
     <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        TaskNest is your trusted freelance marketplace where quality meets
        efficiency. Whether you're a client looking for talented professionals
        or a freelancer seeking meaningful work, TaskNest provides a secure,
        fast, and user-friendly platform that ensures smooth collaboration and
        successful project delivery every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {features.map((feature, idx) => (
          <div
            key={idx}
          className="p-8 rounded-xl 
             bg-gradient-to-br from-blue-700/50 to-purple-700/50 
             hover:shadow-xl transform hover:-translate-y-1 
             transition duration-300
             backdrop-blur-sm dark:backdrop-blur-md dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-purple-900/40"
>
            {feature.icon}
            <h3 className="text-xl font-semibold text-blue-700 dark:text-yellow-400 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
