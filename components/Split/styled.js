import styled from 'styled-components';

export const SplitLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
`;

export const RightSplit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    z-index: 100;
    width: 50%;
    height: 100%;
    text-align: center;
    backface-visibility: hidden;
    right: 0;
    background: #fccf0d;
    color: #2a2927;
    outline: 1px solid #fccf0d;
`;

export const LeftSplit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    z-index: 100;
    width: 50%;
    height: 100%;
    text-align: center;
    backface-visibility: hidden;
    left: 0;
    background: #2a2927;
    color: #fccf0d;
    outline: 1px solid #2a2927;
`;

export const LeftImg = styled.div`
    transition: box-shadow 0.8s, background 0.8s;
    background: black;
    box-shadow: none;
    background: url('/images/saajan-sn-1.webp') center center no-repeat;
    background-size: 100%;
    width:150px;
    height:150px;
    border-radius:50%;
    &:hover{
        background: url('/images/saajan-sn-1.webp') center center no-repeat;
        background-size: 150%;
        box-shadow: inset 0 0 0 5px white;
    }
    &:after {
        backdrop-filter: grayscale(90%);
        transition: backdrop-filter 0.8s;
        content: "";
        display: block;
        position: absolute;
        width: 150px; 
        height: 150px;
        border-radius:50%;
    }
    &:hover:after {
        backdrop-filter: grayscale(20%);
    }
`;

export const RightImg = styled.div`
    transition: box-shadow 0.8s, background 0.8s;
    background: black;
    box-shadow: none;
    background: url('/images/saajan-sn-2.webp') center center no-repeat;
    background-size: 100%;
    width:150px;
    height:150px;
    border-radius:50%;
    &:hover{
        background: url('/images/saajan-sn-2.webp') center center no-repeat;
        background-size: 150%;
        box-shadow: inset 0 0 0 5px white;
    }
    &:after {
        backdrop-filter: grayscale(90%);
        transition: backdrop-filter 0.8s;
        content: "";
        display: block;
        position: absolute;
        width: 150px; 
        height: 150px;
        border-radius:50%;
    }
    &:hover:after {
        backdrop-filter: grayscale(20%);
    }
`;

export const LinkWrapper = styled.div`
    cursor:pointer;
`;