import { node } from "../types/global"

export const tree: { header: any; questions: Record<string, node> } = {
  header: {
    version: 0.1,
    build_date: "2021-01-17",
    tree_name: "Hackathon Januar 2021",
    tree_slug: "hackathon-januar-2021",
    start_node: "interessenkonflikt",
    vars: {},
  },
  questions: {
    "e-mail-adresse": {
      name: "Angaben zu Ihrer Person",
      text: "<p>Was ist Ihre E-Mail-Adresse?</p>",
      inputs: [
        {
          type: "text",
          validation: "short_text",
          label: "E-Mail:",
          name: "e-mail",
        },
      ],
      destination: {
        default: "alter",
      },
      action: [],
    },
    "brutto-gehalt": {
      name: "Bruttogehalt",
      text: "<p>Wie hoch ist Ihr monatliches Bruttogehalt (in EUR)?</p>",
      inputs: [
        {
          type: "number",
          label: "",
          name: "number",
        },
      ],
      rules: {
        if: [
          {
            "<": [
              {
                var: "number",
              },
              450,
            ],
          },
          "0",
          {
            ">=": [
              {
                var: "number",
              },
              450,
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "abweisen-gehalt",
        1: "schriftlich",
      },
      action: [],
    },
    deutschland: {
      name: "Inlandsbezug",
      text:
        "<p>Ist der Betrieb, bei dem Sie angestellt sind, in Deutschland t&auml;tig?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein", "Ich weiß es nicht"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja", "Ich weiß es nicht"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "brutto-gehalt",
        1: "abweisen",
        2: "brutto-gehalt",
      },
      action: [],
    },
    abweisen: {
      name: "Ende",
      text:
        "<p>Leider k&ouml;nnen wir Ihnen in Ihrem Fall nicht weiterhelfen.&nbsp;</p>",
      inputs: [],
      destination: {},
      action: [],
    },
    interessenkonflikt: {
      name: "Interessenkonflikt",
      text:
        "<p>Ist ihr Arbeitgeber einer unserer &ouml;ffentlichen Partner:</p>\n\n<ul>\n\t<li>Nestl&eacute; Deutschland AG</li>\n\t<li>Shell Deutschland Oil GmbH</li>\n\t<li>BP Europa SE</li>\n\t<li>BAYER AG</li>\n\t<li>LMU M&uuml;nchen</li>\n</ul>\n\n<p><em>Info: In diesem Fall d&uuml;rfen wir sie aufgrund eventueller Interessenkonflikte leider nicht beraten.</em></p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "abweisen",
        1: "deutschland",
      },
      action: [],
    },
    schriftlich: {
      name: "Kündigungsschreiben - schriftlich",
      text:
        "<p>Haben Sie die K&uuml;ndigung schriftlich erhalten?</p>\n\n<p><em>Info: Eine K&uuml;ndigung per&nbsp;E-Mail erf&uuml;llt diese Voraussetzung nicht. Erforderlich ist ein ausgedrucktes Papier mit der Unterschrift des Arbeitgebers.</em></p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "ausschlussfrist",
        1: "most-important-facts",
      },
      action: [],
    },
    betriebsrat: {
      name: "Betriebliche Strukturen - Betriebsrat",
      text: "<p>Gibt es einen Betriebsrat?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein", "Ich weiß es nicht"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein", "Ich weiß es nicht"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "betriebsrat-einbeziehung",
        1: "gespraech",
        2: "gespraech",
      },
      action: [],
    },
    "seit-wann": {
      name: "Arbeitsverhältnis",
      text: "<p>Seit wann besteht das Arbeitsverh&auml;ltnis?&nbsp;</p>",
      inputs: [
        {
          type: "text",
          validation: "number",
          label: "Datum (TT.MM.JJJJ):",
          name: "datum-ttmmjjjj",
        },
      ],
      destination: {
        default: "ziel",
      },
      action: [],
    },
    alter: {
      name: "Angaben zu Ihrer Person",
      text: "<p>Wie alt sind Sie?</p>",
      inputs: [
        {
          type: "text",
          validation: "number",
          label: "Alter in Jahren:",
          name: "alter-in-jahren",
        },
      ],
      destination: {
        default: "besondere-voraussetzungen",
      },
      action: [],
    },
    "abweisen-gehalt": {
      name: "Ende",
      text:
        '<p>Leider k&ouml;nnen wir Ihnen in diesem Fall nicht weiterhelfen. Wir empfehlen Ihnen, sich&nbsp;<a href="https://www.verbraucherzentrale.de">hier bei der Verbraucherzentrale</a>&nbsp;zu melden.</p>\n\n<p>&nbsp;</p>',
      inputs: [],
      destination: {},
      action: [],
    },
    ausschlussfrist: {
      name: "Kündigungsschreiben Ausschlussfrist",
      text:
        "<p>An welchem Tag haben Sie das letzte Schreiben Ihres Arbeitgebers bekommen?<br>\n<br>\n<em>Info: Haben Sie das K&uuml;ndigungsschreiben vor mehr als 21 Tagen erhalten, kann in der Regel nicht mehr dagegen vorgegangen werden. In diesem Fall k&ouml;nnen wir Ihnen leider nicht weiterhelfen.</em></p>\n\n<p>bitte die Anzahl der vergangenen&nbsp;Tage angeben:</p>",
      inputs: [
        {
          type: "number",
          label: "",
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            ">": [
              {
                var: "Antwort",
              },
              21,
            ],
          },
          "0",
          {
            "==": [
              {
                var: "Antwort",
              },
              21,
            ],
          },
          "1",
          {
            "<": [
              {
                var: "Antwort",
              },
              21,
            ],
          },
          "2",
        ],
      },
      destination: {
        0: "abweisen",
        1: "sofort-anrufen",
        2: "geltungsdatum",
      },
      action: [],
    },
    "most-important-facts": {
      name: "Letzte Informationen",
      text:
        "<p>Fast geschafft! Wir ben&ouml;tigen blo&szlig; wenige weitere Informationen von Ihnen.</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Alles klar"],
          name: "Antwort",
        },
      ],
      destination: {
        default: "name",
      },
      action: [],
    },
    name: {
      name: "Angaben zu Ihrer Person",
      text: "<p>Was ist Ihr Name?</p>",
      inputs: [
        {
          type: "text",
          validation: "short_text",
          label: "Name:",
          name: "name",
        },
      ],
      destination: {
        default: "e-mail-adresse",
      },
      action: [],
    },
    ziel: {
      name: "Ihr Ziel",
      text: "<p>Was m&ouml;chten Sie am Ende erreichen?</p>",
      inputs: [
        {
          type: "radio",
          label: "",
          options: [
            "Meinen Arbeitsplatz erhalten",
            "Eine Abfindung",
            "Eine Mediation zur konstruktiven Beilegung des Konfliktes",
            "Weitere Lohnzahlung",
            "Auszahlung meiner Urlaubstage",
            "Ich weiß es noch nicht",
            "Eigenes ...",
          ],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              [
                "Meinen Arbeitsplatz erhalten",
                "Eine Abfindung",
                "Eine Mediation zur konstruktiven Beilegung des Konfliktes",
                "Weitere Lohnzahlung",
                "Auszahlung meiner Urlaubstage",
                "Ich weiß es noch nicht",
              ],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Eigenes ..."],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "bestätigung",
        1: "custom-ziel",
      },
      action: [],
    },
    "besondere-voraussetzungen": {
      name: "Besondere Voraussetzungen",
      text: "<p>Liegen bei Ihnen eine der folgenden Voraussetzungen vor?</p>",
      inputs: [
        {
          type: "radio",
          label: "",
          options: [
            "Betriebsratsmitglied",
            "Leitender Angestellter",
            "Schwangerschaft",
            "Schwerbehinderung",
            "Elternzeit",
            "Leiharbeitnehmer",
            "Mitglied in einer Gewerkschaft",
            "Minderjährigkeit",
            "Keines davon",
          ],
          name: "Antwort",
        },
      ],
      destination: {
        default: "seit-wann",
      },
      action: [],
    },
    bestätigung: {
      name: "Formular absenden",
      text:
        "<p>Herzlichen Gl&uuml;ckwunsch! Das Formular ist nun fertig ausgef&uuml;llt. M&ouml;chten Sie es absenden?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "noch etwas hinzufügen ..."],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["noch etwas hinzufügen ..."],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "e-mail",
        1: "additions",
      },
      action: ["email"],
    },
    "custom-ziel": {
      name: "Ihr Ziel",
      text: "<p>Beschreiben Sie, was Sie erreichen m&ouml;chten.</p>",
      inputs: [
        {
          type: "text",
          validation: "long_text",
          label: "Ihr Anliegen:",
          name: "ihr-anliegen",
        },
      ],
      destination: {
        default: "bestätigung",
      },
      action: [],
    },
    "e-mail": {
      name: "Formular versendet",
      text:
        "<p>Das Formular wurde versendet. Sie erhalten eine Sendebest&auml;tigung per E-Mail. Wir melden uns in K&uuml;rze bei Ihnen. Vielen Dank!</p>",
      inputs: [],
      destination: {},
      action: [],
    },
    additions: {
      name: "Zusätzliche Angaben",
      text:
        "<p>F&uuml;gen Sie noch weitere Angaben hinzu. Wenn Sie fertig sind und das Formular abgeschickt werden soll, dr&uuml;cken Sie auf<em>&nbsp;weiter</em>.</p>",
      inputs: [
        {
          type: "text",
          validation: "long_text",
          label: "Zusätzliche Angaben",
          name: "zusatzliche-angaben",
        },
      ],
      destination: {
        default: "e-mail",
      },
      action: ["email"],
    },
    "betriebsrat-einbeziehung": {
      name: "Betriebliche Strukturen - Einbeziehung",
      text: "<p>Wurde der Betriebsrat in die K&uuml;ndigung einbezogen?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein", "Ich weiß es nicht"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein", "Ich weiß es nicht"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "gespraech",
        1: "gespraech",
        2: "gespraech",
      },
      action: [],
    },
    "sofort-anrufen": {
      name: "Sofort anrufen",
      text:
        "<p>Die Frist, um gegen Ihre K&uuml;ndigung vorzugehen, l&auml;uft m&ouml;glicherweise heute ab! Rufen Sie uns bitte sofort an unter&nbsp;+4930 6933087</p>",
      inputs: [],
      destination: {},
      action: [],
    },
    geltungsdatum: {
      name: "Kündigungsschreiben Geltungsdatum",
      text: "<p>Ab wann soll die K&uuml;ndigung laut Schreiben gelten?</p>",
      inputs: [
        {
          type: "text",
          validation: "number",
          label: "Datum (TT.MM.JJJJ):",
          name: "datum-ttmmjjjj",
        },
      ],
      destination: {
        default: "krank",
      },
      action: [],
    },
    krank: {
      name: "Kündigungsgrund - Krankheit",
      text: "<p>Waren Sie im letzten Jahr l&auml;nger krank?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: [
            "Ja, für insgesamt mehr als sechs Wochen",
            "Ja, für mehr als sechs Wochen am Stück",
            "Keines davon ist zutreffend",
          ],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              [
                "Ja, für insgesamt mehr als sechs Wochen",
                "Ja, für mehr als sechs Wochen am Stück",
              ],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Keines davon ist zutreffend"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "gesundheitlich",
        1: "most-important-facts",
      },
      action: [],
    },
    gesundheitlich: {
      name: "Kündigungsgrund - Gesundheitlich",
      text:
        "<p>Werden Sie in absehbarer Zeit gesundheitlich in der Lage sein, ihre Arbeit fortzuf&uuml;hren?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "ausbildung",
        1: "abweisen",
      },
      action: [],
    },
    ausbildung: {
      name: "Arbeitsverhältnis - Ausbildung",
      text: "<p>Befinden Sie sich in der Ausbildung?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "probezeitausbildung",
        1: "befristet",
      },
      action: [],
    },
    probezeitausbildung: {
      name: "Ausbildungsverhältnis - Probezeitausbildung",
      text: "<p>Sind Sie noch in der Probezeit?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "abweisen",
        1: "sachverhaltsabfrage",
      },
      action: [],
    },
    befristet: {
      name: "Arbeitsverhältnis - befristet",
      text: "<p>Haben Sie einen befristeten Arbeitsvertrag?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein", "Ich weiß es nicht"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein", "Ich weiß es nicht"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "abgelaufen",
        1: "probezeit",
        2: "probezeit",
      },
      action: [],
    },
    abgelaufen: {
      name: "Befristetes Arbeitsverhältnis",
      text: "<p>Ist die Frist abgelaufen?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "abweisen",
        1: "ausdruecklich",
      },
      action: [],
    },
    probezeit: {
      name: "Arbeitsverhältnis - Probezeit",
      text: "<p>Sind Sie noch in der Probezeit?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "abweisen",
        1: "sachverhaltsabfrage",
      },
      action: [],
    },
    personen: {
      name: "Betriebliche Strukturen - Personen",
      text: "<p>Wie viele Personen sind im Betrieb besch&auml;ftigt?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["bis zu 20", "mehr als 20", "Ich weiß es nicht"],
          name: "Antwort",
        },
      ],
      destination: {
        default: "betriebsrat",
      },
      action: [],
    },
    ausdruecklich: {
      name: "ausdrückliches Arbeitsverhältnis",
      text:
        "<p>Enth&auml;lt Ihr Arbeitsvertrag eine ausdr&uuml;ckliche K&uuml;ndigungsm&ouml;glichkeit?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein", "Ich weiß es nicht"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja", "Ich weiß es nicht"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "probezeit",
        1: "most-important-facts",
      },
      action: [],
    },
    gespraech: {
      name: "Gespräch mit dem Arbeitgeber",
      text:
        "<p>Hat ihr Arbeitgeber vor der K&uuml;ndigung ein Gespr&auml;ch mit Ihnen gef&uuml;hrt?</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Ja", "Nein"],
          name: "Antwort",
        },
      ],
      rules: {
        if: [
          {
            in: [
              {
                var: "Antwort",
              },
              ["Ja"],
            ],
          },
          "0",
          {
            in: [
              {
                var: "Antwort",
              },
              ["Nein"],
            ],
          },
          "1",
        ],
      },
      destination: {
        0: "personengruppen",
        1: "most-important-facts",
      },
      action: [],
    },
    personengruppen: {
      name: "Gespräch mit dem Arbeitgeber - Teilnehmer",
      text:
        "<p>Wer war bei dem Gespr&auml;ch anwesend?</p>\n\n<p><em>Info: Interessant ist etwa die Anwesenheit von&nbsp;Betriebsrat,&nbsp;Personalrat,&nbsp;Schwerbehindertenvertretung,&nbsp;Integrationsamt und&nbsp;Werks-/Betriebsarzt</em></p>",
      inputs: [
        {
          type: "text",
          validation: "short_text",
          label: "Anwesende Personen:",
          name: "anwesende-personen",
        },
      ],
      destination: {
        default: "thema",
      },
      action: [],
    },
    thema: {
      name: "Gespräch mit dem Arbeitgeber",
      text:
        "<p>Worum ging es in dem Gespr&auml;ch? Was war das Ergebnis?</p>\n\n<p><em>Etwa: Mir wurde ein anderer Arbeitsplatz angeboten;&nbsp;Mein Gehalt sollte gek&uuml;rzt werden oder &auml;hnliches.</em></p>",
      inputs: [
        {
          type: "text",
          validation: "long_text",
          label: "Inhalt des Gesprächs:",
          name: "inhalt-des-gesprachs",
        },
      ],
      destination: {
        default: "most-important-facts",
      },
      action: [],
    },
    sachverhaltsabfrage: {
      name: "Zwischenergebnis",
      text:
        "<p>Die K&uuml;ndigung k&ouml;nnte unwirksam sein!</p>\n\n<p>Im Folgenden erheben wir einige Daten von Ihnen, die Sie dann mit einem Klick an unsere Expertinnen und Experten weiterleiten k&ouml;nnen.</p>",
      inputs: [
        {
          type: "radio",
          display_as: "radio",
          label: "",
          options: ["Alles klar"],
          name: "Antwort",
        },
      ],
      destination: {
        default: "personen",
      },
      action: [],
    },
  },
}
