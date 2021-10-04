import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  /*   Link,
    useRouteMatch,
    useParams */
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
// import Courses from './Components/Courses/Courses';
// import Teachers from './Components/Teachers/Teachers';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import AllCourses from './Components/AllCourses/AllCourses';
import AllTeachers from './Components/AllTeachers/AllTeachers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <AllCourses></AllCourses>
          </Route>
          <Route path="/teachers">
            <AllTeachers></AllTeachers>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
