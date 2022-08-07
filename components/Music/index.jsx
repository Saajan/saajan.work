import React from 'react';
import Image from 'next/image';
import { MusicContainer, MusicDescription, SocialLinks, MusicGallery, TwitterButton, FacebookButton, InstagramButton } from './styled';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Music = () => {
    return (
        <MusicContainer>
            <MusicDescription>
                <div>
                    Been an Electronic Dance Music freak. Wanted to take up DJing as a hobby.
                    So in 2017,I finished my DJing and Music Production course from Resonance Studios.I was mentored by DJ Shahil for DJing and Dj Pawas Gupta for Music Production.
                </div>
                <div>
                    During the course have collaborated with Jaideep Shetty to form "The Beatlog". We gave couple of gigs for new years eve in Shakaleshpur.
                </div>
                <div>Stay tuned for update. Yet to carve out time to continue the project.</div>
            </MusicDescription>
            <SocialLinks>
                <TwitterButton className="icon-btn twitter">
                    <a className="link" href="https://twitter.com/" target="_blank">
                        <AiOutlineTwitter />
                    </a>
                </TwitterButton>
                <FacebookButton className="icon-btn facebook">
                    <a className="link" href="https://www.facebook.com/thebeatlog/" target="_blank">
                        <AiOutlineFacebook />
                    </a>
                </FacebookButton>
                <InstagramButton className="icon-btn instagram">
                    <a className="link" href="https://www.instagram.com/thebeatlog/" target="_blank">
                        <AiOutlineInstagram />
                    </a>
                </InstagramButton>
            </SocialLinks>
            <MusicGallery className="block">
                <Image alt="the beatlog" src="/images/music/skylamp-2016.jpg" width={1000} height={400} />
            </MusicGallery>
        </MusicContainer>
    )
};

export default Music;