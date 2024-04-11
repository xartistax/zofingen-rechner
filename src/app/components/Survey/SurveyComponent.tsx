
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


export interface DebugValues {
  rechnungen_1: number;
  rechnungen_2: number;
  mwst: number;
  mitarbeiter: number;
  total: string;
  monthly: string;
}



export default function SurveyComponent() {


  const generatedUuid: string = String(uuid()) ;






  const [ createPDF, setCreatePDF ] = useState(false);
  

  const { showSurveyResult, setShowSurveyResult } = useAppContext();
  const { monthlyCost, setMonthlyCost } = useAppContext();
  const { showSurvey, setShowSurvey } = useAppContext();
  const { debugValues, setDebugValues } = useAppContext();







  const handleSurveyComplete = useCallback((survey: { data: { question1: any; question2: any; question3: any; question4: any; }; }) => {
   

    const { question1: q1, question2: q2, question3: q3, question4: q4 } = survey.data;
    const rechnungen_1 = Calculator.calculateRechnungen(q1);
    const rechnungen_2 = Calculator.calculateRechnungen(q2);
    const mwst = Calculator.calculateMwst(q3);
    const mitarbeiter = Calculator.calculateMitarbeiter(q4);

    if (rechnungen_1 !== undefined && rechnungen_2 !== undefined && mwst !== undefined && mitarbeiter !== undefined) {

      const total = rechnungen_1 + rechnungen_2 + mwst + mitarbeiter;
      const monthly = total / 12;

      console.log(monthly)

      setMonthlyCost(monthly.toFixed(2));
      setShowSurvey(false);
      setShowSurveyResult(true);
      
      


      const debugValues: DebugValues = {
        rechnungen_1,
        rechnungen_2,
        mwst,
        mitarbeiter,
        total: String(total),
        monthly: String(monthly),
    };

    setDebugValues(debugValues)


      

      
    }
  }, []);


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
  }, [showSurveyResult]);

  return (
    
      <main className="min-h-screen">
        {showSurvey && (
          <Survey
            model={new Model(surveyJson)}
            onComplete={handleSurveyComplete}
          />
        )}

        {showSurveyResult && (
          <div id="surveyResult" className="show">
            <p style={{ fontSize: "24px", lineHeight: "1.5", fontWeight: "900" }}>
              Gemäss Ihren Angaben kostet Sie unser Service:
              <div>
                <span className="totalValueBox">
                  <span className="currencyIndicator">CHF</span>
                  <span id="totalValue">{monthlyCost}</span> / Monat
                </span>
                <span className="currencyText">inkl. MwSt</span>
              </div>
              {/* Add debug information here */}
              <a id="create_pdf"   onClick={() => setCreatePDF(true)} >PDF anfordern</a>
            </p>
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
