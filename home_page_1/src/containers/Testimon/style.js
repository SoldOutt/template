import styled from 'styled-components'
export default styled.div`
    margin-top: 200px;
    display: flex;
    align-items: center;

    .contain {
        width: 770px;
        height: 370px;
        box-sizing: border-box;
        position: relative;
        margin-left: 30px;
        border-radius: 10px;
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.08);
        padding: 90px 70px;
        background-color: #fff;
        img {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        p {
            font-size: 1.66rem;
            line-height: 2.66rem;
            text-align: center;
            span {
                font-weight: 600;
                font-size: 1.66rem;
            }
        }
        .art {
            img:first-child {
                position: absolute;
                top: 0;
                left: 100%;
                transform: translate(-50%, -50%);
                z-index: -1;
            }
            img:nth-child(2) {
                position: absolute;
                top: 100%;
                left: 100%;
                transform: translate(-50%, -50%);
                z-index: -1;
            }
        }
    }
`
