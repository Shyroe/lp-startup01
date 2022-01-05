import React from 'react';

import { Box, Container, Typography, Grid, Card, CardHeader, CardContent, IconButton } from '@mui/material';

import Image from 'next/image';
import { StyledButtonPrimary } from './GlobalComponents';
import theme from '../../styles/theme';

import Data from '../data/globalData';

const ServiceSection = () => {
    return (
        <Container
        sx={styles.section}        

        >
      

        <Container sx={styles.containerContent} >
        <Typography sx={{ textTransform: 'uppercase' }}  fontWeight="bold"
             color="primary.main" // working
             variant="body1" >
           {Data.coreFeatures.subtitle}
            </Typography>
            <Typography fontWeight="500" variant="h3" >
            {Data.coreFeatures.title}
            </Typography>

            <Typography sx={styles.paragraph} variant="body1" >
            {Data.coreFeatures.description}
            </Typography>

            <StyledButtonPrimary href="/" sx={{ mt: '20px' }} variant="contained" >
                Get Started
                </StyledButtonPrimary>
         
        </Container>

        <Box sx={styles.imageContainer} >
            <Image sx={{ width: '100%', height: '100%' }} src={Data.coreFeatures.image} alt="image-service" objectFit="cover" />
            
            <Box sx={styles.shape} >
                <Image src={Data.coreFeatures.shape} alt="shape-image"  objectFit="contain" />
            </Box>
        </Box>
            
        </Container>
    )
}

export default ServiceSection

const styles = {
    section: {
        width: '100%',
        height: '100%',       
        display: 'flex',
        paddingLeft: '0px',
        paddingBottom: '100px',
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
          },
    },
    paragraph: {
        fontSize: '20px',
        fontWeight: '400',      
        color: 'text.primary'
       
    },
    imageContainer: {        
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            width: "100%",
            marginTop: '8%',
        },
    },    
    containerContent: {        
        width: '50%',       
       
        paddingTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        rowGap: '25px',
        alignItems: 'flex-start',
        [theme.breakpoints.down('md')]: {
            width: "100%",
          },
    },    
    shape: {
        position: 'absolute',
        bottom: '-20%',
        right: '-20%',
        width: '350px',
        height: '350px',
        transform: 'rotate(240deg)',
       // transform: 'translate(-50%,-50%)',
        zIndex: -1,            
        [theme.breakpoints.down('lg')]: {
            bottom: "-5%",
            right: "-20%",
        },       
        [theme.breakpoints.down('md')]: {
            bottom: "-18%",
            right: "-5%",
        }, 
        [theme.breakpoints.down('sm')]: {
            bottom: "-30%",
            right: "-35%",
        }, 

    }
};
