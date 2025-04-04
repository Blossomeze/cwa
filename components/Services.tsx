import type React from "react"
import { cn } from "@/lib/utils"
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react"

export function Services() {
  const features = [
    {
      title: "Built for cloud engineers",
      description: "Designed for aspiring cloud engineers, AWS enthusiasts, and tech professionals looking to upskill.",
      icon: <IconTerminal2 className="h-6 w-6" />,
    },
    {
      title: "Easy to follow curriculum",
      description: "Our step-by-step learning paths make mastering AWS services as straightforward as possible.",
      icon: <IconEaseInOut className="h-6 w-6" />,
    },
    {
      title: "100% Free resources",
      description: "All our courses and materials are completely free. No hidden fees, no credit card required.",
      icon: <IconCurrencyDollar className="h-6 w-6" />,
    },
    {
      title: "Hands-on AWS practice",
      description: "Get practical experience with real AWS environments and services.",
      icon: <IconCloud className="h-6 w-6" />,
    },
    {
      title: "Multi-cloud knowledge",
      description: "While we focus on AWS, we also cover concepts applicable to other cloud platforms.",
      icon: <IconRouteAltLeft className="h-6 w-6" />,
    },
    {
      title: "24/7 Community Support",
      description: "Join our community of cloud enthusiasts and get help whenever you need it.",
      icon: <IconHelp className="h-6 w-6" />,
    },
    {
      title: "Certification preparation",
      description: "Comprehensive materials to help you prepare for AWS certification exams.",
      icon: <IconAdjustmentsBolt className="h-6 w-6" />,
    },
    {
      title: "Career advancement",
      description: "Build the skills that employers are looking for in cloud professionals.",
      icon: <IconHeart className="h-6 w-6" />,
    },
  ]
  return (
    <section className="w-full bg-white py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose <span className="text-[#025fc3]">CWA</span> Academy
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            We're dedicated to making cloud computing education accessible to everyone
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto bg-white">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-100",
        (index === 0 || index === 4) && "lg:border-l border-gray-100",
        index < 4 && "lg:border-b border-gray-100",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-black">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#025fc3] group-hover/feature:bg-[#025fc3] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#025fc3]">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-500 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  )
}

export default Services

