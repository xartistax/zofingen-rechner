import { DebugValues } from "../components/Survey/SurveyComponent";
import React from 'react';
import { handleSubmitAndCreatePDF } from "./submitForm";

export async function handleFormSubmitAsync(debugValues: DebugValues, email: string, generatedUuid: string, createPDF: boolean, setCreatePDF: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {

 

    await handleSubmitAndCreatePDF( debugValues, email, generatedUuid, createPDF, setCreatePDF);
}
