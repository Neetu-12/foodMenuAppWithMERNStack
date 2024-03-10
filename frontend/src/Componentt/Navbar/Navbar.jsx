import React from 'react';
import './navbar.css';
import { useGlobalContext } from '../Context/context';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const validator = useGlobalContext();
    // console.log(a.multiple.userName);
    const logout = () => {
        if (localStorage.getItem("SetData")) {
            localStorage.removeItem("SetData")
            validator.setmultiple({ ...validator.multiple, userName: "" })
        }
    }

    const selectMenu = (foodtype) => {
        if (sessionStorage.getItem("foodtype")) { // token get
            sessionStorage.removeItem("foodtype") // remove 
            sessionStorage.setItem("foodtype", foodtype)
            navigate('/foodMenuAppWithMERNStack/Dynamic')
        }
        else {
            sessionStorage.setItem("foodtype", foodtype)
            navigate('/foodMenuAppWithMERNStack/Dynamic')
        }
    }

    return (
        <>
            <div className='Navbar'>
                <div className="Navbar-Content">

                    <div className="main-home-page">
                        <a href='/foodMenuAppWithMERNStack' className="home-page">Home</a>
                    </div>

                    <div className='links'>

                        {/* <select name="cars" className="nav1">
                            <optgroup >
                                <option value="menu">
                                    <Link onClick={(e) => { navigate('/') }} className='nav1'/>Menu
                                </option>
                                    <option value="Lunch"><a href="/Dynamic">Lunch</a></option>
                               

                                <option value="dinner"><Link onClick={(e) => { selectMenu("Dinner") }} className='nav1'/>Dinner</option>
                                <option value="breakfast"><Link onClick={(e) => { selectMenu("breakfast") }} className='nav1'/>Breakfast</option>
                                <option value="Snacks"><Link onClick={(e) => { selectMenu("Snacks") }} className='nav1'/>Snacks</option>

                            </optgroup>
                        </select> */}
                        {validator.multiple.userName ? <>
                            <a className='nav1' onClick={() => { logout() }}>Logout</a>
                            <h3 className='userName'>{validator.multiple.userName}</h3>
                        </> : <>
                            <a href="/foodMenuAppWithMERNStack/Signup" className='nav1'>Signup</a>
                            <a href="/foodMenuAppWithMERNStack/Signin" className='nav1'>Signin</a>
                        </>}

                    </div>
                </div>
            </div>
        </>

    );
}
