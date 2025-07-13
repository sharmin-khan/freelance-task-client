import React from "react";

const TopFreelancer = () => {
  return (
    <div className="my-20 px-6 py-4 max-w-7xl mx-auto text-center bg-blue-100 dark:bg-gray-800 rounded">
      <h2 className="text-4xl font-semibold text-blue-600 text-center mb-8">
        Top Freelancers
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Meet some of our trusted and talented freelancers. They’ve delivered
        amazing results for clients across the globe.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {/* Freelancer 1 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
          <img
            src="https://i.ibb.co/pB05Vp92/freelancer2.webp"
            alt="Freelancer 1"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold">Sarmin Akter</h3>
          <p className="text-blue-600 font-medium">Web Developer</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Specialist in React, Node.js and MongoDB with 5+ years of
            experience.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Profile
          </button>
        </div>

        {/* Freelancer 2 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
          <img
            src="https://i.ibb.co/k2KfzSvD/freelancer1.jpg"
            alt="Freelancer 2"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold">Shahnaj khan</h3>
          <p className="text-blue-600 font-medium">Graphic Designer</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Expert in logo design, branding, and UI/UX with 300+ completed
            tasks.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Profile
          </button>
        </div>

        {/* Freelancer 3 */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
          <img
            src="https://i.ibb.co/nsVwPfQF/freelancer3-pg.jpg"
            alt="Freelancer 3"
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold">Habib Ahmed</h3>
          <p className="text-blue-600 font-medium">Content Writer</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Professional writer with a flair for SEO, blogs, and copywriting.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFreelancer;
