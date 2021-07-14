import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { SkillContainer,
    SkillWrapper,
    SkillRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
} from './SkillElements';

import javascriptpic from "../../images/skills/javascript.png";
import asppic from "../../images/skills/asp.jpg";
import sqlpic from "../../images/skills/sql.png";
import htmlpic from "../../images/skills/html.png";
import nodejspic from "../../images/skills/node.png";
import reactpic from "../../images/skills/react.png";
import csspic from "../../images/skills/css.png";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));

const SkillSection = ({lightBg,
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
    alt}) => {
        
    const classes = useStyles();

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
                                {descriptionone}<br/>
                            </Subtitle>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <div className={classes.root}>
                            <Chip avatar={<Avatar alt="Javascript" src={javascriptpic}/>}
                                label="Javascript"/>
                            <Chip avatar={<Avatar alt="Asp" src={asppic}/>}
                                label="Asp"/>
                            <Chip avatar={<Avatar alt="CSS" src={csspic}/>}
                                label="CSS"/>
                            <Chip avatar={<Avatar alt="HTML" src={htmlpic}/>}
                                label="HTML"/>
                            <Chip avatar={<Avatar alt="NodeJs" src={nodejspic}/>}
                                label="NodeJs"/>
                            <Chip avatar={<Avatar alt="React" src={reactpic}/>}
                                label="React"/>
                            <Chip avatar={<Avatar alt="SQL" src={sqlpic}/>}
                                label="SQL"/>
                        </div>
                        </Column2>
                    </SkillRow>
                </SkillWrapper>
            </SkillContainer>
        </>
    )
}

export default SkillSection
