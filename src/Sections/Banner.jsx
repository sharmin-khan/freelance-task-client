import React from "react";
import img1 from "../assets/images/job1.jpg";
import img2 from "../assets/images/job2.jpg";
import img3 from "../assets/images/job3.jpg";
import img4 from "../assets/images/job.jpg";
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
    <div className="w-full my-6 px-4">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800} // smoother transition speed
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-64 md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-center space-y-4">
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl drop-shadow">
                  {slide.desc}
                </p>
                <div className="flex flex-col md:flex-row gap-3 w-full max-w-md items-center md:items-stretch">
                  <input
                    type="text"
                    placeholder="Search for tasks or skills..."
                    className="flex-1 px-4 py-2 rounded-md text-base-100 focus:outline-none border dark:border-gray-100 dark:text-gray-50"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-2 rounded-md font-semibold transition cursor-pointer text-sm md:text-base w-28 md:w-auto">
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
