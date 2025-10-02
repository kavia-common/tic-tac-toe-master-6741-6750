import React, { createContext, useContext, useMemo } from 'react';

type Theme = {
  colors: {
    primary: string;
    primaryDim: string;
    secondary: string;
    error: string;
    background: string;
    surface: string;
    surfaceElevated: string;
    border: string;
    text: string;
    textSubtle: string;
    textMuted: string;
  };
  gradients: {
    appBackground: string[];
  };
};

const OceanThemeContext = createContext<Theme | null>(null);

/**
 * PUBLIC_INTERFACE
 * OceanThemeProvider
 * Provides the Ocean Professional theme across the app.
 */
export const OceanThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useMemo<Theme>(
    () => ({
      colors: {
        primary: '#2563EB',
        primaryDim: '#1D4ED8',
        secondary: '#F59E0B',
        error: '#EF4444',
        background: '#f9fafb',
        surface: '#ffffff',
        surfaceElevated: '#ffffff',
        border: 'rgba(17, 24, 39, 0.08)',
        text: '#111827',
        textSubtle: 'rgba(17, 24, 39, 0.8)',
        textMuted: 'rgba(17, 24, 39, 0.6)',
      },
      gradients: {
        appBackground: ['#eff6ff', '#ffffff'],
      },
    }),
    []
  );

  return <OceanThemeContext.Provider value={theme}>{children}</OceanThemeContext.Provider>;
};

/**
 * PUBLIC_INTERFACE
 * useOceanTheme
 * Hook to access the Ocean Professional theme object.
 */
export const useOceanTheme = () => {
  const ctx = useContext(OceanThemeContext);
  if (!ctx) {
    throw new Error('useOceanTheme must be used within OceanThemeProvider');
  }
  return ctx;
};
