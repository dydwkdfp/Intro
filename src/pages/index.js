import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import IntroSection from '../components/Intro';
import SkillSection from '../components/Skill';
import { homeObjOne } from '../components/Skill/Data';

const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <IntroSection/>
        <SkillSection{...homeObjOne} />
        </>
    )
}

export default Home
