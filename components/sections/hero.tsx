"use client";
import { FlipWords } from "../ui/flip-words";


export function Hero() {
    const words = ["Beautiful", "Responsive", "Amazing", "Modern"];


  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">

        <div className=" text-neutral-300 dark:text-neutral-400" style={{ fontSize: '4rem' }} >
            Build
            <FlipWords words={words} />Products with Nexium
        </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Learn More
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Get Started
        </button>
      </div>


    </div>
  );
}