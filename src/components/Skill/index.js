import React, {useState} from 'react'
import { SkillContainer,
    SkillWrapper,
    SkillRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from './SkillElements'

import Imgprog from "../../images/svg-1.svg"

const SkillSection = ({lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt}) => {
    return (
        <>
            <SkillContainer lightBg={lightBg} id={id}>
                <SkillWrapper>
                    <SkillRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={Imgprog} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </SkillRow>
                </SkillWrapper>
            </SkillContainer>
        </>
    )
}

export default SkillSection
