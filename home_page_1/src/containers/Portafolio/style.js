import styled from 'styled-components'
export default styled.div`
    .title {
        text-align: center;
        padding: 0 25%;
        margin-bottom: 92px;
        h2 {
            font-size: 2rem;
            line-height: 3.11rem;
            margin-bottom: 44px;
        }
        p {
            line-height: 1.88rem;
        }
    }
    .contain {
        display: flex;
        padding: 0 72px;
        justify-content: space-between;
        .box {
            width: 29.68%;
            position: relative;
            img {
                width: 100%;
            }
            .box-contain {
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(82, 117, 208, 0.88);
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                line-height: 3.11rem;
                color: #fff;
                opacity: 0;
                transition: 0.3s;
            }
            &:hover .box-contain {
                opacity: 1;
            }
        }
    }
`
