import React from 'react';
import {Route} from 'react-router-dom';

import Formview from './containers/Formview';
import WrappedNormalLoginForm from "./containers/Login";
import WrappedRegistrationForm from "./containers/Signup";

const BaseRouter = () => (
    <div>
      <Route exact path="/" component={Formview} />{" "}
      <Route exact path="/login" component={WrappedNormalLoginForm} />{" "}
      <Route exact path="/signup" component={WrappedRegistrationForm} />{" "}


    </div>
  );
  
  export default BaseRouter;