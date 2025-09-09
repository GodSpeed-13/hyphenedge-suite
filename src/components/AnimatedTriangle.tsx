import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle: React.FC<AnimatedTriangleProps> = ({ onAnimationComplete }) => {
  // showLogo mirrors original behaviour (used to reveal the text to the right)
  const [showLogo, setShowLogo] = useState(false);
  // ensure we call onAnimationComplete only once
  const [calledComplete, setCalledComplete] = useState(false);

  useEffect(() => {
    // After the initial entrance (same-ish timing as before), reveal text & notify parent once.
    const timer = setTimeout(() => {
      setShowLogo(true);
      if (!calledComplete) {
        onAnimationComplete?.();
        setCalledComplete(true);
      }
    }, 1400); // tuned to match the slide-in duration below

    return () => clearTimeout(timer);
  }, [onAnimationComplete, calledComplete]);

  return (
    // keep same outer wrapper and transform class used by HeroSection (so no changes needed there)
    <div className={`relative transition-all duration-1000 ${showLogo ? 'transform translate-x-[-200px]' : ''}`}>
      {/* The triangle symbol slides left-right in a loop (Framer Motion) */}
      <motion.svg
        width="400"
        height="300"
        viewBox="0 0 350 250"
        className="drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: -10, opacity: 1 }}
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <defs>
          {/* Triangle gradient */}
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047FF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          {/* Hyphen gradient */}
          <linearGradient id="hyphenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#00FFFF" />
          </linearGradient>

          {/* Subtle glow filter */}
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Slight inner glow to strengthen the hyphen look */}
          <filter id="innerGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Equilateral triangle (centered in the same viewBox used earlier) */}
        {/* Points: top (175,60), bottom-right (250,190), bottom-left (100,190) */}
        <path
          d="M175 60 L250 190 L100 190 Z"
          fill="url(#triangleGradient)"
          filter="url(#glow)"
        />

        {/* Bright glowing hyphen — centered horizontally on the triangle */}
        {/* width chosen to fit inside triangle; rx for rounded caps */}
        <rect
          x="145"
          y="132"
          width="60"
          height="14"
          rx="7"
          fill="url(#hyphenGradient)"
          filter="url(#innerGlow)"
        />
      </motion.svg>

      {/* Brand text positioned exactly like your original component */}
      <div
        className={`absolute top-1/2 left-[320px] transform -translate-y-1/2 transition-all duration-1000 ${showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'}`}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          hyphenedge
        </h1>
      </div>
    </div>
  );
};

export default AnimatedTriangle;
