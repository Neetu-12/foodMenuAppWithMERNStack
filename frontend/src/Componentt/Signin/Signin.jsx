import React, { useState } from 'react';
import axios from 'axios';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/context';

export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const Validate = useGlobalContext();
  const submit = (e) => {
    e.preventDefault(); //refresh na bar bar that's why used this function.
    let data = { email, password }

    axios
      .post("http://localhost:8000/user/login", data)
      .then((result) => {
        console.log(result);
        if (result.data === "somthing went wrong!" || result.data.token === "") {
          alert("somthing went wrong. Kindly check you data or register");
          navigate("/Signup");
        } else {
          localStorage.setItem("SetData", result.data.token); //send token in local storage for user's identification and validation.
          Validate.setstatus(true);
          // setuserdata(result.data.userdata);
          alert("login successfully");
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("somthing went wrong. Kindly check you data or register");
        navigate("/Signup");
      });
  }

  return (
    <div className='Signin-main'>
      <div className='Inner-signin-content'>
        <form className='signin-container'>
          <h1 >Signin</h1>

          <div className="fname-signin">
            <label>
              Email:
              <input type="email" onChange={(e) => { setemail(e.target.value) }} />
            </label>
          </div>

          <div className="fname-signin">
            <label>
              Password:
              <input type="password" onChange={(e) => { setpassword(e.target.value) }} />
            </label>
          </div>

          <button type="submit" onClick={submit} className='button2'>submit</button>
          <div className='img'>
            {/* <img src={images} alt="something went wrong." /> */}
          </div>
        </form>
      </div>
    </div>

  );
}
