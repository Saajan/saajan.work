import React from 'react';
import { MusicContainer, MusicDescription, SocialLinks, MusicGallery, TwitterButton, FacebookButton, InstagramButton } from './styled';

import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter } from 'react-icons/ai';

const Music = () => {
    return (
        <MusicContainer>
            <MusicDescription>
                <div>
                    Been a vivid follower of trance music scenes from almost 10 years. Its been my dream to make people dance to my tunes ever since.
                    The first step of that is taken in 2017 when i completed my DJ and Music Production course from Resonance Studios.I was mentored by DJ shahil for DJing and Dj Pawas Gupta for Music Production.
				</div>
                <div>
                    After the completion of the course, I have collaborated with Jaideep Shetty to form "The Beatlog". We gave couple of gigs for new years eve in shakaleshpur. We are planning to produce some tracks for now.
				</div>
            </MusicDescription>
            <SocialLinks>
                <TwitterButton className="icon-btn twitter">
                    <a className="link" href="https://twitter.com/" target="_blank">
                        <AiOutlineTwitter/>
                    </a>
                </TwitterButton>
                <FacebookButton className="icon-btn facebook">
                    <a className="link" href="https://www.facebook.com/thebeatlog/" target="_blank">
                        <AiOutlineFacebook/>
                    </a>
                </FacebookButton>
                <InstagramButton className="icon-btn instagram">
                    <a className="link" href="https://www.instagram.com/thebeatlog/" target="_blank">
                        <AiOutlineInstagram/>
                    </a>
                </InstagramButton>
            </SocialLinks>
            <MusicGallery>
                <img alt="the beatlog" src="images/music/skylamp-2016.jpg" width="100%" height="auto" />
            </MusicGallery>
        </MusicContainer>
    )
};

export default Music;