import { FaFileExcel } from 'react-icons/fa';
import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const IntroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    //add :before styles

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg , rgba(0,0,0,1) 0%,rgba(0,0,0,0.3)100%),
         linear-gradient(180deg, rgba(0,0,0,0.1)0%, transparent 100%);
        z-index: 2;
    }
`

export const IntroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;

`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const IntroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const IntroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width:768px){
        font-size: 40px;    
    }

    @media screen and (max-width:480px){
        font-size: 32px;            
    }
`

export const IntroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width:600px;
    
    @media screen and (max-width:768px){
        font-size: 20px;    
    }

    @media screen and (max-width:480px){
        font-size: 18px;            
    }
`


export const IntroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    felx-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`