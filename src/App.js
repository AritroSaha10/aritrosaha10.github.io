import React, { lazy, Suspense } from "react";
import './App.css';

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Loading from "./pages/Loading";

// Pages with lazy loading
const TopHeader = lazy(() => import("./pages/topHeader"));
const Home = lazy(() => import("./pages/introduction"));
const FeaturedWorks = React.lazy(() => import("./pages/featuredWorks"));
const Works = React.lazy(() => import("./pages/works"));
const Contact = React.lazy(() => import("./pages/contact"));
const Page404 = React.lazy(() => import("./pages/Page404"));
// const AboutMe = React.lazy(() => import("./pages/aboutMe"));

function App() {
  return (
    <div className="App">
      <div className="newPortfolioAd">
        <p>Check out my new portfolio here: <a href="https://aritrosaha.vercel.app">aritrosaha.vercel.app</a></p>
      </div>
      <Router>
        <div className="mainContent">
          <Switch>
            <Route path="/" exact>
              <Suspense fallback={<Loading />}>
                <TopHeader />
                <Header />
                <Home />

                <section id="projects">
                  <FeaturedWorks />
                  <Works />
                </section>

                <Contact />
              </Suspense>
            </Route>

            {/*
            <Route path="/about" exact>
              <Suspense fallback={<h2>Loading...</h2>}>
                  <Header />
                  <AboutMe />
                </Suspense>
            </Route>
            */}

            <Route path="*">
              <Suspense fallback={<h2>Loading...</h2>}>
                <Header />
                <Page404 />
              </Suspense>
            </Route>

          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
