"use client"
import React, { useEffect, useState } from 'react';
import PDFCreate from './PDFCreate';
import { AppContextType } from '@/app/utils/AppContext';
import { DebugValues } from '../Survey/SurveyComponent';


interface PDFComponentProps {
    uuid: string;
    debugValues: DebugValues
  }






  const PDFComponent: React.FC<PDFComponentProps> = ({ uuid, debugValues}) => {
    const [createPDF, setCreatePDF] = useState(false);
    const [isCreatingPDF, setIsCreatingPDF] = useState(false);

    useEffect(() => {
        setCreatePDF(true);
    }, []);

    useEffect(() => {
        if (createPDF) {
            console.log(debugValues)
            setIsCreatingPDF(true);
            PDFCreate(createPDF, uuid, debugValues).then(() => {
                setIsCreatingPDF(false); // Update the indicator when PDF creation is completed
            });
        }
    }, [createPDF]);

    return (
        <div>
            <button disabled={isCreatingPDF} onClick={() => setCreatePDF(true)}>
                {isCreatingPDF ? 'Creating PDF...' : null}
            </button>
            {isCreatingPDF && <div>PDF is being created...</div>}
        </div>
    );
};

export default PDFComponent;
