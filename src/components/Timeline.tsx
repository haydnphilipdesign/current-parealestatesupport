import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaBook, FaBuilding, FaChartLine, FaHandshake } from "react-icons/fa";

// Define the event type
interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  icon: JSX.Element;
}

// Define your events data
const events: TimelineEvent[] = [
  {
    id: 1,
    title: "Graduated from Kittatinny Regional High School",
    date: "1984",
    description: "Hampton, NJ",
    category: "education",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Closing Administrator at Associates Abstract, Inc.",
    date: "1985-1989", 
    description: "Hawley, PA",
    category: "early career",
    icon: <FaBriefcase />,
  },
  {
    id: 3,
    title: "Office Manager at MAC Mortgage Co., Inc.",
    date: "1989-1991",
    description: "Greentown, PA", 
    category: "mortgage industry",
    icon: <FaBuilding />,
  },
  {
    id: 4,
    title: "Bookkeeper/Secretary at John C. Ernst Company",
    date: "1998-2000",
    description: "Dover, NJ",
    category: "diversifying experience",
    icon: <FaBriefcase />,
  },
  {
    id: 5,
    title: "Office Manager at Pocono Builders Association",
    date: "2000-2005",
    description: "East Stroudsburg, PA",
    category: "real estate development",
    icon: <FaBuilding />,
  },
  {
    id: 6,
    title: "Obtained PA Real Estate License",
    date: "2005",
    description: "Pocono Real Estate Academy",
    category: "professional development",
    icon: <FaBook />,
  },
  {
    id: 7,
    title: "Closing Administrator at Fidelity Home Abstract, Inc.",
    date: "2005-2006",
    description: "East Stroudsburg, PA",
    category: "title industry",
    icon: <FaBriefcase />,
  },
  {
    id: 8,
    title: "Transaction Coordinator, Compliance Review Officer",
    date: "2006-2013",
    description: "Keller Williams Real Estate, Stroudsburg, PA",
    category: "real estate brokerage",
    icon: <FaHandshake />,
  },
  {
    id: 9,
    title: "Owner/President, PA Real Estate Support Services",
    date: "2013-Present",
    description: "Providing exceptional transaction coordination services in Bushkill, PA",
    category: "entrepreneurship",
    icon: <FaChartLine />,
  },
];

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-16" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200" />
        
        {/* Timeline events */}
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className={`relative mb-12 ${
              index % 2 === 0 ? 'pr-1/2' : 'pl-1/2 ml-auto'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <div className="flex items-center gap-2 text-indigo-600 font-bold mb-2">
                  <span className="text-xl">{event.icon}</span>
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
                <div className="mt-2">
                  <span className="text-xs text-gray-500 capitalize">{event.category}</span>
                </div>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
