import React, { useState } from "react";
import { connect } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Login from "./LoginComponent";
import { loginAction } from '../actions/loginAction';
import { withRouter } from 'react-router-dom';

const LoginContainer = props => {
  const { submitUserData } = props;
  const [loginVal, setLoginVal] = useState({
    userName: null,
    password: null
  });

  const handleChange = (name) => (event) => {
    setLoginVal({...loginVal, [name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('usename:', loginVal.userName);
    submitUserData(loginVal);
    props.history.push('/home');
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Login loginVal={loginVal} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    submitUserData: (postData) => dispatch(loginAction(postData))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginContainer));
