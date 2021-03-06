import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'dark',
  name: 'Daedalus Wallet',
  colors: {
    primary: {
      main: 'rgb(44, 187, 105)',
      light: 'rgb(80, 224, 140)',
      dark: 'rgb(30, 132, 73)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#2a2a49',
      light: '#303056',
      dark: '#1f1f38',
      contrastText: '#ffffff'
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.7)',
      secondary: '#333',
      disabled: '#555',
      hint: '#444',
      hilight: 'rgba(255, 255, 255, 0.9)'
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
    baseFontSize: 16,
    lineHeight: 1.6,
    letterSpacing: 0.05,
    fontWeight: 300,
    body: {
      fontWeight: 300
    },
    h1: {
      fontWeight: 300,
      textTransform: 'uppercase'
    },
    h2: {
      fontWeight: 300
    },
    h3: {
      fontWeight: 300
    },
    h4: {
      fontWeight: 300
    },
    h5: {
      fontWeight: 300
    },
    h6: {
      fontWeight: 300
    },
    button: {
      fontWeight: 600
    }
  }
})
