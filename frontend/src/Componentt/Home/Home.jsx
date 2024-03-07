import React from 'react'
import './home.css'
import snacks from '../images/fooditems.png'
import breakfast from '../images/fooditems.png'
import lunch from '../images/lunch.png'
import dinner from '../images/dinner.png'
// import { useGlobalContext } from '../Context/context'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigation = useNavigate();
  // const data = useGlobalContext();
  const foodtype = (type) => {
    if (sessionStorage.getItem("foodtype")) {
      sessionStorage.removeItem("foodtype")
      sessionStorage.setItem("foodtype", type)
      navigation("../Dynamic")
    } else {
      sessionStorage.setItem("foodtype", type)
    }
    // data.setfoodValidator(type)
  }
  return (
    <div className="homecontainer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div className="slot" onClick={() => { foodtype("breakfast") }}>
        <div className='breakfast'>
          <img src={breakfast} alt="something went wrong!" className='img1' />
        </div>
        <div className='main-span'>
          <strong>*Breakfast:-*</strong>
          <span className='span1'> A balanced breakfast typically includes protein, fiber, and a range of nutrients. If you’re looking for a healthy morning meal, try easy options like eggs, whole wheat toast with toppings, nuts, and green tea. Breakfast is a great way to start your day. A nutritious breakfast can provide long-lasting energy and keep you full for hours.</span>
        </div>
      </div>

      <div className="slot" onClick={() => { foodtype("Snacks") }}>
        <div className='main-span'>
          <span className='span1'><strong>*Snack:-*</strong> Everyone knows what a snack is: It’s that thing that happens between meals, that thing you didn’t have to prep or cook or otherwise expend any meaningful effort to propel into your mouth. It’s that thing that came out of a bag.
          </span>
        </div>
        <div className='food-img'>
          <img src={snacks} alt="something went wrong!" className='img1' />
        </div>
      </div>

      <div className="slot" onClick={() => { foodtype("lunch") }}>
        <div className='food-img'>
          <img src={lunch} alt="something went wrong!" className='img1' />
        </div>
        <div className='main-span'>
          <span className='span1'><strong>*Lunch:-*</strong> Any light meal or snack. a restaurant or lunchroom: Let's eat at the dairy lunch. to eat lunch: We lunched quite late today. to provide lunch for: They lunched us in regal fashion. out to lunch, Slang. not paying attention or tending to business; negligent: You must have been out to lunch when you wrote that weird report.</span>
        </div>
      </div>

      <div className="slot" onClick={() => { foodtype("Dinner") }}>
        <div className='main-span'>
          <span className='span1'><strong>*Dinner:-*</strong> The word “Dinner” is a noun which means it’s only a name that specifies a time when we need to take our meal. According to the Oxford Dictionary, the word ‘dinner’ means the chief or main meal, taken in the midday or the evening. The word also means a formal evening meal, typically in honor of a person or event.</span>
        </div>
        <div className='food-img'>
          <img src={dinner} alt="something went wrong!" className='img1' />
        </div>
      </div>

    </div>
  )
}
