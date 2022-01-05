import React from 'react';

import { Box, Container, Typography, Grid, Avatar, Card, CardHeader, CardContent, IconButton } from '@mui/material';

import Data from '../data/globalData';
import theme from '../../styles/theme';


const TeamSection = () => {
    return (
        <Grid
        component="section" 
        sx={styles.section}        

        >
<Container>
            <Box>
            <Typography sx={{ textTransform: 'uppercase' }} textAlign="center" fontWeight="bold"
             
             color="primary.main" // working
             variant="body1" >
            {Data.teamSection.subtitle}
            </Typography>

            <Typography textAlign="center" fontWeight="500" color="text.primary" variant="h5" >
            {Data.teamSection.title}
            </Typography>
            </Box>     

            <Grid container 
             sx={styles.grid}
              >
               {
                   Data.teamSection.team.map((item, i) => (
                    <Box
                    key={item.id}
                    sx={styles.card} >
                    <Avatar
                    src={item.avatar} // using public path to using image
                    alt="avatar"
                    sx={styles.card.avatar}
                    />
                       
                    

                    <Typography fontWeight="500" color="text.primary" variant="h6" >
                    {item.name}
            </Typography>

                    <Typography fontWeight="300"
             
            
             variant="body1" >
            {item.role}
            </Typography>   

                </Box>
                   ))
               }

            </Grid>     
            
        </Container>
        </Grid>
    )
}

export default TeamSection

const styles = {
    section: {
        width: '100%',
        height: '100%',       
        // background: `url(${PatternBg})`,       
        paddingTop: '125px',
        paddingBottom: '100px',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '375px',
        }
                
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginTop: '40px',
        columnGap: '7%',
        rowGap: '5%',
        
        [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        }, 
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            width: '75%',
            margin: '0 auto',
        }, 
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
            width: '90%',
            margin: '0 0',
        }, 

    },
    paragraph: {
        fontSize: '20px',
        fontWeight: '400',      
        color: 'text.primary'
       
    },  
        card: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        rowGap: '5px',
        // border: '2px solid green',
        alignItems: 'flex-start',
        mt: '35px',
        avatar: {           
            width: '130px',
            height: '130px',
            border: '3px solid crimson',
            mb: '25px',
            // objectFit: 'cover',
            // objectPosition: 'center center'
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            display: 'grid',

        }
    },
    
};
