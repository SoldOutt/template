import styled from 'styled-components'
import BgContact from '../../assets/images/bg_contact.png'
export default styled.div`
    padding: 120px 0;
    margin-top: 15px;
    background-image: url(${BgContact});
    .contain {
        width: 580px;
        margin: 0 auto;
        h2 {
            font-size: 2rem;
            line-height: 3.11rem;
            color: #fff;
        }
        p {
            line-height: 1.88rem;
            margin-bottom: 100px;
        }
        form {
            input,
            textarea {
                display: block;
                width: 100%;
                background-color: transparent;
                margin-bottom: 32px;
                padding: 20px 30px;
                border: 2px solid rgba(255, 255, 255, 0.1);
                border-radius: 10px;
                outline: none;
                color: #fff;
            }
            input:focus,
            textarea:focus {
                border: 2px solid #fff;
            }
            textarea {
                height: 100px;
            }
            button {
                display: block;
                margin: 0 auto;
            }
        }
    }
`
