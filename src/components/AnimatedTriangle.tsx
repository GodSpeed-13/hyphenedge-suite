import React, { useEffect, useState } from "react";

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle: React.FC<AnimatedTriangleProps> = ({ onAnimationComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [iconStage, setIconStage] = useState(0);
  const [rotate, setRotate] = useState(0);

  const sequence = [0, 1200, 1200, 1200]; // icon timings
  const loopDelay = 1000; // delay after each loop in ms

  // Trigger triangle + brand text animation once
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
      onAnimationComplete?.();
    }, sequence[sequence.length - 1] + 600);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  // Rotate icons continuously
  useEffect(() => {
    const rotateInterval = setInterval(() => setRotate((r) => (r + 15) % 360), 50);
    return () => clearInterval(rotateInterval);
  }, []);

  // Loop icons with fade effect
  useEffect(() => {
    const loopIcons = () => {
      const timers: NodeJS.Timeout[] = [];

      sequence.forEach((delay, index) => {
        const timer = setTimeout(() => {
          setIconStage(index);
        }, delay);
        timers.push(timer);
      });

      const loopTimer = setTimeout(() => {
        loopIcons();
      }, sequence[sequence.length - 1] + loopDelay);
      timers.push(loopTimer as unknown as NodeJS.Timeout);

      return () => timers.forEach((t) => clearTimeout(t));
    };

    const cleanup = loopIcons();
    return () => cleanup?.();
  }, []);

  // Common props for icons
  const iconStyle = (stage: number) => ({
    opacity: iconStage === stage ? 1 : 0,
    transition: "opacity 0.4s ease-in-out",
    transform: `rotate(${rotate} 175 145)`,
    filter: "url(#glow)",
  });

  return (
    <div className={`relative transition-all duration-1000 ${showLogo ? "transform translate-x-[-140px]" : ""}`}>
      <svg width="400" height="300" viewBox="0 0 350 250" className="drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047FF" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={6} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Triangle */}
        <path d="M175 60 L250 190 L100 190 Z" fill="url(#triangleGradient)" filter="url(#glow)" />

        {/* AI Brain */}
        <g style={iconStyle(0)}>
          <path
            d="M175 135 c-5,-5 -15,-5 -15,5 c0,5 5,10 10,10 c5,0 10,-5 10,-10 c0,-5 -2,-7 -5,-5z"
            fill="#FFD700"
          />
          <circle cx="175" cy="140" r={2} fill="#FFAA00" />
        </g>

        {/* Security Lock */}
        <g style={iconStyle(1)}>
          <rect x="170" y="140" width="10" height="10" rx={2} fill="#00CED1" />
          <path d="M172 140 v-5 a3,3 0 0,1 6,0 v5" stroke="#00CED1" strokeWidth={1.5} fill="none" />
        </g>

        {/* Gear / Automation */}
        <g style={iconStyle(2)}>
          <circle cx="175" cy="145" r={5} stroke="#FF69B4" strokeWidth={2} fill="none" />
          <line x1="175" y1="140" x2="175" y2="135" stroke="#FF69B4" strokeWidth={2} />
          <line x1="175" y1="150" x2="175" y2="155" stroke="#FF69B4" strokeWidth={2} />
          <line x1="170" y1="145" x2="165" y2="145" stroke="#FF69B4" strokeWidth={2} />
          <line x1="180" y1="145" x2="185" y2="145" stroke="#FF69B4" strokeWidth={2} />
        </g>

        {/* Hyphen */}
        <rect x="150" y="140" width="50" height="10" fill="#00f0ff" filter="url(#glow)" rx={0} ry={0} style={iconStyle(3)} />
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
