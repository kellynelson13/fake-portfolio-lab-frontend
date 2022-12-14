import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route, Switch } from "react-router-dom";

function App() {

  const URL = "https://ga-fake-portfolio.herokuapp.com/"

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL}/>
        </Route>
        <Route path="/about">
          <About URL={URL}/>
        </Route>
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
