import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { RevealSection, HoverScale, AnimatedButton } from "./GlobalAnimations";
import { useScrollAnimation } from "./GlobalAnimations";

const AboutOwner = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref, controls, variants } = useScrollAnimation();

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "Real Estate Agent",
      review:
        "Debbie's expertise and professionalism made my transactions seamless. She's become an invaluable partner in my business."
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Property Manager",
      review:
        "Working with Debbie transformed how I handle transactions. Her organizational skills are unmatched."
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Home Buyer",
      review:
        "Debbie's personal attention to detail made my home-buying journey stress-free. She was there every step of the way."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <RevealSection>
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Debbie O'Brien, Your Transaction Coordinator
          </motion.h2>

          {/* Introduction Section */}
          <motion.div 
            className="flex flex-col md:flex-row items-center mb-16"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <HoverScale>
              <img
                src="/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"
                alt="Professional headshot"
                className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0 md:mr-12 shadow-lg"
              />
            </HoverScale>
            <div className="md:w-2/3">
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                With over 30 years of experience in the real estate industry,
                I founded PA Real Estate Support Services, LLC to provide dedicated
                transaction coordination for Keller Williams agents in the Pocono Mountains.
                My passion for efficient real estate processes, personal dedication to
                client satisfaction, and meticulous attention to detail have made me
                a trusted partner to real estate professionals throughout the region.
              </motion.p>
              <motion.ul 
                className="list-disc pl-6 mt-4 text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <li>30+ years of experience in PA real estate</li>
                <li>Organized and detail-oriented</li>
                <li>Excellent at multi-tasking</li>
                <li>Works well with diverse cultures</li>
                <li>Handles public with confidence and sensitivity</li>
              </motion.ul>
            </div>
          </motion.div>

          {/* Testimonials and Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Testimonials */}
            <motion.div 
              className="md:col-span-3 bg-white shadow-xl rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What My Clients Say
              </h3>
              <div className="relative">
                <div className="overflow-hidden">
                  <motion.div
                    className="flex"
                    animate={{ x: `-${currentTestimonial * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {testimonials.map((testimonial) => (
                      <motion.div 
                        key={testimonial.id} 
                        className="w-full flex-shrink-0 px-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <p className="text-gray-600 italic mb-4 text-lg">
                            "{testimonial.review}"
                          </p>
                          <p className="font-semibold text-gray-800">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-500">{testimonial.position}</p>
                          <div className="flex mt-2">
                            {[...Array(5)].map((_, i) => (
                              <AiFillStar key={i} className="text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <AnimatedButton
                  onClick={prevTestimonial}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Previous testimonial"
                >
                  <IoIosArrowBack className="text-gray-600" size={24} />
                </AnimatedButton>
                <AnimatedButton
                  onClick={nextTestimonial}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Next testimonial"
                >
                  <IoIosArrowForward className="text-gray-600" size={24} />
                </AnimatedButton>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <div className="flex flex-col gap-4 mb-8">
                <HoverScale>
                  <a
                    href="mailto:debbie@parealestatesupport.com"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <FaEnvelope className="mr-2" />
                    debbie@parealestatesupport.com
                  </a>
                </HoverScale>
                <HoverScale>
                  <a
                    href="tel:+5705884637"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <FaPhone className="mr-2" />
                    (570) 588-4637
                  </a>
                </HoverScale>
              </div>
              <AnimatedButton className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Schedule a Consultation
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default AboutOwner;
