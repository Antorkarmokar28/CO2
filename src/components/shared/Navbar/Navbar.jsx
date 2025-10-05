"use client";
import Link from "next/link";
import Logo from "../Logo/logo";
import navbarItems from "./NavbarItems";
import { BellDot, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="p-5 bg-white mb-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-xl">
          <div className="flex items-center gap-14">
            <Logo />
            <ul className="flex gap-6">
              {navbarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathName === item.link;
                return (
                  <li key={item.id}>
                    <Link href={item.link} className={`flex items-center gap-2 ${isActive? "p-2 rounded-xl bg-gradient-to-r from-[#F76D02] to-[#FCB045] font-bold text-white" : "text-black p-2 rounded-xl"}`}>
                      <Icon size={18} />
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
