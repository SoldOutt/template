import styled from 'styled-components'

export default styled.div`
    margin-top: 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .blog_header {
        text-align: center;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 80px;
        h2 {
            font-size: 2rem;
            line-height: 3.11rem;
            margin-bottom: 40px;
        }
        p {
            line-height: 1.88rem;
        }
    }
    .blog_content {
        display: flex;
        margin-bottom: 60px;
        .content_blog_active {
            flex: 1;
            padding-right: 15px;
            /* background-color: #fff; */
            box-shadow: 20px 20px 50px 1px rgba(0, 0, 0, 0.05);
            .content_blog_active--box {
                border-radius: 10px;
                .bxImg {
                    img {
                        width: 100%;
                    }
                }
                .inf {
                    padding: 42px;
                    h3 {
                        font-size: 1.22rem;
                        line-height: 1.94rem;
                        margin-bottom: 40px;
                    }
                    p {
                        line-height: 1.88rem;
                    }
                }
            }
        }
        .content_list_blog {
            flex: 1;
            padding-left: 15px;
            ul {
                list-style: none;
                li {
                    margin-bottom: 24px;
                    box-shadow: 20px 20px 50px 1px rgba(0, 0, 0, 0.05);
                    .content_list--item-blog {
                        display: flex;
                        .bxImg {
                            img {
                                width: 100%;
                            }
                        }
                        .inf {
                            h3 {
                                font-size: 1.22rem;
                                line-height: 1.94rem;
                                margin-bottom: 40px;
                            }
                            p {
                                line-height: 1.88rem;
                                font-size: 0.77rem;
                            }
                        }
                    }
                }
            }
        }
    }
`
