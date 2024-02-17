import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../router';

const SubMenu = ({ subRoutes, showSubMenu, closeSubMenu }) => {
  return (
    <ul className={`mx-auto flex flex-col items-center justify-center text-center ${showSubMenu ? 'block' : 'hidden'}`}>
      {subRoutes.map((subRoute, index) => (
        <li key={index} className="text-md leading-10 hover:text-blue-700">
          <Link to={subRoute.path} onClick={closeSubMenu}>
            {subRoute.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(index === activeSubMenu ? null : index);
  };

  const closeSubMenu = () => {
    setActiveSubMenu(null);
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
        <ul className="flex flex-col items-center justify-center mt-20">
          {routes
            .filter((route) => route.main !== false)
            .map((route, index) => (
              <li className="mx-auto text-3xl leading-8 mb-5 text-center justify-center items-center" key={index}>
                {route.subRoutes ? (
                  <>
                    <span onClick={() => handleSubMenuClick(index)} className="cursor-pointer">
                      <span className="flex items-center">
                        {route.title}
                        <span className="text-xs ml-1">
                          {activeSubMenu === index ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-up"
                            >
                              <path d="m18 15-6-6-6 6" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-down"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          )}
                        </span>
                      </span>
                    </span>
                    <SubMenu subRoutes={route.subRoutes} showSubMenu={activeSubMenu === index} closeSubMenu={closeSubMenu} />
                  </>
                ) : (
                  <Link to={route.path} className={`${location.pathname === route.path ? 'active-link' : ''}`} onClick={handleMenuToggle}>
                    {route.title}
                  </Link>
                )}
              </li>
            ))}
        </ul>
      </div>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-30" onClick={handleMenuToggle} style={{ display: isMenuOpen ? 'block' : 'none' }}></div>
      <div className="flex items-center justify-between p-6 pl-3 bg-white">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">FOCAL Real Estate</span>
          <img className="h-10 w-auto" src="/fre-logo-color.svg" alt="FOCAL Real Estate" />
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
