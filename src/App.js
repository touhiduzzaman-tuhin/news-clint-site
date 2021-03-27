import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddFakeData from "./components/AddFakeData/AddFakeData";
import CreateNews from "./components/CreateNews/CreateNews";
import Header from "./components/Header/Header";
import About from "./components/HeaderComponent/About";
import Blog from "./components/HeaderComponent/Blog";
import Contact from "./components/HeaderComponent/Contact";
import Work from "./components/HeaderComponent/Work";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import SingleNews from "./components/SingleNews/SingleNews";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/work'>
          <Work></Work>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/addFakeData'>
          <AddFakeData></AddFakeData>
        </Route>
        <Route path='/createNews'>
          <CreateNews></CreateNews>
        </Route>
        <Route path='/news/:id'>
          <SingleNews></SingleNews>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
