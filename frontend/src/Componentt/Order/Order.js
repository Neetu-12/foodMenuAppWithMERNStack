import React, { useState } from "react";
import './Order.css';

export default function Order() {
  let data = JSON.parse(sessionStorage.getItem("orderId"));
  console.log(data);
  const [user, setuser] = useState("");
  const [foodinfo, setfoodinfo] = useState("");
  const [contactinfo, setcontactinfo] = useState("");
  const [lode, setlode] = useState('address');
  let billinglod = () => {
    setlode('loding')
    setTimeout(() => {
      setlode('billing')
    }, 1000);
  }
  return (
    <div>
      <div className="food">
        <form className="foodform foodformorder">
          {(lode === 'address') ? (
            <>
              <h1>Place your order</h1>
              <h1>{sessionStorage.getItem("foodtype")}</h1>
              <div className="user">
                <label>
                  <span className="tagname">Enter Your Name:</span>
                  <input
                    type="text"
                    onChange={(e) => setuser(e.target.value)}
                  />
                </label>
              </div>

              <div className="FoodInfo">
                <label>
                  <span className="tagname"> Enter Your Delivery Address:</span>
                  <input
                    type="text"
                    onChange={(e) => setfoodinfo(e.target.value)}
                  />
                </label>
              </div>

              <div className="contact">
                <label>
                  <span className="tagname"> Enter Your Contact number:</span>
                  <input
                    type="number"
                    onChange={(e) => setcontactinfo(e.target.value)}
                  />
                </label>
              </div>

              <button className="foodbutton" type="button" onClick={(e) => { ((foodinfo && contactinfo && user) ? billinglod() : (alert('Kindly fill your information ...!'))) }}>
                Order Now!
              </button>
            </>
          ) : (lode === 'loding') ? (
            <h1>Confirmation ... </h1>
          ) : (
            <div className="billing">
              <div className="billingcontainer">
                <h1 className="billing-heading">~Billing~</h1>
                <hr />
                <div className="billingInfouser">
                  <div className="userinf maintab">
                    <li className="userinfo">User Name</li>
                    .........
                    <h5 className="userinfo">{user}</h5>
                  </div>
                  <div className="maintab userloca">
                    <li className="userlocao">Location</li>
                    .........
                    <h5 className="userlocaoval">{foodinfo}</h5>
                  </div>
                  <div className="maintab userloca">
                    <li className="userlocao">Contact</li>
                    .........
                    <h5 className="userlocaoval">{contactinfo}</h5>
                  </div>
                </div>
                <hr />
                <div className="billingInfofood">
                  <div className="maintab foodinf">
                    <li className="foodinfo">Food Name</li>
                    .........
                    <h5 className="foodinfo">{data.foodName}</h5>
                  </div>
                  <div className="maintab foodinf">
                    <li className="foodinfo">Food Price</li>
                    .........
                    <h5 className="foodinfo">₹ {data.price}</h5>
                  </div>
                  <div className="maintab foodinf">
                    <li className="foodinfo">Delivery Charges</li>
                    .........
                    <h5 className="foodinfo">₹ {parseInt((data.price * 0.15))}</h5>
                  </div>
                  <div className="maintab foodinf">
                    <li className="foodinfo">Other Charges (GST 18%)</li>
                    .........
                    <h5 className="foodinfo">₹ {parseInt(data.price * 0.18)}</h5>
                  </div>
                  <div className="maintab foodinf">
                    <li className="foodinfo">Discount Allowance (10% off)</li>
                    .........
                    <h5 className="foodinfo">₹ {parseInt(data.price * 0.10)}</h5>
                  </div>
                </div>
                <hr />
                <div className="maintab finalbill">
                  <li className="finaltotal">Total</li>
                  .........
                  <h5 className="finaltotalval">₹ {parseInt((data.price * 0.15)) + parseInt((data.price * 0.18)) + parseInt((data.price * 0.10)) + parseInt((data.price))}</h5>
                  <hr />
                  <h4>Your order is confirmed!</h4>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}