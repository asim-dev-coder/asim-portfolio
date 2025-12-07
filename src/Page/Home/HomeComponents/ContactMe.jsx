import React from "react";

const ContactMe = () => {
  return (
    <>
    <div className="bg-gradient-to-l from-purple-50 to-sky-50">
      <div className="w-9/12 mx-auto py-4">
        <h1 className="text-4xl text-center font-bold mb-5 text-[#023e8a]">
          Contact Me
        </h1>
        <div className="justify-items-center">
          <div class="container px-4 mx-auto">
            <div class="mx-auto">
              <div class="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 class="text-center text-2xl font-semibold text-[#023e8a] mb-4">
                  drop a message
                </h2>
                <form>
                  <div class="mb-4">
                    <label class="block text-[#023e8a] mb-1" for="name">
                      Your Name
                    </label>
                    <input
                      class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48cae4] transition duration-300"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-[#023e8a] mb-1" for="email">
                      Your Email
                    </label>
                    <input
                      class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48cae4] transition duration-300"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-[#023e8a] mb-1" for="message">
                      Your Message
                    </label>
                    <textarea
                      class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48cae4] transition duration-300"
                      rows="4"
                      placeholder="Enter your message"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    class="w-full bg-[#48cae4] text-white py-2 px-4 rounded-lg hover:bg-[#023e8a] transition duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactMe;
