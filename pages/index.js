// import Head from 'next/head'
// import Image from 'next/image'

// import {  } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import Hero from '../src/components/Hero';
import FeatureSection from '../src/components/FeatureSection';
import ServiceSection from '../src/components/ServiceSection';
import QualityFeatures from '../src/components/QualityFeatures';
import CoreFeatures from '../src/components/CoreFeatures';
import WorksSection from '../src/components/WorksSection';
import TeamSection from '../src/components/TeamSection';
import TestmonialSection from '../src/components/TestmonialSection';
import SubscribeSection from '../src/components/SubscribeSection';
import Footer from '../src/components/Footer';

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#197622',
//     }
//   }
// });

export default function Home() {
  return (
   <>
  <Hero />
  <FeatureSection />
  <ServiceSection />
  <QualityFeatures />
  <CoreFeatures />
  <WorksSection />
  <TeamSection />
  <TestmonialSection />
  <SubscribeSection />
  <Footer />
   </>
  )
}
