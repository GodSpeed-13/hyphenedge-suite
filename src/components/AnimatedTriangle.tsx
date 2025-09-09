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
    }, 1400); // delay before showing text
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      {/* Container for triangle + hyphen */}
      <div
        className={`relative transition-all duration-1000 flex items-center justify-center ${
          showLogo ? "transform -translate-x-0" : ""
        }`}
      >
        {/* Triangle with glowing hyphen */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 350 250"
          className="drop-shadow-2xl"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0047FF" />
              <stop offset="100%" stopColor="#00CFFF" />
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
          <path d="M175 60 L250 190 L100 190 Z" fill="url(#triangleGradient)" filter="url(#glow)" />

          {/* Hyphen inside the triangle */}
          <rect
            x="150"
            y="140"
            width="50"
            height="10"
            fill="#00f0ff"
            filter="url(#glow)"
            rx="0"
            ry="0"
          />
        </svg>

        {/* Brand text */}
        <div
          className={`ml-4 transition-all duration-1000 ${
            showLogo ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            hyphenedge
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTriangle;
