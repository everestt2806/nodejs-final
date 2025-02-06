import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Home,
  ShoppingBag,
  Info,
  Contact,
  CreditCard,
  Shield,
  Clock,
  Truck,
  Heart
} from "lucide-react"

import logo from "../../logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#C4B5FD] text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Image
              src={logo}
              alt="Logo"
              width={250}
              height={85}
             className="mb-5" />
            <p className="text-gray-200 mb-4">
              Chúng tôi cung cấp những sản phẩm chất lượng cao với giá cả hợp lý nhất. Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-cyan-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-cyan-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-cyan-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-400 pb-2">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                  <Home className="w-5 h-5" />
                  <span>Trang Chủ</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Sản Phẩm</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                  <Info className="w-5 h-5" />
                  <span>Về Chúng Tôi</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
                  <Contact className="w-5 h-5" />
                  <span>Liên Hệ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-400 pb-2">Thông Tin Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-300" />
                <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-300" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-300" />
                <span>contact@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                <span>8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-400 pb-2">Dịch Vụ</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-cyan-300" />
                <span>Giao Hàng Miễn Phí</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-cyan-300" />
                <span>Bảo Hành 12 Tháng</span>
              </li>
              <li className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-cyan-300" />
                <span>Thanh Toán An Toàn</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-cyan-300" />
                <span>Hỗ Trợ 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-400 text-center">
          <p className="text-gray-200">
            © {new Date().getFullYear()} Pixel TechSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}