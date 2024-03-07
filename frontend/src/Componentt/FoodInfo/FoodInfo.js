import React, { useState } from 'react';
import './FoodInfo.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useGlobalContext } from '../Context/context';

export const FoodInfo = () => {

  const [foodName, setfoodName] = useState("");
  const [foodinfo, setfoodinfo] = useState("");
  const [foodtype, setfoodtype] = useState("");
  const [price, setprice] = useState("");
  const navigate = useNavigate();
  // const Validate = useGlobalContext();
  const [image, setimage] = useState("");

  const submit = () => {
    // e.preventDefault(); //refresh na bar bar that's why used this function.
    let fomeData = new FormData()
    fomeData.append("image", image)
    fomeData.append("user_id", "5")
    fomeData.append("foodName", foodName)
    fomeData.append("foodinfo", foodinfo)
    fomeData.append("foodtype", foodtype)
    fomeData.append("price", price)
    // fomeData = { foodName, foodinfo, foodtype, image }
    axios
      .post("http://localhost:8000/information", fomeData)
      .then((result) => {
        if (result.data == "Inserted!") {
          alert("Data inserted successfully!")
          navigate("/Home");
        }
        else {
          alert("Something went wrong please try again!")
        }
      })
      .catch(() => {
        alert("somthing went wrong. Kindly check you data or Foodinfo");
        navigate("/Signup");
      });
  }

  return (
    <div className='Signin-main'>
      <div className='Inner-foodinfo-content'>
        <form className='signin-container'>
          <h1 >FoodInfo</h1>

          <div className="fname-signin">
            <label>
              Food Name:
              <input type="text" onChange={(e) => { setfoodName(e.target.value) }} />

            </label>
          </div>

          <div className="fname-signin">
            <label>
              Food Type:
              <input type="text" onChange={(e) => { setfoodtype(e.target.value) }} />
            </label>
          </div>

          <div className="fname-signin">
            <label>
              Food Info:
              <input type="text" onChange={(e) => { setfoodinfo(e.target.value) }} />
            </label>
          </div>

          <div className="fname-signin">
            <label>
              Price:
              <input type="text" onChange={(e) => { setprice(e.target.value) }} />
            </label>
          </div>

          <div className="fname-signin">
            <label>
              Image:
              <input type="file" name='file' onChange={(e) => { setimage(e.target.files[0]) }} />
            </label>
          </div>

          <button type="button" onClick={submit} className='button2'>submit</button>
          <div className='img'>
          </div>
        </form>
      </div>
    </div>

  );
}
