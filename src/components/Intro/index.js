import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1,
    IntroP, } from './introElements';

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
                <IntroH1>Hi! I'm Jaemin</IntroH1>
                <IntroP>
                    I'm a remote front-end developer<br></br> on responsive websites.
                </IntroP>
            </IntroContent>
        </IntroContainer>
    )
}

export default IntroSection
