import './main.scss';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Projekts from './Pages/Projects';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './components/Footer';
import Nav from './components/Navigation';
import { Route } from 'react-router-dom';
import Logo from './components/Logo';
import ScrollToTop from './components/Elements/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Logo />
      <ScrollToTop />
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/leistungen' exact component={Services} />
      <Route path='/projekte' exact component={Projekts} />
      <Route path='/über-uns' exact component={AboutUs} />
      <Route path='/kontakt' exact component={ContactUs} />
      <Footer />
    </div>
  );
}

export default App;
