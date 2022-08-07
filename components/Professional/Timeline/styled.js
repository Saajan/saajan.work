
import styled from 'styled-components';
import { motion } from "framer-motion"

export const TimeLineWrapper = styled.div`
    background-color:#fff;
    font-size: 13px;
`;

export const TimeLine = styled.ul`
    margin: 30px 0 0 0;
	padding: 0;
	list-style: none;
    position: relative;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 10px;
        background: #afdcf8;
        left: 50%;
        margin-left: -10px;
    }
`;

export const TimeBox = styled.li`
    :nth-child(odd){
        >div {
            margin: 0 52%;
        }
        time{
            text-align: right;
            right: none;
            left: 0px;
        }
    }
`;

export const Time = styled.time`
    display: block;
	width: 50%;
    text-align: left;
    right: 0px;
    position: absolute;
    padding: 30px;
    
    span {
        display: block;
    }

    span:first-child {
        font-size: 0.9em;
        color: #bdd0db;
    }

    span:last-child {
        font-size: 2.9em;
        color: #3594cb;
    }
`;

export const TimeLabel = styled.div`
    margin: 0 40px 20px 2%;
	background: #3594cb;
	color: #fff;
	padding: 2em;
	font-size: 1.2em;
	font-weight: 300;
	line-height: 1.4;
	position: relative;
    border-radius: 5px;
    width: 45%;

    h2 {
        margin-top: 0px;
        padding: 0 0 10px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
`;

export const TimeIcon = styled(motion.span)`
    width: 25px;
	height: 25px;
	font-family: "";
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	font-size: 1.4em;
	line-height: 40px;
	-webkit-font-smoothing: antialiased;
	position: absolute;
	color: #fff;
	background: #46a4da;
	border-radius: 50%;
	box-shadow: 0 0 0 8px #afdcf8;
	text-align: center;
	left: 50%;
	margin: 0 0 0 -18px;
`;


