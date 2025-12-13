import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean; // Kept for compatibility, but the text is part of the logo now
}

export default function Logo({ 
  className = "h-20 w-auto", 
}: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-full"
        aria-label="Divine's Wrist Wear Logo"
      >
        {/* Definitions for gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#C5A028" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0E0E0" />
            <stop offset="50%" stopColor="#9E9E9E" />
            <stop offset="100%" stopColor="#E0E0E0" />
          </linearGradient>
          <path 
            id="textCurve" 
            d="M 25 155 Q 100 190, 175 155" 
            fill="none" 
          />
        </defs>

        {/* Main Background Circle */}
        <circle cx="100" cy="100" r="95" fill="black" stroke="url(#goldGradient)" strokeWidth="4" />
        <circle cx="100" cy="100" r="85" stroke="url(#goldGradient)" strokeWidth="2" />

        {/* Wings - Left */}
        <path 
          d="M35 90 
             Q 20 70, 35 50 
             Q 45 60, 40 80
             M 40 85
             Q 30 65, 45 45
             Q 55 55, 50 80
             M 50 85
             Q 45 65, 60 50
             Q 65 60, 60 85" 
          fill="url(#goldGradient)" 
          stroke="url(#goldGradient)"
          strokeWidth="1"
        />
        {/* Simplified Wing Shape Left */}
        <path d="M30 100 C 20 70, 40 40, 70 60 C 60 70, 50 90, 55 110 Z" fill="url(#goldGradient)" />
        
        {/* Wings - Right (Mirrored) */}
        <path d="M170 100 C 180 70, 160 40, 130 60 C 140 70, 150 90, 145 110 Z" fill="url(#goldGradient)" />

        {/* Watch in Center */}
        {/* Strap Top */}
        <rect x="85" y="30" width="30" height="30" rx="2" fill="#1a1a1a" stroke="#333" />
        {/* Strap Bottom */}
        <rect x="85" y="140" width="30" height="20" rx="2" fill="#1a1a1a" stroke="#333" />
        
        {/* Watch Case Lugs */}
        <path d="M85 60 L85 50 L115 50 L115 60" fill="url(#silverGradient)" />
        <path d="M85 140 L85 150 L115 150 L115 140" fill="url(#silverGradient)" />

        {/* Watch Case Body */}
        <circle cx="100" cy="100" r="35" fill="#111" stroke="url(#silverGradient)" strokeWidth="4" />
        
        {/* Watch Face Details */}
        <circle cx="100" cy="100" r="30" fill="black" />
        {/* Hour Markers */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <line 
            key={angle}
            x1="100" y1="75" 
            x2="100" y2="78" 
            transform={`rotate(${angle} 100 100)`} 
            stroke="#E0E0E0" 
            strokeWidth="1" 
          />
        ))}
        
        {/* Hands */}
        <path d="M100 100 L100 80" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" /> {/* Hour */}
        <path d="M100 100 L115 100" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" /> {/* Minute */}
        <circle cx="100" cy="100" r="2" fill="#00BFFF" />

        {/* Crown */}
        <rect x="135" y="95" width="4" height="10" rx="1" fill="url(#silverGradient)" />

        {/* Ribbon Banner */}
        <path 
          id="ribbonPath"
          d="M 20 140 
             Q 100 180, 180 140 
             L 180 165 
             Q 100 205, 20 165 
             Z" 
          fill="url(#goldGradient)" 
          stroke="#B8860B"
          strokeWidth="1"
        />
        
        {/* Ribbon Ends (Folded part) */}
        <path d="M 20 140 L 10 130 L 10 155 L 20 165 Z" fill="#B8860B" />
        <path d="M 180 140 L 190 130 L 190 155 L 180 165 Z" fill="#B8860B" />

        {/* Text on Ribbon */}
        <text fontSize="14" fontWeight="bold" fill="black" letterSpacing="1" textAnchor="middle">
          <textPath href="#textCurve" startOffset="50%">
            DIVINE'S WRIST WEAR
          </textPath>
        </text>
      </svg>
    </div>
  );
}

