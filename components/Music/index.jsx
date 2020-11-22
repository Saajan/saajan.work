import React from 'react';
import { MusicContainer, MusicDescription, SocialLinks, MusicGallery } from './styled';
const Music = () => {
    return (
        <MusicContainer>
            <MusicDescription>
                <div>
                    Been a vivid follower of trance music scenes from almost 10 years. Its been my dream to make people dance to my tunes ever since.
                    he first step of that is taken in 2017 when i completed my DJ and music production course from resonance studios.I was mentored by DJ shahil for DJing and Dj Pawas Gupta for music prduction.
				</div>
                <div>
                    After the completion of the course, i have collaborated with Jaideep Shetty with the name of "The Beatlog". We gave couple of gigs for new years eve in shakaleshpur. We are planning to produce some tracks for now.
				</div>
                <div>
                    You can stalk us using following links.
				</div>
            </MusicDescription>
            <SocialLinks>
                <button className="icon-btn twitter">
                    <a className="link" href="https://twitter.com/" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                </button>
                <button className="icon-btn facebook">
                    <a className="link" href="https://www.facebook.com/thebeatlog/" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>
                </button>
                <button className="icon-btn instagram">
                    <a className="link" href="https://www.instagram.com/thebeatlog/" target="_blank">
                        <i className="fa fa-instagram"></i>
                    </a>
                </button>
            </SocialLinks>
            <MusicGallery>
                <img alt="the beatlog" src="images/music/skylamp-2016.jpg" width="100%" height="auto" />
            </MusicGallery>
        </MusicContainer>
    )
};

export default Music;