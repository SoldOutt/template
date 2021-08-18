import React from 'react'
import Style from './style'
import Offer1 from '../../assets/images/offer_1.jpg'
import Offer2 from '../../assets/images/offer_2.jpg'
const index = () => {
    return (
        <Style className="px-medium">
            <div className="text">
                <h3 className="text-dark">
                    Multiple options to make Your Ideas come true
                </h3>
                <p className="text-blur">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis voluptas ab sunt magnam laboriosam, voluptates
                    dolorem minima adipisci atque repellendus!
                </p>
                <button className="btn btn-medium bg-primary">
                    Get Started
                </button>
            </div>
            <div className="offer_image">
                <div className="offer_image-img">
                    <img src={Offer1} alt="" />
                    <img src={Offer2} className="second" alt="" />
                </div>
            </div>
        </Style>
    )
}

export default index
