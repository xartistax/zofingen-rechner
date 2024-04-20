# Zofingen Rechner

This project is built using Next.js and deployed on Vercel. It incorporates SurveyJS for survey functionalities, ReactPDF for generating PDF offers, and MailerLite for managing email subscriptions and sending offers.

## About

Zofingen Rechner is a web application designed to provide users with calculators and surveys related to various topics. It aims to simplify complex calculations and gather user feedback efficiently. Additionally, it offers PDF offers to users based on their survey responses.

## Features

- Next.js: A React framework for building server-side rendered and statically generated applications.
- Vercel: A cloud platform for static sites and serverless functions, used for deployment.
- SurveyJS: A JavaScript survey and form library for creating surveys and collecting responses.
- ReactPDF: A library for generating PDF files using React components.
- MailerLite: An email marketing tool for managing email subscriptions and sending emails to users.

## Usage

To access the Zofingen Rechner application, visit [https://zofingen-rechner.vercel.app/](https://zofingen-rechner.vercel.app/).

## Workflow

The workflow of Zofingen Rechner is as follows:

1. **Survey**: Users take a survey provided by SurveyJS.
2. **PDF Offer**: At the end of the survey, users are asked if they want a PDF offer. If they choose yes, they provide their email address.
3. **PDF Generation**: A PDF offer is generated based on the survey responses and stored in Vercel storage.
4. **Email Subscription**: The user's email address is added to a MailerLite group for future communications.
5. **Email Sending**: The generated PDF offer is sent to the user's email address using MailerLite.

## Development

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/zofingen-rechner.git
   ```

2. Install dependencies:

   ```bash
   cd zofingen-rechner
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Contributing

Contributions to Zofingen Rechner are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to us at [your-email@example.com](mailto:your-email@example.com).
