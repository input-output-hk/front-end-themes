import { extendDefaultTheme } from './defaultTheme'

export default extendDefaultTheme({
  type: 'light',
  name: 'Ambassadors Light',
  colors: {
    primary: {
      main: '#E81617',
      light: '#F79191',
      dark: '#BC2525',
      contrastText: '#fff'
    },
    secondary: {
      main: '#dbdbdb',
      light: '#eeeeee',
      dark: '#cccccc',
      contrastText: '#fff'
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
    }
  }
})
