import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1,
    IntroP,
    ArrowForward,
    IntroBtnWrapper,
    ArrowRight } from './introElements';
import {Button} from '../ButtonElement';

const IntroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </IntroBg>
            <IntroContent>
                <IntroH1>Hi! I'm jaemin</IntroH1>
                <IntroP>
                    I'm a front-end developer on responsive websites.
                </IntroP>
                <IntroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true">
                        Know more {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
    )
}

export default IntroSection
