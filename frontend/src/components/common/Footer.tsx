import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTiktokFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { P2 } from "./Typography";
import Logo from "../navBar/Logo";

export default function Footer() {
  return (
    <footer className="bg-white-smoke text-black-soft lg:px-10 pt-5 lg:py-7">
      <div className="grid lg:grid-cols-3 items-start grid-cols-1 ">
        <div className="flex lg:justify-between items-center lg:items-baseline flex-col h-full">
          <Logo />
          <P2 className="hidden lg:block">
            © {new Date().getFullYear()} Fund.ar — All rights reserved.
          </P2>
        </div>

        <div className="lg:col-span-2 flex lg:justify-around justify-between px-5 lg:px-0 mt-5 lg:mt-0">
          <div className="flex flex-col gap-2">
            <P2 className="font-semibold">Follow us</P2>
            <div className="flex gap-3">
              <FaFacebook className="text-2xl" />
              <IoLogoInstagram className="text-2xl" />
              <RiTiktokFill className="text-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <P2 className="font-semibold">Contact us</P2>
            <div className="flex gap-2">
              <IoIosMail className="text-xl lg:text-2xl" />
              <P2>example@fundar.com</P2>
            </div>
            <div className="flex gap-2">
              <MdOutlineLocationCity className="text-xl lg:text-2xl" />
              <P2>Av. Unknow 123 - City</P2>
            </div>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-xl lg:text-2xl" />
              <P2>(+51) 999-999-999</P2>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-5 text-center lg:hidden">
        <P2>© {new Date().getFullYear()} Fund.ar — All rights reserved.</P2>
      </div>
    </footer>
  );
}
