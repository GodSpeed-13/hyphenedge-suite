import React, { useEffect, useState } from "react";
import { CogIcon, LockClosedIcon, ChipIcon } from "@heroicons/react/solid";

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle: React.FC<AnimatedTriangleProps> = ({ onAnimationComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [iconStage, setIconStage] = useState(0); // Tracks which icon to display
  const [rotate, setRotate] = useState(0); // rotation degree for animation

  useEffect(() => {
    const sequence = [0, 600, 1200, 1800, 2400]; // timings
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

    // rotation animation interval
    const rotateInterval = setInterval(() => setRotate((r) => (r + 15) % 360), 50);
    timers.push(rotateInterval as unknown as NodeJS.Timeout);

    return () => timers.forEach((t) => clearTimeout(t));
  }, [onAnimationComplete]);

  const renderIcon = () => {
    const commonProps = { transform: `rotate(${rotate} 175 145)`, filter: "url(#glow)" };

    switch (iconStage) {
      case 0:
        return (
          <g {...commonProps}>
            <ChipIcon className="w-12 h-12 text-yellow-400" />
          </g>
        );
      case 1:
        return (
          <g {...commonProps}>
            <LockClosedIcon className="w-12 h-12 text-teal-400" />
          </g>
        );
      case 2:
        return (
          <g {...commonProps}>
            <CogIcon className="w-12 h-12 text-pink-400" />
          </g>
        );
      case 3:
        return (
          <rect x="150" y="140" width="50" height="10" fill="#00f0ff" filter="url(#glow)" rx={0} ry={0} />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative transition-all duration-1000 ${showLogo ? "transform translate-x-[-140px]" : ""}`}>
      <svg width="400" height="300" viewBox="0 0 350 250" className="drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

        {/* Animated Icon inside triangle */}
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
