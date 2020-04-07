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
    letterSpacing: 1,
    fontWeight: 400,
    h1: {
      fontSize: 5.625,
      fontWeight: 700,
      letterSpacing: -1.5,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 7.025
      },
      '@media (max-width:1280px)': {
        fontSize: 5.625
      },
      '@media (max-width:960px)': {
        fontSize: 4.225
      },
      '@media (max-width:600px)': {
        fontSize: 2.825
      }
    },
    h2: {
      fontSize: 3.6875,
      fontWeight: 600,
      letterSpacing: -0.5,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 4.5875
      },
      '@media (max-width:1280px)': {
        fontSize: 3.6875
      },
      '@media (max-width:960px)': {
        fontSize: 2.7875
      },
      '@media (max-width:600px)': {
        fontSize: 1.8875
      }
    },
    h3: {
      fontSize: 3,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.2,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 3.75
      },
      '@media (max-width:1280px)': {
        fontSize: 3
      },
      '@media (max-width:960px)': {
        fontSize: 2.25
      },
      '@media (max-width:600px)': {
        fontSize: 1.5
      }
    },
    h4: {
      fontSize: 2.125,
      fontWeight: 700,
      letterSpacing: 0.25,
      lineHeight: 1.1,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 2.625
      },
      '@media (max-width:1280px)': {
        fontSize: 2.125
      },
      '@media (max-width:960px)': {
        fontSize: 1.625
      },
      '@media (max-width:600px)': {
        fontSize: 1.125
      }
    },
    h5: {
      fontSize: 1.5,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: 1.1,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 1.875
      },
      '@media (max-width:1280px)': {
        fontSize: 1.5
      },
      '@media (max-width:960px)': {
        fontSize: 1.1251
      }
    },
    h6: {
      fontSize: 1.25,
      fontWeight: 700,
      letterSpacing: 0.15,
      lineHeight: 1.1,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 1.55
      },
      '@media (max-width:1280px)': {
        fontSize: 1.25
      },
      '@media (max-width:960px)': {
        fontSize: 0.95
      }
    },
    body: {
      fontSize: 1,
      fontWeight: 200,
      letterSpacing: 0.5,
      lineHeight: 1.5,
      '@media (min-width:2049px)': {
        fontSize: 1.125
      }
    },
    small: {
      fontSize: 0.8,
      fontWeight: 200,
      letterSpacing: 0,
      lineHeight: 1.5,
      '@media (min-width:2049px)': {
        fontSize: 1
      }
    },
    button: {
      fontSize: 1,
      fontWeight: 400,
      letterSpacing: 1.25,
      lineHeight: 1,
      textTransform: 'uppercase',
      '@media (min-width:2049px)': {
        fontSize: 1.125
      }
    },
    caption: {
      fontSize: 0.8,
      fontWeight: 300,
      letterSpacing: 0.4,
      lineHeight: 1.8,
      textTransform: 'none',
      '@media (min-width:2049px)': {
        fontSize: 1
      }
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
