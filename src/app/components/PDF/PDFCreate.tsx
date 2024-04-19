"use server"

import PDFFile from './PDFFile';
import { DebugValues } from '../Survey/SurveyComponent';
import fs from 'fs-extra';
import { uploadPDFToVercel } from '@/app/utils/uploadPDFToVercel';
import { pdfsDirectory } from '@/app/utils/calculations';
import path, { join, resolve } from 'path'; // Import path module
import ReactPDF from '@react-pdf/renderer';
import { mkdirp } from 'mkdirp'



 


export const PDFCreator = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {
    try {

        const dir= resolve(process.cwd(), '/tmp', uuid);

        mkdirp(dir).then(made =>
            console.log(`made directorie: ${dir}`)
          )

       
    } catch (error) {
        console.error('Error creating directory:', error);
      
    } 
};

export default PDFCreator;






