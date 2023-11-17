import { useState, useEffect } from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">{isMobile ? <MobileNavigation /> : <Navigation />}</header>
    </div>
  );
};

export default Header;
