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