import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { routes } from '../router';

const SubMenu = ({ subRoutes, showSubMenu, closeSubMenu }) => {
  return (
    <ul className={`submenu absolute bg-white mt-2 p-4 rounded shadow-lg ${showSubMenu ? 'block' : 'hidden'}`}>
      {subRoutes.map((subRoute, index) => (
        <li key={index} className="text-md leading-8 hover:text-blue-700">
          <Link to={subRoute.path} onClick={closeSubMenu}>
            {subRoute.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const location = useLocation();

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(index === activeSubMenu ? null : index);
  };

  const closeSubMenu = () => {
    setActiveSubMenu(null);
  };

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8">
      <div className="navbar flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="-m-1.5 p-1">
            <span className="sr-only">FOCAL Real Estate</span>
            <img className="h-10 w-auto" src="./fre-logo-color.svg" alt="FOCAL Real Estate" />
          </a>
        </div>
        <ul className="navmenu flex flex-1 justify-center">
          {routes
            .filter((route) => route.title !== 'Home' && route.title !== 'Leased' && route.title !== 'Sold')
            .map((route, index) => (
              <li className="mr-8 text-md leading-8" key={index}>
                {route.subRoutes ? (
                  <>
                    <span onClick={() => handleSubMenuClick(index)} className={`cursor-pointer ${activeSubMenu === index ? 'active-link' : ''}`}>
                      {route.title} {activeSubMenu === index ? <span className="text-xs">&#9650;</span> : <span className="text-xs">&#9660;</span>}
                    </span>
                    <SubMenu subRoutes={route.subRoutes} showSubMenu={activeSubMenu === index} closeSubMenu={closeSubMenu} />
                  </>
                ) : (
                  <Link to={route.path} className={`${location.pathname === route.path ? 'active-link' : ''}`}>
                    {route.title}
                  </Link>
                )}
              </li>
            ))}
        </ul>

        <div className="flex-shrink-0">
          <a href="/" className="rounded-md p-3 text-sm font-semibold text-focal-blue border border-gray-300">
            <img src="./icons/telephone.png" className="inline mr-2" /> Call Us Now! (07) 3208 6222
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
