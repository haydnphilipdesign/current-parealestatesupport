import React from "react";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import CoreValues from '../components/CoreValues';
import { RevealSection, HoverScale } from '../components/GlobalAnimations';
import OptimizedImage from '../components/OptimizedImage';
import useScrollToTop from "../hooks/useScrollToTop";

const AboutMe: React.FC = () => {
  useScrollToTop();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Meet Your Transaction Expert"
        subtitle="Three Decades of Real Estate Excellence"
        backgroundImage="andrea-merovich-SlxrBPYAdAE-unsplash.jpg"
        height="medium"
        overlay="gradient"
        alignment="center"
      />

      {/* Professional Profile Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-b from-white via-gray-50/50 to-white transition-colors duration-500">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative">
                  <HoverScale>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl transform rotate-3 transition-transform duration-300"></div>
                      <OptimizedImage
                        src="/debbie.jpg"
                        alt="Debbie O'Brien - Professional Transaction Coordinator"
                        className="relative rounded-2xl shadow-lg w-full aspect-square object-cover"
                      />
                    </div>
                  </HoverScale>
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-2xl font-bold text-brand-gold">30+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </motion.div>
                </div>
                <div>
                  <RevealSection>
                    <h2 className="text-3xl font-bold mb-6 text-brand-blue">Dedicated to Your Success</h2>
                    <p className="text-gray-600 mb-6">
                      With over three decades of expertise in real estate transaction coordination, I bring unparalleled experience and dedication to every client relationship. My journey in the Pocono Mountains real estate market has equipped me with deep insights and proven strategies to navigate even the most complex transactions.
                    </p>
                    <p className="text-gray-600 mb-6">
                      As your transaction coordinator, I combine meticulous attention to detail with a passion for excellence, ensuring each deal moves forward smoothly and efficiently. My commitment goes beyond just managing paperwork – I'm here to be your trusted partner in success.
                    </p>
                  </RevealSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Professional Journey</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Three decades of dedication to excellence in real estate
            </p>
          </motion.div>
          <Timeline />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white">
        <CoreValues />
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Work Together?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Let's discuss how my experience and values can help streamline your real estate transactions.
            </p>
            <Link
              to="/workwithme"
              className="inline-block bg-brand-gold text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold/90 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
