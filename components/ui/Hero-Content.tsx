"use client";
import { FlipWords } from "../ui/flip-words";


export function HeroContent() {
    const words = [
      "Beautiful",
      "Responsive",
      "Amazing",
      "Modern",
      "Innovative",
      "Scalable",
      "Efficient",
      "User-friendly",
      "Dynamic",
      "Intuitive",
    ];


  return (
<div className="flex flex-col text-center items-center justify-center h-auto md:h-[40rem]">
      <div className="text-neutral-300 dark:text-neutral-400 text-5xl md:text-6xl mt-20 md:mt-12">
          Build<FlipWords words={words} />Products
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Learn More
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Get Started
        </button>
      </div>


    </div>
  );
}