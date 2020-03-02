import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'dark',
  name: 'IOHK Dark',
  colors: {
    primary: {
      main: '#EF131D',
      light: '#fa5c64',
      dark: '#d60b14',
      contrastText: '#fff'
    },
    secondary: {
      main: '#0F0F0F',
      light: '#1F1F1F',
      dark: '#000000',
      contrastText: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#fafafa',
      disabled: '#ddd',
      hint: '#eee'
    },
    background: {
      default: '#000000'
    }
  }
})
