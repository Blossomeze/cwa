"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Users, Lightbulb, Globe, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountClick = (amount: number) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount(null)
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-2">
                <Heart className="text-blue-700" size={32} />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">Support Our Mission</h1>
              <p className="text-base text-gray-400 mb-8">
                Your donation helps us continue to provide cloud trainings and resources to youths and individuals around the
                world.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-12 lg:px-[5%]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Make a Donation</h2>
                <p className="text-gray-600 mb-8">
                  Your support enables us to continue developing innovative design tools and resources for creators
                  worldwide. Choose an amount below or enter a custom donation.
                </p>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Amount</label>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[25, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountClick(amount)}
                        className={`py-3 px-4 rounded-lg border ${
                          donationAmount === amount
                            ? "border-blue-700 bg-blue-100 text-blue-700"
                            : "border-gray-300 hover:blue-700 hover:bg-[#5D3AEA]/5"
                        } transition-colors`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Personal Information</label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full text-white bg-blue-700 hover:bg-blue-100">
                  Donate Now
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Users,
                      title: "Support Designers",
                      description: "Your donation helps us provide resources and tools to designers worldwide.",
                    },
                    {
                      icon: Lightbulb,
                      title: "Foster Innovation",
                      description:
                        "We&apos;re constantly developing new features and tools to push the boundaries of design.",
                    },
                    {
                      icon: Globe,
                      title: "Build Community",
                      description: "Help us create a global community of designers sharing knowledge and inspiration.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold mb-4">Other Ways to Support</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center text-blue-700 hover:underline">
                        <ArrowRight size={16} className="mr-2" />
                        Become a volunteer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-blue-700 hover:underline">
                        <ArrowRight size={16} className="mr-2" />
                        Partner with us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-blue-700 hover:underline">
                        <ArrowRight size={16} className="mr-2" />
                        Spread the word
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Donors */}
        <section className="py-12 px-[5%] bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Generous Supporters</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re grateful to these individuals and organizations for their generous support of our mission.
              </p>
            </motion.div>

            
             {/* Add quotes here */}
          </div>
        </section>

        {/* Thank You */}
        <section className="w-full bg-[#025fc3] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
              Join Our Community of Supporters
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl">
              Your donation today will help someone access the education they need to transform their career and future.
            </p>
            <motion.a
              href="#donate-now"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#025fc3] shadow transition-colors hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </motion.a>
          </motion.div>
        </div>
      </section>
      </main>
    </>
  )
}

