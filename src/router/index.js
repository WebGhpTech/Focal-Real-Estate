import Home from '../pages/Home';

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
    component: Home,
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
