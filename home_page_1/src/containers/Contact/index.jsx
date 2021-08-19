import React from 'react'
import Style from './style'
const index = () => {
    return (
        <Style>
            <div className="contain">
                <h2>Contact us to Grow your Business</h2>
                <p className="text-blur">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Est, sint nostrum. Minima ea, alias nisi eaque sunt
                </p>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Subject" />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button className="btn btn-medium bg-gradient">
                        Send Message
                    </button>
                </form>
            </div>
        </Style>
    )
}

export default index
