import React from "react";
import img1 from "../../assets/images/job1.jpg";
import img2 from "../../assets/images/job2.jpg";
import img3 from "../../assets/images/job3.jpg";
import img4 from "../../assets/images/job.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  {
    img: img1,
    title: "Find the Best Freelancers for Your Task",
    desc: "Post your project and connect with skilled freelancers worldwide. Get your work done quickly and professionally.",
  },
  {
    img: img2,
    title: "Grow Your Career as a Freelancer",
    desc: "Browse hundreds of new tasks every day and bid on projects that match your skills and interests.",
  },
  {
    img: img3,
    title: "Secure, Fast, and Reliable Marketplace",
    desc: "Enjoy safe payments, clear communication, and a supportive community for both clients and freelancers.",
  },
  {
    img: img4,
    title: "Start Your Next Project Today",
    desc: "Join our platform and experience a seamless freelance marketplace for all your needs.",
  },
];

const Banner = () => {
  return (
    <div className="w-full my-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-56 md:h-80 lg:h-[420px]">
              <img
                src={slide.img}
                className="w-full h-full object-cover rounded-xl"
                alt={slide.title}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-4 text-center">
                <h2 className="text-blue-700 text-2xl md:text-4xl font-bold mb-2 drop-shadow">
                  {slide.title}
                </h2>
                <p className="text-white text-sm md:text-lg max-w-2xl mb-4 drop-shadow">
                  {slide.desc}
                </p>
                <div className="flex flex-col md:flex-row gap-2 w-full max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search for tasks or skills..."
                    className="flex-1 px-4 py-2 rounded-md text-gray-800 focus:outline-none"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold transition">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner; 