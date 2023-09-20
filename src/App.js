import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import NewsSinglePost from "./pages/NewsSinglePost";
import SearchResults from "./pages/SearchResults";
import ServiceInside from "./pages/ServiceInside";
import page404 from "./pages/404";
import UserInterface from "./pages/UserInterface";

function App() {
  useEffect(() => {
    const web = document.querySelector("iframe");
    if (web != null) {
      document.querySelector("iframe").remove();
    }
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={Home}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/about-us"}`}
          component={AboutUs}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/news"}`}
          component={News}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/news-single-post"}`}
          component={NewsSinglePost}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/search-results"}`}
          component={SearchResults}
        />
        <Route exact path={"/product:id"} component={ServiceInside} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/ui"}`}
          component={UserInterface}
        />
        <Route exact component={page404} />
      </Switch>
    </Router>
  );
}

export default App;
