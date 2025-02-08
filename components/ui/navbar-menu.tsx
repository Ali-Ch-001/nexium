"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Glow effect animation
const glowVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: "100%", transition: { duration: 0.5 } },
};

const NavbarMenu = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-lg z-40 py-4 px-6">
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
              src="/Logo_B_Croped.png"
              width={180}
              height={70}
              alt="Nexium Logo"
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

// Glow effect on hover
export const HoveredLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link href={href} className="relative text-lg font-medium text-neutral-800 dark:text-neutral-200 group">
      {/* Sliding glow effect */}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      />
      {children}
    </Link>
  );
};

export default NavbarMenu;
