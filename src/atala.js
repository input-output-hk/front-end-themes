import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  colors: {
    primary: '#E5493E',
    secondary: '#40eaea',
    tertiary: '#E5493E',
    text: {
      primary: '#222',
      secondary: '#fff',
      tertiary: '#40eaea',
      inverted: '#fff'
    },
    background: {
      default: '#fff',
      primary: '#fff',
      secondary: '#E5493E',
      tertiary: '#011727'
    }
  },
  typography: {
    googleFontsURL: 'https://fonts.googleapis.com/css?family=Poppins:300,600,700',
    baseFontSize: 10,
    lineHeight: 1.6,
    h1: {
      fontSize: 5,
      fontWeight: 700
    },
    h2: {
      fontSize: 2.8,
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: 1.8,
      fontWeight: 600
    },
    h4: {
      fontSize: 1.4,
      fontWeight: 600
    },
    h5: {
      fontSize: 1.3,
      fontWeight: 600
    },
    h6: {
      fontSize: 1.2,
      fontWeight: 700
    },
    body2: {
      fontSize: 1.4,
      lineHeight: 1.7
    }
  }
})
