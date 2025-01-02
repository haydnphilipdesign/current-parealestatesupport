import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import { RevealSection, HoverScale } from "../components/GlobalAnimations";
import { FileSearch, Database, Clock, CheckSquare } from "lucide-react";
import { StaggerContainer, StaggerItem } from "../components/StaggerAnimations";
import useScrollToTop from "../hooks/useScrollToTop";

const services = [
  {
    title: "Transaction Coordination",
    description: "Full-service coordination from contract to closing. I handle all the details, paperwork, and communications, allowing you to focus on growing your business.",
    icon: FileSearch,
  },
  {
    title: "Document Management",
    description: "State-of-the-art digital document handling system ensuring secure, organized, and instant access to all your transaction files and important paperwork.",
    icon: Database,
  },
  {
    title: "Timeline Management",
    description: "Strategic oversight of critical dates and deadlines. I keep your transactions on track with proactive monitoring and timely updates at every milestone.",
    icon: Clock,
  },
  {
    title: "Compliance Review",
    description: "Comprehensive compliance checks and documentation review. Rest assured knowing your transactions meet all regulatory requirements and industry standards.",
    icon: CheckSquare,
  },
];

const Services: React.FC = () => {
  useScrollToTop();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Transaction Coordination Services"
        subtitle="Streamlining Your Real Estate Success"
        backgroundImage="service-hero.jpg"
        height="medium"
        overlay="gradient"
        alignment="center"
      />

      {/* Services Overview Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-brand-blue">Comprehensive Support Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Elevating your real estate business with expert transaction coordination and seamless process management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-gold/10 rounded-lg">
                      <Icon className="w-8 h-8 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Your Success Journey</h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Experience a meticulously crafted process designed for seamless transactions and optimal results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: FileSearch, 
                title: "Comprehensive Review", 
                desc: "Expert analysis of contracts and documentation to ensure accuracy and completeness" 
              },
              { 
                icon: Database, 
                title: "Strategic Setup", 
                desc: "Creation of customized transaction timeline and systematic file organization" 
              },
              { 
                icon: Clock, 
                title: "Proactive Management", 
                desc: "Vigilant oversight of deadlines, tasks, and communications to prevent delays" 
              },
              { 
                icon: CheckSquare, 
                title: "Successful Completion", 
                desc: "Thorough closing process management and secure documentation archival" 
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="p-3 bg-brand-gold/10 rounded-lg inline-block mb-4">
                    <Icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <RevealSection>
        <div className="bg-white py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-brand-blue">Transform Your Business Today</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Take the first step towards streamlined transactions and enhanced productivity
              </p>
              <Link
                to="/work-with-me"
                className="inline-block bg-brand-gold text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-gold/90 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};

export default Services;
