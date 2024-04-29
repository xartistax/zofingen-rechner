"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of your context
export interface AppContextType {
  showSurveyResult: boolean;
  setShowSurveyResult: React.Dispatch<React.SetStateAction<boolean>>;
  showSurvey: boolean;
  setShowSurvey: React.Dispatch<React.SetStateAction<boolean>>;
  monthlyCost: string;
  setMonthlyCost: React.Dispatch<React.SetStateAction<string>>;
  debugValues: {
    rechnungen_1: number;
    rechnungen_2: number;
    mwst: number;
    mitarbeiter: number;
    total: string;
    monthly: string;
    answers: { question1: number, question2: number, question3: string, question4: number },
  };
  setDebugValues: React.Dispatch<
    React.SetStateAction<{
      rechnungen_1: number;
      rechnungen_2: number;
      mwst: number;
      mitarbeiter: number;
      total: string;
      monthly: string;
      answers: { question1: number, question2: number, question3: string, question4: number },
    }>
  >;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showSurveyResult, setShowSurveyResult] = useState(false);
  const [showSurvey, setShowSurvey] = useState(true);
  const [monthlyCost, setMonthlyCost] = useState("");
  const [debugValues, setDebugValues] = useState({
    rechnungen_1: 0,
    rechnungen_2: 0,
    mwst: 0,
    mitarbeiter: 0,
    total: "",
    monthly: "",
    answers: {
      question1 : 0,
      question2 : 0,
      question3 : "",
      question4 : 0
    }
  });

  return (
    <AppContext.Provider
      value={{
        showSurveyResult,
        setShowSurveyResult,
        showSurvey,
        setShowSurvey,
        monthlyCost,
        setMonthlyCost,
        debugValues,
        setDebugValues
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
