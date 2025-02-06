import Image from "next/image";
import Link from "next/link";
import { Home, Box, Newspaper, Phone, ShieldCheck, ShoppingCart } from "lucide-react";
import logo from "../../logo.png";

export default function Header() {
  const categories = [
    {
      name: "Laptop",
      description: "Máy tính xách tay từ các thương hiệu",
    },
    {
      name: "PC - Máy tính để bàn",
      subcategories: [
        { name: "PC Gaming - Đồ họa" },
        { name: "PC Văn phòng" },
      ]
    },
    {
      name: "Linh kiện máy tính",
      subcategories: [
        { name: "CPU" },
        { name: "Mainboard" },
        { name: "VGA" },
        { name: "RAM" },
        { name: "SSD" },
        { name: "HDD" },
        { name: "Case" },
        { name: "Tản nhiệt" },
        { name: "Nguồn máy tính" },
      ]
    },
    {
      name: "Màn hình máy tính",
      subcategories: [
        { name: "Màn hình Gaming" },
        { name: "Màn hình văn phòng" },
      ]
    },
    {
      name: "Phím, chuột, tai nghe",
      subcategories: [
        { name: "Bàn phím Gaming" },
        { name: "Bàn phím custom" },
        { name: "Chuột Gaming - Văn phòng" },
        { name: "Tai nghe" },
      ]
    }
  ];

  return (
    <header className="bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] to-[#C4B5FD] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="ml-4">
          <Image src={logo} alt="Logo" width={333} height={111} />
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-cyan-300 flex items-center space-x-2 px-3 py-2 rounded-lg group">
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-cyan-300 flex items-center space-x-2 px-3 py-2 rounded-lg">
              <Box className="w-5 h-5" />
              <span className="font-medium">Sản phẩm</span>
            </button>
            {/* Thêm một div "cầu nối" để tạo vùng an toàn */}
            <div className="absolute w-full h-3 bg-transparent"></div>
            <div className="absolute hidden group-hover:block w-64 shadow-lg rounded-lg z-50 bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] shadow-md">
              {categories.map((category, index) => (
                <div key={index} className="relative group/sub">
                  <Link href={`/category/${category.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-white">
                    {category.name}
                    {category.subcategories && <span className="float-right">›</span>}
                  </Link>
                  {/* Thêm padding để tạo vùng an toàn cho submenu */}
                  {category.subcategories && (
                    <div className="absolute hidden group-hover/sub:block left-full top-0 w-64 shadow-lg rounded-lg z-50 -mt-2 bg-gradient-to-r from-[#4C1D95] via-[#7C3AED] shadow-md">
                      <div className="absolute w-4 h-full -left-4 bg-transparent"></div>
                      {category.subcategories.map((sub, subIndex) => (
                        <Link key={subIndex}
                          href={`/category/${category.name}/${sub.name}`}
                          className="block px-4 py-2 hover:bg-gray-100 text-purple">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>



          <Link href="/news" className="text-white hover:text-cyan-300 flex items-center space-x-2 px-3 py-2 rounded-lg group">
            <Newspaper className="w-5 h-5" />
            <span className="font-medium">Tin tức</span>
          </Link>

          <Link href="/contact" className="text-white hover:text-cyan-300 flex items-center space-x-2 px-3 py-2 rounded-lg group">
            <Phone className="w-5 h-5" />
            <span className="font-medium">Liên hệ</span>
          </Link>

          <Link href="/warranty" className="text-white hover:text-cyan-300 flex items-center space-x-2 px-3 py-2 rounded-lg group">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-medium">Chính sách bảo hành</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart" className="text-white hover:text-gray-200">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <button className="bg-[#2b0252] text-white px-4 py-2 rounded hover:bg-[#9849e3]">
            Login
          </button>
          <button className="bg-[#3b0270] text-white px-4 py-2 rounded hover:bg-[#9849e3]">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
