import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import LogoNavbar from "../public/logos/the-gardens-logo.png";

const classes = (...classNames) => classNames.filter(Boolean).join(" ");

const navigations = [
  // {
  //   name: "BARK.SE",
  //   href: "/",
  //   classes:
  //     "text-black text-base font-Josefin px-4 hover:bg-gray-200 hover:rounded curser-pointer",
  // },
  {
    name: "TRÄDGÅRDSPROJEKT",
    href: "/myaccount",
    classes:
      "text-black text-base font-Josefin px-4 hover:bg-gray-100 hover:underline curser-pointer"
  },
  {
    name: "TJÄNSTER",
    href: "/fund",
    classes:
      "text-black text-base font-Josefin px-4 hover:bg-gray-100 hover:underline curser-pointer"
  },
  {
    name: "KONTAKT",
    href: "/login",
    classes:
      "text-black text-base font-Josefin px-4 hover:bg-gray-100 hover:underline curser-pointer"
  }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="flex lg:flex-col md:flex-col flex-row items-center justify-between mt-2">
        <div
          className={classes("hidden sm:flex items-center md:space-x-4 mb-1")}
        >
          <Link href="/">
            <a className="mr-20 text-black text-base font-Josefin px-4 hover:bg-gray-100 hover:underline curser-pointer">
              BARK.SE
            </a>
          </Link>
          {navigations.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={classes(item.classes)}>{item.name}</a>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-2 mb-2">
          {open ? (
            <XIcon onClick={toggleMenu} className="block w-10 h-10" />
          ) : (
            <MenuIcon onClick={toggleMenu} className="block h-10 w-10" />
          )}
        </div>
      </div>

      <div className="sm:hidden ">
        <div
          className={classes(
            open ? "" : "hidden",
            "md:space-x-4 flex flex-col border-b cursor-pointer"
          )}
        >
          {navigations.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <span className="block mt-1">
                <a className={classes(item.classes)}>{item.name}</a>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
