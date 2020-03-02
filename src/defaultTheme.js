const baseConfig = {
  type: 'light',
  colors: {
    primary: {
      main: '#ff0',
      light: 'rgb(255, 255, 147)',
      dark: 'rgb(187, 187, 0)',
      contrastText: '#000'
    },
    secondary: {
      main: '#f00',
      light: 'rgb(250, 56, 56)',
      dark: 'rgb(196, 0, 0)',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff'
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    background: {
      default: '#fff'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    googleFontsURL: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700',
    baseFontSize: 16,
    lineHeight: 1.6,
    letterSpacing: 1,
    fontWeight: 400,
    h1: {
      fontSize: 4,
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    h2: {
      fontSize: 3,
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    h3: {
      fontSize: 2.2,
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    h4: {
      fontSize: 2,
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    h5: {
      fontSize: 1.8,
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    h6: {
      fontSize: 1.6,
      fontWeight: 700,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    body: {
      fontSize: 1,
      fontWeight: 200,
      letterSpacing: 0,
      lineHeight: 1.7
    },
    button: {
      fontSize: 1,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.7,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: 0.8,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.8,
      textTransform: 'none'
    }
  }
}

const mergeConfig = (base, config) => {
  Object.keys(config).forEach(key => {
    if (typeof config[key] === 'object' && !Array.isArray(config[key])) {
      base[key] = {
        ...base[key],
        ...mergeConfig({ ...base[key] }, config[key])
      }
    } else {
      base[key] = config[key]
    }
  })

  return base
}

export const extendDefaultTheme = (theme) => {
  return mergeConfig({ ...baseConfig }, theme)
}
