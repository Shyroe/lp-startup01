
//Icons
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

import HeroImage from '../assets/banner-thumb.png';
import featuresSectionImg1 from '../assets/feature/partnership.svg';
import featuresSectionImg2 from '../assets/feature/performance.svg';
import featuresSectionImg3 from '../assets/feature/subscription.svg';
import featuresSectionImg4 from '../assets/feature/support.svg';
import servicesSectionImage from '../assets/service-thumb.png';
import servicesSectionShape from '../assets/shape-pattern1.png';
import iconPartnership from '../assets/feature/partnership.svg';
import iconSubscription from '../assets/feature/subscription.svg';

import qualityFeaturesImg1 from '../assets/feature/performance.svg';
import qualityFeaturesImg2 from '../assets/feature/partnership.svg';
import qualityFeaturesImg3 from '../assets/feature/subscription.svg';
import qualityFeaturesImg4 from '../assets/feature/support.svg';

import coreFeatureImage from '../assets/core-feature.png';
import coreFeatureShape from '../assets/shape-pattern1.png';

import worksSectionPattern from '../assets/patternBG.png';


// public path not working
// import teamSectionMember1 from '../../public/member-1.png';
// import teamSectionMember2 from '../../public/member-2.png';
// import teamSectionMember3 from '../../public/member-3.png';
// import teamSectionMember4 from '../../public/member-4.png';

const teamSectionMember1 = '/member-1.png';
const teamSectionMember2 = '/member-2.png';
const teamSectionMember3 = '/member-3.png';
const teamSectionMember4 = '/member-4.png';

import testimonialSectionAvatar1 from '../assets/testimonial/avatar1.png';
import testimonialSectionAvatar2 from '../assets/testimonial/avatar2.png';
import testimonialSectionAvatar3 from '../assets/testimonial/avatar3.png';
import testimonialSectionAvatar4 from '../assets/testimonial/avatar4.png';


