import React,{useEffect, useState} from 'react'
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
import {AnimatePresence, AnimateSharedLayout, motion} from 'framer-motion';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Items } from './Items/Items';
import { List } from './Items/List';


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

const Store = ({match}) => {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Items id={id} key="items" />}
      </AnimatePresence>
    </>
  )
}



const Projects = () => {
  useEffect(()=> {
      Aos.init({duration:2000});
  })
    const [selectedId, setSelectedId] = useState(null);
    const classes = useStyles();


    return (
      <div className="cont" id="portfolio">
              <div>
              <h1 className="styledh1">Portfolio</h1>
              </div>
              <div className="container">
                 <div data-aos="fade-up" >
                 <AnimateSharedLayout type="crossfade">
                    <Router>
                    <Route path={["/:id", "/"]} component={Store} />
                    </Router>
                    </AnimateSharedLayout>
                </div>
              </div>
      </div>
    )
}

export default Projects
