import React, {useState, useEffect} from 'react';
import Video from '../../videos/video.mp4';
import { IntroContainer,
    IntroBg,
    VideoBg,
    IntroContent,
    IntroH1,
    IntroP, } from './introElements';
    import Aos from "aos";
    import "aos/dist/aos.css";

const IntroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    useEffect(()=> {
        Aos.init({duration:2000});
    })

    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </IntroBg>
            <IntroContent>
            <div data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-Quad">
                <IntroH1>Hi! I'm Jaemin</IntroH1>
                <IntroP>
                    I'm a remote front-end developer<br></br> on responsive websites.
                </IntroP>
            </div>
            </IntroContent>
            
        </IntroContainer>
    )
}

export default IntroSection
