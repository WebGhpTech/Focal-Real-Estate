import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import NavigationRoute from './components/NavigationRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<NavigationRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
