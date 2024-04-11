

"use server"
import ReactPDF from '@react-pdf/renderer';
import uuid from 'react-uuid';
import PDFFile from './PDFFile';





const PDFCreate = async (createPDF: boolean) => {

    if (createPDF) {

        await ReactPDF.render(<PDFFile name={"Demian"} />, `./public/pdfs/${uuid()}.pdf`);
    }

};

export default PDFCreate;


