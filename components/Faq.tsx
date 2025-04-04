"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What is Cloud With Anne (CWA) Academy?",
      answer:
        "CWA Academy is a well-structured 12-week program designed to help Africans build a career in cloud engineering from scratch, learn the necessary skills and increase their earning potential. We offer hands-on projects, mentorship, working in teams and a supportive community to help you succeed in the cloud computing industry.",
    },
    {
      question: "Who is this program for?",
      answer:
        "Our program is ideal for Africans who are beginners, with or without prior tech experience. Whether you're just starting out, our program provides the knowledge and hands-on training you need to succeed",
    },
    {
      question: "What will I learn at CWA Academy? ",
      answer:
        "You'll gain diverse cloud engineering skills, from cloud basics to AWS services, Terraform for infrastructure as code, Bash scripting and more. The program combines theoretical insights with practical projects that reflect real-world applications.",
    },
    {
      question: "How are the courses delivered?",
      answer:
        "Courses are delivered through a combination of live classes,, hands-on labs, assessments, and project. Learners can access the recordings and revisit materials as needed.",
    },
    {
      question: "Is there any support available for learners?",
      answer:
        "Yes, learners can access support through our community, live mentorship sessions and friendly support from instructors. There are also resources like learning in teams and additional reading materials.",
    },
    {
      question: "Do the courses offer any certification?",
      answer:
        "Yes, upon completing certain courses, learners can receive certificates of completion. Additionally, some courses are designed to help learners prepare for industry-recognized certifications like AWS Certified Cloud Practitioner and AWS Certified Solutions Architect",
    },
  ];

  return (
    <section className="w-full bg-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked <span className="text-[#025fc3]">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Everything you need to know about CloudSkill Academy and our free AWS training
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
        <ChevronDown
          className={cn("h-5 w-5 text-[#025fc3] transition-transform duration-200", isOpen && "transform rotate-180")}
        />
      </button>
      <div className={cn("mt-2 overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}>
        <p className="text-gray-600">{faq.answer}</p>
      </div>
    </div>
  )
}

