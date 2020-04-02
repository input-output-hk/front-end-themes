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
    body: {
      fontSize: 1.3,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.7
    },
    h1: {
      fontSize: 1.8,
      fontWeight: 700,
      scaleRatio: 7
    },
    h2: {
      fontSize: 1.5,
      fontWeight: 600,
      lineHeight: 1.1,
      scaleRatio: 4
    },
    h3: {
      fontSize: 1.3,
      fontWeight: 600,
      scaleRatio: 2
    },
    h4: {
      fontSize: 1.2,
      fontWeight: 600
    },
    h5: {
      fontSize: 1.1,
      fontWeight: 600
    },
    h6: {
      fontSize: 1,
      fontWeight: 700
    }
  }
})
