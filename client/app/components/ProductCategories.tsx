import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Điện Thoại",
    description: "iPhone, Samsung, Xiaomi và nhiều thương hiệu khác",
    itemCount: 458,
    image: "/images/phones.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    description: "Gaming, Văn phòng, Đồ họa chuyên nghiệp",
    itemCount: 275,
    image: "/images/laptops.jpg"
  },
  {
    id: 3,
    name: "Phụ Kiện",
    description: "Tai nghe, Chuột, Bàn phím, Bao da",
    itemCount: 892,
    image: "/images/accessories.jpg"
  },
]

export default function ProductCategories() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Danh Mục Sản Phẩm
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Khám phá đa dạng các danh mục sản phẩm công nghệ với chất lượng cao và giá cả hợp lý
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={`https://placehold.co/600x400?text=${category.name}`}
                alt={category.name}
                width={600}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {category.name}
              </h3>
              <p className="text-gray-200 mb-3">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {category.itemCount} sản phẩm
                </span>
                <span className="flex items-center text-sm font-medium group-hover:underline">
                  Xem thêm
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}