import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTiktokFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { P2 } from "./Typography";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white-smoke text-black-soft lg:px-10 pt-7">
      <div className="grid grid-cols-3 items-start ">
        <Image
          src="/images/shared/logo-fundar-mobile.webp"
          alt="Imagen de logo"
          width={55}
          height={55}
          className="hidden lg:block"
        />
        <div className="col-span-2 flex justify-around">
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
              <IoIosMail className="text-2xl" />
              <p>example@fundar.com</p>
            </div>
            <div className="flex gap-2">
              <MdOutlineLocationCity className="text-2xl" />
              <p>Av. Unknow 123</p>
            </div>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-2xl" />
              <p>ejemplo@fundar.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-5 text-center ">
        <P2>© {new Date().getFullYear()} Fund.ar — All rights reserved.</P2>
      </div>
    </footer>
  );
}
