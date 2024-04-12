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

  const tableData = [
    { leistungen: 'Kreditoren', details: 'Wie viele Rechnungen bezahlen Sie pro Monat', jeMonat: `${rechnung_1}.-` },
    { leistungen: 'Debitoren', details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', jeMonat: `${rechnung_2}.-` },
    { leistungen: 'Mwst Pflichtig', details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', jeMonat: `${mwst}.-` },
    { leistungen: 'Anzahl Mitarbeiter', details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', jeMonat: `${mitarbeiter}.-` }
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ color: 'rgb(1, 32, 104)', fontSize: '28px', fontWeight: 'extrabold' }}>Unverbindliche Offerte</Text>
          <Text style={{ marginBottom: '25px', marginTop: '25px' }}>Vielen Dank für Ihre Anfrage</Text>
          <Text>Die Ihrem Bedarf entsprechenden Leistungen habe ich individuell für Sie zusammengestellt. (Die hierbei errechneten Konditionen ergeben sich aus der Anzahl der monatlichen Transaktionen: die bezahlten und versendeten Rechnungen sowie die effektiv genutzten Dienstleistungen.) </Text>
        </View>

        <View style={styles.section}>
          <Text style={{ color: 'rgb(1, 32, 104)', fontSize: '16px', fontWeight: 'extrabold' }}>Ihr individuelles Leistungspaket:</Text>
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
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{rowData.details}</Text>
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
              <Text style={{ ...styles.tableCell, fontWeight: 'bold' }}> Monatlicher Gesamtaufwand (exklusive MwSt.)</Text>
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
        <Text style={{ color: 'rgb(1, 32, 104)', fontSize: '14px', fontWeight: 'extrabold', marginBottom: 10 }}>Auf meine Zahlen können Sie zählen:</Text>
          <Text>Ich unterstütze Unternehmer in den Bereichen Buchhaltung, Lohnwesen und Steuern, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.</Text>
          <Text style={{ paddingTop: 10, paddingBottom: 5 }}>Damit das bestmöglich gelingt, passt sich mein Leistungsangebot dem Bedarf Ihres Unternehmens an: Ich arbeite nicht nur für Sie, sondern mit Ihnen an der Steigerung Ihres Erfolgs. Darüber hinaus proﬁtieren Sie von zahlreichen weiteren Vorteilen wie:</Text>
       

  
            <Text> - Monatlicher Zahlungsweise</Text>
            <Text> - Punktgenaue Berechnung der tatsächlich in Anspruch genommenen Leistungen</Text>
            <Text> - Jederzeitige Kündigungsmöglichkeit ohne Vorlauf</Text>
            <Text> - Und vielem mehr.</Text>


          </View>


          <View style={{ ...styles.section  }}>
            <Text>Haben Sie Fragen zu meinem Angebot? Dann lassen Sie uns über Ihr Vorhaben und Ihre Bedürfnisse sprechen. Ich freue mich, Ihr Unternehmen mit meinem Engagement begleiten zu dürfen!</Text>
          </View>


          

      </Page>
    </Document>
  );
};

export default PDFFile;
