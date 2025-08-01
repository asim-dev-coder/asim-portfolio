import React, { useEffect, useState } from 'react'
import { WiTime3 } from "react-icons/wi";
import { Link } from 'react-router-dom';

function TopSection({ categorieName }) {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch("/trade.json")
      .then(res => res.json())
      .then(data => setCourses(data)
      )
  }, [])

  const filterByCategory = categorieName ? courses.filter(course => course.category === categorieName) : courses;
  return (
    <div className='w-1/2'>
      <div className='grid gap-y-4'>
        {
          filterByCategory.map((course, index) => (
            <div className=' scroll-auto' key={index}>
              <div className="block md:flex md:space-x-2 px-2 lg:p-0">
                <a
                  className="mb-4 md:mb-0 w-full md:w-2/3 h-24em relative rounded inline-block"
                  // style="height: ;"
                  href="#"
                >
                  <img src={course.image} className="absolute w-full h-full rounded object-cover" />
                  <div className="p-4 absolute bottom-0 left-0 z-20">
                    <span className="px-4 py-1 bg-[#ee4023] text-gray-200 inline-flex items-center justify-center mb-2">{course.type}</span>
                    <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                      {course.title}
                    </h2>
                    <div className="flex mt-3">
                      <div>
                        <p className="font-semibold text-gray-200 text-sm">{course.correspondent}</p>
                        <p className="font-semibold text-gray-400 text-xs">{course.dateplace}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* <div className='mb-2'>
                <img className='rounded-xl' src={course.image} alt={course.title} />
              </div>
              <div>
                <h1 className='text-base/6 font-semibold'>{course.title}</h1>
                <div className='lg:flex lg:items-center xl:flex xl:items-center gap-3 mt-2'>
                  <div className='flex items-center gap-1'>
                    <WiTime3 className='text-sky-400' size={25} />
                    <h5 className='text-sm text-gray-500 my-3'>{course.duration}</h5>
                  </div>
                  <Link to={`/tradedetails/${course.id}`}><button className='btn rounded-xl px-2 outline-none  bg-white border-gray-400 text-gray-600 text-sm hover:text-white hover:bg-rose-500 hover:border-none'>বিস্তারিত পড়ুন
                  </button></Link>
                </div>
              </div> */}
              <hr className='text-gray-300 mt-5' />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopSection;