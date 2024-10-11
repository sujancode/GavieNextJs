import React from 'react';

interface GavieLogoProps {
  className?: string;
}

const GavieLogo: React.FC<GavieLogoProps> = ({ className = '' }) => {
  return (
    <svg
      width="95"
      height="26"
      viewBox="0 0 95 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12.9912 20.287C8.90796 20.287 5.75742 17.0535 5.75742 13.0324C5.75742 9.01131 8.86651 5.79858 12.9912 5.79858C15.3749 5.79858 17.7378 7.00077 18.7741 9.23931L16.3076 10.628C15.6029 9.3844 14.5251 8.63822 12.8669 8.63822C10.5247 8.63822 8.86651 10.5451 8.86651 13.0739C8.86651 15.6855 10.5454 17.5302 12.9912 17.5302C14.3592 17.5302 15.3541 17.1779 15.9967 16.5146L15.976 13.4262H18.9192V17.5302C17.9036 19.064 15.748 20.287 12.9912 20.287Z" fill="currentColor"/>
      <path d="M39.0812 20.287C37.4645 20.287 36.4696 19.4371 35.9307 17.7168L32.3448 6.04731H35.4539L38.6667 16.8462C38.7496 17.1157 38.8947 17.2608 39.1019 17.2608C39.3092 17.2608 39.4336 17.1157 39.5165 16.8462L42.7085 6.04731H45.8176L42.2318 17.7168C41.6928 19.4371 40.6979 20.287 39.0812 20.287Z" fill="currentColor"/>
      <path d="M47.5334 6.04731H50.5596V19.9968H47.5334V6.04731Z" fill="currentColor"/>
      <path d="M63.8291 19.9968H56.3258C54.3982 19.9968 53.652 19.0019 53.652 17.4059V8.65895C53.652 7.06295 54.3982 6.04731 56.3258 6.04731H63.7047V8.76258H56.6782V11.6644H63.2694V14.3797H56.6782V17.2815H63.8291V19.9968Z" fill="currentColor"/>
      <path d="M85.8926 6.04731H88.9188V19.9968H85.8926V6.04731Z" fill="currentColor"/>
      <path d="M26.6691 5.75743C28.2859 5.75743 29.2808 6.60725 29.8197 8.32761L33.4055 19.9971L30.2964 19.9971L27.0837 9.19816C27.0008 8.9287 26.8557 8.78361 26.6484 8.78361C26.4411 8.78361 26.3168 8.9287 26.2339 9.19816L23.0418 19.9971L19.9328 19.9971L23.5186 8.32761C24.0575 6.60725 25.0524 5.75743 26.6691 5.75743Z" fill="currentColor"/>
      <path d="M77.2321 5.75743C78.8489 5.75743 79.8438 6.60725 80.3827 8.32761L83.9685 19.9971L80.8594 19.9971L77.6467 9.19816C77.5638 8.92871 77.4187 8.78361 77.2114 8.78361C77.0041 8.78361 76.8798 8.92871 76.7969 9.19816L73.6049 19.9971L70.4958 19.9971L74.0816 8.32761C74.6205 6.60725 75.6154 5.75743 77.2321 5.75743Z" fill="currentColor"/>
    </svg>
  );
};

export default GavieLogo;