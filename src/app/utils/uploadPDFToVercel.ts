"use server"
import { join } from 'path';
import { put } from "@vercel/blob";
import fs from 'fs';
import { addNewSubscriber } from './addNewSubscriber';
import { pdfsDirectory } from './calculations';
import path from 'path'; // Import path module

export const uploadPDFToVercel = async (uuid: string, email: string): Promise<string | undefined> => {
    try {
        // Construct the absolute path to the PDF file
        const pdfFilePath: string = path.resolve(pdfsDirectory, `${uuid}.pdf`);
       
        console.log('pdfsDirectory:', pdfsDirectory);
        console.log('filePath:', pdfFilePath);

        // Read the PDF file data
        const pdfFileData: Buffer = fs.readFileSync(pdfFilePath);
        console.log('PDF file read successfully.');

        // Upload the PDF to Vercel
        const { url } = await put(`${uuid}.pdf`, pdfFileData, { access: 'public', contentType: 'application/pdf' });
        console.log('PDF uploaded successfully:', url);

        // Add new subscriber
        addNewSubscriber(email, uuid, url);
        console.log('Subscriber added successfully.');

        return url; // Return the URL
    } catch (error) {
        console.error('Error uploading PDF:', error);
        return undefined; // Return undefined in case of error
    }
};

export async function getFileByUUID(uuid: string) {
    const filePath = path.resolve(pdfsDirectory, `${uuid}.pdf`); // Construct absolute file path
    console.log('Fetching file by UUID:', filePath); // Log the file path

    try {
        const fileData = fs.readFileSync(filePath); // Read file data
        console.log('File read successfully.');

        return fileData;
    } catch (error) {
        console.error('Error reading file:', error);
        return null; // Return null if file does not exist or cannot be read
    }
}

