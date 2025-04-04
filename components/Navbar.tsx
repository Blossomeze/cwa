import Link from "next/link"
import logo from "@/public/logoblack.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="brand logo" width={40} />
            <span className="text-xl font-bold">Cloud With Anne Academy</span>
          </Link>
          <div className="ml-2 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium">free</div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/resources" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Resources
          </Link>
          <Link href="https://dev.to/anneusang" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/donate" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
            Donate
          </Link>
          <Link
            href="/register"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-[#025fc3] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          >
            Start Learning Free
          </Link>
        </div>
      </div>
    </header>
  )
}

