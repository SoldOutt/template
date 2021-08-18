import styled from 'styled-components'
export default styled.div`
    display: flex;
    justify-content: space-between;

    .icon {
        width: 58.33%;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 650px;
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 40%;
            aspect-ratio: 1;
            margin: 15px;
            border-radius: 10px;
            box-shadow: 4px 8px 10px 4px rgba(0, 0, 0, 0.05);
            &.active {
                width: 55.22%;
                background-color: var(--primary-color);
                color: #fff;
                p {
                    margin-top: 38px;
                    font-weight: 500;
                }
            }
        }
    }
    .content {
        width: 31.16%;
        h2 {
            font-size: 2rem;
            line-height: 3.11rem;
            margin-bottom: 50px;
        }
        p {
            line-height: 1.88rem;
            margin-bottom: 66px;
        }
    }
`
