"use server"
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { format } from "date-fns";
import { getFileByUUID } from "./uploadPDFToVercel";

export async function addNewSubscriber(email: string, generatedUuid: string, url: string): Promise<void> {

    
    const currentDateTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const mailerliteKey = process.env.NEXT_PUBLIC_MAILERLITE_KEY || "";
    const mailerlite = new MailerLite({ api_key: mailerliteKey });
    const params = {
        email: email,
        fields: { uuid: generatedUuid,  pdf_offerte: url },
        groups: ["118335752483374916"],
        subscribed_at: currentDateTime,
    };

    if (!mailerliteKey || mailerliteKey === "") {
        throw new Error('NEXT_PUBLIC_MAILERLITE_KEY is not defined');
    }

    try {
        await mailerlite.subscribers.createOrUpdate(params);
        console.log('Subscriber added successfully');
    } catch (error) {
        console.error('Error adding subscriber:', error);
        throw error; // Rethrow the error for the caller to handle
    }
}