import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'dark',
  name: 'Cardano Dark',
  colors: {
    primary: {
      main: '#1fc1c3',
      light: '#2ed9db',
      dark: '#17b1b3',
      contrastText: '#fff'
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
      fontSize: 2.488,
      fontWeight: 300,
      lineHeight: 1.15,
      letterSpacing: 1.5,
      textTransform: 'none'
    },
    h2: {
      fontSize: 1.728,
      fontWeight: 300,
      letterSpacing: 1.7,
      lineHeight: 1.4,
      textTransform: 'none'
    },
    h3: {
      fontSize: 1.44,
      fontWeight: 300,
      lineHeight: 1.4,
      letterSpacing: 1.3,
      textTransform: 'none'
    },
    h4: {
      fontSize: 1.1,
      fontWeight: 500,
      letterSpacing: 3.5,
      lineHeight: 1.4,
      textTransform: 'uppercase'
    },
    h5: {
      fontSize: 1,
      fontWeight: 700,
      letterSpacing: 1.5,
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
      letterSpacing: 1,
      lineHeight: 1.7
    }
  }
})
