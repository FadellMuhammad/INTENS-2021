import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";
import Product from "./pages/product-description/Product";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Helmet defaultTitle="Intens">
        <title>PT Intens</title>
        <meta charSet="utf-8" />
      </Helmet>
      <Router>
        <Switch>
          <Route path="/" exact component={Layout(Main)} />
          <Route path="/product" exact component={Layout(Product)} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
