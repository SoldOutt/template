import React from 'react'
import Style from './style'
import Our1 from '../../assets/images/our1.jpg'
import Our2 from '../../assets/images/our2.jpg'
import Our3 from '../../assets/images/our3.jpg'
const index = () => {
    return (
        <Style>
            <div className="title">
                <h2 className="text-dark">See our marketing projects</h2>
                <p className="text-blur">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem assumenda officia quisquam, dolore quod expedita
                    fugit saepe odio velit
                </p>
            </div>
            <div className="contain">
                <div className="box">
                    <img src={Our1} alt="" />
                    <div className="box-contain">
                        <h4>Explore</h4>
                    </div>
                </div>
                <div className="box">
                    <img src={Our2} alt="" />
                    <div className="box-contain">
                        <h4>Explore</h4>
                    </div>
                </div>
                <div className="box">
                    <img src={Our3} alt="" />
                    <div className="box-contain">
                        <h4>Explore</h4>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default index
