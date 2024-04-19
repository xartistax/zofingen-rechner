"use server"
import MailerLite from "@mailerlite/mailerlite-nodejs";
import { format } from "date-fns";

export async function addNewSubscriber(email: string, generatedUuid: string, url: string): Promise<void> {
    console.log('START ADD SUBSCRIBER');
    const groups = ["118335752483374916"];
    const currentDateTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const mailerliteKey = process.env.NEXT_PUBLIC_MAILERLITE_KEY || "";

    if (!mailerliteKey) {
        console.log('NEXT_PUBLIC_MAILERLITE_KEY is not defined');
        throw new Error('NEXT_PUBLIC_MAILERLITE_KEY is not defined');
    }

    console.log('Key is here');

    const mailerlite = new MailerLite({ api_key: mailerliteKey });
    const params = {
        email: email,
        fields: { uuid: generatedUuid,  pdf_offerte: url },
        groups: groups,
        subscribed_at: currentDateTime,
    };

    try {
        await mailerlite.subscribers.createOrUpdate(params);
        console.log('Subscriber added successfully');
    } catch (error) {
        console.error('Error adding subscriber:', error);
        throw error; // Rethrow the error for the caller to handle
    }
}



