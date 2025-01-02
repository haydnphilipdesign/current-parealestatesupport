import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Target, Users, Clock, Award } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './GlobalAnimations';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Maintaining the highest standards of professional ethics and transparency in every transaction.'
  },
  {
    icon: Heart,
    title: 'Dedication',
    description: 'Committed to providing exceptional service and support to every client.'
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail ensures accuracy in all transaction documentation.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Building lasting relationships with agents and clients through trust and collaboration.'
  },
  {
    icon: Clock,
    title: 'Efficiency',
    description: 'Streamlining processes to save time while maintaining quality.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: '30+ years of experience delivering outstanding results in real estate coordination.'
  }
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-indigo-50/50 to-purple-50/50 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-brand-blue">My Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            These principles guide every interaction and transaction, ensuring consistent quality and reliability in my services.
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-brand-gold/10 p-3.5 rounded-xl">
                    <value.icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-blue pt-2">{value.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">{value.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div 
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 italic text-lg leading-relaxed">
            "Your success is my commitment - not just a promise, but my daily practice."
          </p>
          <p className="text-brand-blue font-semibold mt-4 text-lg">- Debbie O'Brien</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
