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
      light: '#2B2A3B',
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
      default: '#222222'
    }
  }
})
