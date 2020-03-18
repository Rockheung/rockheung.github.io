import './src/styles/global.css';
import React from 'react';
import { ThemeProvider } from './src/context/Neumorphism';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
