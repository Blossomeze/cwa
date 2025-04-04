"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <div className="space-y-8">
      {/* Newsletter Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with <span className="text-[#025fc3]">New Resources</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive notifications when we publish new video tutorials, guides, and
              resources to help you on your cloud journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#025fc3] focus:border-transparent outline-none"
              />
              <motion.button
                className="px-6 py-3 rounded-md bg-[#025fc3] text-white font-medium hover:bg-[#0247a3] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Launch Your <span className="text-[#025fc3]">Cloud Career</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              Join thousands of students who have transformed their careers with our free AWS training. Start learning
              today and take the first step toward becoming a cloud professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#025fc3] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0247a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#025fc3]"
              >
                Start Learning Free
              </Link>
              <Link
                href="#courses"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white border border-gray-200 px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

