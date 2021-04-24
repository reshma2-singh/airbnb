import React from "react"
import './App.css';
import Header from "./Header"
import Home from "./Home"
import SearchPage from "./SearchPage"
import {BrowserRouter,Route,Switch} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Header/>
    <Switch>
    <Route exact path ="/" component={Home}/>
    <Route  exact path="/search" component={SearchPage}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
