import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Logo from '/logo-flat.png';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/parealestatesupport', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/parealestatesupport', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/parealestatesupport', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work With Me', path: '/workwithme' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white relative will-change-transform">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.02)_100%)]" />
        <div className="absolute inset-0 bg-grid-gray-500/[0.02] bg-[length:32px_32px]" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={Logo} alt="PA Real Estate Support Services" className="h-12 md:h-16" />
            </Link>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Professional transaction coordination services for Keller Williams agents in the Pocono Mountains.
              Let us handle the details while you focus on growing your business.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-gold opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-white relative z-10 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm md:text-base text-gray-600 hover:text-brand-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6 md:mt-8">Legal</h3>
            <ul className="space-y-2 md:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm md:text-base text-gray-600 hover:text-brand-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-brand-gold mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="tel:+5705884637"
                  className="flex items-center text-sm md:text-base text-gray-600 hover:text-brand-blue transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-brand-gold" />
                  (570) 588-4637
                </a>
              </li>
              <li>
                <a
                  href="mailto:debbie@parealestatesupport.com"
                  className="flex items-center text-sm md:text-base text-gray-600 hover:text-brand-blue transition-colors duration-300 break-all"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-brand-gold flex-shrink-0" />
                  debbie@parealestatesupport.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-sm md:text-base text-gray-600">
            &copy; {new Date().getFullYear()} PA Real Estate Support Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
