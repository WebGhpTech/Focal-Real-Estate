import { Link } from 'react-router-dom';
import { routes } from '../router';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8">
      <div className="navbar flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="-m-1.5 p-1">
            <span className="sr-only">FOCAL Real Estate</span>
            <img className="h-10 w-auto" src="./src/assets/fre-logo-color.svg" alt="FOCAL Real Estate" />
          </a>
        </div>
        <ul className="navmenu flex flex-1 justify-center">
          {routes
            .filter((route) => route.title !== 'Home')
            .map((route, index) => (
              <li className="mr-8 text-md leading-8" key={index}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
        </ul>

        <div className="flex-shrink-0">
          <a href="" className="rounded-md p-3 text-sm font-semibold text-focal-blue border border-gray-300">
            Call Us Now! (07) 3208 6222
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
