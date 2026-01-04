import React, { useEffect, useState } from 'react';
import './Dynamic.css';
import delivery from '../images/delivery.png';
import axios from 'axios';
import foodinfo from './foodInfo';
import { useNavigate } from 'react-router-dom';


export const Dynamic = () => {
  // const data = useGlobalContext();
  // console.log((window.location.href.split('/')));
  const navigate = useNavigate();
  const orderPage = (id) => {
    if (sessionStorage.getItem("orderId")) { // token get
      sessionStorage.removeItem("orderId") // remove 
      sessionStorage.setItem("orderId", JSON.stringify(id))
      navigate('/Order')
    }
    else {
      sessionStorage.setItem("orderId", JSON.stringify(id))
      navigate('/Order')
    }

  }
  const [itemListe, setitemListe] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/information/${sessionStorage.getItem("foodtype")}`).then((result) => {
      setitemListe(result.data)
    }).catch((err) => {
      setitemListe(foodinfo.filter(x => x.foodtype === sessionStorage.getItem("foodtype")));
      console.log(err);
    });
  }, [])

  return (

    <div className='delivry-photo'>
      <div className="deliveryman">
        <img src={delivery} alt="Smoething went wrong." className='image1' />
      </div>

      <div className="slot1">
        {itemListe.map((e) => {
          const { foodName, foodinfo, imageURL, price } = e;
          return (

            <div className="items" onClick={() => { orderPage(e) }}>
              {/* <h3>{itemListe.foodtype}</h3> */}
              <div className='food-img1'>
                <img src={imageURL} alt="something went wrong!" className='img2' />
              </div>
              <div className='main-span1'>
                <span className='span2'><strong>*{foodName}:-*</strong> {foodinfo}
                </span>
                <h2>Price :- {price}</h2>
              </div>
            </div>
          )
        })}
      </div>

    </div>

  )
}
