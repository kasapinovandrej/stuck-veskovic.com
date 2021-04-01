import './main.scss';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Projekts from './Pages/Projects';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import { Route, Switch, useLocation } from 'react-router-dom';
import Logo from './components/Logo';
import ScrollToTop from './components/Elements/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Logo />
      <ScrollToTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/leistungen' component={Services} />
          <Route path='/projekte' component={Projekts} />
          <Route path='/über-uns' component={AboutUs} />
          <Route path='/kontakt' component={ContactUs} />
          <Route path='/' exact component={Home} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
