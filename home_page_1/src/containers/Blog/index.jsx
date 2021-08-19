import React from 'react'
import Style from './style'
import Blog from '../../assets/images/blog.jpg'
import Blog1 from '../../assets/images/blog1.jpg'
import Blog2 from '../../assets/images/blog2.jpg'
import Blog3 from '../../assets/images/blog3.jpg'
const index = () => {
    return (
        <Style className="px-medium">
            <div className="blog_header">
                <h2 className="text-dark">The latest updates to our Blog</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Minima laborum reiciendis omnis impedit eos, voluptatibus a
                    alias.
                </p>
            </div>
            <div className="blog_content">
                <div className="content_blog_active">
                    <div className="content_blog_active--box">
                        <div className="bxImg">
                            <img src={Blog} alt="" />
                        </div>
                        <div className="inf">
                            <h3>
                                Big Changes in technology is what's coming now
                            </h3>
                            <p>
                                Turpis faucibus sodales euismod conubia taciti
                                quisque vestibulm
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content_list_blog">
                    <ul>
                        <li>
                            <div className="content_list--item-blog">
                                <div className="bxImg">
                                    <img src={Blog1} alt="" />
                                </div>
                                <div className="inf">
                                    <h3>
                                        Big Changes in technology is what's
                                        coming now
                                    </h3>
                                    <p>2 mins ago</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="content_list--item-blog">
                                <div className="bxImg">
                                    <img src={Blog2} alt="" />
                                </div>
                                <div className="inf">
                                    <h3>
                                        Big Changes in technology is what's
                                        coming now
                                    </h3>
                                    <p>2 mins ago</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="content_list--item-blog">
                                <div className="bxImg">
                                    <img src={Blog3} alt="" />
                                </div>
                                <div className="inf">
                                    <h3>
                                        Big Changes in technology is what's
                                        coming now
                                    </h3>
                                    <p>2 mins ago</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="btn btn-medium bg-primary text-white">
                Get Started
            </button>
        </Style>
    )
}

export default index
