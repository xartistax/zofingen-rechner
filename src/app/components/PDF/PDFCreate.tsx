

"use server"
import ReactPDF from '@react-pdf/renderer';
import PDFFile from './PDFFile';
import { DebugValues } from '../Survey/SurveyComponent';
import fs from 'fs';

const PDFCreate = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {
    try {
        // Check if the directory exists, create it if it doesn't
        const pdfsDirectory = './public/pdfs';
        if (!fs.existsSync(pdfsDirectory)) {
            fs.mkdirSync(pdfsDirectory, { recursive: true });
        }

        // Render the PDF and write it to the directory
        await ReactPDF.render(<PDFFile uuid={uuid} debugValues={debugValues} />, `${pdfsDirectory}/${uuid}.pdf`);
    } catch (error) {
        throw new Error('Error creating PDF: ' + error);
    }
};

export default PDFCreate;


