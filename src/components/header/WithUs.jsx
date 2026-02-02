import React from "react";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

function WithUs() {
  return (
    <div className="py-10">
      <div className="w-10/12 mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">
            যোগাযোগ করুন
          </h1>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <MdLocationPin className="text-red-500" size={40} />
                <h1 className="text-xl">ঠিকানা</h1>
              </div>
              <h1 className="text-2xl font-semibold mt-5">
                25 Karwan Bazar, Dhaka
              </h1>
              <hr className="w-[600px] text-gray-200 mt-6" />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <MdLocalPhone className="text-red-500" size={40} />
                <h1 className="text-xl">ফোন</h1>
              </div>
              <h1 className="text-2xl text-gray-600 mt-5">
                Mobile:{" "}
                <span className="font-semibold text-black">
                  (+88) - 0155 - 6440078
                </span>
              </h1>
              <h1 className="text-2xl text-gray-600 mt-5">
                Hotline:{" "}
                <span className="font-semibold text-black">390 - 510</span>
              </h1>
              <hr className="w-[600px] text-gray-200 mt-6" />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-4">
                <MdOutlineEmail className="text-red-500" size={40} />
                <h1 className="text-xl">মেইল</h1>
              </div>
              <h1 className="text-2xl font-semibold mt-5">
                contact@prothomalo.org
              </h1>
              <h1 className="text-2xl font-semibold mt-3">support@prothomalo.com</h1>
              <hr className="w-[600px] text-gray-200 mt-6" />
            </div>
          </div>

          <div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px", }}
            >
              <iframe className="rounded-lg w-[780px] h-[655px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930886732!2d90.25487738629262!3d23.781067235306537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1742751448128!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WithUs;