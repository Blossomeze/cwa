import { Check } from "lucide-react"
import Link from "next/link"

export default function Curriculum() {
  const courses = [
    {
      title: "AWS Cloud Foundations",
      level: "Beginner",
      duration: "4 weeks",
      description: "Start your cloud journey with the fundamentals of AWS services and cloud computing concepts.",
      topics: [
        "Introduction to Cloud Computing",
        "AWS Global Infrastructure",
        "Identity and Access Management (IAM)",
        "Virtual Private Cloud (VPC)",
        "EC2 and S3 Basics",
      ],
    },
    {
      title: "AWS Solutions Architect",
      level: "Intermediate",
      duration: "8 weeks",
      description: "Learn to design and deploy scalable, highly available systems on AWS.",
      topics: [
        "High Availability Architecture",
        "Multi-tier Applications",
        "Serverless Architecture",
        "Database Services",
        "Security Best Practices",
      ],
    },
    {
      title: "DevOps on AWS",
      level: "Advanced",
      duration: "6 weeks",
      description: "Master the tools and practices for implementing DevOps on AWS.",
      topics: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Containerization with ECS and EKS",
        "Monitoring and Logging",
        "Automation with AWS Services",
      ],
    },
  ]

  return (
    <section className="w-full bg-white py-12" id="courses">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our <span className="text-[#025fc3]">Free</span> AWS Curriculum
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive learning paths designed to take you from beginner to AWS certified professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full hover:border-[#025fc3]/20"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#025fc3] transition-colors duration-200">{course.title}</h3>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="px-2.5 py-1 text-xs font-medium bg-blue-50 text-[#025fc3] rounded-full">
                        {course.level}
                      </span>
                      <span className="text-sm text-gray-500">{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start group/item">
                      <Check className="h-5 w-5 text-[#025fc3] mr-2 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                      <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-200">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center justify-center rounded-md bg-[#025fc3] px-4 py-2.5 text-sm font-medium text-white shadow transition-all duration-200 hover:bg-[#0247a3] hover:shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#025fc3] w-full"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-md bg-white border border-gray-200 px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 transition-colors duration-200"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

