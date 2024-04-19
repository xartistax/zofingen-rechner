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

        const publicDirectoryPath = '/var/task';

        // Check if the directory exists
        if (!fs.existsSync(publicDirectoryPath)) {
            // If it doesn't exist, attempt to create it
            try {
                fs.mkdirSync(publicDirectoryPath, { recursive: true });
                console.log('Public directory created:', publicDirectoryPath);
            } catch (error) {
                console.error('Error creating public directory:', error);
            }
        } else {
            console.log('Public directory already exists:', publicDirectoryPath);
        }

        

    } catch (error) {
        console.error('Error rendering or uploading PDF:', error);
    } 
};

export default PDFCreator;


