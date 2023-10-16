import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Welcome from './pages/welcome/Welcome';
import AuthDetails from './components/AuthDetails';
import Mortgage from './pages/mortgage/mortgage';
import Calculator from './pages/calculator/calculator';
import Expenses from './pages/expenses/Expenses';
import Locations from './pages/locations/locations';
import { auth } from './firebase';
import './App.css';
import NavBar from './components/NavBar';

// I create PrivateRoute Component to protect routes
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <PrivateRoute path="/welcome" component={Welcome} exact />
        <PrivateRoute path="/expenses" component={Expenses} exact />
        <PrivateRoute path="/calculator" component={Calculator} exact />
        <PrivateRoute path="/mortgage" component={Mortgage} exact />
        <PrivateRoute path="/locations" component={Locations} exact />


        <AuthDetails />
        <Redirect from="/" to="/sign-in" />
      </div>
    </Router>
  );
}

export default App;
