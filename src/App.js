import "./App.css"
import Header from "./components/Header.js"
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Quiz from "./components/Quiz"
import BuildYourChoreo from "./components/BuildYourChoreo"
import TopVideos from "./components/TopVideos"
import About from "./components/about"
import Ukraine from "./components/ukraine"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topvideos">
            <TopVideos />
          </Route>
          <Route path="/choreo">
            <BuildYourChoreo />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Ukraine />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
