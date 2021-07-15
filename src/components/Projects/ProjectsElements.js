import styled from 'styled-components';

export const ProjectContainer = styled.div`
    color: #fff;
    background: #010606;   
`

export const ProjectWrapper = styled.div`
    display: grid;
    z-index: 1;
    min-height: 750px;
    width: 100%;
    max-width: 1100px;
    padding-top: 100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    padding-bottom: 200px;
    justify-content: center;
    align-items: Flex;
`

export const ProjectContent = styled.div`
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const ProjectH1 = styled.h1`    
    color: #fff;
    font-size: 48px;
    text-align: center;
    border-bottom: 8px solid #01bf71;
    @media screen and (max-width:768px){
        font-size: 40px;    
    }

    @media screen and (max-width:480px){
        font-size: 32px;            
    }
`
export const ProjectCardContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

`
export const CardH1 = styled.h1`
font-size: 25px;
`

export const CardText = styled.text`
    font-size: 15px;
`