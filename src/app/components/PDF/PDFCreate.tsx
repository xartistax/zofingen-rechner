"use server"

import PDFFile from './PDFFile';
import { DebugValues } from '../Survey/SurveyComponent';
import fs from 'fs-extra';
import { uploadPDFToVercel } from '@/app/utils/uploadPDFToVercel';
import { pdfsDirectory } from '@/app/utils/calculations';
import path from 'path'; // Import path module
import ReactPDF from '@react-pdf/renderer';
import { mkdirp } from 'mkdirp'






export const PDFCreator = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {
    try {

        const dir = path.resolve(process.cwd(), 'tmp', uuid);
        const made = mkdirp.sync(dir)
        console.log(`made directories, starting with ${made}`)

    } catch (error) {
        console.error('Error creating directory:', error);
      
    } 
};

export default PDFCreator;






