import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./router";
import { connect } from 'react-redux';
import { logoutAction } from './actions/loginAction';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = props => {
  const classes = useStyles();
  const { userAuth, userLogout} = props;

  function handleLogout(){
    userLogout();
  }

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Test Application
          </Typography>
          {userAuth && 
          <>
            <LockOutlinedIcon />
            <Button color="inherit" onClick={e => handleLogout()}>Logout</Button>
          </>
          }
        </Toolbar>
      </AppBar>
      <Switch>
        {routes.map(route => (
          <Route
            path={route.path}
            component={route.component}
            key={route.id}
            exact={route.exact && true}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    userAuth: state.login.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(logoutAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);