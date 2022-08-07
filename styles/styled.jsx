
import styled, { keyframes } from 'styled-components';

const home = keyframes`
    0% {
        transform: scale(1.5) translate(0, 0);
    }
    20% {
        transform: scale(1.5) translate(-5px, 5px);
    }
    40% {
        transform: scale(1.5) translate(-5px, -5px);
    }
    60% {
        transform: scale(1.5) translate(5px, 5px);
    }
    80% {
        transform: scale(1.5) translate(5px, -5px);
    }
    100% {
        transform: scale(1.5) translate(0, 0);
    }
`;

export const HomeLinker = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    transform: translate(50%, 50%);
    z-index: 99;
    cursor: pointer;
    .home-icon{
        transform: scale(1);
        display: block;
        font-size: 35px;
        margin: 5px;
		transition: all .2s cubic-bezier(.36,.07,.57,.99);
        color: #aaa;
        &:hover{ 
            color: #fccf0d;
            animation: ${home} 1s cubic-bezier(.36,.07,.57,.99) infinite;
        }
    }
`;
