import { Link } from 'react-router-dom';
import { routes } from '../router';

const MobileNavigation = () => {
  return (
    <div>
      <label htmlFor="menu-toggle" className="menu-icon">
        Menu
      </label>

      <nav className="mobile-nav">
        <ul>
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigation;
