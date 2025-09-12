import React from "react";

const TopFreelancer = () => {
  const freelancers = [
    {
      name: "Sarmin Akter",
      role: "Web Developer",
      img: "https://i.ibb.co/pB05Vp92/freelancer2.webp",
      desc: "Specialist in React, Node.js and MongoDB with 5+ years of experience.",
    },
    {
      name: "Shahnaj Khan",
      role: "Graphic Designer",
      img: "https://i.ibb.co/k2KfzSvD/freelancer1.jpg",
      desc: "Expert in logo design, branding, and UI/UX with 300+ completed tasks.",
    },
    {
      name: "Habib Ahmed",
      role: "Content Writer",
      img: "https://i.ibb.co/nsVwPfQF/freelancer3-pg.jpg",
      desc: "Professional writer with a flair for SEO, blogs, and copywriting.",
    },
       {
      name: "Razu Ahmed",
      role: "Full stack Developer",
      img: "https://i.ibb.co/nsVwPfQF/freelancer3-pg.jpg",
      desc: "Skilled in both front-end and back-end technologies with 7+ years of experience.",
    },
  ];

  return (
    <div className="my-20 px-4 w-full text-center">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-center mb-6">
        Top Freelancers
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Meet some of our trusted and talented freelancers. They’ve delivered
        amazing results for clients across the globe.
      </p>

      {/* Freelancers Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {freelancers.map((freelancer, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 
              dark:from-indigo-900 dark:via-purple-800 dark:to-blue-900
              p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition text-center"
          >
            <img
              src={freelancer.img}
              alt={freelancer.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-300 dark:border-yellow-400"
            />
            <h3 className="text-xl font-bold text-blue-700 dark:text-yellow-400">
              {freelancer.name}
            </h3>
            <p className="text-blue-600 dark:text-yellow-300 font-medium mb-2">
              {freelancer.role}
            </p>
            <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">
              {freelancer.desc}
            </p>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-3xl cursor-pointer shadow hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFreelancer;
