import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';
import CustomLayout from './containers/Layout';
// passes the isAuthenticated to CustomLayout component with ...this.props
class App extends Component {
// call on dispatch through function inside componentDidMount
    componentDidMount() {
    this.props.onTryAutoSignup();
    }
    
    render() {
    return (
      <div>
       <Router>
          <CustomLayout {...this.props}> 
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    data: state.fetchReducer.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
