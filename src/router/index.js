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
    subRoutes: [
      {
        path: '/sold',
        title: 'Sold Properties',
      },
      {
        path: '/appraisal',
        title: 'Book Appraisal',
      },
    ],
  },
  {
    path: '/rent',
    title: 'Rent',
    component: Rent,
    subRoutes: [
      {
        path: '/rent',
        title: 'Properties for Rent',
      },
      {
        path: '/leased',
        title: 'Leased Properties',
      },
    ],
  },
  {
    path: '/about',
    title: 'About Us',
    component: About,
  },
  {
    path: '/leased',
    title: 'Leased',
    component: Leased,
  },
  {
    path: '/sold',
    title: 'Sold',
    component: Sold,
  },
  {
    path: '/contact',
    title: 'Contact Us',
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
