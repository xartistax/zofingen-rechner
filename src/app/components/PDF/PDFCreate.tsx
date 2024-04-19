"use server"

import PDFFile from './PDFFile';
import { DebugValues } from '../Survey/SurveyComponent';
import fs from 'fs';
import { uploadPDFToVercel } from '@/app/utils/uploadPDFToVercel';
import { pdfsDirectory } from '@/app/utils/calculations';
import path from 'path'; // Import path module
import ReactPDF from '@react-pdf/renderer';






export const PDFCreator = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {
    try {
        const dir = `./tmp/${uuid}`;

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        return Promise.resolve("Directory created successfully.");
    } catch (error) {
        console.error('Error creating directory:', error);
        return Promise.reject(error);
    } 
};

export default PDFCreator;


