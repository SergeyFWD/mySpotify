import React, { useContext } from 'react'

export const themes = {
  light: {
    color: 'white',
    background: 'black',
  },
  dark: {
    color: 'black',
    background: '#F6F5F3',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}
