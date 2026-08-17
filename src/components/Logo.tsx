import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showLink = true 
}) => {
  const sizeMap = {
    sm: { height: 32, boxSize: 30, textClass: 'text-base', subTextClass: 'text-base' },
    md: { height: 42, boxSize: 40, textClass: 'text-xl', subTextClass: 'text-xl' },
    lg: { height: 56, boxSize: 52, textClass: 'text-2xl sm:text-3xl', subTextClass: 'text-2xl sm:text-3xl' },
    xl: { height: 72, boxSize: 68, textClass: 'text-4xl sm:text-5xl', subTextClass: 'text-4xl sm:text-5xl' },
  };

  const current = sizeMap[size];

  const logoContent = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Textured Concrete Block Mark */}
      <div className="relative shrink-0" style={{ width: current.boxSize + 6, height: current.boxSize + 6 }}>
        {/* Background offset square (shifted bottom-left) */}
        <div 
          className="absolute left-0 bottom-0 bg-[#AFA89F] rounded-[2px]"
          style={{ width: current.boxSize * 0.82, height: current.boxSize * 0.82 }}
        />

        {/* Foreground textured dark marble/granite block */}
        <div 
          className="absolute right-0 top-0 overflow-hidden bg-[#181615] rounded-[2px] shadow-sm flex items-center justify-center"
          style={{ width: current.boxSize * 0.88, height: current.boxSize * 0.88 }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full opacity-70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Organic marble veins like the original logo */}
            <path
              d="M10,0 Q25,35 15,60 T35,90 Q40,100 50,100 T45,70 Q30,50 40,30 T20,0 Z"
              fill="#6B6259"
            />
            <path
              d="M60,0 Q50,25 70,45 T85,75 Q90,95 100,100 L100,60 Q80,40 75,20 L80,0 Z"
              fill="#5A524A"
            />
            <path
              d="M15,25 Q30,30 25,45 T10,55 Z"
              fill="#8C8276"
            />
            <path
              d="M65,70 Q80,85 70,95 T55,80 Z"
              fill="#7A7065"
            />
            <path
              d="M35,65 Q50,55 45,75 T30,85 Z"
              fill="#968C7F"
            />
            <circle cx="28" cy="18" r="3" fill="#8C8276" />
            <circle cx="75" cy="35" r="2.5" fill="#968C7F" />
            <circle cx="48" cy="88" r="2" fill="#7A7065" />
            <circle cx="85" cy="80" r="3" fill="#6B6259" />
          </svg>
        </div>
      </div>

      {/* Typography: LEVNÉ (black) / SKLEPY (graphite grey) */}
      <div className="flex flex-col leading-[0.88] tracking-tight font-black font-sans uppercase">
        <span 
          className={`text-[#141211] font-[900] tracking-[-0.03em] ${current.textClass}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          LEVNÉ
        </span>
        <span 
          className={`text-[#524B45] font-[900] tracking-[-0.03em] ${current.subTextClass}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          SKLEPY
        </span>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link to="/" className="inline-block hover:opacity-95 transition-opacity" title="LevnéSklepy.cz - Úvod">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
