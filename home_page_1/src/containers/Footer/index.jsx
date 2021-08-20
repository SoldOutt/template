import React from 'react'
import Style from './style'
import logo_art from '../../assets/images/logo_art.png'
const index = () => {
    return (
        <Style className="px-medium">
            <div className="follow">
                <div className="title">
                    <img src={logo_art} alt="" />
                    Octavian
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit quo culpa sapiente beatae doloremqu.
                </p>
                <ul>
                    <li>
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a className="active" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-dribbble"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="link">
                <div className="title">
                    <p>Usefull Links</p>
                </div>
                <ul>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                    <li>
                        <a href="#">Terms of Service</a>
                    </li>
                    <li>
                        <a href="#">Plan & Precing</a>
                    </li>
                    <li>
                        <a href="#">Site Map</a>
                    </li>
                </ul>
            </div>
            <div className="contact">
                <div className="title">
                    <p>Contact Us</p>
                </div>
                <ul>
                    <li>
                        <p>Phone Number: ( + 051 ) 958 23 78 51 </p>
                        <p>Phone Number 2: ( + 051 ) 123 345 45</p>
                    </li>
                    <li>
                        <p>Email: support@ocatavian.io </p>
                        <p>Fax: support@ocatavian.io</p>
                    </li>
                    <li>
                        <p>
                            Address: Envato Pty Ltd 13/2 Permanent ST melbourne
                            VLC 3000 - VietNam
                        </p>
                    </li>
                </ul>
            </div>
        </Style>
    )
}

export default index
