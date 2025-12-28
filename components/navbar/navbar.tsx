import Link from "next/link";
import Profile from "./profile";
import ModeToogle from "./mode-toggle";
import { Button } from "../ui/button";
import UserCommandButton from "./command-button";

const Navbar = () => {
  const navItems = [
    { name: "My Stack", href: "#stack" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Components", href: "/components" },
  ];

  return (
    <div className="container mx-auto max-w-4xl flex justify-between items-center font-poppins sticky top-0 z-50 px-6 py-5 backdrop-blur-sm">
        <div className="flex items-end gap-5">
          <Profile className="rounded-lg h-10 w-10" />
          <ul className="items-center gap-5 hidden lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm lg:text-lg hover:text-blue-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <UserCommandButton />
          <ModeToogle />
        </div>
    </div>
  )
}

export default Navbar