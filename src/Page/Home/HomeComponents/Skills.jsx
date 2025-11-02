import React, { useEffect, useState } from "react";

const Skills = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to load products:", error));
  }, []);

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  return (
    <>
      <div className="bg-gradient-to-l from-purple-50 to-sky-50">
        <div className="w-11/12 lg:w-9/12 mx-auto py-4">
          <h1 className="text-4xl text-center font-bold my-2 text-[#023e8a]">
            My Skills
          </h1>
          <h1 className="text-2xl lg:text-center font-medium my-6 text-[#023e8a]">
            I give services in Frontend Development, having proficiency in-
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-between text-[#023e8a] py-3 gap-4">
            {filteredProducts.map((product) => (
              <div class="relative">
                <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#023e8a] via-[#48cae4] to-[#caf0f8] opacity-15 lg:opacity-75 blur"></div>
                <div class="h-[8em] w-[170px] lg:w-[216px] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
                  <div class="circle absolute h-[5em] w-[5em] -bottom-[2.5em] -right-[2.5em] rounded-full bg-sky-300 group-hover:scale-[800%] duration-500 z-[-1] op"></div>
                  <h1 class="z-20 font-semibold font-Poppin group-hover:text-white duration-500 text-[19px] lg:text-[25px]">
                    {product.skill}
                  </h1>
                  <img
                    className="w-[67px] group-hover:text-white text-sky-400 mt-2"
                    src={product.image}
                    alt={product.alttext} loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
