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
import { PlayCircle } from "@mui/icons-material";
import Image from "next/image";
import globalData from "../data/globalData";

import theme from '../../styles/theme';

import serviceImageUrl from "../assets/service-thumb.png";
import serviceShapeUrl from "../assets/shape-pattern1.png";
import iconSubscription from "../assets/feature/subscription.svg";
import iconPartnership from "../assets/feature/partnership.svg";

const ServiceSection = () => {
  console.log('theme bp services: ', theme.breakpoints.down('md'));
  return (
    <Container sx={styles.section}>
      <Box sx={styles.imageContainer}>
        <Image
          sx={{ width: "100%", height: "100%" }}
          src={globalData.servicesSection.image}
          alt="image-service"
          objectFit="cover"
        />
        <IconButton sx={styles.iconBtn} aria-label="play-button">
          <PlayCircle fontSize="25px" color="primary" />
        </IconButton>
        <Box sx={styles.shape}>
          <Image
            src={globalData.servicesSection.shape}
            alt="shape-image"
            objectFit="contain"
          />
        </Box>
      </Box>

      <Container sx={styles.containerContent}>
        <Typography
          sx={{ textTransform: "uppercase" }}
          fontWeight="bold"
          color="primary.main" // working
          variant="body1"
        >
          {globalData.servicesSection.subtitle}
        </Typography>
        <Typography fontWeight="bold" variant="h3">
          {globalData.servicesSection.title}
        </Typography>

        <Box>
          {/* <CardHeader
            avatar={
                <Image src={iconSubscription} alt="icon-sub" />
            }

            title="Smart Features"
            subtitle="Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests."
            >
                
            </CardHeader> */}

          {globalData.servicesSection.services.map((item, i) => (
            <Card key={item.id} sx={styles.card}>
              <Box sx={styles.card.icon}>
                <Image src={item.image} alt="icon-subscription" />
              </Box>
              <Box>
                <Typography
                  sx={{ mb: "15px" }}
                  fontWeight="bold"
                  color="text.primary" // working
                  variant="h6"
                >
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

export default ServiceSection;

const styles = {
  section: {
    width: "100%",
    height: "100%",
    display: "flex",
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    }
  },
  imageContainer: {
    width: '50%',
    // paddingRight: '50px',
    position: "relative",
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  iconBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // width: '50px',
    // height: '50px',
    fontSize: "50px",
    zIndex: 20,
  },
  containerContent: {
    width: "50%",
    ml: "40px",
    paddingTop: "80px",
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
  },
  card: {
    display: "flex",
    columnGap: "20px",
    // border: '2px solid green',
    alignItems: "flex-start",
    mt: "35px",
    icon: {
      // fontSize: '25px',
      width: "160px",
      height: "160px",
    },
  },
  shape: {
    position: "absolute",
    bottom: "0%",
    left: "-30%",
    width: "350px",
    height: "350px",
    // transform: 'translate(-50%,-50%)',
    zIndex: -1,   
    [theme.breakpoints.down('lg')]: {
      bottom: '15%',
      left: '-30%',
    },
    [theme.breakpoints.down('md')]: {
      bottom: '-13%',
      left: '-20%',
    },
    [theme.breakpoints.down('sm')]: {
      bottom: '-16%',
      left: '-40%',
    },

  },
};
