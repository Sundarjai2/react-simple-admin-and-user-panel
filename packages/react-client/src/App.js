import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './config/react-apollo';

import Home from './components/Home';
import About from './components/About';
import SigninForm from './components/commoncomponent/SigninForm';
import SignupForm from './components/commoncomponent/SignupForm';
import EditUserForm from './components/admincomponent/Edit';

import './App.css';


export default function ModalGalleryExample() {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <ModalSwitch />
      </Router>
    </ApolloProvider>
  );
}

function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/home" children={<Home />} />
        <Route exact path="/about" children={<About />} />
        <Route exact path="/login" children={<SigninForm />} />
        <Route exact path="/signup" children={<SignupForm />} />
        <Route exact path="/show/:id" children={<EditUserForm />} />
      </Switch>
    </div>
  );
}
// let loggedIn = false;
// console.log(loggedIn)
// function requireAuth(nextState, replace) {
//   if (!loggedIn()) {
//     replace({
//       pathname: '/login'
//     })
//   }
// }






