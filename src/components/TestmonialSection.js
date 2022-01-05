import React from "react";

import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




import Avatar1 from "../assets/testimonial/avatar1.png";
import Avatar2 from "../assets/testimonial/avatar2.png";
import Avatar3 from "../assets/testimonial/avatar3.png";
import Avatar4 from "../assets/testimonial/avatar4.png";

import Data from '../data/globalData';

const TeamSection = () => {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
  return (
    <Grid 
    id="testimonial"
    component="section" sx={styles.section}>
      <Container>
        <Box sx={styles.header} >
          <Typography
            sx={{ textTransform: "uppercase" }}
            textAlign="center"
            fontWeight="bold"
            color="primary.main" // working
            variant="body1"
          >
            {Data.testimonialSection.subtitle}
          </Typography>

          <Typography
            textAlign="center"
            fontWeight="500"
            color="text.primary"
            variant="h5"
          >
            {Data.testimonialSection.title}
          </Typography>
        </Box>

        {/* slider */}

        <Box>
          <Swiper
            modules={[Navigation, Scrollbar]}
            //navigation={ {prevEl: ".swiper-navigation-prev", nextEl: ".swiper-navigation-next" }} // not working
            navigation={ {prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
           }}
            
            //scrollbar={{ draggable: true }}
            spaceBetween={50}
            //slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{  
              1440: {               
                slidesPerView: 3,
              },
              1000: {                
                slidesPerView: 2,
              },
              600: {                
                slidesPerView: 1,
              },
             }}
          >
            {
              Data.testimonialSection.testimonial.map((item, i) => (
                <SwiperSlide
                key={item.id}
                >
                <Rating name="simple-controlled" readOnly value={item.rating} />
                <Typography fontWeight="500" color="text.primary" variant="h6">
                 {item.title}
                </Typography>
  
                <Typography fontWeight="300" variant="body1">
                  {item.description}
                </Typography>
  
                <Box sx={styles.avatarContainer}>
                  <Box>
                    <Image src={item.avatar} altImage="photo1" />
                  </Box>
                  <Box>
                    <Typography
                      fontWeight="500"
                      color="text.primary"
                      variant="h6"
                    >
                      {item.name}
                    </Typography>
  
                    <Typography
                      fontWeight="500"
                      color="primary.main"
                      variant="body1"
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
              ))
            }
                     
            {/* navigation */}
            <Box sx={styles.swiperNavigation} >
                <IconButton 
                 //className="swiper-button-prev swiper-navigation-prev" 
                 ref={navigationPrevRef}
                  size="medium" >
                    <ArrowCircleLeft
                     //className="swiper-navigation-prev"
                       sx={styles.swiperNavigation.icon} />
                </IconButton>
                <IconButton
                 //className="swiper-button-next swiper-navigation-next"
                  ref={navigationNextRef}
                  color="success" size="medium"   >
                    <ArrowCircleRight
                     //className="swiper-navigation-next"
                      sx={styles.swiperNavigation.icon} />
                </IconButton>
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Grid>
  );
};

export default TeamSection;

const styles = {
  section: {
    width: "100%",
    height: "100%",    
    paddingTop: "125px",
    paddingBottom: "100px",
  },
  header: {
    mb: '100px',
  }, 
  paragraph: {
    fontSize: "20px",
    fontWeight: "400",
    color: "text.primary",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: "20px",
    mt: "25px",
  },
  swiperNavigation: {
    //border: '2px solid orangered',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    columnGap: '15px',
    alignItems: 'center',
    pt: '30px',
    icon: {
        fontSize: '40px',
        color: 'primary.main',
    },
  }, 
};
