import MailerLite from '@mailerlite/mailerlite-nodejs';
import { format } from 'date-fns';




export function handleSubmitAndCreatePDF(email: string, generatedUuid: string, setCreatePDF: React.Dispatch<React.SetStateAction<boolean>>): (e: React.FormEvent<HTMLFormElement>) => void {

  const mailerliteKey = process.env.NEXT_PUBLIC_MAILERLITE_KEY;
  if (!mailerliteKey) {
      throw new Error('NEXT_PUBLIC_MAILERLITE_KEY is not defined');
  }

  const currentDateTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  const mailerlite = new MailerLite({
      api_key: mailerliteKey 
  });

  const params = {
      email: email,
      fields: { 
          uuid: generatedUuid,
      },
      groups: ["118335752483374916"],
      subscribed_at: currentDateTime,
  };

  const handleSubmission = function (e: React.FormEvent<HTMLFormElement>): void {
      e.preventDefault();
      mailerlite.subscribers.createOrUpdate(params)
          .then(response => {
              console.log(response.data);
              setCreatePDF(true); // Set createPDF to true after successful submission
          })
          .catch(error => {
              if (error.response) console.log(error.response.data);
          });
  };

  return handleSubmission;
}
