import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import IntroSection from '../components/Intro';
import SkillSection from '../components/Skill';
import MeSection from '../components/Aboutme';
import { homeObjOne} from '../components/Aboutme/Data.js';
import { homeObjTwo} from '../components/Skill/Data.js';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Navbar toggle={toggle}/>
        <IntroSection/>
        <MeSection{...homeObjOne} />
        <SkillSection{...homeObjTwo} />
        <Projects/>
        <Footer/>
        </>
    )
}

export default Home
