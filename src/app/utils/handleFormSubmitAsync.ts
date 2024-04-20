import { DebugValues } from "../components/Survey/SurveyComponent";
import React from 'react';
import { handleSubmitAndCreatePDF } from "./submitForm";
import PDFCreator from "../components/PDF/PDFCreate";
import { addNewSubscriber } from "./addNewSubscriber";
import { uploadPDFToVercel } from "./uploadPDFToVercel";

export async function handleFormSubmitAsync(debugValues: DebugValues, email: string, generatedUuid: string, setShowMessage : React.Dispatch<React.SetStateAction<boolean>>, setStatusMessage: React.Dispatch<React.SetStateAction<string>>): Promise<void> {

 

    try {
      

        const success = await PDFCreator( generatedUuid, debugValues);
        if (success) {
            console.log('PDF successfully created.');
            const url = await uploadPDFToVercel(generatedUuid, email);

            if (url) {
                console.log('PDF uploaded to Vercel:', url);
                await addNewSubscriber(email, generatedUuid, url);
                console.log('Subscriber added successfully.');
            } else {
                console.error('Error uploading PDF to Vercel: URL is null.');
                setShowMessage(true)
                setStatusMessage("Bitte versuchen Sies später nochmals")
            }
        } else {
            console.error('PDF creation failed.');
            setShowMessage(true)
            setStatusMessage("Bitte versuchen Sies später nochmals")
        }


        setShowMessage(true)
        setStatusMessage("Wir haben Ihnen soeben ein Angebot zugeschickt")
       
       
        
    } catch (error) {
        console.error('Error:', error);
    }
}
