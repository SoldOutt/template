import styled from 'styled-components'
export default styled.div`
    margin: 150px 0;
    display: flex;
    justify-content: space-between;
    .text {
        padding: 96px 0;
        h3 {
            font-size: 2rem;
            line-height: 3.11rem;
            margin-bottom: 53px;
            width: 435px;
        }
        p {
            line-height: 1.88rem;
            width: 472px;
            margin-bottom: 66px;
        }
    }
    .offer_image {
        text-align: right;
        position: relative;

        .second {
            position: absolute;
            top: 130px;
            left: -100px;
            box-shadow: -10px 10px 10px 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            z-index: 1;
        }
    }
`
