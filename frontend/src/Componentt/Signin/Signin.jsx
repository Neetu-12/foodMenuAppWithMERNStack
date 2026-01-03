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
      .post("http://localhost:4000/login", data)
      .then((result) => {
        console.log(result.data.user.name, "login page with token");

        if (result.data.message === "Login successful") {
          localStorage.setItem("SetData", result.data.token);
          Validate.setstatus(true);
          // Store username in context
          Validate.setmultiple({ ...Validate.multiple, userName: result.data.user.name });

          alert("Login successful");
          navigate("/foodMenuAppWithMERNStack"); // Home or dashboard page
        }
        else {
          navigate("/foodMenuAppWithMERNStack/Signup");
          alert("Something went wrong. Kindly check your data or register");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Kindly check your data or register===========");
        // navigate("/foodMenuAppWithMERNStack/Signup");
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
