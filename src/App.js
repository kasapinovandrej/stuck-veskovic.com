import React, { useRef, useState } from 'react';
import './main.scss';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Projekts from './Pages/Projects';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import Logo from './components/Logo';
import ScrollToTop from './components/Elements/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import projects from '../src/Data/dataProjects';

function App() {
  const location = useLocation();
  const history = useHistory();
  const revealRefs = useRef([])
  const [cardNumber, setCardNumber] = useState(null)
  revealRefs.current = []

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
    if (!revealRefs.current[cardNumber - 1]) return
    revealRefs.current[cardNumber - 1].scrollIntoView({ behavior: 'smooth' })
  }
  const toAboutUsScroll = (e) => {
    setCardNumber(e.target.alt)
    history.push('/leistungen')
  }
  return (
    <div className="App">
      <Logo />
      <ScrollToTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/leistungen' component={() => <Services func={addToRefs} />} />
          <Route path='/über-uns' component={AboutUs} />
          <Route path='/kontakt' component={ContactUs} />
          {projects.map(el => <Route path={`/projekte${el.path}`} key={el.id} render={() => <Projekts data={el} />} />)}
          <Route path='/' exact component={() => <Home func={toAboutUsScroll} />} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
