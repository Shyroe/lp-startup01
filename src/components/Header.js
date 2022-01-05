import React from 'react';
import { Container, Stack, AppBar, MenuItem, Typography, Menu, Button } from '@mui/material';
import HeaderLogo from '../assets/logo.svg';
import Image from 'next/image';
import Link from './MuiNextLink';
import Navbar from './Navbar';
import { styled } from '@mui/system';
import { StyledButtonPrimary } from './GlobalComponents';
import SideDrawer from './SideDrawer';

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
    { title: `home`, path: `/` },
    { title: `Features`, path: `/#features` },
    { title: `Works`, path: `/#works` },
    { title: `Testimonial`, path: `/#testimonial` },    
  ];


const Header = () => {
    return (
        <>
        <AppBar position="static"
        sx={{ backgroundColor: 'white', boxShadow: 'none', padding: '20px 0px', }}
        
        >
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Link activeClassName="active" href="/" >
                <Image src={HeaderLogo} alt="imagem-logo" />
                </Link>
                <Navbar navLinks={navLinks} />
               
            
                <StyledButtonPrimary variant="outlined"
                
                >
                    Get Started
                    </StyledButtonPrimary>

                    <SideDrawer navLinks={navLinks} />
            </Stack>
        </Container>
        </AppBar>
        <Offset />
        </>
    )
}

export default Header
