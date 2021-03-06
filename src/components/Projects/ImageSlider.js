import { Hidden } from '@material-ui/core'
import React,{useState} from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const ImageSlider = ({slides}) => {
    const[current, setcurrent] = useState(0)
    const length = slides.length

    const nextSlide = () =>{
        setcurrent(current === length-1 ? 0 : current +1)
    }
    const prevSlide = () =>{
        setcurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }else{

    }

    return (
        <section className="slider">
            <ArrowBackIosIcon className="left-arrow" onClick={prevSlide}/>
            <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt="project image" className="image"/>)}
                            <text className='indexshow'>{index+1}/{slides.length}</text>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ImageSlider;
