"use client"

import { Marquee } from "@/components/magicui/marquee"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar"
import { motion } from "framer-motion"

type Testimonial = {
  quote: string
  author: string
  handle: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Designor's efficiency in generating code snippets is unmatched. Seamless integration, time-saving.",
    author: "Code Master",
    handle: "@codemaster",
    avatar: "/memoji-avatar-1.png",
  },
  {
    quote: "Designor brings a touch of magic to UX design. Real-time design suggestions and on-the-go creativity?",
    author: "Olivia Reynolds",
    handle: "@oliviareynolds",
    avatar: "/memoji-avatar-2.png",
  },
  {
    quote: "Designor unleashes creativity on a new level. Dynamic content generation in Figma? Yes, please!",
    author: "Creative Mind",
    handle: "@creativemind",
    avatar: "/memoji-avatar-3.png",
  },
  {
    quote: "Designor transformed my workflow with instant suggestions and real-time collaboration. A game-changer!",
    author: "Alex Designs",
    handle: "@alexDesigns",
    avatar: "/memoji-avatar-4.png",
  },
  {
    quote: "Designor understands content creation. A partner that crafts engaging copy, making my content strategy smarter.",
    author: "Marketing Pro",
    handle: "@marketingpro",
    avatar: "/memoji-avatar-5.png",
  },
  {
    quote: "Designor elevates our marketing strategy. Instantly generate compelling copy to enhance campaigns.",
    author: "Lucas Carter",
    handle: "@lucascarter",
    avatar: "/memoji-avatar-4.png",
  },
  {
    quote: "For startups, time is crucial. Designor's speed and efficiency have proven invaluable, allowing rapid iteration.",
    author: "Ava Turner",
    handle: "@avaturner",
    avatar: "/memoji-avatar-3.png",
  },
  {
    quote: "Designor revolutionized my workflow with instant suggestions and real-time collaboration. A game-changer!",
    author: "Tech Enthusiast",
    handle: "@techthusiast",
    avatar: "/memoji-avatar-2.png",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.quote}</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
          <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
        </Avatar>
        <div className="text-left">
          <div className="font-semibold">{testimonial.author}</div>
          <div className="text-sm text-gray-500">{testimonial.handle}</div>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="py-12 overflow-hidden bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            WHAT STUDENTS ARE <span className="text-[#025fc3]">SAYING</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Here's what some of our students have to say about us
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <Marquee
          pauseOnHover
          className="[--duration:30s] py-2 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {testimonials.slice(0, 4).map((testimonial, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[350px] mx-2"
              whileHover={{ scale: 1.02, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </Marquee>

        <Marquee
          pauseOnHover
          className="[--duration:40s] py-4 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          reverse={true}
        >
          {testimonials.slice(4).map((testimonial, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[350px] mx-2"
              whileHover={{ scale: 1.02, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Testimonials
