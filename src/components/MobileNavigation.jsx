import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../router';

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:hidden">
      <div className="fixed inset-0 bg-white z-40 shadow-lg" style={{ display: isMenuOpen ? 'block' : 'none' }}>
        <div className="flex justify-end p-4">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={handleMenuToggle}>
            <span className="sr-only">Close menu</span>X
          </button>
        </div>
        <ul className="flex flex-col items-center">
          {routes
            .filter((route) => route.title !== 'Home')
            .map((route, index) => (
              <li className="text-md leading-8" key={index}>
                <Link to={route.path} onClick={handleMenuToggle}>
                  {route.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-30" onClick={handleMenuToggle} style={{ display: isMenuOpen ? 'block' : 'none' }}></div>
      <div className="flex items-center justify-between p-6 pl-3 bg-white">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">FOCAL Real Estate</span>
          <img className="h-8 w-auto" src="./fre-logo-color.svg" alt="FOCAL Real Estate" />
        </a>
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md text-gray-400" onClick={handleMenuToggle}>
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavigation;
