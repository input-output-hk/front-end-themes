import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'light',
  name: 'Daedalus Wallet',
  colors: {
    primary: {
      main: 'rgb(44, 187, 105)',
      light: 'rgb(80, 224, 140)',
      dark: 'rgb(30, 132, 73)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#444444',
      light: '#666666',
      dark: '#333333',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#fff',
      secondary: '#333',
      disabled: '#555',
      hint: '#444'
    },
    background: {
      default: 'rgb(19, 19, 37)',
      overlay05: 'rgba(255, 255, 255, 0.5)',
      overlay01: 'rgba(255, 255, 255, 0.1)'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    googleFontsURL: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600',
    baseFontSize: 14,
    lineHeight: 1.6,
    letterSpacing: 0.5,
    fontWeight: 300,
    bigFontSize: 16,
    body: {
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.7
    },
    h1: {
      fontSize: 2.3,
      fontWeight: 300,
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: 1.45,
      fontWeight: 300,
      lineHeight: 1.3
    },
    h3: {
      fontSize: 1.2,
      fontWeight: 300
    },
    h4: {
      fontSize: 1,
      fontWeight: 300
    },
    h5: {
      fontSize: 0.8,
      fontWeight: 300
    },
    h6: {
      fontSize: 1,
      fontWeight: 300
    },
    button: {
      fontWeight: 600
    }
  }
})
