import React from "react";
import {
  Container,
  Box,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import HeaderLogo from "../assets/logo.svg";
import Image from "next/image";
import MuiNextLink from "./MuiNextLink";

export const navLinksFooter = [
  { title: `home`, path: `/` },
  { title: `Adversite`, path: `/#features` },
  { title: `Supports`, path: `/` },
  { title: `Marketing`, path: `/` },
  { title: `Contact`, path: `/` },
];

const Footer = () => {
  return (
    <Container sx={styles.section}>
      <Box>
        <Image src={HeaderLogo} alt="footer-logo" />
      </Box>

      <Stack direction="row" columnGap={3}>
        {navLinksFooter.map((item, i) => (
          <MenuItem key={i}>
            <MuiNextLink sx={styles.menuLink} variant="button" href={item.path}>
              {item.title}
            </MuiNextLink>
          </MenuItem>
        ))}
        
      </Stack>

      <Typography fontWeight="300" color="text.primary" variant="body1">
        Copyright by 2021 RedQ, Inc
      </Typography>
    </Container>
  );
};

export default Footer;

const styles = {
  section: {
    width: "100%",
    height: "100%",
    paddingTop: "125px",
    paddingBottom: "100px",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    rowGap: "35px",
  },
  menuLink: {
    color: "text.secondary",
    textTransform: "capitalize",
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "16px",
    "&:hover": {
      color: "primary.main",
      textDecoration: "underline",
      //pb: '10px',
    },
  },
};
7;
