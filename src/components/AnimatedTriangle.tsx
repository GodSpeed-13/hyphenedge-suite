import React, { useEffect, useState } from "react";

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle: React.FC<AnimatedTriangleProps> = ({ onAnimationComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [iconStage, setIconStage] = useState(0); // Tracks which icon to display

  useEffect(() => {
    const sequence = [0, 600, 1200, 1800, 2400]; // timing for each stage
    const timers: NodeJS.Timeout[] = [];

    sequence.forEach((delay, index) => {
      const timer = setTimeout(() => {
        setIconStage(index);
        if (index === sequence.length - 1) {
          setShowLogo(true);
          onAnimationComplete?.();
        }
      }, delay);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearTimeout(t));
  }, [onAnimationComplete]);

  const renderIcon = () => {
    switch (iconStage) {
      case 0:
        // AI Brain icon (simplified stylized brain)
        return (
          <path
            d="M175 140
               c-5,-5 -10,-5 -12,0
               c-3,4 0,8 0,8
               c-4,3 -2,8 3,8
               c5,0 7,-5 8,-8
               c2,-4 3,-8 -1,-8z"
            fill="#ffcc00"
            filter="url(#glow)"
          />
        );
      case 1:
        // Security lock icon
        return (
          <path
            d="M170 145 h10 v10 h-10 z
               M172 145 v-5 a3,3 0 0,1 6,0 v5"
            fill="#00ffcc"
            filter="url(#glow)"
          />
        );
      case 2:
        // Gear / Automation icon
        return (
          <path
            d="M175 140
               m-5,0
               a5,5 0 1,0 10,0
               a5,5 0 1,0 -10,0
               M175 135 v-5
               M175 145 v5
               M170 140 h-5
               M180 140 h5"
            stroke="#ff00ff"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
          />
        );
      case 3:
        // Original hyphen
        return (
          <rect
            x="150"
            y="140"
            width="50"
            height="10"
            fill="#00f0ff"
            filter="url(#glow)"
            rx={0}
            ry={0}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative transition-all duration-1000 ${
        showLogo ? "transform translate-x-[-140px]" : ""
      }`}
    >
      <svg
        width="400"
        height="300"
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

        {/* Triangle */}
        <path d="M175 60 L250 190 L100 190 Z" fill="url(#triangleGradient)" filter="url(#glow)" />

        {/* Icon / hyphen inside triangle */}
        {renderIcon()}
      </svg>

      {/* Brand text */}
      <div
        className={`absolute top-1/2 left-[280px] transform -translate-y-1/2 transition-all duration-1000 ${
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
