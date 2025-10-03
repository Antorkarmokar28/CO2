import Link from "next/link";
import Logo from "../Logo/logo";
import navbarItems from "./NavbarItems";
import { BellDot, UserRound } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-xl">
          <div className="flex items-center gap-14">
            <Logo />
            <ul className="flex gap-6">
              {navbarItems.map((item) => {
                const Icon = item.icon; // 👈 Icon কম্পোনেন্ট রেফারেন্স
                return (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 hover:text-blue-600"
                    >
                      <Icon size={18} /> {/* 👈 এখানে JSX আকারে render */}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-8">
            <BellDot />
            <div className="flex border-slate-100 items-center gap-4 px-5 py-2 border-2 rounded-lg">
              <UserRound />
              <h6>Harry</h6>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
