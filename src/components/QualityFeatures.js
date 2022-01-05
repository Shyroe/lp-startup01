import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Item,
  Paper,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";

import Image from "next/image";
import Data from '../data/globalData';


const QualityFeatures = () => {
  return (
    <Container sx={styles.section} >
      <Box>
        <Typography
          textAlign="center"
          sx={{ textTransform: "uppercase" }}
          fontWeight="bold"          
          color="primary.main" // working
          variant="body1"
        >
          {Data.qualityFeatures.subtitle}
        </Typography>
        <Typography textAlign="center" fontWeight="bold" variant="h3">
          {Data.qualityFeatures.title}
        </Typography>
      </Box>

        <Grid
        container
        mt="80px"
        rowSpacing={8}
        columnSpacing={8}
        
        >
            {
                Data.qualityFeatures.services.map((item, id) => (
                    <Grid
                    key={item.id}
                    container item lg={6} md={6} sm={10} >
                {/* <Item> */}
            <Paper sx={styles.card} >
                <Box sx={styles.card.icon} >
                <Image                 
                    src={item.image} alt="icon-subscription" />
                </Box>
                <Box>
                <Typography sx={{ mb: '15px' }}  fontWeight="bold"
             
             color="text.primary" // working
             variant="h6" >
            {item.title}
            </Typography>
            <Typography variant="body1" >
            {item.description}
            </Typography>
                </Box>
            </Paper>
            {/* </Item> */}

            </Grid>
                ))
            }
                        
        </Grid>

    </Container>
  );
};

export default QualityFeatures;


const styles = {
    section: {
        width: '100%',
        height: '100%',               
        padding: '100px 0px',
    },   
    card: {
        display: 'flex',
        columnGap: '20px',
        // border: '2px solid green',
        alignItems: 'flex-start',
        mt: '35px',
        height: 'auto',
        padding: '0px',
        icon: {
            // fontSize: '25px',
            width: '300px',
            height: '300px',
        }
    },
   
};
