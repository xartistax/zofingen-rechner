export const surveyJson = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Wie viele Rechnungen bezahlen Sie pro Monat?",
        "isRequired": true,
        "requiredErrorText": "Dieses Feld ist zwingend",
        "inputType": "number",
        "minErrorText": "Der Wert muss weniger als {0} sein",
        "maxErrorText": "Der Wert muss grösser als {0} sein"
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "question2",
        "title": "Wie viele Rechnungen verschicken Sie pro Monat?\n",
        "isRequired": true,
        "requiredErrorText": "Dieses Feld ist zwingend",
        "inputType": "number",
        "minErrorText": "Der Wert muss weniger als {0} sein",
        "maxErrorText": "Der Wert muss grösser als {0} sein"
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "dropdown",
        "name": "question3",
        "title": "Sind Sie für die Mehrwertsteuer angemeldet?\n",
        "isRequired": true,
        "requiredErrorText": "Dieses Feld ist zwingend",
        "choices": [
         {
          "value": "Item 1",
          "text": "Keine Mehrwertsteuer"
         },
         {
          "value": "Item 2",
          "text": "Effektive Abrechnungsmethode"
         },
         {
          "value": "Item 3",
          "text": "Saldo Abrechnungsverfahren"
         },
         {
          "value": "Item 4",
          "text": "Ich weis es nicht"
         }
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "text",
        "name": "question4",
        "title": "Wie viele Mitarbeitende haben Sie?\n",
        "isRequired": true,
        "requiredErrorText": "Dieses Feld ist zwingend",
        "inputType": "number",
        "minErrorText": "Der Wert muss weniger als {0} sein",
        "maxErrorText": "Der Wert muss grösser als {0} sein"
       }
      ]
     }
    ],
    "showPageTitles": false,
    "showCompletedPage": false,
    "navigateToUrlOnCondition": [
     {}
    ],
    "pagePrevText": "Zurück",
    "pageNextText": "Weiter",
    "completeText": "Abschliessen"
   }