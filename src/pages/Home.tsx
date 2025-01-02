"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import Statistics from '../components/Statistics';
import ContactSection from '../components/ContactSection';
import { Preloader } from '../components/Preloader';
import Testimonials from '../components/Testimonials';

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  }
};

const sectionVariants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(() => {
    // Check if we've already loaded the home page before
    const hasVisitedHome = sessionStorage.getItem('hasVisitedHome');
    return !hasVisitedHome;
  });

  React.useEffect(() => {
    if (isLoading) {
      // Shorter loading time (1 second)
      setTimeout(() => {
        setIsLoading(false);
        // Mark that we've visited the home page
        sessionStorage.setItem('hasVisitedHome', 'true');
      }, 1000);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          className="min-h-screen overflow-hidden"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          {/* Hero section with parallax effect */}
          <motion.div variants={sectionVariants}>
            <Hero />
          </motion.div>

          {/* Other sections with scroll-triggered animations */}
          <motion.div
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            initial="initial"
          >
            <AboutSection />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            initial="initial"
          >
            <ServicesOverview />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            initial="initial"
          >
            <Testimonials />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            initial="initial"
          >
            <Statistics />
          </motion.div>

          <motion.div
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="animate"
            initial="initial"
          >
            <ContactSection />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;