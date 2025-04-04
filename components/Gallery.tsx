import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Gallery() {
  const images = [
    {
      src: "/IMG_1623.jpg",
      alt: "Students collaborating on AWS project",
      caption: "Hands-on learning with real AWS projects",
    },
    {
      src: "/IMG_1687.jpg",
      alt: "Virtual classroom session",
      caption: "Interactive virtual classrooms",
    },
    {
      src: "/IMG_2168.jpg",
      alt: "AWS certification preparation",
      caption: "AWS certification exam preparation",
    },
    {
      src: "/IMG_1625.jpg",
      alt: "Community meetup",
      caption: "Community events and networking",
    },
    {
      src: "/IMG_1776.jpg",
      alt: "Cloud architecture workshop",
      caption: "Cloud architecture workshops",
    },
    {
      src: "/IMG_1623.jpg",
      alt: "Student receiving job offer",
      caption: "Career success stories",
    },
  ]

  return (
    <section className="w-full bg-white py-12" id="gallery">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Learning <span className="text-[#025fc3]">in Action</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            See how our students learn and grow with CloudSkill Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn("relative group overflow-hidden rounded-xl", index === 0 && "md:col-span-2 md:row-span-3")}
            >
              <div className="aspect-video w-full h-full relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

