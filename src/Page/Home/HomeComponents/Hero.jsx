import React, { useState, useEffect } from "react";
import { FaReact, FaGithub } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ["Web Developer", "Frontend Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[index];
      if (isDeleting) {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);
  return (
    <>
      <style>
        {`
                .blinking-cursor {
                    font-weight: 100;
                    font-size: 24px;
                    color: #023e8a;
                    animation: blink 0.7s infinite;
                }
                @keyframes blink {
                    0% { opacity: 1 }
                    50% { opacity: 0 }
                    100% { opacity: 1 }
                }
                `}
      </style>
      <div className="mx-auto w-11/12 lg:w-9/12 xl:w-9/12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center lg:text-left font-poppins">
            <p className="text-[19px] text-[#023e8a] work">
              Looking for a reliable Digital Marketer to boost your product
              sales?
            </p>
            <p className="mb-2 text-[19px] text-[#023e8a] work">
              You don’t have to worry anymore — I’m here to help you.
            </p>
            <p className="mb-2 text-[25px] text-[#023e8a] work font-bold">
              Welcome To My World!
            </p>
            <h1 className="text-4xl md:text-6xl font-roboto font-semibold">
              Hi, I'm{" "}
              <span className="font-roboto text-[#023e8a] font-bold">
                Assim
              </span>
            </h1>
            <h1 className="text-2xl my-3">
              I am a <span className="text-[#48cae4] font-bold">{text}</span>
              <span className="blinking-cursor">|</span>
            </h1>
            {/* Get Course Buttons */}
            <div className="flex gap-4 items-center">
              <div className="btn h-[50px] flex gap-2 text-2xl items-center hover:bg-white hover:text-[#023e8a] bg-[#023e8a] px-4 py-2 rounded-lg text-white font-semibold shadow-md">
                <FaGithub className=" text-2xl font-semibold" />
                Find Me
              </div>
              <div className="h-[50px] btn flex gap-2 text-2xl items-center border-[#023e8a] hover:text-white bg-white text-[#023e8a] hover:bg-[#023e8a] px-4 py-2 rounded-lg font-semibold shadow-md">
                <FaReact className="text-2xl font-semibold" />
                My Skills
              </div>
            </div>
            <div className="flex flex-wrap gap-2 overflow-hidden mt-4 font-poppins mb-5 lg:mb-0">
              <div className="text-green-700 text-md font-medium bg-green-100 px-3 py-1 rounded-lg w-fit work">
                Digital Marketing
              </div>
              <div className="text-purple-700 text-md font-medium bg-purple-100 px-3 py-1 rounded-lg w-fit work">
                frontend development
              </div>
              <div className="text-pink-700 text-md font-medium bg-pink-100 px-3 py-1 rounded-lg w-fit work">
                React js developer
              </div>
              <div className="text-sky-700 text-md font-medium bg-sky-100 px-3 py-1 rounded-lg w-fit work">
                web development
              </div>
            </div>
          </div>
          <div class="relative mb-5 lg:none">
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-l from-[#023e8a] via-[#48cae4] to-[#caf0f8] opacity-75 blur"></div>
            <img
              className="relative w-[300px] rounded-xl"
              src="https://media.licdn.com/dms/image/v2/D5603AQGiS4Yfc1Z_9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688451641788?e=2147483647&v=beta&t=0QfPsb6zmIYJdwRWJsXsphBmTUIvXk7Eq6oBRQvY_tY"
              alt="best react js developer in dhaka"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
