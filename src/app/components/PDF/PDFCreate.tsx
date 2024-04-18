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

        const resolvedPdfDirectoryPath = path.resolve(pdfsDirectory);
        const pdfFilePath = path.resolve(pdfsDirectory, `${uuid}.pdf`);

        
    

        await ReactPDF.render(<PDFFile uuid={uuid} debugValues={debugValues} />, pdfFilePath);




       console.log("done")

    } catch (error) {
        console.error('Error rendering or uploading PDF:', error);
    } 
};

export default PDFCreator;


