import { useState, useEffect } from 'react';

interface AnimatedTriangleProps {
  onAnimationComplete?: () => void;
}

const AnimatedTriangle = ({ onAnimationComplete }: AnimatedTriangleProps) => {
  const [currentAnimation, setCurrentAnimation] = useState<'brain' | 'security' | 'automation' | 'hyphen' | 'complete'>('brain');
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const sequence = [
      { state: 'brain', duration: 1500 },
      { state: 'security', duration: 1500 },
      { state: 'automation', duration: 1500 },
      { state: 'hyphen', duration: 1000 },
      { state: 'complete', duration: 800 },
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
      {/* Enhanced AI Neural Network Pattern */}
      <g className="animate-brain-pulse" style={{ transformOrigin: '175px 140px' }}>
        {/* Bright neural nodes */}
        <circle cx="160" cy="120" r="4" fill="#FF6B35" opacity="1" className="animate-pulse-glow" />
        <circle cx="190" cy="120" r="4" fill="#F7931E" opacity="1" className="animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
        <circle cx="150" cy="145" r="3.5" fill="#FF6B35" opacity="0.9" className="animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
        <circle cx="175" cy="145" r="5" fill="#FFD23F" opacity="1" className="animate-pulse-glow" style={{ animationDelay: '0.1s' }} />
        <circle cx="200" cy="145" r="3.5" fill="#FF6B35" opacity="0.9" className="animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
        <circle cx="165" cy="165" r="4" fill="#F7931E" opacity="1" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <circle cx="185" cy="165" r="4" fill="#FFD23F" opacity="1" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
        
        {/* Enhanced neural connections */}
        <path d="M160 120 L175 145 M190 120 L175 145 M150 145 L175 145 M200 145 L175 145 M175 145 L165 165 M175 145 L185 165" 
              stroke="#00D4FF" 
              strokeWidth="3" 
              opacity="0.9"
              strokeDasharray="6,3"
              className="animate-automation-flow" />
              
        {/* Central processing hub with glow */}
        <circle cx="175" cy="145" r="15" stroke="#00D4FF" strokeWidth="2" fill="none" opacity="0.8" className="animate-pulse-glow" />
        <circle cx="175" cy="145" r="8" stroke="#FFD23F" strokeWidth="1.5" fill="none" opacity="0.6" className="animate-pulse-glow" />
        
        {/* Animated thought particles */}
        <circle cx="168" cy="128" r="2" fill="#00D4FF" opacity="0.9" className="animate-float" />
        <circle cx="182" cy="128" r="1.5" fill="#FF6B35" opacity="0.8" className="animate-float" style={{ animationDelay: '0.5s' }} />
        <circle cx="175" cy="125" r="1.2" fill="#FFD23F" opacity="0.7" className="animate-float" style={{ animationDelay: '1s' }} />
      </g>
    </g>
  );

  const renderSecurityAnimation = () => (
    <g>
      {/* Enhanced Security Shield */}
      <g className="animate-security-wave" style={{ transformOrigin: '175px 140px' }}>
        {/* Main shield with gradient fill */}
        <path d="M175 110 L195 122 L195 150 L175 170 L155 150 L155 122 Z" 
              fill="#E74C3C" 
              opacity="0.8"
              stroke="#F39C12"
              strokeWidth="3" />
              
        {/* Secondary shield layer */}
        <path d="M175 115 L190 125 L190 147 L175 162 L160 147 L160 125 Z" 
              fill="#C0392B" 
              opacity="0.6"
              stroke="#F1C40F"
              strokeWidth="2" />
              
        {/* Enhanced lock mechanism */}
        <rect x="168" y="135" width="14" height="12" rx="2"
              fill="#F1C40F" 
              opacity="1" />
        <path d="M170 135 L170 130 A5 5 0 0 1 180 130 L180 135" 
              stroke="#E74C3C" 
              strokeWidth="3" 
              fill="none" />
              
        {/* Animated security scan beams */}
        <rect x="155" y="122" width="40" height="3" fill="#00D4FF" opacity="1" className="animate-scan" />
        <rect x="155" y="170" width="40" height="2" fill="#F39C12" opacity="0.9" className="animate-scan" style={{ animationDelay: '0.4s' }} />
        <rect x="155" y="140" width="40" height="2.5" fill="#00D4FF" opacity="1" className="animate-scan" style={{ animationDelay: '0.8s' }} />
        
        {/* Pulsing protection barriers */}
        <circle cx="175" cy="140" r="25" stroke="#E74C3C" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse-glow" />
        <circle cx="175" cy="140" r="35" stroke="#F39C12" strokeWidth="1.5" fill="none" opacity="0.5" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
      </g>
    </g>
  );

  const renderAutomationAnimation = () => (
    <g>
      {/* Enhanced Automation Gears and Data Flow */}
      <g style={{ transformOrigin: '175px 140px' }}>
        {/* Main central gear with vibrant colors */}
        <g className="animate-rotate-slow">
          <circle cx="175" cy="140" r="15" stroke="#9B59B6" strokeWidth="3" fill="none" opacity="1" />
          <circle cx="175" cy="125" r="3" fill="#E67E22" />
          <circle cx="190" cy="140" r="3" fill="#2ECC71" />
          <circle cx="175" cy="155" r="3" fill="#E67E22" />
          <circle cx="160" cy="140" r="3" fill="#2ECC71" />
          {/* Gear teeth */}
          <rect x="173" y="115" width="4" height="8" fill="#9B59B6" />
          <rect x="185" y="138" width="8" height="4" fill="#9B59B6" />
          <rect x="173" y="157" width="4" height="8" fill="#9B59B6" />
          <rect x="152" y="138" width="8" height="4" fill="#9B59B6" />
        </g>
        
        {/* Secondary orbital gears */}
        <g className="animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '4s' }}>
          <circle cx="155" cy="120" r="8" stroke="#E74C3C" strokeWidth="2.5" fill="none" opacity="0.9" />
          <circle cx="155" cy="112" r="2" fill="#F39C12" />
          <circle cx="163" cy="120" r="2" fill="#F39C12" />
          <circle cx="155" cy="128" r="2" fill="#F39C12" />
          <circle cx="147" cy="120" r="2" fill="#F39C12" />
        </g>
        
        <g className="animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
          <circle cx="195" cy="160" r="8" stroke="#2ECC71" strokeWidth="2.5" fill="none" opacity="0.9" />
          <circle cx="195" cy="152" r="2" fill="#27AE60" />
          <circle cx="203" cy="160" r="2" fill="#27AE60" />
          <circle cx="195" cy="168" r="2" fill="#27AE60" />
          <circle cx="187" cy="160" r="2" fill="#27AE60" />
        </g>
        
        {/* Enhanced data flow streams */}
        <path d="M145 140 L205 140" 
              stroke="#3498DB" 
              strokeWidth="4" 
              strokeDasharray="10,5"
              opacity="1"
              className="animate-automation-flow" />
        <path d="M175 110 L175 170" 
              stroke="#E67E22" 
              strokeWidth="4" 
              strokeDasharray="10,5"
              opacity="1"
              className="animate-automation-flow" 
              style={{ animationDelay: '0.3s' }} />
              
        {/* Data processing nodes */}
        <circle cx="145" cy="140" r="3.5" fill="#3498DB" className="animate-float" />
        <circle cx="205" cy="140" r="3.5" fill="#3498DB" className="animate-float" style={{ animationDelay: '0.5s' }} />
        <circle cx="175" cy="110" r="3.5" fill="#E67E22" className="animate-float" style={{ animationDelay: '1s' }} />
        <circle cx="175" cy="170" r="3.5" fill="#E67E22" className="animate-float" style={{ animationDelay: '1.5s' }} />
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
