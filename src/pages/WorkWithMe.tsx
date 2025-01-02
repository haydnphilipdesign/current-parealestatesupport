import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { 
  Mail, Loader, CheckCircle, X,
  Clock, Users, Award, Briefcase
} from "lucide-react";
import PageHero from "../components/PageHero";
import { RevealSection } from "../components/GlobalAnimations";
import useScrollToTop from "../hooks/useScrollToTop";
import Testimonials from '../components/Testimonials';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const benefits = [
  { id: 1, text: "Maximize your productivity by focusing on client relationships while I manage transaction details" },
  { id: 2, text: "Ensure complete compliance and risk mitigation with expert oversight" },
  { id: 3, text: "Accelerate closings with streamlined, efficient processes" },
  { id: 4, text: "Experience stress-free transactions with proactive problem-solving" },
  { id: 5, text: "Grow your business with more time to pursue new opportunities" },
  { id: 6, text: "Leverage three decades of proven real estate expertise" },
  { id: 7, text: "Receive personalized support tailored to your business model" },
];

const processSteps = [
  {
    id: 1,
    title: "Discovery Meeting",
    description: "We'll explore your business goals and design a customized support strategy",
    icon: Users
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Together, we'll create an action plan aligned with your business objectives",
    icon: Briefcase
  },
  {
    id: 3,
    title: "Seamless Onboarding",
    description: "Experience a smooth transition with our proven integration process",
    icon: Clock
  },
  {
    id: 4,
    title: "Excellence Delivered",
    description: "Start benefiting from professional transaction coordination that elevates your business",
    icon: Award
  }
];

const testimonials = [
  {
    id: 1,
    text: "Working with PA Real Estate Support Services transformed my transaction process. Highly recommended!",
    author: "Sarah Johnson",
    role: "Real Estate Agent"
  },
  {
    id: 2,
    text: "The level of professionalism and attention to detail is outstanding. A game-changer for my business.",
    author: "Michael Chen",
    role: "Broker/Owner"
  },
  {
    id: 3,
    text: "Finally found a reliable partner who truly understands my real estate needs.",
    author: "Emily Rodriguez",
    role: "Team Leader"
  }
];

const WorkWithMe: React.FC = () => {
  useScrollToTop();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{show: boolean; message: string; type: 'success' | 'error'} | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      showToast("Thank you for your interest. I'll get back to you soon.", 'success');
      reset();
    } catch (error) {
      showToast("Something went wrong. Please try again.", 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 right-4 z-50">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between`}
          >
            <span>{toast.message}</span>
            <button 
              onClick={() => setToast(null)}
              className="ml-4 hover:opacity-80"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <PageHero
        title="Partner With Excellence"
        subtitle="Transform Your Real Estate Business"
        backgroundImage="work-with-me-hero.jpg"
        height="medium"
        overlay="gradient"
        alignment="center"
      />

      {/* Value Proposition Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-6">Elevate Your Business Success</h2>
              <p className="text-lg text-gray-600">
                Experience the freedom to grow your business while I handle the intricate details of your transactions. 
                Let's create a partnership that drives your success forward.
              </p>
            </div>
          </RevealSection>
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
            <h2 className="text-4xl font-bold mb-6 text-white">How We Work Together</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We'll work together to create a customized plan that fits your specific needs and goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-blue">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-brand-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Benefits of Working Together
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === benefits.length - 1 && benefits.length % 3 === 1
                    ? 'lg:col-start-2'
                    : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <Testimonials />
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Get Started</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Fill out the form below to get in touch with me and let's discuss how I can help you streamline your transactions.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:outline-none transition-colors"
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm mt-1 block">Required</span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm mt-1 block">Required</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1 block">
                      Valid email required
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-1 block">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 focus:outline-none transition-colors"
                    rows={4}
                    placeholder="Tell me about your needs..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1 block">Required</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-white py-4 rounded-lg font-semibold hover:bg-brand-gold/90 transition-all duration-300 flex items-center justify-center space-x-3 shadow-md hover:shadow-xl disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithMe;
