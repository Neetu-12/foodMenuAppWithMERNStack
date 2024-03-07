import React from 'react';
import './navbar.css';
import { useGlobalContext } from '../Context/context';

export const Navbar = () => {
    const validator = useGlobalContext();
    // console.log(a.multiple.userName);
    const logout = () => {
        if (localStorage.getItem("SetData")) {
            localStorage.removeItem("SetData")
            validator.setmultiple({ ...validator.multiple, userName: "" })
        }
    }
    return (
        <>
            <div className='Navbar'>
                <div className="Navbar-Content">

                    <div className="main-home-page">
                        <a href='./Home' className="home-page">Home</a>
                    </div>

                    <div className='links'>

                        <a href="./Menu" className='nav1'>Menu</a>
                        {/* <select name="cars" className="nav1">
                                <optgroup >
                                    <option value="volvo">Menu</option>
                                    <option value="saab">Lunch</option>
                                </optgroup>
                            </select> */}
                        {validator.multiple.userName ? <>
                            <a className='nav1' onClick={() => { logout() }}>Logout</a>
                            <h3 className='userName'>{validator.multiple.userName}</h3>
                        </> : <>
                            <a href="./Signup" className='nav1'>Signup</a>
                            <a href="./Signin" className='nav1'>Signin</a>
                        </>}

                    </div>
                </div>
            </div>
        </>

    );
}
