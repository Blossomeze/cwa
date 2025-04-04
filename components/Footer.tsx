import Link from "next/link"
import logo from "@/public/logoblack.png"
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-wh border-t border-gray-200">
      <div className="container px-4 md:px-6 mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="brand logo" width={40} />
              <span className="text-xl font-bold">CWA Academy</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Free cloud computing education for everyone. Learn AWS skills and launch your career in cloud engineering
              without spending a penny.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#025fc3]" aria-label="Facebook">
                <IconBrandFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#025fc3]" aria-label="Twitter">
                <IconBrandTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#025fc3]" aria-label="YouTube">
                <IconBrandYoutube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#025fc3]" aria-label="LinkedIn">
                <IconBrandLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  AWS Fundamentals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Solutions Architect
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  DevOps Engineer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Cloud Practitioner
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  All Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Practice Labs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Certification Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#025fc3]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 py-5 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CWA Academy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center">
              <IconMail className="h-5 w-5 text-gray-500 mr-2" />
              <a href="mailto:contact@cloudskill.academy" className="text-gray-600 hover:text-[#025fc3] text-sm">
                contact@cloudwithanne.academy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

