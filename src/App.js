import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BinMap from "./components/BinMap";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ReturnWaste from "./components/ReturnWaste";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MainAppBar from './components/AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import COLORS from './variables/colors';


const styles  = theme => ({
  root: {
    paddingBottom: '56px',
  },
});

// use default theme
// const theme = createMuiTheme();

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
        main: COLORS.green,
        contrastText: COLORS.white,
      }
    }
  },
)

class App extends React.Component {

  render() {
    const {classes} = this.props;

    return (
      <div className="app">
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
        <MainAppBar header="SMART BIN"/>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login/" component={Login} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/return/" component={ReturnWaste} />
          <Route path="/map/" component={BinMap} />
          <SimpleBottomNavigation />
        </Router>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
