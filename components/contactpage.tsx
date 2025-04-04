"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Twitter, Instagram, Linkedin, Facebook } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <main className="min-h-screen flex flex-col">
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
              Get in <span className="text-[#025fc3]">Touch</span>
            </h1>
            <p className="text-base text-gray-600 mb-8">
              Have questions about our courses, interested in partnerships, or want to join our team? We&apos;d love to hear
              from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg mb-6"
                >
                  Thank you for your message! We&apos;ll get back to you soon.
                </motion.div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#025fc3] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#025fc3] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#025fc3] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="Course Question">Course Question</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Careers">Careers</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#025fc3] focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-[#025fc3] text-white font-medium rounded-lg shadow-sm hover:bg-[#0247a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#025fc3] disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-[#025fc3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Cloud Street, Tech District
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-[#025fc3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+14155552671" className="hover:text-[#025fc3]">
                        +1 (415) 555-2671
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-[#025fc3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@cloudskill.academy" className="hover:text-[#025fc3]">
                        contact@cloudskill.academy
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-[#025fc3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-[#025fc3] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-[#025fc3] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-[#025fc3] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-[#025fc3] hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

