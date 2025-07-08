import React from "react";

const HowItWorks = () => {
  return (
    <section className="my-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-semibold text-blue-600 text-center mb-12">
        How It Works
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left side content */}
        <div className="flex-1">
          <ul className="space-y-5 text-gray-700  dark:text-gray-200 text-lg">
            <li>
              <span className="font-semibold text-blue-600">1. Sign Up:</span>{" "}
              Create a free account in just a few clicks. Choose whether you
              want to hire or work as a freelancer.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                2. Complete Your Profile:
              </span>{" "}
              Add your skills, experience, and a professional photo to attract
              more opportunities or freelancers.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                3. Post or Browse Tasks:
              </span>{" "}
              Clients can post detailed tasks with budget and deadlines.
              Freelancers can explore a variety of available tasks.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                4. Connect & Collaborate:
              </span>{" "}
              Communicate directly through our secure messaging system. Discuss
              requirements, timelines, and expectations.
            </li>
            <li>
              <span className="font-semibold text-blue-600">
                5. Deliver & Get Paid:
              </span>{" "}
              Submit your work, get approval, and receive secure payments. We
              ensure both parties are satisfied before completion.
            </li>
          </ul>
        </div>

        {/* Right side image */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/k22GGSgf/freelancer.webp"
            alt="How it works"
            className="rounded-xl w-full max-w-2xl h-96 object-cover mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
