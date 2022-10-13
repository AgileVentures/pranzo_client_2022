export const SE = {
  translation: {
    dashboard: {
      headings: {
        myVenue: "Mitt företag",
        setupVenue: {
          label: "Lägg till företag",
          subLabel: "Lägg till ett företag till din profil",
          subLabelLong:
            "Du måste ange lite mer inställningar innan du kan utfärda kort och kuponger.",
        },

        editVenue: {
          label: "Redigera företag",
          subLabel: "Uppdatera företagsinformation",
        },
        detailsVenue: {
          label: "Företagsuppgifter",
          subLabel: "Översikt av ditt företag",
        },
        vouchers: "Kort",
        viewAndManage: {
          label: "Hantera kort",
          subLabel: "Aktivera kort, skapa transaktioner, mm. ",
        },
        create: {
          label: "Skapa",
          subLabel: "Fyll på ditt lager av kort",
        },
      },
      content: {
        stats: {
          issuedVouchers: "Utfärdade Lunchkort",
          salesVouchers: "Försäljning Lunchkort",
          issuedGiftCards: "Utfärdade Presentkort",
          salesGiftCards: "Försäljning Presentkort",
        },
        charts: {
          salesOverviewNumbers: "Försäljning (antal)",
          salesOverviewValue: "Försäljning (värde)",
        },
        vouchers: {
          create: {
            createFormHeading: "Lägg till kort till lagret",
          },
          table: {
            code: "Kod",
            status: "Status",
            active: "Aktiv?",
            variant: "Variant",
            initialValue: "Värde",
            currentValue: "Saldo",
          },
          labels: {
            transactions: "Transaktioner",
            servings: "Antal: ",
            createTransaction: "Skapa en transaktion",
            activate: "Aktivera kort",
            showInactive: "Visa lager",
            owner: "Ägare: ",
            issuer: "Utfärdare: ",
            presenter: "anonymt",
            servingsActions: {
              mainLabel: "Du kommer att minska kortets saldo med 1 portion.",
            },
            notFound: "Vi kunde inte hitta kortet med koden: {{code}}!",
            scanVoucher: "Scanna kort",
          },
        },
      },
    },
    forms: {
      elements: {
        create: "Skapa",
        submit: "Skicka",
        email: "Mailadress",
        mobilePass: "Skapa digitalt kort?",
        pdfCard: "Skapa PDF?",
        pdfVariant: "Välj design:",
        pdfLanguage: "Språk:",
        swedish: "Svenska",
        english: "Engelska",
        amount: "Antal",
        amountHelper: "Antal kort du vill lägga till ditt lager.",
        variant: "Korttyp",
        servingsVariant: {
          singular: "Förbrukningskort",
          plural: "Förbrukningskort",
        },
        cashVariant: {
          singular: "Presentkort",
          plural: "Presentkort",
        },
        variantHelper:
          "Välj den typ/variant av kort du vill skapa. Om du vill skapa andra typer av kort, gå igenom skapandeprocessen för varje typ.",
        valueServings: "Värde (portioner)",
        valueCash: "Värde (pengar)",
        selectVariant: "Välj typ av kort",
        selectServings: "Välj värde",
        selectCash: "Välje ett värde",
        selectValueHelper:
          "Välj värdet på varje kupong. Om du vill skapa kuponger med andra värden, skicka in ett formulär för varje värde.",
        cashAmount: "Att dra av:",
        cashAmountHelper:
          "Skriv in det totala värdet som din kund spenderade på varor eller tjänster.",
        availableForAffiliates: "Tillgänglig för partnerföretag",
      },
      messages: {
        required: "Det här fältet är obligatoriskt",
        minLength: "Kortaste tillåtna längd är {{length}} tecken.",
        invalidEmail: "Det här är en ogiltig adress",
        submitNumber: "Var god ange ett nummer.",
        notUnique: "Den här e-postadressen används redan, välj en annan...",
        userNotFound:
          "Vi kunde inte hitta någon användare med den här mailadressen. Kontrollera din information...",
      },
    },

    venue: {
      setup: { heading: "Skapa företag" },
      edit: { heading: "Redigera företag" },
      formElements: {
        venueName: "Namn",
        description: "Beskrivning",
        primaryEmail: "Primär mailadress",
      },
      user: { heading: "Användare" },
      affiliate: {
        heading: "Partnerföretag",
        subHeading:
          "Du har inte lagt till några andra PRANZO-användare till ditt partnernätverk.",
        setup: {
          heading: "Lägg till ett partnerföretag",
          subHeading:
            "Genom att lägga till andra PRANZO-användare som partnerföretag, kommer du kunna utfärda kort och kuponger som kan accepteras hos dina partners",
        },
      },
    },
    authentication: {
      submit: "Skicka",
      signIn: {
        header: "Logga in på ditt konto",
        email: "Din mailadress",
        password: "Lösenord",
      },
      registerNewAccount: {
        header: "Skapa ett nytt konto",
        name: "Ditt namn",
        email: "Din mailadress",
        password: "Lösenord",
        passwordConfirmation: "Bekräfta ditt lösenord",
      },
    },
    appBar: {
      signIn: "Logga in",
      signUp: "Registrera",
      nothingToSeeHere: "Registrera ett konto för att komma åt funktioner.",
    },
    footer: { slogan: "Lunchkort och presentkort på ett enklare sätt" },
    hero: {
      mainSlogan: "Förenkla din försäljning – Öka dina intäkter",
      promoText:
        "Gör voucher- och presentkortshanteringen enkel. Pranzo erbjuder en enkel och lättanvänd lösning för att skapa, sälja och administrera lunch- och presentkort",
      walletsPromoText: "Koppla dina kort till Apple- och Google Plånbok.",
      subSlogan:
        "Låg startavgift och inga prenumerationskostnader. Betala allt eftersom du använder systemet!",
      buttonText: "Kom igång!",
      ctaText:
        "Det finns ingen förskottsavgift för att registrera dig. Vi debiterar dig endast om du faktiskt drar nytta av Pranzo-plattformen med en startavgift på 450 kr och 13kr per utfärdat kort.",
    },
    sellingPoints: {
      benefits: "Fördelar",
      subSlogan: "Minska manuell hantering",
      pranzoExperience: {
        header: "Kom igång med Pranzo",
        subHeader: "Vi håller det enkelt.",
      },
      right: {
        header: "Lojala kunder",
        content:
          "Belöna dina lojala lunchgäster med möjligheten att köpa ett lunchkort som ger dem ett rabatterat pris samtidigt som du drar nytta av ökade och stabila intäkter.",
      },
      middle: {
        header: "Mobilt",
        content:
          "Vad är det enda som dina gäster (nästan) alltid har i fickan? Borde inte dina erbjudanden finnas där också? PRANZO-kort levereras direkt till dina gästers mobiltelefon.",
      },
      left: {
        header: "Ta kontrol",
        content:
          "Med Pranzo blir din rapportering och ekonomistyrning mer hanterbar, vilket ger dig en enkel överblick över försäljning och insikter om effektiviteten i din uppsökande verksamhet och marknadsföring.",
      },
    },
    testimonials: {
      1: {
        content:
          "Vi hade en otrolig positiv upplevelse av att arbeta med Pranzo och var imponerade av att de gjorde så stor skillnad på bara tre veckor. Vårt team är så tacksamma för de underbara förbättringar de gjort och deras förmåga att bli bekant med produktkonceptet så snabbt.",
        sender: {
          name: "John Doe",
          title: "Krögare, The Other Place, Carbondale, CO",
        },
      },
    },
  },
};
