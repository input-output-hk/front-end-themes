import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'light',
  name: 'Atala Light',
  colors: {
    primary: {
      main: '#E5493E',
      light: '#f06960',
      dark: '#cf3025',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#40eaea',
      light: '#5ef7f7',
      dark: '#31e8e8',
      contrastText: '#222'
    },
    text: {
      primary: '#222',
      secondary: '#333',
      disabled: '#555',
      hint: '#444'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    googleFontsURL: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700',
    baseFontSize: 14,
    lineHeight: 1.6,
    letterSpacing: 0.5,
    fontWeight: 400,
    h1: {
      fontSize: 2.5,
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: 2.5
      },
      '@media (min-width:960px)': {
        fontSize: 3
      },
      '@media (min-width:1280px)': {
        fontSize: 3.5
      },
      '@media (min-width:2049px)': {
        fontSize: 4
      }
    },
    h2: {
      fontSize: 1.75,
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: 1.75
      },
      '@media (min-width:960px)': {
        fontSize: 2
      },
      '@media (min-width:1280px)': {
        fontSize: 2.25
      },
      '@media (min-width:2049px)': {
        fontSize: 2.5
      }
    },
    h3: {
      fontSize: 1.15,
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: 1.15
      },
      '@media (min-width:960px)': {
        fontSize: 1.2
      },
      '@media (min-width:1280px)': {
        fontSize: 1.25
      },
      '@media (min-width:2049px)': {
        fontSize: 1.3
      }
    },
    h4: {
      fontSize: 1.1,
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: 1.1
      },
      '@media (min-width:960px)': {
        fontSize: 1.15
      },
      '@media (min-width:1280px)': {
        fontSize: 1.2
      },
      '@media (min-width:2049px)': {
        fontSize: 1.25
      }
    },
    h5: {
      fontSize: 1.05,
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: 1.05
      },
      '@media (min-width:960px)': {
        fontSize: 1.1
      },
      '@media (min-width:1280px)': {
        fontSize: 1.15
      },
      '@media (min-width:2049px)': {
        fontSize: 1.2
      }
    },
    h6: {
      fontSize: 1,
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:600px)': {
        fontSize: 1
      },
      '@media (min-width:960px)': {
        fontSize: 1
      },
      '@media (min-width:1280px)': {
        fontSize: 1.1
      },
      '@media (min-width:2049px)': {
        fontSize: 1.15
      }
    },
    body: {
      fontSize: 1.2,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.7,
      '@media (min-width:600px)': {
        fontSize: 1.2
      },
      '@media (min-width:960px)': {
        fontSize: 1.3
      },
      '@media (min-width:1280px)': {
        fontSize: 1.4
      },
      '@media (min-width:2049px)': {
        fontSize: 1.5
      }
    }
  }
})
