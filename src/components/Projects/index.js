import React,{useEffect} from 'react'
import { ProjectContainer,
ProjectWrapper,
ProjectContent,
ProjectH1,
ProjectCardContainer,
CardH1,
CardText,
} from './ProjectsElements'
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Aos from "aos";
import "aos/dist/aos.css";
import ImageSlider from './ImageSlider';
import {Project3Data} from './SliderData';



const useStyles = makeStyles({
    root: {
        minWidth: 400,
        minHeight: 400,
        margin: '10px 10px',
    },
    cardC:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cardA:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: '0 30px',
    },
    title:{
      fontsize: '30px',
      textalign: 'center',
    },
    pos: {
        marginBottom: 12,
    },
});

const Projects = () => {
  useEffect(()=> {
      Aos.init({duration:2000});
  })
    const classes = useStyles();
    return (
        <ProjectContainer id="portfolio">
            <ProjectWrapper>
              <div data-aos="fade-up">
              <ProjectContent>
                  <ProjectH1>
                        {<br/>}My projects
                  </ProjectH1>
                  <ProjectCardContainer>
                      <Card className={classes.root}>
                       <CardContent className={classes.cardC}>
                        <CardH1>
                          Project 1
                        </CardH1>
                        <CardText>
                         {<br/>}
                         </CardText>
                         <ImageSlider slides={Project3Data}/>
                       </CardContent>
                       <CardActions className={classes.cardA}>
                         <Button variant="contained" color="primary" size="small" className={classes.pos}>Learn More</Button>
                       </CardActions>
                     </Card>
                      <Card className={classes.root}>
                       <CardContent className={classes.cardC}>
                        <CardH1>
                          Project 2
                        </CardH1>
                        <CardText>
                         {<br/>}
                         </CardText>
                         <ImageSlider slides={Project3Data}/>
                       </CardContent>
                       <CardActions className={classes.cardA}>
                         <Button variant="contained" color="primary" size="small" className={classes.pos}>Learn More</Button>
                       </CardActions>
                     </Card>
                     <Card className={classes.root}>
                       <CardContent className={classes.cardC}>
                        <CardH1>
                          My portfolio
                        </CardH1>
                        <CardText>
                         {<br/>}
                         </CardText>
                         <ImageSlider slides={Project3Data}/>
                       </CardContent>
                       <CardActions className={classes.cardA}>
                         <Button variant="contained" color="primary" size="small" className={classes.pos}>Learn More</Button>
                       </CardActions>
                     </Card>
                  </ProjectCardContainer>
              </ProjectContent>
              </div>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects
