"use client";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function BirthdayPage() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200">
      <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={400} recycle={true} />
      <h1 className="text-5xl sm:text-7xl font-bold text-pink-600 drop-shadow-lg mb-6 text-center">
        🎉 Happy Birthday Aryan Sharma! 🎂
      </h1>
      <p className="text-2xl sm:text-3xl text-gray-800 mb-4 text-center">
        Wishing you a fantastic year ahead filled with joy, laughter, and cake!
      </p>
      <p className="text-lg text-gray-500 italic text-center max-w-xl">
        (Congrats on surviving another trip around the sun. Try not to break the world record for most cake eaten in one sitting... again.)
      </p>
    </div>
  );
}
