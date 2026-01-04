import React from 'react'
import { Menu } from './Componentt/Menu/Menu'
import Signup from './Componentt/Signup/Signup'
import { Navbar } from './Componentt/Navbar/Navbar'
import Signin from './Componentt/Signin/Signin'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './Componentt/Home/Home'
import { Logout } from './Componentt/Logout/Logout'
import { useGlobalContext } from './Componentt/Context/context';
import { Footer } from './Componentt/footer/Footer'
import { Dynamic } from './Componentt/Dynamic/Dynamic';
import { FoodInfo } from './Componentt/FoodInfo/FoodInfo'
import Order from './Componentt/Order/Order'

const App = () => {
  const data = useGlobalContext();
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/Signup" exact Component={Signup} />
            <Route path="/Signin" exact Component={Signin} />
            <Route path="/Logout" exact Component={Logout} />
            <Route path="/Dynamic" exact Component={Dynamic} />
            <Route path="/Menu" exact Component={Menu} />
            <Route path="/FoodInfo" exact Component={FoodInfo} />
            <Route path="/Order" exact Component={Order} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App