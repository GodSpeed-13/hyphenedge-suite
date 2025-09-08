import { useState, useEffect } from 'react';

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle = ({ onAnimationComplete }: AnimatedTriangleProps) => {
  const [currentAnimation, setCurrentAnimation] = useState<'brain' | 'security' | 'automation' | 'hyphen' | 'complete'>('brain');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const sequence = [
      { state: 'brain', duration: 4000 },
      { state: 'security', duration: 4000 },
      { state: 'automation', duration: 4000 },
      { state: 'hyphen', duration: 3000 },
      { state: 'complete', duration: 1500 },
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
    <g>
      {/* AI Neural Network Pattern */}
      <g className="animate-brain-pulse" style={{ transformOrigin: '175px 125px' }}>
        {/* Main neural nodes */}
        <circle cx="165" cy="110" r="2.5" fill="url(#brainGradient)" opacity="0.9" className="animate-pulse-glow" />
        <circle cx="185" cy="110" r="2.5" fill="url(#brainGradient)" opacity="0.9" className="animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
        <circle cx="155" cy="125" r="2" fill="url(#brainGradient)" opacity="0.8" className="animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
        <circle cx="175" cy="125" r="3" fill="url(#brainGradient)" opacity="1" className="animate-pulse-glow" style={{ animationDelay: '0.1s' }} />
        <circle cx="195" cy="125" r="2" fill="url(#brainGradient)" opacity="0.8" className="animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
        <circle cx="165" cy="140" r="2.5" fill="url(#brainGradient)" opacity="0.9" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <circle cx="185" cy="140" r="2.5" fill="url(#brainGradient)" opacity="0.9" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
        
        {/* Neural connections with flowing animation */}
        <path d="M165 110 L175 125 M185 110 L175 125 M155 125 L175 125 M195 125 L175 125 M175 125 L165 140 M175 125 L185 140" 
              stroke="url(#brainGradient)" 
              strokeWidth="1.5" 
              opacity="0.6"
              strokeDasharray="3,2"
              className="animate-automation-flow" />
              
        {/* Central processing hub */}
        <circle cx="175" cy="125" r="8" stroke="url(#brainGradient)" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse-glow" />
        
        {/* Thought bubbles */}
        <circle cx="170" cy="115" r="1" fill="url(#accent)" opacity="0.7" className="animate-float" />
        <circle cx="180" cy="115" r="0.8" fill="url(#accent)" opacity="0.6" className="animate-float" style={{ animationDelay: '0.5s' }} />
        <circle cx="175" cy="110" r="0.6" fill="url(#accent)" opacity="0.5" className="animate-float" style={{ animationDelay: '1s' }} />
      </g>
    </g>
  );

  const renderSecurityAnimation = () => (
    <g>
      {/* Security Shield */}
      <g className="animate-security-wave" style={{ transformOrigin: '175px 125px' }}>
        {/* Shield outline */}
        <path d="M175 105 L190 115 L190 135 L175 145 L160 135 L160 115 Z" 
              fill="url(#securityGradient)" 
              opacity="0.3"
              stroke="url(#securityGradient)"
              strokeWidth="1.5" />
              
        {/* Lock mechanism */}
        <rect x="170" y="122" width="10" height="8" rx="1"
              fill="url(#primary)" 
              opacity="0.8" />
        <path d="M172 122 L172 119 A3 3 0 0 1 178 119 L178 122" 
              stroke="url(#primary)" 
              strokeWidth="2" 
              fill="none" />
              
        {/* Security scan lines */}
        <rect x="160" y="115" width="30" height="2" fill="url(#accent)" opacity="0.8" className="animate-scan" />
        <rect x="160" y="125" width="30" height="1" fill="url(#accent)" opacity="0.6" className="animate-scan" style={{ animationDelay: '0.5s' }} />
        <rect x="160" y="135" width="30" height="2" fill="url(#accent)" opacity="0.8" className="animate-scan" style={{ animationDelay: '1s' }} />
        
        {/* Protection waves */}
        <circle cx="175" cy="125" r="20" stroke="url(#securityGradient)" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse-glow" />
        <circle cx="175" cy="125" r="30" stroke="url(#securityGradient)" strokeWidth="0.5" fill="none" opacity="0.3" className="animate-pulse-glow" style={{ animationDelay: '0.7s' }} />
      </g>
    </g>
  );

  const renderAutomationAnimation = () => (
    <g>
      {/* Automation Gears and Flow */}
      <g style={{ transformOrigin: '175px 125px' }}>
        {/* Main gear */}
        <g className="animate-rotate-slow">
          <circle cx="175" cy="125" r="12" stroke="url(#automationGradient)" strokeWidth="2" fill="none" opacity="0.8" />
          <circle cx="175" cy="113" r="2" fill="url(#automationGradient)" />
          <circle cx="187" cy="125" r="2" fill="url(#automationGradient)" />
          <circle cx="175" cy="137" r="2" fill="url(#automationGradient)" />
          <circle cx="163" cy="125" r="2" fill="url(#automationGradient)" />
        </g>
        
        {/* Secondary gears */}
        <g className="animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '6s' }}>
          <circle cx="160" cy="112" r="6" stroke="url(#accent)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="160" cy="106" r="1" fill="url(#accent)" />
          <circle cx="166" cy="112" r="1" fill="url(#accent)" />
          <circle cx="160" cy="118" r="1" fill="url(#accent)" />
          <circle cx="154" cy="112" r="1" fill="url(#accent)" />
        </g>
        
        <g className="animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }}>
          <circle cx="190" cy="138" r="6" stroke="url(#accent)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="190" cy="132" r="1" fill="url(#accent)" />
          <circle cx="196" cy="138" r="1" fill="url(#accent)" />
          <circle cx="190" cy="144" r="1" fill="url(#accent)" />
          <circle cx="184" cy="138" r="1" fill="url(#accent)" />
        </g>
        
        {/* Data flow streams */}
        <path d="M145 125 L205 125" 
              stroke="url(#automationGradient)" 
              strokeWidth="2" 
              strokeDasharray="6,3"
              opacity="0.7"
              className="animate-automation-flow" />
        <path d="M175 100 L175 150" 
              stroke="url(#automationGradient)" 
              strokeWidth="2" 
              strokeDasharray="6,3"
              opacity="0.7"
              className="animate-automation-flow" 
              style={{ animationDelay: '0.3s' }} />
              
        {/* Process indicators */}
        <circle cx="155" cy="125" r="2" fill="url(#accent)" className="animate-float" />
        <circle cx="195" cy="125" r="2" fill="url(#accent)" className="animate-float" style={{ animationDelay: '0.5s' }} />
        <circle cx="175" cy="105" r="2" fill="url(#accent)" className="animate-float" style={{ animationDelay: '1s' }} />
        <circle cx="175" cy="145" r="2" fill="url(#accent)" className="animate-float" style={{ animationDelay: '1.5s' }} />
      </g>
    </g>
  );

  const renderHyphen = () => (
    <g className={currentAnimation === 'hyphen' ? 'animate-pulse-glow' : ''}>
      {/* Central hyphen - positioned exactly like the original logo */}
      <rect x="158" y="122" width="34" height="6" rx="3" fill="url(#hyphenGradient)" 
            className={currentAnimation === 'hyphen' ? 'animate-pulse-glow' : ''} />
      {/* Glow effect */}
      <rect x="158" y="122" width="34" height="6" rx="3" fill="url(#hyphenGlow)" 
            opacity="0.5"
            className={currentAnimation === 'hyphen' ? 'animate-pulse-glow' : ''} />
    </g>
  );

  return (
    <div className={`relative transition-all duration-1000 ${showLogo ? 'transform translate-x-[-200px]' : ''}`}>
      <svg 
        width="400" 
        height="300" 
        viewBox="0 0 350 250" 
        className="drop-shadow-2xl"
      >
        <defs>
          {/* Triangle gradient - matching original logo */}
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 50%)" />
            <stop offset="30%" stopColor="hsl(207 100% 55%)" />
            <stop offset="70%" stopColor="hsl(195 100% 60%)" />
            <stop offset="100%" stopColor="hsl(188 100% 50%)" />
          </linearGradient>
          
          {/* Hyphen gradient */}
          <linearGradient id="hyphenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(188 100% 70%)" />
            <stop offset="50%" stopColor="hsl(200 100% 80%)" />
            <stop offset="100%" stopColor="hsl(188 100% 70%)" />
          </linearGradient>
          
          <linearGradient id="hyphenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(188 100% 50% / 0.8)" />
            <stop offset="50%" stopColor="hsl(200 100% 60% / 0.9)" />
            <stop offset="100%" stopColor="hsl(188 100% 50% / 0.8)" />
          </linearGradient>
          
          {/* Animation gradients */}
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
          
          {/* Glow filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main triangle - exact proportions like original */}
        <path 
          d="M175 65 L235 185 L115 185 Z" 
          fill="url(#triangleGradient)" 
          filter="url(#glow)"
          className="animate-pulse-glow"
        />
        
        {/* Triangle border for definition */}
        <path 
          d="M175 65 L235 185 L115 185 Z" 
          fill="none"
          stroke="url(#hyphenGlow)"
          strokeWidth="1"
          opacity="0.6"
        />
        
        {/* Animation content inside triangle */}
        {currentAnimation === 'brain' && renderBrainAnimation()}
        {currentAnimation === 'security' && renderSecurityAnimation()}
        {currentAnimation === 'automation' && renderAutomationAnimation()}
        {(currentAnimation === 'hyphen' || currentAnimation === 'complete') && renderHyphen()}
      </svg>
      
      {/* Animated text that comes from behind */}
      <div className={`absolute top-1/2 left-[320px] transform -translate-y-1/2 transition-all duration-1000 ${showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'}`}>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          hyphenedge
        </h1>
      </div>
    </div>
  );
};

export default AnimatedTriangle;