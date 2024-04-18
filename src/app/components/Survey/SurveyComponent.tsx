
"use client"
import { Survey } from 'survey-react-ui';
import { Calculator } from '../../utils/calculations';
import { surveyJson } from '../../utils/surveyJson';
import React, { useEffect, useState, useCallback } from 'react';
import { Model } from 'survey-core';
import 'survey-core/defaultV2.min.css';
import { AppProvider, useAppContext } from '../../utils/AppContext';
import PDFComponent from '../PDF/PDFComponent';
import uuid from 'react-uuid';
import {   handleSubmitAndCreatePDF } from '@/app/utils/submitForm';
// @ts-ignore
import { DefaultLightPanelless } from "survey-core/themes/default-light-panelless";
import { handleFormSubmitAsync } from '@/app/utils/handleFormSubmitAsync';


export interface DebugValues {
  rechnungen_1: number;
  rechnungen_2: number;
  mwst: number;
  mitarbeiter: number;
  total: string;
  monthly: string;
}



export default function SurveyComponent() {



  const [generatedUuid] = useState(String(uuid()));






  const [ createPDF, setCreatePDF ] = useState(false);
  const [ email, setEmail ] = useState("");
  

  const { showSurveyResult, setShowSurveyResult } = useAppContext();
  const { monthlyCost, setMonthlyCost } = useAppContext();
  const { showSurvey, setShowSurvey } = useAppContext();
  const { debugValues, setDebugValues } = useAppContext();
  const [showMessage, setShowMessage] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLightPanelless);





  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setButtonClicked(true); 
    await handleFormSubmitAsync(debugValues, email, generatedUuid, createPDF, setCreatePDF);

};








  const handleSurveyComplete = useCallback((survey: { data: { question1: any; question2: any; question3: any; question4: any; }; }) => {
   

    const { question1: q1, question2: q2, question3: q3, question4: q4 } = survey.data;
    const rechnungen_1 = Calculator.calculateRechnungen(q1);
    const rechnungen_2 = Calculator.calculateRechnungen(q2);
    const mwst = Calculator.calculateMwst(q3);
    const mitarbeiter = Calculator.calculateMitarbeiter(q4);

    if (rechnungen_1 !== undefined && rechnungen_2 !== undefined && mwst !== undefined && mitarbeiter !== undefined) {

      const total = rechnungen_1 + rechnungen_2 + mwst + mitarbeiter;
      const monthly = total / 12;

      const debugValues: DebugValues = {
        rechnungen_1,
        rechnungen_2,
        mwst,
        mitarbeiter,
        total: String(total),
        monthly: String(monthly),
    };

      setMonthlyCost(monthly.toFixed(2)); 
      setShowSurvey(false);
      setShowSurveyResult(true);
      setDebugValues(debugValues)
      


    


      

      
    }
  }, [setDebugValues, setMonthlyCost, setShowSurvey, setShowSurveyResult]);


  useEffect(() => {
    if (showSurveyResult) {
      const surveyContainer = document.getElementById('surveyContainer');
      if (surveyContainer) surveyContainer.style.display = 'none';

      const totalValue = document.getElementById('totalValue');
      if (totalValue) totalValue.innerText = monthlyCost;

      const surveyResult = document.getElementById('surveyResult');
      if (surveyResult) {
        surveyResult.classList.add('show');
        surveyResult.style.minHeight = 'auto';
      }
    }
  }, [showSurveyResult, monthlyCost]);



  useEffect(() => {
    if (createPDF) {
      // Set showMessage to true when createPDF becomes true
      setShowMessage(true);
  
      // After 5 seconds, toggle showMessage back to false
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
  
      // Clear the timeout if the component unmounts or if showMessage becomes false before the timeout completes
      return () => clearTimeout(timeoutId);
    }
  }, [createPDF]);

  
  

  return (
    
      <main className="min-h-screen">
        {showSurvey && (
          <Survey
            model={survey}
            onComplete={handleSurveyComplete}
          />
        )}

        {showSurveyResult && (
          <div id="surveyResult" className="show p-12">
          <p style={{ fontSize: "24px", lineHeight: "1.5", fontWeight: "900" }}>
            Gemäss Ihren Angaben kostet Sie unser Service:
          
              <span className="totalValueBox">
                <span className="currencyIndicator">CHF </span>
                <span id="totalValue">{monthlyCost}</span> / Monat
              </span>
              <span className="currencyText"> exkl. MwSt</span>
    
        
            <a id="create_pdf" onClick={() => setCreatePDF(true)}>PDF anfordern</a> 
            
          </p>
        
          <p style={{ fontSize: "16px", fontWeight: "light" }} className='mt-5'>
            Möchten Sie ein detailliertes Angebot als PDF erhalten? Tragen Sie einfach nachfolgend Ihre E-Mail-Adresse ein.
          </p>
        
          {/* Email input field and submit button */}
          <form className='mt-5'  onSubmit={handleFormSubmit}>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Ihre E-Mail-Adresse
    </label>
    <div className="flex items-center"> {/* Flex container for input and button */}
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="email" 
        placeholder="Ihre E-Mail-Adresse" 
        style={{ flexGrow: 2 }}  // Adjust input field width relative to button
      />
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4" // More padding and margin-left for spacing
        type="submit"
        disabled={buttonClicked}
        style={{ flexGrow: 1 }}  // Adjust button width
      >
        Angebot als PDF erhalten
      </button>
    </div>

    {showMessage && <p>Wir haben Ihnen soeben ein Angebot zugeschickt</p>}
  </div>
</form>


        </div>
        )}



    {createPDF && (
      
        <PDFComponent 
          uuid={generatedUuid}
          debugValues={debugValues}           />
    )}
      </main>
   
  );
}
