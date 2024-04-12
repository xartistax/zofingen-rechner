
"use client"
import { Survey } from 'survey-react-ui';
import { Calculator } from './utils/calculations';
import { surveyJson } from './utils/surveyJson';
import React, { useEffect, useState, useCallback } from 'react';
import { Model } from 'survey-core';
import { AppProvider, useAppContext } from './utils/AppContext';
import SurveyComponent from './components/Survey/SurveyComponent';

export default function App() {

  return (
    
    <AppProvider>
      <SurveyComponent></SurveyComponent>
    </AppProvider>
      
  );
}
