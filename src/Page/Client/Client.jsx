import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rodriguez Amily",
      role: "Software Engineer, Google",
      content: "I'm satisfied with his service, you can rely him on .",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: "⭐⭐⭐⭐⭐",
      stayDate: "July 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Backend Developer, Meta",
      content:
        "I know Assim for couple of years. He is a good developer, having expertise in React JS",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: "⭐⭐⭐⭐⭐",
      stayDate: "March 2024",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Software Engineer, Amazon",
      content:
        "Assim is a pro developer. Every time I took services from him,  I've been satisfied",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: "⭐⭐⭐⭐⭐",
      stayDate: "May 2024",
    },
    {
      id: 4,
      name: "Emily Wilson",
      role: "Data Analysts, Microsoft",
      content:
        "Take service from Assim and you won't be disappointed. He's also active in online coding forum",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: "⭐⭐⭐⭐⭐",
      stayDate: "June 2024",
    },
    {
      id: 5,
      name: "James Peterson",
      role: "Frontend Developer, Meta",
      content:
        "Assim is one of the best Javascript developer, he is quite helpful too",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: "⭐⭐⭐⭐⭐",
      stayDate: "April 2024",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 1300,
    autoplay: true,
    autoplaySpeed: 5200,
    slidesToShow: 1, // show 1 items at a time
    slidesToScroll: 1, // scroll 1 at a time
    arrows: false,
  };
  return (
<<<<<<< HEAD
          <div className="w-11/12 lg:w-10/12 mx-auto py-8 text-4xl text-[#023e8a]">
=======
    <div className="bg-gradient-to-r from-purple-50 to-sky-50">
      <div className="w-11/12 lg:w-10/12 mx-auto py-8 text-4xl text-[#023e8a]">
>>>>>>> f2942c2959d9ba4a7028f128682967e8beb1d885
        <h1 className="text-4xl text-center font-bold my-3 text-[#023e8a]">
          Clients' Riview
        </h1>
        <h1 className="text-2xl text-center font-medium my-4 text-[#023e8a]">
          What my clients say about me
        </h1>
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
          <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-[390px] md:h-[330px] p-3">
              {/* Mobile carousel */}
              <Slider {...carouselSettings}>
                {testimonials.map((item) => (
                  <>
                    <div className="flex justify-center">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#023e8a]" loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-[22px] text-[#023e8a]">
                        {item.name}
                      </p>
                      <p className="text-[rgb(2,62,138)] text-[19px] my-2">{item.role}</p>
                      <p className="text-sm text-gray-500">
                        {item.stayDate}
                      </p>
                    </div>
                    <div className="text-[20px] text-center my-3">
                      {item.rating}
                    </div>
                    <blockquote className="text-[25px] md:text-2xl font-semibold text-[#023e8a] leading-8 text-center italic">
                      "{item.content}"
                    </blockquote>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
    </div>
>>>>>>> f2942c2959d9ba4a7028f128682967e8beb1d885
  );
};

export default Client;


