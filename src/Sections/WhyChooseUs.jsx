import React from 'react';
import { FaBolt, FaHeadset, FaLock } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
      <section className="my-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-10">
          Why Choose TaskNest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
            <FaBolt className="text-blue-600 w-8 h-8 mb-2" />
            <h3 className="text-2xl font-medium text-blue-600 mb-3">
              Fast Matching
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our platform quickly connects freelancers and clients based on skills, budget, and deadlines, ensuring efficient project starts.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
            <FaLock className="text-blue-600 w-8 h-8 mb-2" />
            <h3 className="text-2xl font-medium text-blue-600 mb-3">
              Secure Payments
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All payments are securely managed and released only when both parties are fully satisfied with the work.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white">
            <FaHeadset className="text-blue-600 w-8 h-8 mb-2" />
            <h3 className="text-2xl font-medium text-blue-600 mb-3">
              24/7 Support
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated support team is available around the clock to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
  