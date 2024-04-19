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

        const dir = path.join(process.cwd(), 'tmp', uuid);
        

        

        fs.mkdir(path.resolve(dir), { recursive: true }, e => {
            if (e) {
                console.error(e);
                console.log("NO!")
            } else {
                console.log('Success');
            }
        })
        

        
    } catch (error) {
        console.error('Error creating directory:', error);
        return Promise.reject(error); 
    } 
};

export default PDFCreator;






