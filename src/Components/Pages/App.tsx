import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import {Home, 
        BlogDir,
        Blog2,
        Blog3,
        Blog4,
        Blog5,} from "./Pages";
import {Header} from "../HeaderComponents/Header";
import {Theme} from "../../Models/Theme";
import '../../stylesheets/App.css';

class App extends React.Component<{}, {}>{
  render(){
    return (
        <Router basename='/'>
            <Header App={this}/>
            <div className={Theme + " app-container"}>
              <Route path="/" exact component={Home}/>
              <Route path="/blog" exact component={BlogDir}/>
              <Route path="/blog/2" exact component={Blog2}/>
              <Route path="/blog/3" exact component={Blog3}/>
              <Route path="/blog/4" exact component={Blog4}/>
              <Route path="/blog/5" exact component={Blog5}/>
              <div className='background'></div>
            </div>
        </Router>
    );
  }
}
export default App;
