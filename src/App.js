import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Carousel from './Components/Carousel';
import Home from './Components/Home';
import Chicken from './Components/Chicken';
import Breakfast from './Components/Breakfast';




const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar />

       
      </BrowserRouter> */}
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/breakfast" component={Breakfast} exact />
          <Route path="/chicken" component={Chicken} exact />
        </Switch>
      </Router>
      {/* <Carousel /> */}
      {/* <Recipe /> */}
      {/* <Recipe1 /> */}
      {/* <Recipe2 /> */}
      {/* <Recipe3 /> */}
      {/* <Recipe4 /> */}
      {/* <Recipe5 /> */}
      {/* <Recipe6 /> */}
      {/* <Flex /> */}
    </div>
  )
}

export default App