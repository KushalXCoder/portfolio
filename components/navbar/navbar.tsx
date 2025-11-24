import Link from "next/link";
import Profile from "./profile";
import ModeToogle from "./mode-toggle";

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
              className="text-lg hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <ModeToogle />
    </div>
  )
}

export default Navbar