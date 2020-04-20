import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'dark',
  name: 'Cardano Dark',
  colors: {
    primary: {
      main: '#1fc1c3',
      light: '#2ed9db',
      dark: '#17b1b3',
      contrastText: '#000'
    },
    secondary: {
      main: '#141325',
      light: '#191B30',
      dark: '#07070f',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#fafafa',
      disabled: '#ddd',
      hint: '#eee'
    },
    background: {
      default: '#121326'
    }
  },
  typography: {
    baseFontSize: 16,
    lineHeight: 1.8,
    fontWeight: 400,
    h1: {
      fontSize: 3,
      fontWeight: 300,
      lineHeight: 1.15,
      letterSpacing: 1,
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: 1.728,
      fontWeight: 300,
      letterSpacing: 0.17,
      lineHeight: 1.4,
      textTransform: 'none'
    },
    h3: {
      fontSize: 1.44,
      fontWeight: 300,
      lineHeight: 1.4,
      letterSpacing: 0.13,
      textTransform: 'none'
    },
    h4: {
      fontSize: 1.1,
      fontWeight: 500,
      letterSpacing: 0.35,
      lineHeight: 1.4,
      textTransform: 'uppercase'
    },
    h5: {
      fontSize: 1,
      fontWeight: 700,
      letterSpacing: 0.15,
      lineHeight: 1.4,
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: 1.4,
      textTransform: 'uppercase'
    },
    body: {
      fontSize: 1,
      fontWeight: 200,
      letterSpacing: 0.1,
      lineHeight: 1.7
    }
  }
})
