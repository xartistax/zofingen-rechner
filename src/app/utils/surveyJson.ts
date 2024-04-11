export const surveyJson = {
    "title": "Zofingen Treuhand",
    "description": "Rechner",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Wie viele Rechnungen bezahlen Sie pro Monat?*",
        "inputType": "number"
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "question2",
        "title": "Wie viele Rechnungen verschicken Sie pro Monat?*\n",
        "inputType": "number"
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
        "inputType": "number"
       }
      ]
     }
    ],
    "navigateToUrlOnCondition": [
     {}
    ]
}