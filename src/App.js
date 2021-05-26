import React from "react";
// router
import { Switch, Route, useLocation } from "react-router-dom";
// components
import Home from "./Components/Home";
import Portfolio from "./Components/portfolio/Porfolio";
import Services from "./Components/services/Services";
import ContactUs from "./Components/contact/ContactUs";
import PortfolioDetails from "./Components/portfolio/PortfolioDetails";
import Film from "./Components/film/Film";
import PageNotFound from "./Components/PageNotFound";
// global style
import GlobalStyles from "./Components/GobalStyles";
// animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/portfolio/:id">
            <PortfolioDetails />
          </Route>
          <Route path="/film">
            <Film />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route
          // path={`${
          //   !"/" ||
          //   !"/portfolio" ||
          //   !"/portfolio/:id" ||
          //   !"/film" ||
          //   !"/services" ||
          //   !"/contact"
          // }`}
          >
            <PageNotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
