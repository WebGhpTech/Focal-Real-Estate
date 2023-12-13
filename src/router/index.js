import Home from '../pages/Home';
import About from '../pages/About';
import Rent from '../pages/Rent';
import Appraisal from '../pages/Appraisal';
import Buy from '../pages/Buy';
import Leased from '../pages/Leased';
import Sold from '../pages/Sold';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Terms from '../pages/Terms';
import Property from '../pages/Property';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    main: false,
    component: Home,
  },
  {
    path: '/buy',
    title: 'Buy',
    main: true,
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
    main: true,
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
    main: true,
    component: About,
  },
  {
    path: '/property/:id',
    title: 'Property',
    main: false,
    component: Property,
  },
  {
    path: '/leased',
    title: 'Leased',
    main: false,
    component: Leased,
  },
  {
    path: '/sold',
    title: 'Sold',
    main: false,
    component: Sold,
  },
  {
    path: '/contact',
    title: 'Contact Us',
    main: true,
    component: Contact,
  },
  {
    path: '/faq',
    title: 'FAQ',
    main: false,
    component: FAQ,
  },
  {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions',
    main: false,
    component: Terms,
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
