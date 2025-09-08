import { useState, useEffect } from 'react';

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle = ({ onAnimationComplete }: AnimatedTriangleProps) => {
  const [currentAnimation, setCurrentAnimation] = useState<'brain' | 'security' | 'automation' | 'hyphen' | 'complete'>('brain');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const sequence = [
      { state: 'brain', duration: 3000 },
      { state: 'security', duration: 3000 },
      { state: 'automation', duration: 3000 },
      { state: 'hyphen', duration: 2000 },
      { state: 'complete', duration: 1000 },
    ];

    let currentIndex = 0;

    const runAnimation = () => {
      if (currentIndex < sequence.length) {
        const current = sequence[currentIndex];
        setCurrentAnimation(current.state as any);
        
        setTimeout(() => {
          currentIndex++;
          if (currentIndex === sequence.length) {
            setShowLogo(true);
            onAnimationComplete?.();
          } else {
            runAnimation();
          }
        }, current.duration);
      }
    };

    runAnimation();
  }, [onAnimationComplete]);

  const renderBrainAnimation = () => (
    <g className="animate-brain-pulse">
      {/* Neural network nodes */}
      <circle cx="150" cy="120" r="3" fill="url(#brainGradient)" opacity="0.8" />
      <circle cx="180" cy="100" r="2" fill="url(#brainGradient)" opacity="0.6" />
      <circle cx="170" cy="140" r="2.5" fill="url(#brainGradient)" opacity="0.7" />
      <circle cx="200" cy="130" r="2" fill="url(#brainGradient)" opacity="0.5" />
      
      {/* Neural connections */}
      <path d="M150 120 L180 100 L170 140 L200 130 L150 120" 
            stroke="url(#brainGradient)" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.4"
            strokeDasharray="2,2"
            className="animate-automation-flow" />
            
      {/* Pulsing nodes */}
      <circle cx="175" cy="125" r="4" fill="url(#glowGradient)" opacity="0.3" className="animate-pulse-glow" />
    </g>
  );

  const renderSecurityAnimation = () => (
    <g>
      {/* Shield shape */}
      <path d="M175 105 L185 115 L175 145 L165 115 Z" 
            fill="url(#securityGradient)" 
            opacity="0.7"
            className="animate-security-wave" />
      
      {/* Lock icon inside */}
      <rect x="170" y="120" width="10" height="8" 
            stroke="url(#primary)" 
            strokeWidth="1.5" 
            fill="none" />
      <path d="M172 120 L172 117 A3 3 0 0 1 178 117 L178 120" 
            stroke="url(#primary)" 
            strokeWidth="1.5" 
            fill="none" />
            
      {/* Security waves */}
      <circle cx="175" cy="125" r="15" stroke="url(#securityGradient)" strokeWidth="1" fill="none" opacity="0.3" className="animate-pulse-glow" />
      <circle cx="175" cy="125" r="25" stroke="url(#securityGradient)" strokeWidth="0.5" fill="none" opacity="0.2" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
    </g>
  );

  const renderAutomationAnimation = () => (
    <g>
      {/* Gear shapes */}
      <circle cx="165" cy="120" r="8" stroke="url(#primary)" strokeWidth="2" fill="none" className="animate-rotate-slow" />
      <circle cx="185" cy="130" r="6" stroke="url(#accent)" strokeWidth="2" fill="none" className="animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      
      {/* Flow arrows */}
      <path d="M150 125 L200 125" 
            stroke="url(#automationGradient)" 
            strokeWidth="2" 
            strokeDasharray="8,4"
            className="animate-automation-flow" />
      <path d="M175 105 L175 145" 
            stroke="url(#automationGradient)" 
            strokeWidth="2" 
            strokeDasharray="8,4"
            className="animate-automation-flow" 
            style={{ animationDelay: '0.5s' }} />
            
      {/* Connection dots */}
      <circle cx="160" cy="115" r="2" fill="url(#accent)" className="animate-float" />
      <circle cx="190" cy="135" r="2" fill="url(#accent)" className="animate-float" style={{ animationDelay: '1s' }} />
    </g>
  );

  const renderHyphen = () => (
    <g className={currentAnimation === 'hyphen' ? 'animate-pulse-glow' : ''}>
      <rect x="160" y="122" width="30" height="6" rx="3" fill="url(#primary)" />
    </g>
  );

  return (
    <div className={`relative transition-all duration-1000 ${showLogo ? 'transform translate-x-[-200px]' : ''}`}>
      <svg 
        width="350" 
        height="250" 
        viewBox="0 0 350 250" 
        className="animate-pulse-glow"
      >
        <defs>
          <linearGradient id="primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 50%)" />
            <stop offset="100%" stopColor="hsl(188 100% 50%)" />
          </linearGradient>
          <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(188 100% 50%)" />
            <stop offset="100%" stopColor="hsl(217 100% 50%)" />
          </linearGradient>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 70%)" />
            <stop offset="100%" stopColor="hsl(188 100% 70%)" />
          </linearGradient>
          <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45 100% 60%)" />
            <stop offset="100%" stopColor="hsl(217 100% 50%)" />
          </linearGradient>
          <linearGradient id="automationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(142 76% 36%)" />
            <stop offset="100%" stopColor="hsl(188 100% 50%)" />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 50% / 0.8)" />
            <stop offset="100%" stopColor="hsl(188 100% 50% / 0.8)" />
          </linearGradient>
        </defs>
        
        {/* Main triangle */}
        <path 
          d="M175 75 L225 175 L125 175 Z" 
          fill="url(#primary)" 
          stroke="url(#accent)"
          strokeWidth="2"
          className="drop-shadow-2xl"
        />
        
        {/* Animation content inside triangle */}
        {currentAnimation === 'brain' && renderBrainAnimation()}
        {currentAnimation === 'security' && renderSecurityAnimation()}
        {currentAnimation === 'automation' && renderAutomationAnimation()}
        {(currentAnimation === 'hyphen' || currentAnimation === 'complete') && renderHyphen()}
      </svg>
      
      {/* Animated text that comes from behind */}
      <div className={`absolute top-1/2 left-[280px] transform -translate-y-1/2 transition-all duration-1000 ${showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'}`}>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          hyphenedge
        </h1>
      </div>
    </div>
  );
};

export default AnimatedTriangle;