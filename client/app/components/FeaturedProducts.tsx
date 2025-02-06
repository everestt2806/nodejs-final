"use client";
import Image from "next/image"
import { useState, useEffect } from "react"
import { Star, ShoppingCart, Heart } from "lucide-react"
import {useFormatter} from "../hooks/useFormatter"

const products = [
  {
    id: 1,
    name: "Điện Thoại iPhone 14 Pro Max",
    price: 27900000,
    rating: 4.8,
    reviews: 128,
    discount: 10,
    inStock: true
  },
  {
    id: 2,
    name: "Laptop Gaming MSI GF63",
    price: 15990000,
    rating: 4.5,
    reviews: 96,
    discount: 15,
    inStock: true
  },
  {
    id: 3,
    name: "Tai Nghe Apple AirPods Pro",
    price: 4990000,
    rating: 4.9,
    reviews: 256,
    discount: 0,
    inStock: false
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 5",
    price: 6490000,
    rating: 4.7,
    reviews: 84,
    discount: 20,
    inStock: true
  },
]

export default function FeaturedProducts() {
  const { formatPrice } = useFormatter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Sản Phẩm Nổi Bật
        </h2>
        <button className="text-purple-600 hover:text-purple-700 font-medium">
          Xem tất cả →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative">
              <Image
                src={`https://placehold.co/400x400?text=${product.name}`}
                alt={product.name}
                width={400}
                height={400}
                className="w-full rounded-t-xl"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
              {product.discount > 0 && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                  -{product.discount}%
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/60 rounded-t-xl flex items-center justify-center">
                  <span className="text-white font-medium">Hết Hàng</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 line-clamp-2 min-h-[56px]">
                {product.name}
              </h3>

              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm font-medium">{product.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-600">{product.reviews} đánh giá</span>
              </div>

              <div className="mb-4">
                {mounted && (
                  <>
                    <div className="text-xl font-bold text-purple-600">
                      {formatPrice(product.price * (1 - product.discount / 100))}
                    </div>
                    {product.discount > 0 && (
                      <div className="text-sm text-gray-500 line-through">
                        {formatPrice(product.price)}
                      </div>
                    )}
                  </>
                )}
              </div>


              <button
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors
                  ${product.inStock
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Thêm vào giỏ</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}