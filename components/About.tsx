import Image from "next/image"

export default function About() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About <span className="text-[#025fc3]">CWA</span> Academy
            </h2>
            <p className="text-gray-600 text-lg">
              CWA Academy was founded with a simple mission: to make cloud computing education accessible to
              everyone, regardless of their background or financial situation.
            </p>
            <p className="text-gray-600">
              Our team of AWS-certified professionals and cloud engineers have created a comprehensive curriculum that
              takes you from the basics to advanced cloud concepts, all completely free of charge.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-[#025fc3]">10+</p>
                <p className="text-sm text-gray-500">Free Courses</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-[#025fc3]">200+</p>
                <p className="text-sm text-gray-500">Students</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-[#025fc3]">95%</p>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-[#025fc3]">24/7</p>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/IMG_1623.jpg"
              alt="Cloud computing students learning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#025fc3]/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

