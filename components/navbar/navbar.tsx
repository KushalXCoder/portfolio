import Link from "next/link"
import Profile from "./profile"
import { Sun } from "lucide-react"

const Navbar = () => {
  const navItems = [
    { name: "Work", href: "/" },
    { name: "Components", href: "/components" },
  ];

  return (
    <div className="container mx-auto max-w-4xl flex justify-between items-end font-poppins sticky top-0 z-50 px-10 py-5 backdrop-blur-sm">
        <div className="flex items-end gap-5">
          <Profile height={50} width={50} className="rounded-lg" />
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="nav-link relative text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="border p-2 rounded-full cursor-pointer ring ring-accent">
          <Sun className="h-5 w-5" />
        </div>
    </div>
  )
}

export default Navbar