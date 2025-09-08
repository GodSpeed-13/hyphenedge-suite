import { useState } from 'react';
import AnimatedTriangle from './AnimatedTriangle';
import { Button } from './ui/button';

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse-glow" />
      
      {/* Main logo animation */}
      <div className="relative z-10 flex flex-col items-center">
        <AnimatedTriangle onAnimationComplete={() => setAnimationComplete(true)} />
        
        {/* Tagline that appears after animation */}
        <div className={`transition-all duration-1000 delay-500 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-3xl font-light text-center mt-8 mb-4 text-muted-foreground">
            Smarter IT. Safer Systems. Seamless Service.
          </h2>
          
          {/* Tool suite preview */}
          <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">hyphenview</h3>
              <p className="text-sm text-muted-foreground text-center">Visualize and analyze your systems</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">hyphenmon</h3>
              <p className="text-sm text-muted-foreground text-center">Monitor performance and security</p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                  <rect width="7" height="9" x="3" y="3" rx="1"/>
                  <rect width="7" height="5" x="14" y="3" rx="1"/>
                  <rect width="7" height="9" x="14" y="12" rx="1"/>
                  <rect width="7" height="5" x="3" y="16" rx="1"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">hyphendesk</h3>
              <p className="text-sm text-muted-foreground text-center">Streamline service management</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore the Suite
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;