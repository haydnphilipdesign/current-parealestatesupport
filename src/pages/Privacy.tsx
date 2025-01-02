import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy is important to me"
        backgroundImage="/leaves.jpg"
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
              <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Information Collection</h2>
              <p>I collect information that you provide directly to me, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Transaction-related information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">2. Use of Information</h2>
              <p>I use the collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve my services</li>
                <li>Communicate with you about services</li>
                <li>Respond to your inquiries</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">3. Information Sharing</h2>
              <p>I do not sell or rent your personal information. Information may be shared with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in operations</li>
                <li>Legal authorities when required by law</li>
                <li>Professional partners with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Data Security</h2>
              <p>I implement appropriate security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Secure data storage systems</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Contact Information</h2>
              <p>For privacy-related questions or concerns, please contact me at:</p>
              <div className="mt-2">
                <p>Email: debbie@parealestatesupport.com</p>
                <p>Phone: (570) 588-4637</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Updates to Privacy Policy</h2>
              <p>I may update this privacy policy from time to time. The latest version will always be posted on this page with the effective date.</p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
