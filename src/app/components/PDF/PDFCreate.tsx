

"use server"
import ReactPDF from '@react-pdf/renderer';
import PDFFile from './PDFFile';
import { DebugValues } from '../Survey/SurveyComponent';
import fs from 'fs';
import { put } from '@vercel/blob';
import { uploadPDFToVercel } from '@/app/utils/uploadPDFToVercel';
import { pdfsDirectory } from '@/app/utils/calculations';

export const PDFCreator = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {
    try {
        // Check if the directory exists, create it if it doesn't
        if (!fs.existsSync(pdfsDirectory)) {
            fs.mkdirSync(pdfsDirectory, { recursive: true });
        }

        const pdfFilePath = `${pdfsDirectory}/${uuid}.pdf`;
        await ReactPDF.render(<PDFFile uuid={uuid} debugValues={debugValues} />, pdfFilePath);

        
    
        
 


    } catch (error) {
        console.error('Error uploading PDF:', error);
    } 
};

export default PDFCreator;








