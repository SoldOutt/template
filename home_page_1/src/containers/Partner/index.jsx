import React from 'react'
import Style from './style'
import Logo1 from '../../assets/images/logo1.png'
import Logo2 from '../../assets/images/logo2.png'
import Logo3 from '../../assets/images/logo3.png'
import Logo4 from '../../assets/images/logo4.png'
const index = () => {
    return (
        <Style>
            <div className="container bg-primary">
                <div className="contain">
                    <h2>Like them, for your Company too</h2>
                    <p className="text-blur">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquam natus animi aliquid neque, adipisci,
                        laudantium dignissimos maiores rerum consectetur
                        voluptate est voluptas rem!
                    </p>
                    <button className="btn btn-medium bg-secondary text-primary">
                        Get Started
                    </button>
                </div>
                <div className="logo">
                    <div className="box_logo">
                        <img src={Logo1} alt="" />
                    </div>
                    <div className="box_logo">
                        <img src={Logo2} alt="" />
                    </div>
                    <div className="box_logo">
                        <img src={Logo3} alt="" />
                    </div>
                    <div className="box_logo">
                        <img src={Logo4} alt="" />
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default index
