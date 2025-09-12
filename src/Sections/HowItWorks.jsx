import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="my-20 px-4 w-full">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-center mb-12">
        How It Works
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left side content */}
        <div className="flex-1">
          <ul className="space-y-5 text-gray-700 dark:text-gray-200 text-lg">
            {[
              {
                step: "1. Sign Up",
                desc: "Create a free account in just a few clicks. Choose whether you want to hire or work as a freelancer.",
              },
              {
                step: "2. Complete Your Profile",
                desc: "Add your skills, experience, and a professional photo to attract more opportunities or freelancers.",
              },
              {
                step: "3. Post or Browse Tasks",
                desc: "Clients can post detailed tasks with budget and deadlines. Freelancers can explore a variety of available tasks.",
              },
              {
                step: "4. Connect & Collaborate",
                desc: "Communicate directly through our secure messaging system. Discuss requirements, timelines, and expectations.",
              },
              {
                step: "5. Deliver & Get Paid",
                desc: "Submit your work, get approval, and receive secure payments. We ensure both parties are satisfied before completion.",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/40 dark:to-purple-900/40 
                           shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
              >
                <span className="font-semibold text-blue-600 dark:text-yellow-400">
                  {item.step}:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side image with floating motion */}
      <div className="flex-1">
  <motion.img
    src="https://i.ibb.co/k22GGSgf/freelancer.webp"
    alt="How it works"
    className="rounded-xl w-full max-w-2xl h-96 object-cover mx-auto
               shadow-lg shadow-purple-500/50 dark:shadow-purple-700/50"
    animate={{
      y: [0, -20, 0], // up and down
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>

      </div>
    </section>
  );
};

export default HowItWorks;
