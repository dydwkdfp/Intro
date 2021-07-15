import styled from 'styled-components'

export const FooterContainer = styled.div`
    color: #fff;
    background: #202020;
`

export const FooterWrapper = styled.div`
    height: 300px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
`

export const FooterContent = styled.div`
    padding: 10px 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const FooterH1 = styled.h1`
    color: #aaa;
    font-size: 42px;
    text-align: center;
    @media screen and (max-width:768px){
        font-size: 38px;    
    }

    @media screen and (max-width:480px){
        font-size: 36px;            
    }
`
export const FooterText = styled.text`
    color: #aaa;
    font-size: 20px;
    text-align: center;
    @media screen and (max-width:768px){
        font-size: 18px;    
    }

    @media screen and (max-width:480px){
        font-size: 16px;            
    }
`