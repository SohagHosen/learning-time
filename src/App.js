import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import { useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NotFound from "./components/404/NotFound";
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home courses={courses} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services courses={courses} />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
