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

        // Construct the absolute path to the directory
        const pdfDirectoryPath = path.resolve(pdfsDirectory);

        // Ensure that the directory structure exists
        // fs.mkdirSync(pdfDirectoryPath, { recursive: true });

        // Proceed with rendering the PDF
        const pdfFilePath = path.join(pdfDirectoryPath, `${uuid}.pdf`);

        console.log(pdfFilePath)

        await ReactPDF.render(<PDFFile uuid={uuid} debugValues={debugValues} />, '/var/task/public/pdfs/test.pdf');

        //console.log("PDF created successfully at:", pdfFilePath);

        

    } catch (error) {
        console.error('Error rendering or uploading PDF:', error);
    } 
};

export default PDFCreator;


