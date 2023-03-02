import { extendTheme } from '@chakra-ui/react';
import { Raleway, Jost } from '@next/font/google';

const raleway = Raleway({ subsets: ['latin'], display: 'swap' });
const jost = Jost({ subsets: ['latin'], display: 'swap' });

const theme = extendTheme({
  fonts: {
    heading: jost.style.fontFamily,
    body: raleway.style.fontFamily,
  },
  colors: {
    transparent: 'transparent',
    // brand colors based on design
    brand: {
      blue: '#5990dc',
      teal: '#41a785',
      black: '#181819',
    },
    // shades with Tailwind Shades plugin where 500 is the brand color
    blue: {
      100: '#dee9f8',
      200: '#bdd3f1',
      300: '#9bbcea',
      400: '#7aa6e3',
      500: '#5990dc',
      600: '#4773b0',
      700: '#355684',
      800: '#243a58',
      900: '#121d2c',
    },
    teal: {
      100: '#d9ede7',
      200: '#b3dcce',
      300: '#8dcab6',
      400: '#67b99d',
      500: '#41a785',
      600: '#34866a',
      700: '#276450',
      800: '#1a4335',
      900: '#0d211b',
    },
    black: {
      100: '#d1d1d1',
      200: '#a3a3a3',
      300: '#747475',
      400: '#464647',
      500: '#181819',
      600: '#131314',
      700: '#0e0e0f',
      800: '#0a0a0a',
      900: '#050505',
    },
  },
  styles: {
    global: {
      body: {
        color: 'brand.black',
      },
      p: {
        color: 'brand.black',
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: ['100%', '540px', '720px', '960px', '1140px'],
        px: '8',
      },
    },
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
});

export default theme;
