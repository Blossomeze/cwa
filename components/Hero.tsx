import Link from "next/link"
import Image from "next/image"
import { Cloud, Server, Database, Lock } from "lucide-react"
import { Cover } from "./ui/cover"

export default function Hero() {
  return (
    <section className="w-full bg-white pt-12 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
              Master <span className="text-[#025fc3]">AWS</span> at{" "}
              <div className="relative inline-block">
                <span className="relative z-10"><Cover>cloud speed</Cover></span>
                <div className="absolute inset-0 transform translate-y-4">
                  <div className="h-4 w-full border-t border-b border-gray-200"></div>
                </div>
              </div>
            </h1>
          </div>

          <div className="max-w-3xl text-center">
            <p className="text-gray-600 text-xl">
              Free AWS training that takes you from zero to cloud hero. Build in-demand skills with hands-on projects
              and expert guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#courses"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 border border-gray-200"
            >
              Explore AWS Courses
            </Link>
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#025fc3] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0247a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#025fc3] disabled:pointer-events-none disabled:opacity-50"
            >
              Start Free Training
            </Link>
          </div>

          {/* Cloud icons animation */}
          <div className="relative w-full h-20 mt-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                  <Cloud className="h-10 w-10 text-[#025fc3]" />
                  <span className="text-sm font-medium mt-2">Cloud Basics</span>
                </div>
                <div className="flex flex-col items-center">
                  <Server className="h-10 w-10 text-[#025fc3]" />
                  <span className="text-sm font-medium mt-2">EC2 & S3</span>
                </div>
                <div className="flex flex-col items-center">
                  <Database className="h-10 w-10 text-[#025fc3]" />
                  <span className="text-sm font-medium mt-2">Databases</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lock className="h-10 w-10 text-[#025fc3]" />
                  <span className="text-sm font-medium mt-2">Security</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 pt-5">
            <p className="text-sm text-gray-500">
              Trusted by cloud engineers and professionals from all over the world
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="overflow-hidden rounded-full border-2 border-white">
                      <Image
                        src={`/avatar-${i}.jpg`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AWS certification badges */}
          <div className="w-full bg-gray-50 py-8 rounded-xl">
            <p className="text-sm text-gray-500 mb-6">Prepare for these AWS certifications</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                "Cloud Practitioner",
                "Solutions Architect",
                "Developer",
                "SysOps Administrator",
                "DevOps Engineer",
              ].map((cert) => (
                <div key={cert} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#025fc3]/10 flex items-center justify-center">
                      <Cloud className="h-4 w-4 text-[#025fc3]" />
                    </div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

