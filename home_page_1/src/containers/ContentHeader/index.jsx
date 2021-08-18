import React from 'react'
import Style from './style'
import Content from '../../assets/images/content.png'
const index = () => {
    return (
        <Style className="px-medium">
            <div className="content">
                <div className="text">
                    <h2>
                        Create impressive <span>pages and attract</span> more
                        customers
                    </h2>

                    <p>
                        Start using our easy-to-use tools with multiple options
                        to impr
                    </p>
                </div>
                <div className="content_img">
                    <img src={Content} alt="contentImg" />
                </div>
                <button className="btn btn-large bg-primary">
                    Purchase Now
                </button>
            </div>
        </Style>
    )
}

export default index
