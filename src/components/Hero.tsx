import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ParallaxBackground from './ParallaxBackground';
import Button from './Button';

interface Statistic {
  value: string;
  label: string;
}

const statistics: Statistic[] = [
  { value: '30+', label: 'Years Experience' },
  { value: '2,000+', label: 'Transactions Coordinated' },
  { value: '$500M+', label: 'in Transactions Managed' }
];

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-[800px] h-screen flex items-center justify-center text-white overflow-hidden"
      role="banner"
      aria-label="Welcome to PA Real Estate Support Services"
    >
      <ParallaxBackground
        imageUrl="/leaf-fall.jpg"
        priority={true}
        disableParallax={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Your trusted partner in reliable transaction management
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6 text-shadow italic text-brand-gold font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Empowering Keller Williams agents with expert transaction coordination
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl mb-12 text-shadow max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            Serving the Pocono Mountains with three decades of excellence in real estate transaction support
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Link to="/services" className="w-full sm:w-auto group">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="text-lg transform transition-transform duration-300 group-hover:scale-105"
            >
              Explore My Services
            </Button>
          </Link>
          <Link to="/workwithme" className="w-full sm:w-auto group">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              className="text-lg bg-white/10 backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-105"
            >
              Let's Work Together
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.h3 
                className="text-4xl font-bold mb-2 text-brand-gold"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1.2 + index * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-200 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-4 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        onClick={scrollToContent}
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
