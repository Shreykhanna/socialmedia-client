import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//Components
import Navbar from './components/NavBar.js'
import AuthRoute from './util/AuthRoute.js'
//Redux
import {Provider} from 'react-redux'
import store from './redux/store'


//MaterialUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import jwtDecode from 'jwt-decode'
import home from'./pages/home.js'
import login from './pages/login.js'
import signup from './pages/signup.js'
const theme=createMuiTheme({
  palette:{
    primary:{
      light:'#33c9dc',
      main:'#00bcd4',
      dark:'#008394',
      contrastText:'#fff'
    },
    secondary:{
      light:'#ff6333',
      main:'#ff3d00',
      dark:'#b22a00',
      contrastText:'#fff'
    }
  },
  typography:{
    useNextVariants:true
  }
})
let authenticated
const token=localStorage.FBIDToken;
if(token){
const decodeToken=jwtDecode(token);
if(decodeToken.exp*1000<Date.now()){
  window.location.href="/login"
  authenticated=false;
}else{
  authenticated=true;
}
}
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Provider store={store}>
    <Router>
    <Navbar/>
    <div class="container">
      <Switch>
        <Route exact path='/' component={home}/>
        <AuthRoute exact path='/login' component={login} authenticated={authenticated}/>
        <AuthRoute exact path='/signup' component={signup} authenticated={authenticated}/>
      </Switch>
      </div>
    </Router>
    </Provider>
    </MuiThemeProvider>
  );
}

export default App;
