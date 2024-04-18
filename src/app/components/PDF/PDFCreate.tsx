"use server"
import ReactPDF from '@react-pdf/renderer';
import PDFFile from './PDFFile';
import { DebugValues } from '../Survey/SurveyComponent';
import fs from 'fs';
import { uploadPDFToVercel } from '@/app/utils/uploadPDFToVercel';
import { pdfsDirectory } from '@/app/utils/calculations';
import path from 'path'; // Import path module

export const PDFCreator = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {
    try {
        // Construct the absolute path to the PDF file
        const pdfFilePath = path.resolve(pdfsDirectory, `${uuid}.pdf`);

        // Ensure that the directory exists, create it if it doesn't
        const pdfDirectoryPath = path.dirname(pdfFilePath);
        if (!fs.existsSync(pdfDirectoryPath)) {
            fs.mkdirSync(pdfDirectoryPath, { recursive: true });
        }

        // Proceed with rendering the PDF
        await ReactPDF.render(<PDFFile uuid={uuid} debugValues={debugValues} />, pdfFilePath);

       
       
    } catch (error) {
        console.error('Error rendering or uploading PDF:', error);
    } 
};

export default PDFCreator;

