import { useState, useEffect } from 'react';

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle = ({ onAnimationComplete }: AnimatedTriangleProps) => {
  const [currentAnimation, setCurrentAnimation] = useState<'brain' | 'security' | 'automation' | 'hyphen' | 'complete'>('brain');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const sequence = [
      { state: 'brain', duration: 2500 },
      { state: 'security', duration: 2500 },
      { state: 'automation', duration: 2500 },
      { state: 'hyphen', duration: 1500 },
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
            // Loop the animation
            setTimeout(() => {
              currentIndex = 0;
              setShowLogo(false);
              runAnimation();
            }, 2000);
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
      {/* Digital Brain Circuit Pattern - inspired by reference */}
      <g className="animate-pulse-glow" style={{ transformOrigin: '175px 140px' }}>
        {/* Main brain outline with circuit pattern */}
        <path d="M150 120 Q150 105 165 105 Q180 105 180 115 Q195 115 195 130 Q195 145 190 155 Q185 165 175 165 Q165 165 160 155 Q150 145 150 130 Z" 
              stroke="hsl(var(--brain-primary))" 
              strokeWidth="2.5" 
              fill="none" 
              opacity="0.9"
              className="animate-pulse-glow" />
              
        {/* Circuit pathways */}
        <path d="M160 125 L170 125 M175 125 L185 125 M165 135 L180 135 M170 145 L180 145" 
              stroke="hsl(var(--brain-secondary))" 
              strokeWidth="2" 
              opacity="1"
              strokeDasharray="4,2"
              className="animate-automation-flow" />
              
        {/* Neural nodes */}
        <circle cx="160" cy="125" r="3" fill="hsl(var(--brain-primary))" className="animate-pulse-glow" />
        <circle cx="170" cy="125" r="2.5" fill="hsl(var(--brain-secondary))" className="animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
        <circle cx="175" cy="125" r="2.5" fill="hsl(var(--brain-accent))" className="animate-pulse-glow" style={{ animationDelay: '0.1s' }} />
        <circle cx="185" cy="125" r="3" fill="hsl(var(--brain-primary))" className="animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
        
        <circle cx="165" cy="135" r="2.5" fill="hsl(var(--brain-secondary))" className="animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
        <circle cx="175" cy="135" r="4" fill="hsl(var(--brain-primary))" className="animate-pulse-glow" />
        <circle cx="180" cy="135" r="2.5" fill="hsl(var(--brain-accent))" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        
        <circle cx="170" cy="145" r="2.5" fill="hsl(var(--brain-secondary))" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
        <circle cx="175" cy="145" r="3" fill="hsl(var(--brain-primary))" className="animate-pulse-glow" style={{ animationDelay: '0.1s' }} />
        <circle cx="180" cy="145" r="2.5" fill="hsl(var(--brain-accent))" className="animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
        
        {/* Central processing unit */}
        <circle cx="175" cy="135" r="12" stroke="hsl(var(--brain-primary))" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-pulse-glow" />
        
        {/* Data flow particles */}
        <circle cx="155" cy="130" r="1.5" fill="hsl(var(--brain-secondary))" className="animate-float" />
        <circle cx="195" cy="140" r="1.5" fill="hsl(var(--brain-accent))" className="animate-float" style={{ animationDelay: '0.7s' }} />
      </g>
    </g>
  );

  const renderSecurityAnimation = () => (
    <g>
      {/* Security Shield - inspired by reference */}
      <g className="animate-pulse-glow" style={{ transformOrigin: '175px 140px' }}>
        {/* Main shield outline */}
        <path d="M175 110 L195 125 L195 155 L175 170 L155 155 L155 125 Z" 
              stroke="hsl(var(--security-primary))" 
              strokeWidth="3"
              fill="hsl(var(--security-primary) / 0.1)"
              className="animate-pulse-glow" />
              
        {/* Inner shield protection */}
        <path d="M175 118 L188 130 L188 150 L175 162 L162 150 L162 130 Z" 
              stroke="hsl(var(--security-secondary))" 
              strokeWidth="2"
              fill="hsl(var(--security-secondary) / 0.1)"
              className="animate-pulse-glow" 
              style={{ animationDelay: '0.3s' }} />
              
        {/* Lock mechanism */}
        <rect x="170" y="138" width="10" height="8" rx="1"
              fill="hsl(var(--security-primary))" 
              className="animate-pulse-glow" />
        <path d="M172 138 L172 134 A3 3 0 0 1 178 134 L178 138" 
              stroke="hsl(var(--security-accent))" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse-glow" />
              
        {/* Security scan lines */}
        <line x1="160" y1="128" x2="190" y2="128" 
              stroke="hsl(var(--security-accent))" 
              strokeWidth="2"
              opacity="0.9"
              className="animate-scan" />
        <line x1="160" y1="152" x2="190" y2="152" 
              stroke="hsl(var(--security-primary))" 
              strokeWidth="2"
              opacity="0.7"
              className="animate-scan" 
              style={{ animationDelay: '0.5s' }} />
        
        {/* Protection barriers */}
        <circle cx="175" cy="140" r="20" 
                stroke="hsl(var(--security-primary))" 
                strokeWidth="1.5" 
                fill="none" 
                opacity="0.6" 
                strokeDasharray="3,3"
                className="animate-rotate-slow" />
        <circle cx="175" cy="140" r="28" 
                stroke="hsl(var(--security-accent))" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.4" 
                strokeDasharray="5,5"
                className="animate-rotate-slow" 
                style={{ animationDirection: 'reverse', animationDelay: '0.3s' }} />
      </g>
    </g>
  );

  const renderAutomationAnimation = () => (
    <g>
      {/* Automation Gear System - inspired by reference */}
      <g style={{ transformOrigin: '175px 140px' }}>
        {/* Main central gear */}
        <g className="animate-rotate-slow">
          <circle cx="175" cy="140" r="12" 
                  stroke="hsl(var(--automation-primary))" 
                  strokeWidth="3" 
                  fill="hsl(var(--automation-primary) / 0.1)" 
                  className="animate-pulse-glow" />
          {/* Gear teeth */}
          <rect x="173" y="120" width="4" height="6" fill="hsl(var(--automation-primary))" />
          <rect x="185" y="138" width="6" height="4" fill="hsl(var(--automation-primary))" />
          <rect x="173" y="154" width="4" height="6" fill="hsl(var(--automation-primary))" />
          <rect x="159" y="138" width="6" height="4" fill="hsl(var(--automation-primary))" />
          <rect x="183" y="130" width="4" height="4" fill="hsl(var(--automation-primary))" />
          <rect x="163" y="130" width="4" height="4" fill="hsl(var(--automation-primary))" />
          <rect x="183" y="146" width="4" height="4" fill="hsl(var(--automation-primary))" />
          <rect x="163" y="146" width="4" height="4" fill="hsl(var(--automation-primary))" />
        </g>
        
        {/* Data flow connections */}
        <g className="animate-pulse-glow">
          <circle cx="155" cy="125" r="3" fill="hsl(var(--automation-secondary))" />
          <circle cx="195" cy="125" r="3" fill="hsl(var(--automation-secondary))" />
          <circle cx="155" cy="155" r="3" fill="hsl(var(--automation-secondary))" />
          <circle cx="195" cy="155" r="3" fill="hsl(var(--automation-secondary))" />
        </g>
        
        {/* Circuit connections */}
        <path d="M155 125 L163 132 M195 125 L187 132 M155 155 L163 148 M195 155 L187 148" 
              stroke="hsl(var(--automation-accent))" 
              strokeWidth="2.5" 
              strokeDasharray="3,2"
              className="animate-automation-flow" />
        
        {/* Data streams */}
        <path d="M145 140 L158 140 M192 140 L205 140" 
              stroke="hsl(var(--automation-secondary))" 
              strokeWidth="3" 
              strokeDasharray="8,4"
              opacity="0.9"
              className="animate-automation-flow" />
        <path d="M175 120 L175 128 M175 152 L175 160" 
              stroke="hsl(var(--automation-accent))" 
              strokeWidth="3" 
              strokeDasharray="8,4"
              opacity="0.9"
              className="animate-automation-flow" 
              style={{ animationDelay: '0.4s' }} />
              
        {/* Processing indicators */}
        <circle cx="145" cy="140" r="2.5" fill="hsl(var(--automation-secondary))" className="animate-float" />
        <circle cx="205" cy="140" r="2.5" fill="hsl(var(--automation-secondary))" className="animate-float" style={{ animationDelay: '0.6s' }} />
        <circle cx="175" cy="120" r="2.5" fill="hsl(var(--automation-accent))" className="animate-float" style={{ animationDelay: '0.3s' }} />
        <circle cx="175" cy="160" r="2.5" fill="hsl(var(--automation-accent))" className="animate-float" style={{ animationDelay: '0.9s' }} />
      </g>
    </g>
  );

  const renderHyphen = () => (
    <g className={currentAnimation === 'hyphen' ? 'animate-pulse-glow' : ''}>
      {/* Central hyphen - matching exact logo cyan color */}
      <rect x="160" y="137.5" width="30" height="5" rx="2.5" fill="#00D4FF" 
            className={currentAnimation === 'hyphen' ? 'animate-pulse-glow' : ''} />
      {/* Bright glow effect */}
      <rect x="160" y="137.5" width="30" height="5" rx="2.5" fill="#00D4FF" 
            opacity="0.7"
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
          {/* Triangle gradient - matching exact logo */}
          <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="30%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          
          {/* Hyphen gradient - bright cyan */}
          <linearGradient id="hyphenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#00E4FF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          
          <linearGradient id="hyphenGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#00E4FF" />
            <stop offset="100%" stopColor="#00D4FF" />
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
      
      {/* Animated text that comes from behind - Fixed positioning */}
      <div className={`absolute top-1/2 left-[320px] transform -translate-y-1/2 transition-all duration-1000 ${showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'}`}>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          hyphenedge
        </h1>
      </div>
    </div>
  );
};

export default AnimatedTriangle;
