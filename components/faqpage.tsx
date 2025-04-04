"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Cloud With Anne (CWA) Academy?",
    answer:
      "CWA Academy is a well-structured 12-week program designed to help Africans build a career in cloud engineering from scratch, learn the necessary skills and increase their earning potential. We offer hands-on projects, mentorship, working in teams and a supportive community to help you succeed in the cloud computing industry.",
    category: "Getting Started",
  },
  {
    question: "Who is this program for?",
    answer:
      "Our program is ideal for Africans who are beginners, with or without prior tech experience. Whether you&apos;re just starting out, our program provides the knowledge and hands-on training you need to succeed",
    category: "Value",
  },
  {
    question: "What will I learn at CWA Academy? ",
    answer:
      "You&apos;ll gain diverse cloud engineering skills, from cloud basics to AWS services, Terraform for infrastructure as code, Bash scripting and more. The program combines theoretical insights with practical projects that reflect real-world applications.",
    category: "Value",
  },
  {
    question: "How are the courses delivered?",
    answer:
      "Courses are delivered through a combination of live classes,, hands-on labs, assessments, and project. Learners can access the recordings and revisit materials as needed.",
    category: "Value",
  },
  {
    question: "Is there any support available for learners?",
    answer:
      "Yes, learners can access support through our community, live mentorship sessions and friendly support from instructors. There are also resources like learning in teams and additional reading materials.",
    category: "Support",
  },
  {
    question: "Do the courses offer any certification?",
    answer:
      "Yes, upon completing certain courses, learners can receive certificates of completion. Additionally, some courses are designed to help learners prepare for industry-recognized certifications like AWS Certified Cloud Practitioner and AWS Certified Solutions Architect",
    category: "Services",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null | undefined>(null);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const filteredFaqs = activeCategory
    ? faqs.filter((faq) => faq.category === activeCategory)
    : faqs;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Hero Section */}
      <section className="py-12 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              Still have questions?
            </h1>
            <p className="text-base text-gray-400 mb-8">
              Find quick answers to commonly asked questions about our services.
              Have a question not listed? Feel free to contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === null
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => {
                    if (category) {
                      setActiveCategory(category);
                    }
                  }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatePresence>
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12"
              >
                <p className="text-gray-500">No FAQs found in this category.</p>
              </motion.div>
            ) : (
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    layout
                  >
                    <motion.button
                      className="w-full px-6 py-5 text-left flex justify-between items-center"
                      onClick={() => toggleFAQ(index)}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.01)" }}
                      whileTap={{ backgroundColor: "rgba(0,0,0,0.03)" }}
                    >
                      <span className="font-medium text-base">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="text-blue-600"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.25, delay: 0.15 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.25 },
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-2">Still Need Help?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              If you couldn&apos;t find the answer to your question, our support team
              is here to help. Reach out to us through any of the channels
              below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">
                Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@example.com"
                className="text-blue-600 font-medium hover:underline"
              >
                support@example.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">
                Available Monday to Friday, 9am to 5pm EST.
              </p>
              <a
                href="tel:+1234567890"
                className="text-blue-600 font-medium hover:underline"
              >
                +1 (234) 567-890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-gray-500 mb-4">
                Chat with our support team in real-time.
              </p>
              <button className="text-blue-600 font-medium hover:underline">
                Start a conversation
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
