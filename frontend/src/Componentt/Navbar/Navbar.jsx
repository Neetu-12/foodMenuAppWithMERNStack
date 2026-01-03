import React from 'react';
import './navbar.css';
import { useGlobalContext } from '../Context/context';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const validator = useGlobalContext();

  const logout = () => {
    if (localStorage.getItem("SetData")) {
      localStorage.removeItem("SetData");

      console.log({ ...validator.multiple, userName: "" },"before setmultiple");
      validator.setmultiple({ ...validator.multiple, userName: "" });
      console.log({ ...validator.multiple, userName: "" },"after setmultiple");

      alert("You have been logged out!");
      navigate("/foodMenuAppWithMERNStack/Signin");
    }
  };

  // const selectMenu = (foodtype) => {
  //   sessionStorage.setItem("foodtype", foodtype);
  //   navigate("/foodMenuAppWithMERNStack/Dynamic");
  // };

  return (
    <div className='Navbar'>
      <div className="Navbar-Content">
        <div className="main-home-page">
          <Link to="/foodMenuAppWithMERNStack" className="home-page">Home</Link>
        </div>

        <div className='links'>
          {validator.multiple.userName ? (
            <>
              <button className='logout-btn nav1' onClick={logout}>
                Logout
              </button>
              <h4 className='userName'>{validator.multiple.userName}</h4>
            </>
          ) : (
            <>
              <Link to="/foodMenuAppWithMERNStack/Signup" className='nav1'>Signup</Link>
              <Link to="/foodMenuAppWithMERNStack/Signin" className='nav1'>Signin</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
