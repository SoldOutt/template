import styled from 'styled-components'
export default styled.div`
    display: flex;
    justify-content: center;
    .container {
        width: 1500;
        box-sizing: border-box;
        padding: 150px 165px;
        border-radius: 15px;
        display: flex;
        justify-content: space-between;

        .contain {
            width: 370px;
            h2 {
                color: #fff;
                font-size: 2rem;
                line-height: 3.11rem;
            }
            p {
                line-height: 1.88rem;
                margin-bottom: 64px;
            }
        }
        .logo {
            width: 570px;
            display: flex;
            justify-content: space-around;
            /* align-items: center; */
            flex-wrap: wrap;
            .box_logo {
                width: 270px;
                text-align: center;
                margin-top: 110px;
            }
        }
    }
`
