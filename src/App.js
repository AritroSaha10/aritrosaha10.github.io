import './App.css';

// Pages
import Home from "./pages/introduction";
import FeaturedWorks from "./pages/featuredWorks";
import Works from "./pages/works";
import Contact from "./pages/contact";
import AboutMe from "./pages/aboutMe";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="mainContent">
          <Switch>
            <Route path="/" exact>
              <Home />

              <section id="projects">
                <FeaturedWorks />
                <Works />
              </section>

              <Contact />
            </Route>
            
            <Route path="/about" exact>
              <AboutMe />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
