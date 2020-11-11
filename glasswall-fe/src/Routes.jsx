import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SummaryTableForSupplyChain from "./pages/SummaryTableForSupplyChain";
import Layout from "./components/Layout";

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {/*<Route exact path="/" component={Home} />*/}
        <Route exact path="/" component={SummaryTableForSupplyChain} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
