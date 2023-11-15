import Home from '../pages/Home';
import About from '../pages/About';
import Rent from '../pages/Rent';
import Appraisal from '../pages/Appraisal';
import Buy from '../pages/Buy';
import Leased from '../pages/Leased';
import Contact from '../pages/Contact';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home,
  },
  {
    path: '/about',
    title: 'About',
    component: About,
  },
  {
    path: '/buy',
    title: 'Buy',
    component: Buy,
  },
  {
    path: '/rent',
    title: 'Rent',
    component: Rent,
  },
  {
    path: '/appraisal',
    title: 'Appraisal',
    component: Appraisal,
  },
  {
    path: '/leased',
    title: 'Leased',
    component: Leased,
  },
  {
    path: '/contact',
    title: 'Contact',
    component: Contact,
  },
];

const defaultRoute = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home,
  },
];

export { routes, defaultRoute };
