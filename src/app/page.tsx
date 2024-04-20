
"use client"
import { Survey } from 'survey-react-ui';
import { Calculator } from './utils/calculations';
import { surveyJson } from './utils/surveyJson';
import React, { useEffect, useState, useCallback } from 'react';
import { Model } from 'survey-core';
import { AppProvider, useAppContext } from './utils/AppContext';
import SurveyComponent from './components/Survey/SurveyComponent';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#021b55",
      },
    }
  });

  return (
    
    <ThemeProvider theme={theme}>
    <AppProvider>
      <SurveyComponent></SurveyComponent>
    </AppProvider>
    </ThemeProvider>
      
  );
}
