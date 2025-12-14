import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import {
  privatedAdmNavItems,
  privatedUserNavItems,
  publicNavItems,
} from "@/helpers/NavItems";

export default function BurgerMenu() {
  const { dataUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  let navItems = publicNavItems;

  if (dataUser?.user.role === "admin") {
    navItems = privatedAdmNavItems;
  } else if (dataUser?.token) {
    navItems = privatedUserNavItems;
  }

  return (
    <div className="lg:hidden relative flex">
      <button onClick={toggleMenu}>
        <GiHamburgerMenu className="text-black-medium text-2xl" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/50 bg-opacity-50"
            onClick={closeMenu}
          />

          <div className="absolute right-0 top-0 w-64 h-full bg-white-smoke shadow-lg p-6 z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-black-medium">Menu</h2>
              <button onClick={closeMenu}>
                <AiOutlineClose className="text-2xl text-black-strong" />
              </button>
            </div>
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    onClick={closeMenu}
                    className="text-black-strong text-[18px] block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {dataUser ? (
              <button
                onClick={logout}
                className="text-black-strong text-[18px] pt-4"
              >
                LOG OUT
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
