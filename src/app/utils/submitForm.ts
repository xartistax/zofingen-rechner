

import MailerLite from '@mailerlite/mailerlite-nodejs';
import ReactPDF from '@react-pdf/renderer';
import { format } from 'date-fns';

import PDFFile from '../components/PDF/PDFFile';
import PDFCreator from '../components/PDF/PDFCreate';
import { DebugValues } from '../components/Survey/SurveyComponent';
import { put } from '@vercel/blob';
import uuid from 'react-uuid';
import { addNewSubscriber } from './addNewSubscriber';
import { getFileByUUID, uploadPDFToVercel } from './uploadPDFToVercel';



export async function handleSubmitAndCreatePDF(debugValues: DebugValues, email: string, generatedUuid: string, createPDF: boolean, setCreatePDF: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {
    try {



        setCreatePDF(true)
        console.log(createPDF)

        
        await PDFCreator(createPDF, generatedUuid, debugValues);
        //await uploadPDFToVercel(generatedUuid, email);

        setCreatePDF(false)
        console.log(createPDF)



       

        
        
        
    } catch (error) {
        console.error('Error:', error);
    }
}





function delay(ms: number) {

    return new Promise(resolve => setTimeout(resolve, ms));
}


