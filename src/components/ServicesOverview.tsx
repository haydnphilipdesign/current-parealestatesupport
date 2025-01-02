import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFileContract, FaHandshake, FaClock } from 'react-icons/fa';

const services = [
  {
    icon: FaFileContract,
    title: 'Expert Transaction Coordination',
    description: 'Comprehensive management of your real estate transactions with meticulous attention to every detail from contract to closing.',
  },
  {
    icon: FaHandshake,
    title: 'Personalized Agent Support',
    description: 'Dedicated assistance tailored to your unique business needs, helping you focus on client relationships and growth.',
  },
  {
    icon: FaClock,
    title: 'Strategic Timeline Management',
    description: 'Proactive oversight of deadlines and milestones, ensuring smooth progression and timely closings.',
  },
  {
    icon: FaCheckCircle,
    title: 'Complete Compliance Assurance',
    description: 'Thorough review and verification to ensure all transactions meet current regulatory requirements and industry standards.',
  },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Elevate Your Real Estate Business
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Experience seamless transaction management that empowers you to grow your business while ensuring every detail is handled with precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-brand-blue rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-brand-gold/20 to-brand-blue/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <service.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-blue transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-blue/80">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
