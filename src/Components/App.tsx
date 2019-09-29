import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home, BlogDir} from "./Pages/Pages";
import {Header} from "./Header";
import {Theme} from "../Models/Theme";
import '../stylesheets/App.css';

class App extends React.Component<{}, {}>{
  render(){
    return (
      <Router>
        <Header App={this}/>
        <div className={Theme + " app-container"}>
          <Route path="/" exact component={Home}/>
          <Route path="/blog" exact component={BlogDir}/>
        </div>
      </Router>
    );
  }
}
export default App;
