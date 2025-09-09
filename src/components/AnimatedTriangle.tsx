import React from "react";

const AnimatedTriangle: React.FC = () => {
  return (
    <svg
      width="300"
      height="250"
      viewBox="0 0 350 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradients */}
      <defs>
        <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0047FF" />
          <stop offset="100%" stopColor="#00CFFF" />
        </linearGradient>

        <linearGradient id="hyphenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#00FFFF" />
        </linearGradient>

        {/* Glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Equilateral Triangle */}
      <path
        d="M175 60 L250 190 L100 190 Z"
        fill="url(#triangleGradient)"
        filter="url(#glow)"
      />

      {/* Hyphen inside triangle */}
      <rect
        x="150"
        y="125"
        width="50"
        height="12"
        rx="6"
        fill="url(#hyphenGradient)"
        filter="url(#glow)"
      />
    </svg>
  );
};

export default AnimatedTriangle;
