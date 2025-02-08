import { motion } from "motion/react";
import Link from "next/link";

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