import React, { useEffect, useState } from "react";

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle: React.FC<AnimatedTriangleProps> = ({ onAnimationComplete }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
      onAnimationComplete?.();
    }, 1400); // matches the original delay before revealing text
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div
      className={`relative transition-all duration-1000 ${
        showLogo ? "transform translate-x-[-200px]" : ""
      }`}
    >
      {/* Triangle with glowing hyphen */}
      <svg
        width="400"
        height="300"
        viewBox="0 0 350 250"
        className="drop-shadow-2xl animate-slide-x"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047FF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>
          <linearGradient id="hyphenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Equilateral triangle */}
        <path
          d="M175 60 L250 190 L100 190 Z"
          fill="url(#triangleGradient)"
          filter="url(#glow)"
        />

        {/* Hyphen inside the triangle */}
{/*         <rect
          x="145"
          y="132"
          width="60"
          height="14"
          rx="7"
          fill="url(#hyphenGradient)"
          filter="url(#glow)"
        /> */}
          <rect
          x="145"
          y="145"
          width="50"
          height="10"
          fill="#00f0ff"
          filter="url(#glow)"
          rx="0"  // 🔹 removes rounded edges
          ry="0"  // 🔹 removes rounded edges
        />


      </svg>

      {/* Brand text (appears after animation) */}
      <div
        className={`absolute top-1/2 left-[320px] transform -translate-y-1/2 transition-all duration-1000 ${
          showLogo ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"
        }`}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          hyphenedge
        </h1>
      </div>
    </div>
  );
};

export default AnimatedTriangle;
