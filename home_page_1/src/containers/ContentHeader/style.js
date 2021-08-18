import styled from 'styled-components'
export default styled.div`
    padding-top: 120px;
    padding-bottom: 356px;
    .content {
        position: relative;
        z-index: 10;
        .text {
            padding-top: 229px;
            h2 {
                line-height: 4.22rem;
                font-size: 3.33rem;
                font-weight: 600;
                color: #fff;
                span {
                    font-weight: 300;
                    font-size: 3.33rem;
                }
                width: 784px;
                margin-bottom: 57px;
            }
            p {
                line-height: 2rem;
                font-size: 1.33rem;
                color: #fff;
                width: 516px;
                margin-bottom: 62px;
            }
        }
        button {
            color: #fff;
        }
        .content_img {
            position: absolute;
            top: 20px;
            right: 0;
            z-index: -1;
            transform: translateX(300px);
        }
    }
`
