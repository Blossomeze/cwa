"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Filter, Search, BookOpen, Server, Database, Shield, Code, ChevronDown } from "lucide-react"
import Image from "next/image"

type VideoCategory = "all" | "aws-basics" | "solutions-architect" | "devops" | "security" | "serverless"

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  category: VideoCategory
  duration: string
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All Videos", icon: <BookOpen className="h-5 w-5" /> },
    { id: "aws-basics", name: "AWS Basics", icon: <BookOpen className="h-5 w-5" /> },
    { id: "solutions-architect", name: "Solutions Architect", icon: <Server className="h-5 w-5" /> },
    { id: "devops", name: "DevOps", icon: <Code className="h-5 w-5" /> },
    { id: "security", name: "Security", icon: <Shield className="h-5 w-5" /> },
    { id: "serverless", name: "Serverless", icon: <Database className="h-5 w-5" /> },
  ]

  const videos: Video[] = [
    {
      id: "video1",
      title: "AWS Fundamentals: Getting Started with the Basics",
      description:
        "Learn the core concepts of AWS cloud computing, including EC2, S3, and IAM. Perfect for beginners who want to understand the AWS ecosystem.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "aws-basics",
      duration: "32:15",
    },
    {
      id: "video2",
      title: "Setting Up Your First EC2 Instance",
      description:
        "A step-by-step guide to launching and configuring your first EC2 instance. Learn about instance types, security groups, and SSH access.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "aws-basics",
      duration: "24:45",
    },
    {
      id: "video3",
      title: "S3 Storage Solutions: Best Practices",
      description:
        "Dive deep into Amazon S3 storage classes, lifecycle policies, and security configurations to optimize your cloud storage strategy.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "aws-basics",
      duration: "41:20",
    },
    {
      id: "video4",
      title: "AWS Solutions Architect: Designing Resilient Architectures",
      description:
        "Learn how to design highly available and fault-tolerant architectures using AWS services like Auto Scaling, Load Balancing, and Multi-AZ deployments.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "solutions-architect",
      duration: "55:30",
    },
    {
      id: "video5",
      title: "Database Solutions on AWS: RDS vs DynamoDB",
      description:
        "Compare relational and NoSQL database options on AWS. Understand when to use Amazon RDS and when DynamoDB is the better choice.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "solutions-architect",
      duration: "38:15",
    },
    {
      id: "video6",
      title: "CI/CD Pipeline with AWS CodePipeline",
      description:
        "Build a complete CI/CD pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy to automate your software delivery process.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "devops",
      duration: "47:50",
    },
    {
      id: "video7",
      title: "Infrastructure as Code with CloudFormation",
      description:
        "Learn how to define your AWS infrastructure using CloudFormation templates for consistent, version-controlled deployments.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "devops",
      duration: "51:25",
    },
    {
      id: "video8",
      title: "AWS Security Best Practices",
      description:
        "Implement security best practices for your AWS environment, including IAM policies, security groups, and encryption strategies.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "security",
      duration: "43:10",
    },
    {
      id: "video9",
      title: "Serverless Applications with AWS Lambda",
      description:
        "Build serverless applications using AWS Lambda, API Gateway, and DynamoDB. Learn the event-driven architecture pattern.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "serverless",
      duration: "49:30",
    },
    {
      id: "video10",
      title: "AWS Lambda: Advanced Patterns and Practices",
      description:
        "Take your serverless skills to the next level with advanced Lambda patterns, including custom runtimes, layers, and performance optimization.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "serverless",
      duration: "58:15",
    },
    {
      id: "video11",
      title: "Securing Your AWS Environment",
      description:
        "Comprehensive guide to securing your AWS environment using AWS Security Hub, GuardDuty, and IAM Access Analyzer.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "security",
      duration: "52:40",
    },
    {
      id: "video12",
      title: "Containerization with Amazon ECS and EKS",
      description:
        "Learn how to deploy containerized applications using Amazon ECS and EKS. Compare container orchestration options on AWS.",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      category: "devops",
      duration: "45:20",
    },
  ]

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = activeCategory === "all" || video.category === activeCategory
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleVideoExpansion = (videoId: string) => {
    if (expandedVideo === videoId) {
      setExpandedVideo(null)
    } else {
      setExpandedVideo(videoId)
    }
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
              Free AWS <span className="text-[#025fc3]">Video Resources</span>
            </h1>
            <p className="text-base text-gray-600 mb-8">
              Enhance your cloud learning journey with our curated collection of AWS tutorial videos. From beginner
              concepts to advanced architectures, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <motion.div
              className="flex flex-wrap gap-2 w-full md:w-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center mr-2">
                <Filter className="h-5 w-5 text-[#025fc3] mr-1" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm ${
                    activeCategory === category.id
                      ? "bg-[#025fc3] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveCategory(category.id as VideoCategory)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1.5">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="relative w-full md:w-64"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#025fc3] focus:border-transparent"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Grid Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredVideos.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg text-gray-600">
                No videos found matching your criteria. Try adjusting your filters.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                >
                  <div className="relative">
                    <div className="aspect-video w-full relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="bg-white bg-opacity-90 rounded-full p-3"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="h-8 w-8 text-[#025fc3]" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{video.title}</h3>
                    </div>

                    <div className="mb-3">
                      <span className="inline-block bg-blue-50 text-[#025fc3] text-xs px-2 py-1 rounded-full">
                        {categories.find((c) => c.id === video.category)?.name || video.category}
                      </span>
                    </div>

                    <p className={`text-gray-600 text-sm ${expandedVideo === video.id ? "" : "line-clamp-2"}`}>
                      {video.description}
                    </p>

                    {video.description.length > 100 && (
                      <button
                        onClick={() => toggleVideoExpansion(video.id)}
                        className="mt-2 text-[#025fc3] text-sm font-medium flex items-center"
                      >
                        {expandedVideo === video.id ? "Show less" : "Show more"}
                        <ChevronDown
                          className={`h-4 w-4 ml-1 transition-transform ${expandedVideo === video.id ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}

                    <div className="mt-4">
                      <motion.button
                        className="inline-flex items-center justify-center w-full rounded-md bg-[#025fc3] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#0247a3]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch Video
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
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
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#025fc3] focus:border-transparent"
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

      {/* Request Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Can&apos;t Find What You&apos;re <span className="text-[#025fc3]">Looking For</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              If you have a specific AWS topic you&apos;d like us to cover in a future video, let us know! We&apos;re constantly
              expanding our library based on community requests.
            </p>

            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#025fc3] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#0247a3]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Topic
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

