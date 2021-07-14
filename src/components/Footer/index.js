import React from 'react'
import { FooterContainer,
FooterWrapper,
FooterContent,
FooterH1,
FooterText } from './FooterElements';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContent>
                    <FooterH1>
                        CONTACT
                    </FooterH1>
                    <FooterText>
                        Contact me on..{<br/>}{<br/>}
                        <MailIcon fontSize="Small"/> Codertest@gmail.com
                    </FooterText>
                </FooterContent>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
