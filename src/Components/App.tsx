import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home, BlogDir} from "./Pages/Pages";
import {Header} from "./Header";
import '../stylesheets/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/blog" exact component={BlogDir}/>
    </Router>
  );
}
export default App;
