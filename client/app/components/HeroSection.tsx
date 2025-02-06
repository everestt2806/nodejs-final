import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowRight, Truck, Shield, CreditCard } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] py-16">
          {/* Content Section */}
          <div className="text-white space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Khám Phá Thế Giới
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Công Nghệ Hiện Đại
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-lg">
              Trải nghiệm những sản phẩm công nghệ hàng đầu với chất lượng tốt nhất và giá cả hợp lý nhất.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Mua Sắm Ngay</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Tìm Hiểu Thêm
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 mt-8 border-t border-purple-700">
              <div className="flex items-center gap-2 text-gray-300">
                <Truck className="w-5 h-5 text-cyan-400" />
                <span>Giao hàng miễn phí</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Bảo hành 12 tháng</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CreditCard className="w-5 h-5 text-cyan-400" />
                <span>Thanh toán an toàn</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative z-10 hidden lg:block">
            <div className="relative w-full aspect-square">
              <Image
                src="/hero-product.png" // Thay bằng hình ảnh thực tế của bạn
                alt="Featured Product"
                width={600}
                height={600}
                className="object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white px-6 py-2 rounded-full transform rotate-12">
                Mới nhất 2025
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cyan-500 text-white px-6 py-2 rounded-full transform -rotate-12">
                Giảm giá 20%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200L48 185.2C96 170.3 192 140.7 288 140.7C384 140.7 480 170.3 576 155.3C672 140.3 768 80.7 864 65.7C960 50.7 1056 80.3 1152 95.3C1248 110.3 1344 110.7 1392 110.8L1440 111V201H1392C1344 201 1248 201 1152 201C1056 201 960 201 864 201C768 201 672 201 576 201C480 201 384 201 288 201C192 201 96 201 48 201H0V200Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}