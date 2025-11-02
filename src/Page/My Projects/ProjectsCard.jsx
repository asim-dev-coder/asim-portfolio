import React, { useEffect, useState } from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const ProjectsCard = ({ selectedCategory, increment, handleCartProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to load products:", error));
  }, []);

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto py-8">
      <h1 className="text-4xl text-center font-bold my-3 text-[#023e8a]">
        My Projects
      </h1>
      <h1 className="text-[22px] lg:text-2xl text-center font-medium my-5 text-[#023e8a]">
        Here is some of my recent projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl shadow-lg border border-white hover:border-teal-300 hover:border-1"
          >
            <div className="w-full h-[274px] rounded-t-2xl overflow-hidden">
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
                  <FaReact className="text-[#46bddb] text-[22px]" />
                  <RiTailwindCssFill className="text-[#5fcde9] text-[22px]" />
                  <FaHtml5 className="text-orange-500 text-[22px]" />
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
                  👉 Live Preview
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
