import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24'
  };

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <img
          src="/logo.svg"
          alt="Utkal Heritage - Authentic Odisha Handicrafts"
          className={`${sizeMap[size]} object-contain`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar and Header)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0 group">
        <img
          src="/logo.svg"
          alt="Utkal Heritage Emblem"
          className={`${sizeMap[size]} object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="text-left">
        <span className="font-display text-base sm:text-lg font-bold tracking-wider text-stone-900 block leading-tight">
          UTKAL HERITAGE
        </span>
        <span className="text-[10px] text-amber-800 font-semibold tracking-widest uppercase block">
          Authentic Odisha Handicrafts
        </span>
      </div>
    </div>
  );
};
