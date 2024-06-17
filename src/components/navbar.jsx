"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];

function Navbar() {
  const [open, setopen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      y: 0,
      backgroundColor: "rgb(0,0,0)",
    },
    opened: {
      rotate: 45,
      y: 8, // move the top line down
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      y: 0,
      backgroundColor: "rgb(0,0,0)",
    },
    opened: {
      rotate: -45,
      y: -8, // move the bottom line up
      backgroundColor: "rgb(255,255,255)",
    },
  };
  return (
    // tailwind hmesa smaller screen k liye syles lagati hai  sabse phle
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:12 lg:px-24 xl:px-48">
      {/* here are link */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center ">
        <Link
          href={"/"}
          className="text-sm bg-black rounded p-1 font-semibold  flex items-center justify-center"
        >
          <span className=" text-white mr-1">Sagar</span>
          <span className="bg-white rounded w-12 h-8 text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* social media */}
      <div className="  flex items-center gap-4 w-1/3">
        <Link href="#">
          <Image
            className="hidden md:block "
            src="/github.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            className="hidden md:block"
            src="/instagram.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            className="hidden md:block"
            src="/linkedin.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            className="hidden md:block"
            src="/facebook.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            className="hidden md:block"
            src="/pinterest.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            className="hidden md:block"
            src="/dribbble.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* Responsive menu */}
      <div className="sm:hidden">
        {/* Menu button */}
        {/* onClick={(() => setopen(!open))} ka matlab hai ki jab button click hoga, to open ki current value (true/false) ulat jayegi. Agar open true hai to false ho jayega, aur agar false hai to true ho jayega. */}
        <button
          className="w-10 h-8 flex flex-col gap-2 z-50 relative"
          onClick={() => setopen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-center"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-center"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col  items-center justify-center  gap-8 text-4xl">
            {
              /* "link" ki jagah link ya kuch or bhi likh skte hain wo bs ek parameter hai */
              // "link" variable har iteration me current element ko represent karta hai list me
            }
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
