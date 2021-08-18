import React from 'react'
import Style from './style'
import Icon1 from '../../assets/images/icon1.png'
import Icon2 from '../../assets/images/icon2.png'
import Icon3 from '../../assets/images/icon3.png'
const index = () => {
    return (
        <Style className="px-medium">
            <div className="icon">
                <div className="box">
                    <img src={Icon1} alt="icon 1" />
                </div>
                <div className="box">
                    <img src={Icon2} alt="icon 3" />
                </div>
                <div className="box active">
                    <img src={Icon3} alt="icon 2" />
                    <p>Responsive Ready</p>
                </div>
            </div>
            <div className="content">
                <h2 className="text-dark">That your brand to The next level</h2>
                <p className="text-blur">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    iusto fuga odit in officia. In porro animi aliquam, odit
                    incidunt, ea sunt enim a, corporis esse aliquid? Aliquam.
                </p>
                <button className="btn bg-primary btn-medium">
                    Get Started
                </button>
            </div>
        </Style>
    )
}

export default index
