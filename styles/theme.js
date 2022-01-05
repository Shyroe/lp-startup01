import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
          main: '#EA3a60',          
        },
        secondary: {
            main: '#FFA740',
        },
        text: {
            primary: '#0f2137',
            secondary: '#343D48',
            destaque: '#EA3a60',
            
        }
      },
      typography: {
          
          h1: {

          },
          h2: {

          },
          body1: {
            lineHeight: '1.9',
          }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
});

theme = responsiveFontSizes(theme);

export default theme;