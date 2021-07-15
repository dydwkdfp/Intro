import React,{useEffect} from 'react'
import { ProjectContainer,
ProjectWrapper,
ProjectContent,
ProjectH1,
ProjectCardContainer,
} from './ProjectsElements'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 275,
        margin: '10px 10px',
    },
    cardC:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardA:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    title:{
        textAlign: 'center',
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
        <Typography variant="h5" component="h2" className={classes.title}>
          Project1
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
            {<br/>}this is about my 1st project
        </Typography>
      </CardContent>
      <CardActions className={classes.cardA}>
        <Button variant="contained" color="primary" size="small" className={classes.pos}>Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.cardC}>
        <Typography variant="h5" component="h2" className={classes.title}>
          Project2
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
            {<br/>}this is about my 2nd project
        </Typography>
      </CardContent>
      <CardActions className={classes.cardA}>
        <Button variant="contained" color="primary" size="small"  className={classes.pos}>Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.cardC}>
        <Typography variant="h5" component="h2" className={classes.title}>
          My portfolio
        </Typography>
        <Typography variant="body2" component="p" className={classes.title}>
            {<br/>}Portfolio project.
        </Typography>
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
