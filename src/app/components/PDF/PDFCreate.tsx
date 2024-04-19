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

        const dir = resolve(process.cwd(), '/tmp', uuid);
        mkdirp(dir).then(async made =>  await ReactPDF.render(<PDFFile uuid={uuid} debugValues={debugValues} />, `${dir}/${uuid}.pdf`) )
        console.log('PDF successfully created:', `${dir}/${uuid}.pdf`);
        return true 

       
    } catch (error) {
        console.error('Error rendering or saving PDF:', error);
        return false
      
    } 
};

export default PDFCreator;






