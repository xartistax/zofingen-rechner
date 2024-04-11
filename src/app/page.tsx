import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import ReactPDF from '@react-pdf/renderer';
import PDFFile from './components/PDFFile';
import PDFComponent from './components/PDFComponent';

 


export default function App ()  {
  return (
    <div>
      <h1>My PDF Viewer</h1> 
      <PDFComponent /> 
    </div>
  );
};