const Data = {
    heroSection: {
        title: 'Top Quality Digital Products To Explore',
        description: 'Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
        heroImage: HeroImage,
    },
    featuresSection: {
        title: 'WHATS THE FUNCTION',
        subtitle: 'Meet the feature of product',
        features: [
            {
                id: 1,
                image: featuresSectionImg1,
                title: 'Fast Performance',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
            {
                id: 2,
                image: featuresSectionImg2,
                title: 'Partnership deal',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
            {
                id: 3,
                image: featuresSectionImg3,
                title: 'Pro Subscription',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
            {
                id: 4,
                image: featuresSectionImg4,
                title: 'Customer Support',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
        ],
        
    },
    servicesSection: {
        image: servicesSectionImage,
        shape: servicesSectionShape,
        subtitle: 'Our services',
        title: 'Business Goals Achieved with Design',
        services: [
            {
                id: 1,
                image: iconSubscription,
                title: 'Smart Features',
                description: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
            },
            {
                id: 2,
                image: iconPartnership,
                title: 'Secure Contents',
                description: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
            },
        ],
    },
    qualityFeatures: {        
        subtitle: 'Quality Features',
        title: 'Amazing useful features',
        services: [
            {
                id: 1,
                image: qualityFeaturesImg1,
                title: 'Fast Performance',
                description: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
            },
            {
                id: 2,
                image: qualityFeaturesImg2,
                title: 'Pro Subscription',
                description: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
            },
            {
                id: 3,
                image: qualityFeaturesImg3,
                title: 'Partnership deal',
                description: 'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
            },
            {
                id: 4,
                image: qualityFeaturesImg4,
                title: 'Customer Support',
                description: 'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
            },
        ],
    },
    coreFeatures: {
        image: coreFeatureImage,
        shape: coreFeatureShape,
        subtitle: 'CORE FEATURES',
        title: 'Smart Jackpots that you may love this anytime & anywhere',
        description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',       
    },
    worksSection: {
        bgImage: worksSectionPattern,        
        subtitle: 'Whats the function',
        title: 'Let’s see how it works',
        works: [
            {
                id: 1,                
                title: 'Set disbursement Instructions',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
            {
                id: 2,                
                title: 'Assembly retrieves funds from your account',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
            {
                id: 3,                
                title: 'Assembly initiates disbursement',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
            {
                id: 4,                
                title: 'Customer receives funds payment',
                description: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
            },
           
        ],
    },
    teamSection: {        
        subtitle: 'OUR TEAM',
        title: 'The most qualified and talented individuals',
        team: [
            {
                id: 1,
                avatar: teamSectionMember1,
                name: 'Saimon Harmer',
                role: 'CEO and Founder',
                socialMedia: [
                    {
                        id: 1,
                        icon: Facebook,
                        name: 'Facebook',
                        url: 'http://facebook.com',
                    },
                    {
                        id: 2,
                        icon: Twitter,
                        name: 'Twitter',
                        url: 'http://twitter.com',
                    },
                    {
                        id: 3,
                        icon: Instagram,
                        name: 'Instagram',
                        url: 'http://instagram.com',
                    },
                ]
            },
            {
                id: 2,
                avatar: teamSectionMember2,
                name: 'Aaron Nunez',
                role: 'Founder',
                socialMedia: [
                    {
                        id: 1,
                        icon: Facebook,
                        name: 'Facebook',
                        url: 'http://facebook.com',
                    },
                    {
                        id: 2,
                        icon: Twitter,
                        name: 'Twitter',
                        url: 'http://twitter.com',
                    },
                    {
                        id: 3,
                        icon: Instagram,
                        name: 'Instagram',
                        url: 'http://instagram.com',
                    },
                ]
            },
            {
                id: 3,
                avatar: teamSectionMember3,
                name: 'Camil Harold',
                role: 'Web Designer',
                socialMedia: [
                    {
                        id: 1,
                        icon: Facebook,
                        name: 'Facebook',
                        url: 'http://facebook.com',
                    },
                    {
                        id: 2,
                        icon: Twitter,
                        name: 'Twitter',
                        url: 'http://twitter.com',
                    },
                    {
                        id: 3,
                        icon: Instagram,
                        name: 'Instagram',
                        url: 'http://instagram.com',
                    },
                ]
            },
            {
                id: 4,
                avatar: teamSectionMember4,
                name: 'Lite Jutila',
                role: 'Web Developer',
                socialMedia: [
                    {
                        id: 1,
                        icon: Facebook,
                        name: 'Facebook',
                        url: 'http://facebook.com',
                    },
                    {
                        id: 2,
                        icon: Twitter,
                        name: 'Twitter',
                        url: 'http://twitter.com',
                    },
                    {
                        id: 3,
                        icon: Instagram,
                        name: 'Instagram',
                        url: 'http://instagram.com',
                    },
                ]
            },
            {
                id: 5,
                avatar: teamSectionMember1,
                name: 'Jhon Doe',
                role: 'Artist',
                socialMedia: [
                    {
                        id: 1,
                        icon: Facebook,
                        name: 'Facebook',
                        url: 'http://facebook.com',
                    },
                    {
                        id: 2,
                        icon: Twitter,
                        name: 'Twitter',
                        url: 'http://twitter.com',
                    },
                    {
                        id: 3,
                        icon: Instagram,
                        name: 'Instagram',
                        url: 'http://instagram.com',
                    },
                ]
            },
            {
                id: 6,
                avatar: teamSectionMember2,
                name: 'Smith Phil',
                role: 'Cloud Expert',
                socialMedia: [
                    {
                        id: 1,
                        icon: Facebook,
                        name: 'Facebook',
                        url: 'http://facebook.com',
                    },
                    {
                        id: 2,
                        icon: Twitter,
                        name: 'Twitter',
                        url: 'http://twitter.com',
                    },
                    {
                        id: 3,
                        icon: Instagram,
                        name: 'Instagram',
                        url: 'http://instagram.com',
                    },
                ]
            },
            
        ],
    },
    testimonialSection: {        
        subtitle: 'Testimonial',
        title: 'Meet Client Satisfaction',
        testimonial: [
            {
                id: 1,
                rating: 2,
                title: 'Modern look & trending design',
                description: `Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.`,
                avatar: testimonialSectionAvatar1,
                name: 'Denny Hilguston',
                role: '@denny.hil',                
               
            },            
            {
                id: 2,
                rating: 4,
                title: 'Design Quality & performance',
                description: `Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.`,
                avatar: testimonialSectionAvatar2,
                name: 'Denny Hilguston',
                role: '@denny.hil',                
               
            },            
            {
                id: 3,
                rating: 1,
                title: 'Layout and organized layers',
                description: `Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.`,
                avatar: testimonialSectionAvatar3,
                name: 'Denny Hilguston',
                role: '@denny.hil',                
               
            },      
            {
                id: 4,
                rating: 5,
                title: 'Layout and organized layers',
                description: `Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.`,
                avatar: testimonialSectionAvatar3,
                name: 'Denny Hilguston',
                role: '@denny.hil',                
               
            },  
            {
                id: 5,
                rating: 3,
                title: 'Layout and organized layers',
                description: `Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.`,
                avatar: testimonialSectionAvatar3,
                name: 'Denny Hilguston',
                role: '@denny.hil',                
               
            },    
            {
                id: 6,
                rating: 4,
                title: 'Layout and organized layers',
                description: `Get working experience to work with this amazing team & in
                future want to work together for bright future projects and also
                make deposit to freelancer.`,
                avatar: testimonialSectionAvatar3,
                name: 'Denny Hilguston',
                role: '@denny.hil',                
               
            },       
            
        ],
    },

};

export default Data;