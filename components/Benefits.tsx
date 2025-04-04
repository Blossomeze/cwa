"use client"

import { motion } from "framer-motion"
import { SmileIcon as Peace, Send, Maximize2, Zap, CheckSquare, Palette, Headphones, Heart } from "lucide-react"

const benefits = [
  {
    title: "Affordability",
    description: "Access high-quality design services at a fraction of traditional costs.",
    icon: Peace,
  },
  {
    title: "Consistency",
    description: "Ensure a consistent brand identity with regular design output.",
    icon: Send,
  },
  {
    title: "Scalability",
    description: "Access high-quality design services at a fraction of traditional costs.",
    icon: Maximize2,
  },
  {
    title: "Speed",
    description:
      "Get quicker turnarounds on design projects without sacrificing quality at a way better price on your wallet.",
    icon: Zap,
  },
  {
    title: "Flexibility",
    description: "Adapt the service to cover a wide range of design tasks as needed.",
    icon: CheckSquare,
  },
  {
    title: "Diversity",
    description:
      "Access to a variety of styles and expertise from a pool of creative professionals and people around the world.",
    icon: Palette,
  },
  {
    title: "Support",
    description: "Enjoy dedicated customer service and revisions to perfect your designs.",
    icon: Headphones,
  },
  {
    title: "Convenience",
    description: "Streamline the design process with a simple workflow and process.",
    icon: Heart,
  },
]

export default function Benefits() {
  return (
    <section className="py-12 px-4 bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-center text-sm font-medium text-gray-600 mb-2"
        >
          Benefits
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold text-center mb-8"
        >
          Here are a few things we do that <br/>
          others really just don&apos;t.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg"
            >
              <benefit.icon className="w-6 h-6 mb-4 text-gray-900" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

