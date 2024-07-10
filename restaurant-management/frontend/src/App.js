import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import FeedbackPage from "./pages/FeedbackPage";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Restaurant Management System</h1>
        <Switch>
          <Route path="/orders" component={OrderPage} />
          <Route path="/feedback" component={FeedbackPage} />
          <Route path="/menu" component={MenuPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
