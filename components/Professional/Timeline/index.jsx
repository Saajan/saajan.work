import React from 'react';
import { TimeLine, TimeLineWrapper, Time, TimeLabel, TimeIcon, TimeBox } from './styled';

const Timeline = () => {
    return (
        <TimeLineWrapper>
            <TimeLine>
                <TimeBox>
                    <Time>
                        <span>Apr 2020</span>
                        <span>Present</span>
                    </Time>
                    <TimeIcon
                        whileHover={{ scale: 1.5 }}
                    >
                    </TimeIcon>
                    <TimeLabel>
                        <h2>Senior Software Engineer</h2>
                        <h3>Conviva</h3>
                        <div>
                            <p>Conviva pioneered and continues to define the standards for cross-screen, end-to-end streaming media intelligence.
                            Built for video, the Conviva platform and products enable you to understand and act on experience, advertising, social and content insights, for every stream across every screen, every second.</p>
                            <div className="res-container">
                                <span>Responsibilities:</span>
                                <ul>
                                    <li>
                                        Worked on developing real time dashboard.
                                    </li>
                                    <li>
                                        Worked on migration of the application from Django to React.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimeLabel>
                </TimeBox>
                <TimeBox>
                    <Time>
                        <span>Aug 2015</span>
                        <span>Apr 2020</span>
                    </Time>
                    <TimeIcon whileHover={{ scale: 1.5 }} />
                    <TimeLabel>
                        <h2>Fullstack Engineer</h2>
                        <h3>Penser Analytics</h3>
                        <div>
                            <p>Sherlock is the analytics platform that meets the needs of business and IT. It empowers organization&apos;s to make
												sense of large data volumes, get answers to their toughest business questions and build beautiful data visualizations.</p>
                            <div className="res-container">
                                <span>Responsibilities:</span>
                                <ul>
                                    <li>
                                        Contributed my frontend development expertise in building the web dashboards with colorful charts for representing data.
                                    </li>
                                    <li>
                                        Contributed in developing a chatbot using the bot framework which answers business questions and give respective insights.
                                    </li>
                                    <li>
                                        Built a API framework using Node.js and GraphQL to power all the applications.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimeLabel>
                </TimeBox>
                <TimeBox>
                    <Time dateTime="">
                        <span>Aug 2014</span>
                        <span>Aug 2015</span>
                    </Time>
                    <TimeIcon whileHover={{ scale: 1.5 }} />
                    <TimeLabel>
                        <h2>Software Engineer</h2>
                        <h3>Sportskeeda</h3>
                        <div>
                            <p>
                                Sportskeeda is an all-sports website, with multinational audience and writers. Users engage on the website; read,
                                write and post comments, while interacting with like-minded fans from all over the globe. Sportskeeda has a global
                                Alexa traffic rank of 2803 as of May 2016.
                            </p>
                            <div className="res-container">
                                <span>Responsibilities:</span>
                                <ul>
                                    <li>
                                        Created micro-site skeleton for each of the different 30 sports
                                    </li>
                                    <li>
                                        Implemented site wide responsiveness and tested for cross-browser compatibility.
                                    </li>
                                    <li>
                                        Implemented React.js based live scoreboard for football and cricket.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimeLabel>
                </TimeBox>
                <TimeBox>
                    <Time dateTime="">
                        <span>Aug 2013</span>
                        <span>Aug 2014</span>
                    </Time>
                    <TimeIcon whileHover={{ scale: 1.5 }} />
                    <TimeLabel>
                        <h2>Intern</h2>
                        <h3>Applied Cognition Systems</h3>
                        <div>
                            <p>
                                Applied	Cognition Systems conduct original research	and	development	in	finding	to	develop	innovative,	affordable and
                                practical technology solutions to address high impact challenges in	health care, education governance sectors.
                            </p>
                            <div className="res-container">
                                <span>Responsibilities:</span>
                                <ul>
                                    <li>
                                        Built a	framework to design	a single page application using	vanilla	Javascript.
                                    </li>
                                    <li>
                                        Used HTML5 api like	indexedDb, web sockets and web workers to develop a	interactive	web	application.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TimeLabel>
                </TimeBox>
            </TimeLine>
        </TimeLineWrapper>
    )
}

export default Timeline;