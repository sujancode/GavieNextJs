import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z" fill="currentColor"/>
      <path d="M16 8L22.9282 12V20L16 24L9.07179 20V12L16 8Z" fill="white"/>
    </svg>
  );
};

export default Logo;