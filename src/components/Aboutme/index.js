import React, {useState} from 'react'
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
    return (
        <>
            <MeContainer lightBg={lightBg} id={id}>
                <MeWrapper>
                    <MeRow imgStart={imgStart}>
                        <Column1>
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
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </MeRow>
                </MeWrapper>
            </MeContainer>
        </>
    )
}

export default MeSection
