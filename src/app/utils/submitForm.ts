


import MailerLite from '@mailerlite/mailerlite-nodejs';
import ReactPDF from '@react-pdf/renderer';
import { format } from 'date-fns';

import PDFFile from '../components/PDF/PDFFile';
import PDFCreator from '../components/PDF/PDFCreate';
import { DebugValues } from '../components/Survey/SurveyComponent';
import { put } from '@vercel/blob';
import uuid from 'react-uuid';
import { addNewSubscriber } from './addNewSubscriber';
import {  uploadPDFToVercel } from './uploadPDFToVercel';



export async function handleSubmitAndCreatePDF(debugValues: DebugValues, email: string, generatedUuid: string, createPDF: boolean, setCreatePDF: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {
    try {
        setCreatePDF(true);
        console.log(createPDF);

        const success = await PDFCreator(createPDF, generatedUuid, debugValues);
        if (success) {
            console.log('PDF successfully created.');
            const url = await uploadPDFToVercel(generatedUuid, email);

            if (url) {
                console.log('PDF uploaded to Vercel:', url);
                await addNewSubscriber(email, generatedUuid, url);
                console.log('Subscriber added successfully.');
            } else {
                console.error('Error uploading PDF to Vercel: URL is null.');
            }
        } else {
            console.error('PDF creation failed.');
        }
       
        setCreatePDF(false);
        console.log(createPDF);
        
    } catch (error) {
        console.error('Error:', error);
    }
}






function delay(ms: number) {

    return new Promise(resolve => setTimeout(resolve, ms));
}


