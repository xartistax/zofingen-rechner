

"use server"
import ReactPDF from '@react-pdf/renderer';
import PDFFile from './PDFFile';
import { AppContextType } from '@/app/utils/AppContext';
import { DebugValues } from '../Survey/SurveyComponent';





const PDFCreate = async (createPDF: boolean, uuid: string, debugValues: DebugValues) => {

    if (createPDF) {
        await ReactPDF.render(<PDFFile  uuid={uuid} debugValues={debugValues} />, `./public/pdfs/${uuid}.pdf`);
    }

};

export default PDFCreate;


