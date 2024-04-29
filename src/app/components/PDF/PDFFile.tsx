import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';


import { DebugValues } from '../Survey/SurveyComponent';


Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 'light' },
  ]
});


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10,
  },

  section: {
    margin: 10,
    padding: 10,
    fontSize: '9px',
    fontWeight: 'light',
    fontFamily: 'Roboto',
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tableCol: {
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 0,
    padding: 5,
    fontWeight: 'light',
  },
  tableCell: {
    textAlign: 'left',
    fontWeight: 'light',
  },
  tableCellBold: {
    textAlign: 'left',
    fontWeight: 'bold',

  },
  tableHeader: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

const PDFFile: React.FC<{ uuid: string; debugValues: DebugValues }> = ({ uuid, debugValues }) => {

  const rechnung_1 = debugValues.rechnungen_1 / 12
  const rechnung_2 = debugValues.rechnungen_2 / 12
  const mwst = debugValues.mwst / 12
  const mitarbeiter = debugValues.mitarbeiter / 12

  const transactions = debugValues.answers.question1 + debugValues.answers.question2
  const mehrzweckMethode = debugValues.answers.question3
  const anzahlMitarbeiter = debugValues.answers.question4

  const tableData = [
    { leistungen: ' Buchhaltung (inkl. Jahresabschluss) ', details: `bis ${ transactions } Transaktionen / Jahr`, jeMonat: `${rechnung_1 + rechnung_2} .-` },
    { leistungen: ' Mehrwertsteuerberechnung ', details: 'Pauschal', jeMonat: `${mwst}.-` } ,
    { leistungen: ' Lohnbuchhaltung', details: ` ${anzahlMitarbeiter} MitarbeiterInnen `, jeMonat: `${mitarbeiter}.-` }
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ color: 'rgb(1, 32, 104)', fontSize: '28px', fontWeight: 'extrabold' }}>Unverbindliche Offerte</Text>
          <Text style={{ marginBottom: '25px', marginTop: '25px' }}> Wir danken Ihnen für Ihre Anfrage und das damit verbundene Interesse an unseren Dienstleistungen. </Text>
          <Text>
           Basierend auf den spezifischen Bedürfnissen Ihres Unternehmens haben wir ein individuelles Servicepaket berechnet. Die Konditionen berechnen sich aus den monatlichen Transaktionen, einschliesslich der ausgestellten und bezahlten Rechnungen sowie der tatsächlich in Anspruch genommenen Dienstleistungen.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ color: 'rgb(1, 32, 104)', fontSize: '16px', fontWeight: 'extrabold' }}> Ihr massgeschneidertes Leistungspaket beinhaltet: </Text>
        </View>

        <View style={styles.section}>
          <View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeader}>Leistung</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeader}>Details</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableHeader}>je Monat</Text>
              </View>
            </View>
            {tableData.map((rowData, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{rowData.leistungen}</Text>
                  {index === 1 && ( // Conditionally render the additional Text component
        <Text style={styles.tableCellBold} >
          
           {mehrzweckMethode === "Item 1" && (" (Keine Mehrwertsteuer)")}
           {mehrzweckMethode === "Item 2" && (" (Effektive Abrechnungsmethode)")}
           {mehrzweckMethode === "Item 3" && (" (Saldo Abrechnungsverfahren)")}
           {mehrzweckMethode === "Item 4" && (" (Ich weis es nicht)x")}
           
            </Text>
      )}
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}> {rowData.details} </Text>
                  
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{rowData.jeMonat}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={{ ...styles.section, borderTopWidth: 1, borderColor: 'black', paddingTop: 10 }}>
          <View style={styles.tableRow}>
            <View style={{ ...styles.tableCol, flex: 2 }}>
              <Text style={{ ...styles.tableCell, fontWeight: 'bold' }}> Monatlicher Gesamtaufwand (exkl. MwSt.)</Text>
            </View>
            <View style={styles.tableCol}>
              {/* Placeholder for the value */}
            </View>
            <View style={{ ...styles.tableCol, justifyContent: 'flex-end' }}>
              <Text style={{ ...styles.tableCell, textAlign: 'left', fontWeight: 'bold' }}>CHF {debugValues.monthly}</Text>
            </View>
          </View>
        </View>

      


        <View style={{ ...styles.section  }}>
        <Text style={{ color: 'rgb(1, 32, 104)', fontSize: '14px', fontWeight: 'extrabold', marginBottom: 10 }}>Vertrauen Sie auf unsere Expertise: </Text>
          <Text> Als Ihr Partner in den Bereichen Buchhaltung, Lohnbuchhaltung und Steuerberatung ermöglichen wir Ihnen, sich voll und ganz auf Ihr Kerngeschäft zu konzentrieren. Unser Dienstleistungsangebot ist flexibel und passt sich den individuellen Bedürfnissen Ihres Unternehmens an. Wir arbeiten eng mit Ihnen zusammen, um Ihren Erfolg nachhaltig zu fördern.  </Text>
          
            <Text style={{ fontWeight: 'bold', paddingTop: '30px' }} > Darüber hinaus bieten wir: </Text>
            <Text> - Flexible Zahlungsoptionen auf monatlicher Basis</Text>
            <Text> - Eine genaue Abrechnung basierend auf den tatsächlich genutzten Leistungen </Text>



          </View>


          <View style={{ ...styles.section  }}>
            <Text> Haben Sie weitere Fragen zu unserem Angebot oder wünschen Sie eine individuelle Beratung?  </Text>
            <Text> Wir stehen Ihnen gerne für ein persönliches Gespräch zur Verfügung und freuen uns darauf, Ihr Unternehmen mit unserer fachlichen Kompetenz und unserem Engagement zu unterstützen. </Text>
          </View>



          <View style={{ ...styles.section  }}>
            <Text>  Philippe Bally </Text>
            <Text>  Dipl. Treuhänder FA / Steuerexperte </Text>
            <Text>  Zofingen Treuhand AG </Text>
          </View>





          

      </Page>
    </Document>
  );
};

export default PDFFile;
