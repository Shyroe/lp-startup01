import React from 'react';

import { Container, Box, Typography, TextField, Buttonk, FormControl, InputLabel } from '@mui/material';
import { InputUnstyled } from '@mui/base';
import { styled } from '@mui/material/styles';
import { StyledButtonPrimary } from './GlobalComponents';
import theme from '../../styles/theme';

const InputSubscribe = styled(InputUnstyled)`
    width: 70%;
    & input {
        width: 100%;
        padding-left: 40px;
        border: none;        
        font-size: 17px;        
        font-weight: 400; 
        color: #EA3A60;

        &::placeholder {
            color: #EA3A60;
            font-size: 17px;
            opacity: .7;
        font-weight: 400;        
        }
    }
    & input:focus-visible {
        /* border: none; */
        outline: none;
    }
`;

const SubscribeSection = () => {
    return (
        <Container sx={styles.section} >
            <Box sx={styles.containerContent} >

            <Typography
            textAlign="center"
            fontWeight="500"
            color="white"
            variant="h4"
          >
            Subscribe to our Blog
          </Typography>

            <Typography
            
            textAlign="center"
            fontWeight="300"
            color="white" // working
            variant="body1"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor incididunt labore dolore.
          </Typography>

          <Box sx={styles.form} component="form" >
              {/* <FormControl> */}
                  <InputSubscribe
                  
                  name="email"
                  placeholder="Insira seu Email..."
                 
                  />

                  {/* <InputSubscribe>
                  Teste Input
                  </InputSubscribe> */}

                  <StyledButtonPrimary type="submit" variant="contained"  >
                      Subscribe
                  </StyledButtonPrimary>

                  
              {/* </FormControl> */}
              </Box>

       
            </Box>
            
        </Container>
    )
}

export default SubscribeSection;

const styles = {
    section: {
        width: '100%',
        height: '100%',
        backgroundColor: 'primary.main',
        // background: `url(${PatternBg})`,       
        paddingTop: '125px',
        paddingBottom: '100px',
        display: 'flex',
        justifyContent: 'center',        
    },
    containerContent: {
        display: 'flex',
        justifyContent: 'center',
        FlexDirection: 'column',
        flexWrap: 'wrap',
        width: '50%',
        rowGap: '35px',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    form: {
        width: '100%',
        py: '4px',
        px: '5px',
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '100px',
        input2: {
            pl: '40px',
            border: 'none',
            fontSize: '20px',
            color: 'primary.main'
        },
    }
};
