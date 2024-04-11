"use client"
import React, { useEffect, useState } from 'react';
import PDFCreate from './PDFCreate';

const PDFComponent = () => {
    const [createPDF, setCreatePDF] = useState(false);
    const [isCreatingPDF, setIsCreatingPDF] = useState(false);

    useEffect(() => {
        setCreatePDF(true);
    }, []);

    useEffect(() => {
        if (createPDF) {
            setIsCreatingPDF(true);
            PDFCreate(createPDF).then(() => {
                setIsCreatingPDF(false); // Update the indicator when PDF creation is completed
            });
        }
    }, [createPDF]);

    return (
        <div>
            <button disabled={isCreatingPDF} onClick={() => setCreatePDF(true)}>
                {isCreatingPDF ? 'Creating PDF...' : 'Create PDF'}
            </button>
            {isCreatingPDF && <div>PDF is being created...</div>}
        </div>
    );
};

export default PDFComponent;
