const baseConfig = {
  type: 'light',
  colors: {
    primary: '#ff0',
    secondary: '#f00',
    tertiary: '#555',
    text: {
      default: '#000',
      primary: '#222',
      secondary: '#555',
      tertiary: '#aaa',
      inverted: '#fff'
    },
    background: {
      default: '#fff',
      primary: '#fff',
      secondary: '#222',
      tertiary: '#0ff',
      inverted: '#000'
    },
    action: {
      active: '#fff',
      activeBackground: '#f83633',
      disabled: '#555',
      disabledBackground: '#999',
      hover: '#f0f',
      hoverBackground: '#f83633',
      selected: '#000',
      selectedBackground: '#f83666'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    googleFontsURL: 'https://fonts.googleapis.com/css?family=Poppins:300,400',
    baseFontSize: 10,
    lineHeight: 1.6,
    h1: {
      fontSize: 4,
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.2,
      textTransform: 'none'
    },
    h2: {
      fontSize: 3,
      fontWeight: 400,
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
    body1: {
      fontSize: 1,
      fontWeight: 200,
      letterSpacing: 0,
      lineHeight: 1.7
    },
    body2: {
      fontSize: 0.8,
      fontWeight: 300,
      letterSpacing: 0,
      lineHeight: 1.8
    },
    subtitle1: {
      fontSize: 1,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.7,
      textTransform: 'none'
    },
    subtitle2: {
      fontSize: 0.8,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 1.8,
      textTransform: 'none'
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
    },
    small: {
      fontSize: 0.6,
      fontWeight: 400,
      letterSpacing: 1,
      lineHeight: 1.8,
      textTransform: 'uppercase'
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
