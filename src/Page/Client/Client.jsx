import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Client = () => {
    const testimonials = [
        {
            id: 1,
            name: 'The Rodriguez Family',
            role: 'Google Software Engineer',
            content: 'I\'m satisfied with his service, you can rely him on .',
            avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
            rating: 5,
            stayDate: 'July 2024'
        },
                {
            id: 2,
            name: 'Michael Chen',
            role: 'Meta Backend Developer',
            content: 'I know Assim for couple of years. He is a good developer, having expertise in React JS',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4,
            stayDate: 'March 2024'
        },
        {
            id: 3,
            name: 'Sarah Johnson',
            role: 'Amazon Software Engineer',
            content: 'Assim is a pro developer. Every time I took services from him,  I\'ve been satisfied',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5,
            stayDate: 'May 2024'
        },
        {
            id: 4,
            name: 'Emily & David Wilson',
            role: 'Microsoft Data Analysts',
            content: 'Take service from Assim and you won\'t be disappointed. He\'s also active in online coding forum',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            rating: 5,
            stayDate: 'June 2024'
        },
        {
            id: 5,
            name: 'James Peterson',
            role: 'Meta Frontend Developer',
            content: 'Assim is one of the best Javascript developer, he is quite helpful too',
            avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
            rating: 5,
            stayDate: 'April 2024'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className='bg-gradient-to-r from-purple-50 to-sky-50'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-8 text-4xl text-[#023e8a]'>
                <h1 className='text-4xl text-center font-bold my-3 text-[#023e8a]'>Clients' Riview
                </h1>
                <h1 className='text-2xl text-center font-medium my-4 text-[#023e8a]'>What my clients say about me
                </h1>
                <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
                    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="relative h-[470px] md:h-96  ">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={testimonials[currentIndex].id}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 p-8 md:p-12 flex flex-col"
                                >
                                    <div className="flex flex-col items-center ">
                                        <img
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#023e8a]"
                                        />
                                        <div className="text-center">
                                            <p className="text-lg font-semibold text-[#023e8a]">
                                                {testimonials[currentIndex].name}
                                            </p>
                                            <p className="text-[#023e8a]">
                                                {testimonials[currentIndex].role}
                                            </p>
                                            <p className="text-sm text-gray-500 my-1">
                                                {testimonials[currentIndex].stayDate}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex my-2 justify-center">
                                        {renderStars(testimonials[currentIndex].rating)}
                                    </div>
                                    <blockquote className="text-xl md:text-2xl font-medium text-[#023e8a] flex-grow text-center italic">
                                        "{testimonials[currentIndex].content}"
                                    </blockquote>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        {/* Navigation */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 ">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-[#023e8a]' : 'bg-gray-300'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#023e8a] hover:bg-[#caf0f8] transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-[#023e8a] hover:bg-[#caf0f8] transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;



