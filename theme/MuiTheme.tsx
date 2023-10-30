'use client';

import { CssBaseline } from '@mui/material';
import { createContext, useState } from 'react';
import {
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';

type Mode = 'light' | 'dark';

interface ModeContext {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
}

// create context for mode
export const modeContext = createContext<ModeContext | null>(null);

export default function MuiTheme({ children }: { children: React.ReactNode }) {
  // states
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <modeContext.Provider value={{ mode, setMode }}>{children}</modeContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
