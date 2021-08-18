import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    height: 120px;
    position: absolute;
    top: 0;
    width: -webkit-fill-available;
    left: 0;
    .logo {
        display: flex;
        align-items: center;
        span {
            font-size: 1.33rem;
            color: #fff;
        }
    }
    .menu {
        ul {
            display: flex;
            list-style: none;

            li {
                padding: 0 1.5rem;
                a {
                    text-decoration: none;
                    color: #fff;
                }
            }
        }
    }
    .action {
        display: flex;
        margin-left: 66px;
        .icon {
            margin-left: 4rem;
            i {
                font-size: 1.33rem;
                color: #fff;
            }
        }
    }
`
