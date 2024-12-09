
import { Link } from 'react-router-dom';

const SubMenu = ({ subRoutes, showSubMenu, closeSubMenu }) => {
  return (
    <ul className={`submenu mx-auto flex flex-col items-center ${showSubMenu ? 'block' : 'hidden'}`}>
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

export default SubMenu;
