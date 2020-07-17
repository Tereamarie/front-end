import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './routes/Routes';
import './App.css';
import SignUp from './components/sign-up-form/signUp';
import LogIn from './components/login-form/logIn';
import { MainContainer } from './AppStyles'
import NavBar from './components/dashboard/NavBar';

import { getUserInfo } from './store/actions/userAction';
import Strains from './components/strains/Strains';

function App({getUserInfo}) {

  const loggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (loggedIn) {
      getUserInfo(loggedIn);
    }
  }, [loggedIn, getUserInfo]);

  return (
    <>
    <NavBar />
    <MainContainer>
      <Route exact path = '/log-in' component = {LogIn} />
      <Route exact path = '/register' component = {SignUp} />
      <Route exact path="/strains" component={Strains} />
      <Routes />
    </MainContainer>
    </>
  );
};

const mapStateToProps = state =>{
  return {
      
  };
}

export default connect(mapStateToProps, {getUserInfo})(App);