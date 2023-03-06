import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login';
import Home from './Home/Home';
import User from './Users/User';
import FODA from './FODA/FODA'
import LIFE from './LIFE/LIFE'
import LINE from './LINE/LINE'
import TIME from './TIME/TIME'
import EMOT from './EMOT/EMOT'
import ADET from './ADET/ADET'
import Result from './Result/Result'
import ResultLife from './ResultLife/ResultLife';
import ResultLINE from './ResultLINE/ResultLINE';
import ResultEMOT from './ResultEMOT/ResultEMOT';
import ResultTIME from './ResultTIME/ResultTIME';
import ResultADET from './ResultADET/ResultADET';
import ResultTEST from './ResultTEST/ResultTEST';


class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render = {(props) => <Login {...props}/> }>
          </Route>
          <Route path="/home/:Usr" render = {(props) => <Home {...props}/>} >
          </Route>
          <Route path="/results/:Usr" render = {(props) => <Result {...props}/>} >
          </Route>
          <Route path="/resultsLife/:Usr" render = {(props) => <ResultLife {...props}/>} ></Route>
          <Route path="/resultsLine/:Usr" render={(props) => <ResultLINE {...props}/>}></Route>
          <Route path="/resultsEmot/:Usr" render={(props) => <ResultEMOT {...props}/>}></Route>
          <Route path="/resultsTime/:Usr" render={(props) => <ResultTIME {...props}/>}></Route>
          <Route path="/resultsAdet/:Usr" render={(props) => <ResultADET {...props}/>}></Route>
          <Route path="/resultsTest/:Usr" render={(props) => <ResultTEST {...props}/>}></Route>
          <Route path="/users/:Usr" render = {(props) => <User {...props}/>} >
          </Route>
          <Route path="/FODA/:Usr" render = {(props) => <FODA {...props}/>} >
          </Route>
          <Route path="/LIFE/:Usr" render = {(props) => <LIFE {...props}/>} >
          </Route>
          <Route path="/LINE/:Usr" render = {(props) => <LINE {...props}/>} >
          </Route>
          <Route path="/EMOT/:Usr" render = {(props) => <EMOT {...props}/>} >
          </Route>
          <Route path="/TIME/:Usr" render = {(props) => <TIME {...props}/>} >
          </Route>
          <Route path="/ADET/:Usr" render = {(props) => <ADET {...props}/>} >
          </Route>
        </Switch>
    </Router>
    );
  }
}
export default Main;
