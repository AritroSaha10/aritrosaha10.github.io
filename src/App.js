import './App.css';

// Pages
import TopHeader from "./pages/topHeader";
import Home from "./pages/introduction";
import FeaturedWorks from "./pages/featuredWorks";
import Works from "./pages/works";
import Contact from "./pages/contact";
// import AboutMe from "./pages/aboutMe";
import Page404 from "./pages/Page404";

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
        <div className="mainContent">
          <Switch>
            <Route path="/" exact>
              <TopHeader />
              <Header />
              <Home />

              <section id="projects">
                <FeaturedWorks />
                <Works />
              </section>

              <Contact />
            </Route>

            {
            /*
            <Route path="/about" exact>
              <Header />
              <AboutMe />
            </Route>
            */
            } 

            <Route path="*">
              <Header />
              <Page404 />
            </Route>

          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
