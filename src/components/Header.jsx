import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const Header = () => {
  const isMobile = window.innerWidth <= 768;

  return <header>{isMobile ? <MobileNavigation /> : <Navigation />}</header>;
};

export default Header;
