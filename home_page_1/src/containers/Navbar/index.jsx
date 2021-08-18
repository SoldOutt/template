import React from 'react'
import Style from './style'
import Logo from '../../assets/images/logo.png'
const index = () => {
    const scroll = (e) => {
        console.log(e)
    }
    const click = () => {
        console.log(1)
    }
    return (
        <Style className="px-medium" onscroll={scroll} onClick={click}>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <span>Octanvian</span>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="action">
                <div className="icon">
                    <i className="far fa-search"></i>
                </div>
                <div className="icon">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </Style>
    )
}

export default index
