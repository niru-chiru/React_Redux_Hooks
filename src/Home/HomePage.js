import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { searchAction } from "../actions/searchAction";
import TableView from "./TableView";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "10px"
  }
}));

const HomePage = props => {
  const classes = useStyles();
  const { userAuth, handleSearchAction, searchResult, isLoading } = props;

  const handleSearch = () => {
    handleSearchAction();
  };

  useEffect(() => {
    if (!userAuth) {
      props.history.push("/");
    }
  }, [userAuth]);

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={e => handleSearch()}>
        SEARCH
      </Button>
      {isLoading && <CircularProgress />}
      {searchResult && <TableView searchResult={searchResult} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userAuth: state.login.isLoggedIn,
    searchResult: state.search.searchresult,
    isLoading: state.search.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchAction: () => dispatch(searchAction())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
