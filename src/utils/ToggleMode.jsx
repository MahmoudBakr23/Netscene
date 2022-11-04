import React, { useState, createContext, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

export const ColorModeContext = createContext();

function ToggleMode({ children }) {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const theme = useMemo(() => createTheme({
    palette: {
      type: mode,
    },
  }), [mode]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleMode;
