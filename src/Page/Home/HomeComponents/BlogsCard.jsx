import React, { useEffect, useState } from "react";
import { SiAdobeillustrator } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";

const BlogsCard = ({ selectedCategory, increment, handleCartProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to load products:", error));
  }, []);

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div className="bg-gradient-to-l from-purple-50 to-sky-50">
    <div className="lg:w-9/12 w-11/12 mx-auto py-8">
      <h1 className="text-4xl text-center font-bold my-3 text-[#023e8a]">
        My Blogs
      </h1>
      <h1 className="text-[22px] lg:text-2xl text-center font-medium my-5 text-[#023e8a]">
        Here is some of my recent blogs you'd love to read
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="lg:flex lg:items-center lg:gap-3 rounded-2xl bg-white shadow-lg border border-white hover:border-teal-300 hover:border"
          >
            <div className="w-full lg:w-[330px] h-[274px] lg:h-[174px] rounded-t-2xl lg:rounded-2xl overflow-hidden">
              <img
                className="object-cover w-full h-full duration-1000 ease-in-out hover:scale-110"
                src={product.image}
                alt={product.alttext}
                loading="lazy"
              />
            </div>
            <div className="p-2">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-[#023e8a]">
                  {product.category}
                </h1>
                <FaRegHeart size={22} className="text-[#023e8a]" />
              </div>
              <div className="flex items-center gap-5 lg:gap-3 my-3">
                <p className="text-[#023e8a] text-[18px] lg:text-[16px]">{product.seat}</p>
                <div className="flex items-center gap-7 lg:gap-3">
                  <SiAdobeillustrator className="text-[#023e8a] text-[22px]" />
                </div>
                {/* <div className="flex items-center">
                  <FaReact className="text-[#46bddb]" size={18} lg:size={22} />
                  <RiTailwindCssFill
                    className="text-[#5fcde9]"
                    size={18}
                    lg:size={22}
                  />
                  <FaHtml5 className="text-orange-500" size={18} lg:size={22} />
                </div>*/}
              </div>
              <a
                href={product.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="text-lg w-full btn rounded-xl text-white hover:text-[#48cae4] bg-[#023e8a] hover:bg-white"
                  onClick={() => {
                    increment();
                    handleCartProduct(product);
                  }}
                >
                  👉 Read Now
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogsCard;
