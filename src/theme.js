import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: '#e8f0fd',
      100: '#c2d7fa',
      200: '#9bbdf6',
      300: '#74a3f2',
      400: '#4d89ee',
      500: '#2566e8',
      600: '#1e52ba',
      700: '#163d8c',
      800: '#0f295e',
      900: '#07142f',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#000',
        color: 'white',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'white',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
    },
    Text: {
      baseStyle: {
        color: 'whiteAlpha.900',
      },
    },
  },
});

export default theme;
