"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HoveredLink } from "./HoveredLink";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const NavbarMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-conic from-cyan-500 via-transparent to-transparent bg-opacity-50 dark:bg-opacity-50 shadow-lg z-40 py-4 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* 🔹 Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          whileHover={{ scale: 1.1 }}
          className="flex items-center"
        >
          <Link href="/">
            <Image
              src="/Logo_B_Croped.PNG"
              width={180}
              height={70}
              alt="Nexium"
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* 🔹 Navbar Menu with Glow Effect */}
        <nav className="relative flex items-center space-x-8 ml-auto px-8">
          <HoveredLink href="#">About Us</HoveredLink>
          <HoveredLink href="#">Services</HoveredLink>
          <HoveredLink href="#">Contact</HoveredLink>
        </nav>
      </div>
    </div>
  );
};

export default NavbarMenu;