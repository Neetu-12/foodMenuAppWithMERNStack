import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';
// import images from '../images/img1.png'

export default function Signup() {
  const [name, setName] = useState("");
  // const [phoneNo, setphoneNo] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    let data = { name, email, password }
    console.log(name, email, password);

    axios.post("http://localhost:4000/register", data)
      .then((res) => {
        // console.log(res.data, "========");
        if (res.data.message === "User registered successfully") {
          alert("Registered successfully.");
          navigate("/Signin");
        } else {
          alert("Already registered, kindly try with another account!");
        }
      })
      .catch((err) => {
        window.location.reload();
        console.log(err);
        alert(err.response?.data?.message || "Something went wrong");
      });

  }

  return (
    <div className='Signup-main'>
      <div className='Inner-signup-content'>
        <form className='signup-container'>
          <h1 >Signup</h1>
          <div className="fname">
            <label>
              Name:
              <input type="text" onChange={(e) => { setName(e.target.value) }} />
            </label>
          </div>

          {/* <div className="fname">
            <label>
              Phone:
              <input type="text" onChange={(e) => { setphoneNo(e.target.value) }} />
            </label>/
          </div> */}

          <div className="fname">
            <label>
              Email:
              <input type="email" onChange={(e) => { setemail(e.target.value) }} />
            </label>
          </div>

          <div className="fname">
            <label>
              Password:
              <input type="password" onChange={(e) => { setpassword(e.target.value) }} />
            </label>
          </div>
          <button type="submit" onClick={submit}>submit</button>
          <div className='img'>
            {/* <img src={images} alt="something went wrong." /> */}
          </div>
        </form>
      </div>
    </div>

  );
}
