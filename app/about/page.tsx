"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Award,
  BookOpen,
  Calendar,
  Target,
  Eye,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import founder from "@/public/founder.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="py-12 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              About <span className="text-[#025fc3]">CWA</span> Academy
            </h1>
            <p className="text-base text-gray-600 mb-8">
              Have questions about our courses, interested in partnerships, or
              want to join our team? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="py-12 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                About <span className="text-[#025fc3]">CWA</span> Academy
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                We&apos;re on a mission to democratize cloud computing education and
                create pathways to tech careers for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#our-story"
                  className="inline-flex items-center justify-center rounded-md bg-[#025fc3] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#0247a3]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Story
                </motion.a>
                <motion.a
                  href="#founder"
                  className="inline-flex items-center justify-center rounded-md bg-white border border-gray-200 px-6 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Meet Our Founder
                </motion.a>
              </div>
            </div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[700px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/IMG_1625.jpg"
                  alt="CWA Academy team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#025fc3]/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: "2019", label: "Founded" },
              { value: "50+", label: "Free Courses" },
              { value: "10,000+", label: "Students" },
              { value: "30+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#025fc3] mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="w-full bg-white py-16" id="founder">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our <span className="text-[#025fc3]">Founder</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              The visionary behind CWA Academy&apos;s mission to democratize cloud
              education
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="lg:w-3/6">
              <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={founder || "/placeholder.svg"}
                  alt="Ms. Anne Essang - Founder & Tutor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-3/6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ms. Anne Essang
              </h3>
              <p className="text-[#025fc3] font-medium text-lg mb-4">
                Founder & CEO
              </p>
              <div className="space-y-4 text-gray-600">
                <p>
                  Anne Usang is a Certified Cloud Solutions Architect with a
                  passion for cloud architecture and technical project
                  management, with about 3 years of experience in IT. She has a
                  solid foundation in leading cloud-centric initiatives such as
                  building resilient and scalable cloud infrastructures,
                  automation, cloud security, and cost optimization, Anne excels
                  at streamlining processes, enhancing system performance, and
                  delivering cost-effective solutions, and managing technical
                  projects
                </p>
                <p>
                  Anne is the Founder of CWA Academy, where she is building a
                  network of Africans who are building and developing solutions
                  within the African ecosystem leveraging on cloud computing.
                  She also has a YouTube channel, CloudWithAnne where she posts
                  cloud content that could be useful to newbies and beginners in
                  the cloud field.
                </p>
                <p>
                  She proudly served as the AWS Cloud Club Captain at the
                  University of Uyo, where she led a dynamic community of
                  students passionate about AWS technologies, and conducted and
                  organized engaging events and training sessions, which awarded
                  her the AWS Cloud Clubs Certified Instructor award.
                </p>
                <p>
                  She is really passionate about innovation, problem solving,
                  and building connections with people both in the cloud and
                  tech community.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  className="inline-flex items-center text-[#025fc3] font-medium"
                  whileHover={{ x: 5 }}
                >
                  Read full bio <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 bg-gray-50 p-8 rounded-xl max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <blockquote className="text-xl italic text-gray-700">
            &quot;Education is the most powerful tool we have to change lives. By
              making cloud computing education accessible to everyone, we&apos;re not
              just teaching technical skills—we&apos;re creating pathways to economic
              opportunity and empowering the next generation of innovators.&quot;
            </blockquote>
            <p className="mt-4 font-medium text-right">— Dr. Alex Rivera</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-gray-50 py-16" id="our-story">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              Our <span className="text-[#025fc3]">Story</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "The Beginning",
                  year: "2019",
                  icon: <Calendar className="h-8 w-8 text-[#025fc3] mb-2" />,
                  content:
                    "CWA Academy was founded by Dr. Alex Rivera who recognized a significant barrier to entry in cloud computing: the high cost of quality education. He pooled his expertise with other AWS-certified professionals to create free, accessible AWS training materials.",
                },
                {
                  title: "Growing Community",
                  year: "2020-2021",
                  icon: <Users className="h-8 w-8 text-[#025fc3] mb-2" />,
                  content:
                    "What started as a small collection of tutorials quickly grew into a vibrant learning community. As the pandemic accelerated remote work and cloud adoption, our platform became a lifeline for those looking to transition into cloud careers.",
                },
                {
                  title: "Recognition",
                  year: "2022",
                  icon: <Award className="h-8 w-8 text-[#025fc3] mb-2" />,
                  content:
                    "CWA Academy gained recognition for its impact, receiving awards for educational innovation and digital inclusion. Major tech companies began partnering with us to access our pool of trained cloud talent.",
                },
                {
                  title: "Today & Beyond",
                  year: "2023-Present",
                  icon: <BookOpen className="h-8 w-8 text-[#025fc3] mb-2" />,
                  content:
                    "Today, CWA Academy offers over 50 free courses, has helped launch thousands of cloud careers, and continues to expand its curriculum and reach. Our vision remains unchanged: to make quality cloud education accessible to everyone.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      {item.icon}
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.year}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="w-full bg-white py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our <span className="text-[#025fc3]">Purpose</span> & Values
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              Guided by a commitment to accessible education and community
              empowerment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description:
                  "To democratize cloud computing education by providing free, high-quality AWS training to anyone, anywhere, regardless of their financial situation or background.",
                icon: <Target className="h-10 w-10 text-[#025fc3]" />,
                points: [
                  "Remove financial barriers to cloud education",
                  "Create pathways to high-paying tech careers",
                  "Build a supportive global learning community",
                ],
              },
              {
                title: "Our Vision",
                description:
                  "A world where anyone with determination can become a cloud professional, creating economic opportunities and driving innovation through accessible education.",
                icon: <Eye className="h-10 w-10 text-[#025fc3]" />,
                points: [
                  "100,000 cloud careers launched by 2025",
                  "Recognized as the leading free AWS training platform",
                  "Bridging the global cloud skills gap",
                ],
              },
              {
                title: "Core Values",
                description:
                  "Our foundation is built on principles that guide everything we do, from course development to community engagement.",
                icon: <Heart className="h-10 w-10 text-[#025fc3]" />,
                points: [
                  "Accessibility - Knowledge should be available to all",
                  "Excellence - Quality education without compromise",
                  "Community - Learning together, growing together",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-3 mt-auto">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-[#025fc3]/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-[#025fc3]"></div>
                      </div>
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our <span className="text-[#025fc3]">Impact</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              Real stories of transformation through accessible cloud education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "3x",
                description: "Average salary increase for our graduates",
                icon: <Award className="h-8 w-8 text-[#025fc3]" />,
              },
              {
                metric: "87%",
                description: "Students from underrepresented groups in tech",
                icon: <Users className="h-8 w-8 text-[#025fc3]" />,
              },
              {
                metric: "92%",
                description: "Certification pass rate for our students",
                icon: <CheckCircle className="h-8 w-8 text-[#025fc3]" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#025fc3]">
                    {item.metric}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Student success story"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  From Retail Worker to AWS Architect
                </h3>
                <p className="text-gray-600 mb-4">
                &quot;I was working in retail making minimum wage with no clear
                  career path. After discovering CWA Academy, I dedicated my
                  evenings to learning AWS. Within 6 months, I passed my
                  Solutions Architect certification and landed a junior cloud
                  role. Two years later, I&apos;m now a Senior Cloud Architect
                  earning six figures. CWA Academy changed my life by making
                  quality education accessible when I couldn&apos;t afford
                  traditional training.&quot;
                </p>
                <p className="font-medium text-gray-900">
                  — Michael T., CWA Graduate
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-[5%] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl font-bold mb-2">Learn With Us</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our community of aspiring cloud computing engineers today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-4xl mx-auto mb-3">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold mb-2">WHATSAPP</h3>
                <p className="text-gray-500">New information and updates</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0,0,256,256"
                fill="#40C057"
              >
                <g
                  fill="#40c057"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal"}}
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12.01172,2c-5.506,0 -9.98823,4.47838 -9.99023,9.98438c-0.001,1.76 0.45998,3.47819 1.33398,4.99219l-1.35547,5.02344l5.23242,-1.23633c1.459,0.796 3.10144,1.21384 4.77344,1.21484h0.00391c5.505,0 9.98528,-4.47937 9.98828,-9.98437c0.002,-2.669 -1.03588,-5.17841 -2.92187,-7.06641c-1.886,-1.887 -4.39245,-2.92673 -7.06445,-2.92773zM12.00977,4c2.136,0.001 4.14334,0.8338 5.65234,2.3418c1.509,1.51 2.33794,3.51639 2.33594,5.65039c-0.002,4.404 -3.58423,7.98633 -7.99023,7.98633c-1.333,-0.001 -2.65341,-0.3357 -3.81641,-0.9707l-0.67383,-0.36719l-0.74414,0.17578l-1.96875,0.46484l0.48047,-1.78516l0.2168,-0.80078l-0.41406,-0.71875c-0.698,-1.208 -1.06741,-2.58919 -1.06641,-3.99219c0.002,-4.402 3.58528,-7.98437 7.98828,-7.98437zM8.47656,7.375c-0.167,0 -0.43702,0.0625 -0.66602,0.3125c-0.229,0.249 -0.875,0.85208 -0.875,2.08008c0,1.228 0.89453,2.41503 1.01953,2.58203c0.124,0.166 1.72667,2.76563 4.26367,3.76563c2.108,0.831 2.53614,0.667 2.99414,0.625c0.458,-0.041 1.47755,-0.60255 1.68555,-1.18555c0.208,-0.583 0.20848,-1.0845 0.14648,-1.1875c-0.062,-0.104 -0.22852,-0.16602 -0.47852,-0.29102c-0.249,-0.125 -1.47608,-0.72755 -1.70508,-0.81055c-0.229,-0.083 -0.3965,-0.125 -0.5625,0.125c-0.166,0.25 -0.64306,0.81056 -0.78906,0.97656c-0.146,0.167 -0.29102,0.18945 -0.54102,0.06445c-0.25,-0.126 -1.05381,-0.39024 -2.00781,-1.24024c-0.742,-0.661 -1.24267,-1.47656 -1.38867,-1.72656c-0.145,-0.249 -0.01367,-0.38577 0.11133,-0.50977c0.112,-0.112 0.24805,-0.2915 0.37305,-0.4375c0.124,-0.146 0.167,-0.25002 0.25,-0.41602c0.083,-0.166 0.04051,-0.3125 -0.02149,-0.4375c-0.062,-0.125 -0.54753,-1.35756 -0.76953,-1.85156c-0.187,-0.415 -0.3845,-0.42464 -0.5625,-0.43164c-0.145,-0.006 -0.31056,-0.00586 -0.47656,-0.00586z"></path>
                  </g>
                </g>
              </svg>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm p-8 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold mb-2">X (TWITTER)</h3>
                <p className="text-gray-500">Keep up with new trends</p>
              </div>
              <div className="text-[#1DA1F2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
            </motion.a>
          </div>

          <div className="max-w-md mx-auto">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm p-8 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">EMAIL</h3>
                <p className="text-gray-500">Want to collaborate? send mail</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  />
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  />
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  />
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  />
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#025fc3] py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
              Join Our Mission
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl">
              Whether you&apos;re a student looking to learn AWS, an instructor
              wanting to share your knowledge, or a company interested in
              partnering with us, there&apos;s a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/courses"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#025fc3] shadow transition-colors hover:bg-blue-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning
              </motion.a>
              <motion.a
                href="/donate"
                className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
