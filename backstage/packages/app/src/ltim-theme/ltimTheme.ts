/**
 * monkmantra - new file created for LTIM theme
 */

import {
    createBaseThemeOptions,
    createUnifiedTheme,
    genPageTheme,
    palettes,
  } from '@backstage/theme';
  
export const ltimTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      navigation: {
        background: '#002643',
        color: '#FFFFFF',
        selectedColor: '#FFCB28',
        indicator: '#FFCB28',
        navItem: {
          hoverBackground: '#014B86',
        },
      },
    },
  }),
  fontFamily: 'Calibri',
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({
      colors: ['#014B86', '#002643'],
      shape: 'none',
    }),
    documentation: genPageTheme({
      colors: ['#014B86', '#002643'],
      shape: 'none',
      options: {
        fontColor: '#FFFFFF',
      },
    }),
  },
});