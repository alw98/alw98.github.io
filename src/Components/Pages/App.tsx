import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import * as Pages from "./Pages";
import {Header} from "../HeaderComponents/Header";
import {Theme} from "../../Models/Theme";
import '../../stylesheets/App.css';

class App extends React.Component<{}, {}>{
  render(){
    return (
        <Router basename='/'>
            <Header App={this}/>
            <div className={Theme + " app-container"}>
              <Route path="/" exact component={Pages.Home}/>
              <Route path="/blog" exact component={Pages.BlogDir}/>
              <Route path="/blog/2" exact component={Pages.Blog2}/>
              <Route path="/blog/3" exact component={Pages.Blog3}/>
              <Route path="/blog/4" exact component={Pages.Blog4}/>
              <Route path="/blog/5" exact component={Pages.Blog5}/>
              <Route path="/blog/6" exact component={Pages.Blog6}/>
              <Route path="/blog/7" exact component={Pages.Blog7}/>
              <Route path="/automata" exact component={Pages.Automata}/>
              <button onClick={this.click}></button>
              <div className='background'></div>
            </div>
        </Router>
    );
  }
  click(){
    console.log(Pages);
  }
}
export default App;
