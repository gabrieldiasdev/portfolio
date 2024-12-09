"use client";

import Link from "next/link";
import { NavItem } from "./nav-item";
import Image from "next/image";
import { motion } from "framer-motion";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={95}
            height={84}
            src="/images/logo.png"
            alt="Logo gabrieldiasdev"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {navItems.map((navItem) => (
            <NavItem {...navItem} key={navItem.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
