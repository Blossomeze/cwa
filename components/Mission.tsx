import { Target, Eye, Heart } from "lucide-react"

export default function MissionVision() {
  const values = [
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
  ]

  return (
    <section className="w-full bg-gray-50 py-16" id="mission">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our <span className="text-[#025fc3]">Purpose</span> & Values
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Guided by a commitment to accessible education and community empowerment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg mr-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

