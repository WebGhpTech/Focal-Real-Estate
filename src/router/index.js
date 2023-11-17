import Home from '../pages/Home';
import About from '../pages/About';
import Rent from '../pages/Rent';
import Appraisal from '../pages/Appraisal';
import Buy from '../pages/Buy';
import Leased from '../pages/Leased';
import Sold from '../pages/Sold';
import Contact from '../pages/Contact';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home,
  },
  {
    path: '/buy',
    title: 'Buy',
    component: Buy,
  },
  {
    path: '/appraisal',
    title: 'Sell',
    component: Appraisal,
  },
  {
    path: '/rent',
    title: 'Rent',
    component: Rent,
  },
  {
    path: '/about',
    title: 'About',
    component: About,
  },
  // {
  //   path: '/leased',
  //   title: 'Leased',
  //   component: Leased,
  // },
  // {
  //   path: '/sold',
  //   title: 'Sold',
  //   component: Sold,
  // },
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
