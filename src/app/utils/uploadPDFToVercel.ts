"use server"
import { join, resolve } from 'path';
import { put } from "@vercel/blob";
import fs from 'fs';
import { addNewSubscriber } from './addNewSubscriber';
import { pdfsDirectory } from './calculations';
import path from 'path'; // Import path module



export const uploadPDFToVercel = async (uuid: string, email: string) => {

    try {

        const pdfFilePath = resolve(process.cwd(), '/tmp', uuid, `${uuid}.pdf`);
        console.log( pdfFilePath )


        // Read the PDF file data
        const pdfFileData: Buffer = fs.readFileSync(pdfFilePath);
        console.log('PDF file read successfully.');


        // Upload the PDF to Vercel
        const { url } = await put(`${uuid}.pdf`, pdfFileData, { access: 'public', contentType: 'application/pdf' });
        console.log('PDF uploaded successfully:', url);


        return url

        
    } catch (error) {

        return null
        
    }

    


};


