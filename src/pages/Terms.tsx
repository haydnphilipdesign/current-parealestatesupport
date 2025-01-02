import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Terms of Service"
        subtitle="Important information about my services"
        backgroundImage="/mike-ralph-DfOc_dl9ILo-unsplash.jpg"
        height="small"
        overlay="gradient"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using my services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use my services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">2. Services Description</h2>
              <p>I provide real estate transaction coordination and support services, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Transaction coordination</li>
                <li>Document management</li>
                <li>Timeline tracking</li>
                <li>Communication facilitation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">3. User Responsibilities</h2>
              <p>As a user of my services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the services in a professional manner</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Payment Terms</h2>
              <p>My payment terms include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service fees are due upon completion of each transaction</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Late payments may incur additional charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Limitation of Liability</h2>
              <p>I shall not be liable for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Third-party actions or omissions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Modifications to Terms</h2>
              <p>I reserve the right to modify these terms at any time. Continued use of my services after such modifications constitutes acceptance of the updated terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact me at:</p>
              <div className="mt-2">
                <p>Email: debbie@parealestatesupport.com</p>
                <p>Phone: (570) 588-4637</p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;
