import Image from "next/image"
import Link from "next/link"
import { Handshake, Building, GraduationCap, Users } from "lucide-react"

export default function Partnerships() {
  const partnerTypes = [
    {
      title: "Corporate Partners",
      description: "Collaborate with us to develop talent pipelines and support your cloud adoption journey.",
      icon: <Building className="h-6 w-6 text-[#025fc3]" />,
    },
    {
      title: "Educational Institutions",
      description: "Integrate our AWS curriculum into your programs to enhance student employability.",
      icon: <GraduationCap className="h-6 w-6 text-[#025fc3]" />,
    },
    {
      title: "Non-Profit Organizations",
      description: "Partner with us to bring cloud skills to underserved communities and drive social impact.",
      icon: <Users className="h-6 w-6 text-[#025fc3]" />,
    },
  ]

  return (
    <section className="w-full bg-white py-16" id="partnerships">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Partner With <span className="text-[#025fc3]">CWA</span> Academy
              </h2>
              <p className="text-gray-600 text-lg">
                Join us in our mission to democratize cloud education and build the next generation of AWS
                professionals.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4 mt-1">{type.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Partnership Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#025fc3] mr-2"></div>
                  <span className="text-gray-700">Access to a pool of trained cloud talent</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#025fc3] mr-2"></div>
                  <span className="text-gray-700">Co-branded learning materials and events</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#025fc3] mr-2"></div>
                  <span className="text-gray-700">Visibility in our global community</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#025fc3] mr-2"></div>
                  <span className="text-gray-700">Customized training programs for your needs</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/partnerships"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#025fc3] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0247a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#025fc3]"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Become a Partner
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Partnership collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#025fc3]/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md border border-gray-100 max-w-xs">
              <div className="flex items-center mb-2">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="overflow-hidden rounded-full border-2 border-white">
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`Partner ${i}`}
                        width={40}
                        height={40}
                        className="h-8 w-8 object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">Join our 30+ partners</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Microsoft", "Google", "IBM"].map((partner) => (
                  <span key={partner} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

