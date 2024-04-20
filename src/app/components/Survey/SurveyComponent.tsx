
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
import PDFCreate from '../PDF/PDFCreate';
import LinearProgress from '@mui/material/LinearProgress';
import { Loading } from 'react-loading-dot'
import { Box } from '@mui/material';

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





  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const [ createPDF, setCreatePDF ] = useState(false);
  const [ email, setEmail ] = useState("");
  

  const { showSurveyResult, setShowSurveyResult } = useAppContext();
  const { monthlyCost, setMonthlyCost } = useAppContext();
  const { showSurvey, setShowSurvey } = useAppContext();
  const { debugValues, setDebugValues } = useAppContext();
  const [ loading , setLoading ] = useState(false)
  const [showMessage, setShowMessage] = useState(false);
  const [ statusMessage, setStatusMessage ] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false);
  const survey = new Model(surveyJson);
  survey.applyTheme(DefaultLightPanelless);
  const isValidEmail = validateEmail(email);





  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    

    
  
    if (isValidEmail) {
      
      setButtonClicked(true); 
      await handleFormSubmitAsync(debugValues, email, generatedUuid, setShowMessage, setStatusMessage);
      
    } else {
      setShowMessage(true)
      setStatusMessage("Bitte geben Sie eine gèltige Email Adresse an")
    }


    setLoading(false)

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




  
  

  return (
    
      <main className="min-h-screen">
        {showSurvey && (
          <Survey
            model={survey}
            onComplete={handleSurveyComplete}
          />
        )}

        {showSurveyResult && (
          <div id="surveyResult" className="show p-12 sd-body sd-body--static">
          <p style={{ fontSize: "24px", lineHeight: "1.5", fontWeight: "900" }}>
            Gemäss Ihren Angaben kostet Sie unser Service: <br />
          
              <span className="totalValueBox">
                <span className="currencyIndicator"> CHF </span>
                <span id="totalValue">{monthlyCost}</span> / Monat
              </span>
              <span className="currencyText"> exkl. MwSt</span>
    
        
            
            
          </p>
        
          <p style={{ fontSize: "16px", fontWeight: "light" }} className='mt-5'>
            Möchten Sie ein detailliertes <b>Angebot als PDF erhalten? </b> Tragen Sie einfach nachfolgend Ihre E-Mail-Adresse ein.
          </p>
        
          {/* Email input field and submit button */}
          <form className='mt-5'  onSubmit={handleFormSubmit}>
  <div className="mb-4">
   




    <div className="sd-question__header sd-element__header sd-question__header--location-top sd-element__header--location-top">
      <h5 className="sd-title sd-element__title sd-question__title sd-question__title--required" id="sq_176_ariaTitle">
        <span data-key="q_num" className="sd-element__num" aria-hidden="true">1.</span>
        <span data-key="num-sp">&nbsp;</span>
        <span className="sv-string-viewer sv-string-viewer--multiline">Ihre E-Mail-Adresse*</span>
        <span data-key="req-sp">&nbsp;</span><span data-key="req-text" className="sd-question__required-text" aria-hidden="true">*</span>
      </h5>
      </div>




      <div className="flex flex-col"> {/* Flex container for email field and loading/status message */}
  <div className="flex items-center justify-between"> {/* Flex container for input and button */}
    <div className="sd-text__content sd-question__content" role="presentation" style={{ width: "calc(70% - 25px)" }}> {/* Adjusted width */}
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        type="email" 
        className="sd-input sd-text " 
        id="email" 
        placeholder="Ihre E-Mail-Adresse" 
        disabled={buttonClicked}
      />
      
    </div>

    <div className="sv-action" id="sv-nav-next" style={{ width: "calc(30% - 25px)" }}> {/* Adjusted width */}
      <div className="">
        <button 
          className="sd-btn sd-navigation__next-btn custom" // More padding and margin-left for spacing
          type="submit"
          disabled={buttonClicked}
          style={{width:'100%', padding:'12px 12px' , color:'#fff'}}
        >
          Angebot erhalten
        </button>
      </div>
    </div>


    
  </div> 

  <div className="sd-text__content sd-question__content" role="presentation" style={{ width: "calc(70% - 25px)" }}> {/* Adjusted width */}
    <div>{loading ? <Box sx={{ width: '100%' }}><LinearProgress color='primary' /></Box> :  showMessage && 
    
    
    <div role="alert" aria-live="polite" className="sd-error sd-element__erbox sd-question__erbox sd-element__erbox--above-element sd-question__erbox--above-question" id="sq_104_errors">
      <div>
        <span aria-hidden="true"></span>
        <span>
          <span className="sv-string-viewer">{ statusMessage }</span>
          </span>
          </div>
          </div>
    
    
    }
    

    
    
    
    </div>
    </div>


</div>





    
    

  </div>
</form>


        </div>
        )}


      </main>
   
  );
}
