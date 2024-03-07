import React, { useEffect, useState } from 'react'
import delivery from '../images/delivery.png'
import './Dynamic.css'
// import { useGlobalContext } from '../Context/context'
import axios from 'axios'

export const Dynamic = () => {
  // const data = useGlobalContext();
  // console.log((window.location.href.split('/')));
  const [itemListe, setitemListe] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/information/${sessionStorage.getItem("foodtype")}`).then((result) => {
      setitemListe(result.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  console.log(itemListe);

  return (

    <div className='delivry-photo'>
      <div className="deliveryman">
        <img src={delivery} alt="Smoething went wrong." className='image1' />
        {/* <button >add Items</button> */}
      </div>

      <div className="slot1">
        {itemListe.map((e) => {
          const { foodName, foodinfo, imageURL} = e;
          return (

            <div className="items">
              <div className='food-img1'>
                <img src={imageURL} alt="something went wrong!" className='img2' />
              </div>
              <div className='main-span1'>
                <span className='span2'><strong>*{foodName}:-*</strong> {foodinfo}
                </span>
              </div></div>
          )
        })}
      </div>

    </div>

  )
}
