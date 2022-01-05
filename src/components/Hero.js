import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

import heroImgSrc from '../assets/banner-thumb.png';
import globalData from '../data/globalData';

import { StyledButtonPrimary } from './GlobalComponents';


const Hero = () => {
    return (
        <Container
            maxWidth="sm"
            sx={ styles.container }       
        >
            <Typography
            textAlign="center"
            fontWeight="bold"
            variant="h2" >
            { globalData.heroSection.title }
            </Typography>
            <Typography
            // sx={ styles.paragraph } // working
            sx={ styles.paragraph, styles.paragraphDestaque } // working
            // sx={ styles.paragraph, { color: 'blue' } }  // working         
      
            variant="body1" >
            { globalData.heroSection.description }
            </Typography>
            <StyledButtonPrimary variant="contained" >
                Explore
            </StyledButtonPrimary>

            <Image src={globalData.heroSection.heroImage} alt="hero-image" />
            
        </Container>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: '25px',
    },
    paragraph: {
        fontSize: '20px',
        fontWeight: '400',
        textAlign: 'center',
        //color: 'green'
        // lineHeight: '1.9',
    },
    paragraphDestaque: {
        
        //color: 'secondary.main'
    }
}

export default Hero;
