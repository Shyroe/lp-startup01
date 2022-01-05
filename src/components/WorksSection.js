import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";

import Image from "next/image";
import { StyledButtonPrimary } from "./GlobalComponents";

import Data from "../data/globalData";

import theme from '../../styles/theme';

const ServiceSection = () => {
  // console.log('theme bp: ', theme.breakpoints);
  // console.log('theme bp keys: ', theme.breakpoints.keys);
  return (
    <Grid
    id="works"
    component="section" sx={styles.section}>
      <Container>
        <Box>
          <Typography
            sx={{ textTransform: "uppercase", opacity: "0.7" }}
            textAlign="center"
            fontWeight="bold"
            color="white" // working
            variant="body1"
          >
            {Data.worksSection.subtitle}
          </Typography>

          <Typography
            textAlign="center"
            fontWeight="500"
            color="white"
            variant="h5"
          >
            {Data.worksSection.title}
          </Typography>
        </Box>

        <Grid container sx={styles.grid}>
          {Data.worksSection.works.map((item, i) => (
            <Box key={item.id} sx={styles.card}>
              <Box sx={styles.card.numberBox}>0{item.id}</Box>

              <Typography fontWeight="500" color="white" variant="h6">
                {item.title}
              </Typography>

              <Typography
                fontWeight="300"
                color="white" // working
                variant="body1"
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default ServiceSection;

const styles = {
  section: {
    width: "100%",
    height: "100%",
    backgroundColor: "primary.main",
    // background: `url(${PatternBg})`,
    paddingTop: "125px",
    paddingBottom: "100px",
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '250px',
  }
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "40px",
    columnGap: "7%",
    rowGap: "5%",
    '@media screen and (max-width: 1024px)': {     
        gridTemplateColumns: "repeat(2, 1fr)",      
    }, 
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "repeat(1, 1fr)", 
    }
  },
  paragraph: {
    fontSize: "20px",
    fontWeight: "400",
    color: "text.primary",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    rowGap: "20px",
    // border: '2px solid green',
    alignItems: "flex-start",
    mt: "35px",
    numberBox: {
      // fontSize: '25px',
      width: "70px",
      height: "70px",
      borderRadius: "40%",
      fontSize: "24px",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      color: "#234582",
    },
  },
};
