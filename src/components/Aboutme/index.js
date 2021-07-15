import React, {useState, useEffect} from 'react'
import { MeContainer,
    MeWrapper,
    MeRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from './MeElements'

import Imgprog from "../../images/svg-1.svg"
import Aos from "aos";
import "aos/dist/aos.css";

const MeSection = ({lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    descriptionone,
    descriptiontwo,
    descriptionthree,
    descriptionfour,
    descriptionfive,
    img,
    alt}) => {
        useEffect(()=> {
            Aos.init({duration:2000});
        })
    return (
        <>
            <MeContainer lightBg={lightBg} id={id}>
                <MeWrapper>
                    <MeRow imgStart={imgStart}>
                        <Column1>
                        <div data-aos="fade-right">
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {descriptionone}<br/>
                                {descriptiontwo}<br/>
                                {descriptionthree}<br/>
                                {descriptionfour}<br/>
                                {descriptionfive}<br/>
                            </Subtitle>
                        </TextWrapper>
                        </div>
                        </Column1>
                        <Column2>
                        <div data-aos="fade-left">
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </div>
                        </Column2>
                    </MeRow>
                </MeWrapper>
            </MeContainer>
        </>
    )
}

export default MeSection
