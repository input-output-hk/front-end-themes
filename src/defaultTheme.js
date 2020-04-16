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
    fontFamily: 'Open Sans, sans-serif',
    googleFontsURL: 'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,600,700',
    baseFontSize: 16,
    lineHeight: 1.6,
    letterSpacing: 0.1,
    fontWeight: 400,
    h1: {
      fontSize: 2.488,
      fontWeight: 700,
      lineHeight: 1.15,
      margin: '2.75rem 0 1.05rem',
      textTransform: 'none',
      '@media (max-width:960px)': {
        fontSize: 2.288
      },
      '@media (max-width:600px)': {
        fontSize: 2.088
      }
    },
    h2: {
      fontSize: 2.074,
      fontWeight: 600,
      lineHeight: 1.15,
      margin: '2.75rem 0 1.05rem',
      textTransform: 'none',
      '@media (max-width:960px)': {
        fontSize: 1.874
      },
      '@media (max-width:600px)': {
        fontSize: 1.674
      }
    },
    h3: {
      fontSize: 1.728,
      fontWeight: 400,
      lineHeight: 1.15,
      margin: '2.75rem 0 1.05rem',
      textTransform: 'none',
      '@media (max-width:960px)': {
        fontSize: 1.528
      },
      '@media (max-width:600px)': {
        fontSize: 1.328
      }
    },
    h4: {
      fontSize: 1.44,
      fontWeight: 700,
      lineHeight: 1.15,
      margin: '2.75rem 0 1.05rem',
      textTransform: 'none',
      '@media (max-width:960px)': {
        fontSize: 1.24
      },
      '@media (max-width:600px)': {
        fontSize: 1.04
      }
    },
    h5: {
      fontSize: 1.2,
      fontWeight: 700,
      lineHeight: 1.1,
      margin: '2.75rem 0 1.05rem',
      textTransform: 'none',
      '@media (max-width:960px)': {
        fontSize: 1
      }
    },
    h6: {
      fontSize: 1,
      fontWeight: 700,
      lineHeight: 1.1,
      margin: '2.75rem 0 1.05rem',
      textTransform: 'none',
      '@media (max-width:960px)': {
        fontSize: 0.8
      }
    },
    body: {
      fontSize: 1,
      fontWeight: 200,
      letterSpacing: 0.05,
      lineHeight: 1.5,
      '@media (min-width:2049px)': {
        fontSize: 1.125
      }
    },
    small: {
      fontSize: 0.8,
      fontWeight: 200,
      letterSpacing: 0,
      lineHeight: 1.5
    },
    button: {
      fontSize: 1,
      fontWeight: 400,
      letterSpacing: 0.125,
      lineHeight: 1,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: 0.8,
      fontWeight: 300,
      letterSpacing: 0.04,
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
