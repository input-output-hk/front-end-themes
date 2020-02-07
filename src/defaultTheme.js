const baseConfig = {
  colors: {
    primary: '#000',
    secondary: '#fff',
    text: '#000',
    secondaryText: '#333',
    background: {
      default: '#fff',
      alternative: '#ff0'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    googleFontsURL: 'https://fonts.googleapis.com/css?family=Poppins:300,400,700',
    baseFontSize: 10,
    h1: {
      fontSize: 4,
      fontWeight: 400
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
