import styled from 'styled-components'
export default styled.div`
    background: #282f3a;
    display: flex;
    justify-content: space-between;
    color: var(--text-blur);
    padding-top: 150px;
    padding-bottom: 150px;
    .title {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 23px;
        margin-bottom: 50px;
        font-weight: 600;
        img {
            margin-right: 20px;
        }
    }

    & > div {
        flex: 1;
        padding-right: 30px;
    }
    & > div::last-child {
        padding-right: 0;
    }
    ul {
        list-style-type: none;
        li {
            padding: 0 35px 35px 0;
            color: var(--text-blur);
            a {
                color: var(--text-blur);
                text-decoration: none;
                font-size: 0.88rem;
                /* line-height: 2.66rem; */
                transition: 0.2s;
                &:hover {
                    color: #fff;
                }
            }
            a.active {
                color: #fff;
            }
        }
    }
    .follow {
        p {
            line-height: 30px;
        }
        ul {
            margin-top: 40px;
            display: flex;
        }
    }
`
