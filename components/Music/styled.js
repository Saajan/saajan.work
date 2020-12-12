import styled from 'styled-components';

export const MusicContainer = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const MusicDescription = styled.div`
    width: 500px;

`;

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    button{
        height: 50px;
        width: 50px;
        border: 0;
        cursor: pointer;
        font-size: 30px;
        line-height: 58px;
        transition: ease-in-out 0.3s;
        border-radius: 50px;
        margin-left: 10px;
        margin: 5px;

        &:hover{
            transform: scale(1.1);
            color: #ffffff;
        }
    }
`;

export const MusicGallery = styled.div`
    max-width:500px;
`;

export const TwitterButton = styled.button`
    color: #4099ff;
    &:hover{
        background-color: #4099ff;
    }
`;

export const InstagramButton = styled.button`
    color: #5c3d2e;
    &:hover{
        background-color: #5c3d2e;
    }
`;

export const FacebookButton = styled.button`
    color: #3b5998;
    &:hover{
        background-color: #3b5998;
    }
`;
