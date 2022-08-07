import React from 'react';
import Image from 'next/image';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Music = () => {
    return (
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/3 bg-cover bg-landscape image-container">
                <Image alt="the beatlog" src="/images/music/skylamp-2016.jpg" layout="fill" />
            </div>
            <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                    Music
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Been an Electronic Dance Music freak. Wanted to take up DJing as a hobby.
                    So in 2017,I finished my DJing and Music Production course from Resonance Studios.I was mentored by DJ Shahil for DJing and Dj Pawas Gupta for Music Production.
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                    During the course have collaborated with Jaideep Shetty to form "The Beatlog". We gave couple of gigs for new years eve in Shakaleshpur.
                </p>
                <p className="mt-2 text-gray-600 text-sm">Stay tuned for update. Yet to carve out time to continue the project.</p>

                <div className="flex items-center justify-center">
                    <button className="icon-button twitter">
                        <a className="flex justify-center" href="https://twitter.com/" target="_blank">
                            <AiOutlineTwitter />
                        </a>
                    </button>
                    <button className="icon-button facebook">
                        <a className="flex justify-center" href="https://www.facebook.com/thebeatlog/" target="_blank">
                            <AiOutlineFacebook />
                        </a>
                    </button>
                    <button className="icon-button instagram">
                        <a className="flex justify-center" href="https://www.instagram.com/thebeatlog/" target="_blank">
                            <AiOutlineInstagram />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Music;