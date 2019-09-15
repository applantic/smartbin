import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import BinMap from "./components/BinMap";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ReturnWaste from "./components/ReturnWaste";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import {withStyles} from '@material-ui/core/styles';
import MainAppBar from './components/AppBar';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import COLORS from './variables/colors';
import Fonts from "./components/Fonts";
import Profile from "./components/Profile";
import ReactGA from 'react-ga';
import EkoTips from "./components/EkoTips";
import TradePage from "./components/TradePage";
ReactGA.initialize('UA-148040080-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const styles = theme => ({
  root: {
    paddingBottom: '56px',
  },
  fontLoading: {
    opacity: 0,
    transition: 'opacity 0.5s'
  },
  fontLoaded: {
    opacity: 1
  }
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

function App({classes}) {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    Fonts().then(() => setIsFontLoaded(true));
  });

  return (
    <div className={`app ${isFontLoaded ? classes.fontLoaded : classes.fontLoading}`}>
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Router>
            <MainAppBar header="SMART BIN"/>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/login/" component={Login}/>
            <Route path="/dashboard/" component={Dashboard}/>
            <Route path="/return/" component={ReturnWaste}/>
            <Route path="/map/" component={BinMap}/>
            <Route path="/tips/" component={EkoTips}/>
            <Route path="/profile/" component={Profile} />
            <Route path="/trade/:itemId" component={TradePage}/>
            <SimpleBottomNavigation/>
          </Router>
        </div>
      </MuiThemeProvider>
    </div>
  );

}

export default withStyles(styles)(App);
