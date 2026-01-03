<!-- /src/routes/baltic/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  
  let selectedLang = $state('en');
  
  const translations = {
    en: {
      meta: {
        title: "Baltic Bioregional Homesteading Network",
        description: "Peer-validated knowledge base for regenerative living in Estonia, Latvia, and Lithuania"
      },
      hero: {
        title: "Baltic Bioregional Homesteading Network",
        subtitle: "Peer-validated knowledge for regenerative living in Estonia, Latvia, and Lithuania",
        status: "Open to contributors • Living document • No bureaucracy"
      },
      langSelector: "Language:",
      purpose: {
        title: "Why this exists",
        intro: "Hundreds of Baltic homesteaders are figuring out through trial and error what others already know. This knowledge base prevents that waste.",
        different: "What makes this different:",
        points: [
          "Bioregionally specific – focused on what works in Baltic climate and soil",
          "Peer-validated – contributed by people with real experience",
          "Failure-inclusive – we document what doesn't work, not just successes",
          "Timeline-realistic – honest about how long things actually take",
          "Coordination-enabled – connects you with experienced practitioners"
        ]
      },
      status: {
        current: "Current status:",
        description: "Volunteer-driven knowledge sharing. No organization, no budget, no bureaucracy.",
        future: "Potential future:",
        futureDesc: "If this proves valuable: bulk purchasing coordination, tool sharing networks, integration with other bioregions, or formalization as a cooperative. But we're starting simple."
      },
      sections: {
        title: "What's inside",
        items: [
          {
            icon: "🌱",
            title: "What Works Here",
            description: "Specific crop varieties, techniques, and timelines proven in Baltic climate. Organized by country (Estonia, Latvia, Lithuania)."
          },
          {
            icon: "⚠️",
            title: "What Fails (Important!)",
            description: "Expensive lessons documented so you don't repeat them. Failed experiments, crops that don't work, techniques to avoid."
          },
          {
            icon: "📅",
            title: "Realistic Timelines",
            description: "Year 1 vs Year 5 expectations. How long soil building actually takes. When systems become self-maintaining."
          },
          {
            icon: "💰",
            title: "Economic Realities",
            description: "Honest numbers: initial investment, ongoing costs, break-even timelines. Why 'ROI' isn't just financial."
          },
          {
            icon: "🤝",
            title: "Local Practitioners",
            description: "Connect with experienced homesteaders willing to mentor. Country-specific contacts and expertise areas."
          },
          {
            icon: "🛠️",
            title: "Resources & Tools",
            description: "Seed sources, tool sharing networks, markets, and legal/regulatory context for each country."
          }
        ]
      },
      howto: {
        title: "How to use this",
        steps: [
          "Access the living knowledge base (link below)",
          "Find your country section (Estonia, Latvia, Lithuania)",
          "Read what experienced homesteaders have learned",
          "Contact contributors if you have questions",
          "Add your own learnings as you gain experience"
        ]
      },
      contribute: {
        title: "How to contribute",
        intro: "This only works if practitioners share what they've learned.",
        steps: [
          "Request edit access from the coordinator",
          "Add your experiences to the relevant sections",
          "Be honest about failures and challenges",
          "Include timelines (Year 1, Year 3, Year 5)",
          "Optional: Add contact info if you're willing to mentor"
        ],
        what: "What to contribute:",
        whatList: [
          "Specific varieties that work/fail",
          "Soil building techniques and timelines",
          "Pest/disease management strategies",
          "Storage/preservation methods",
          "Economic realities (honest numbers)",
          "Failures (prevent others from same mistakes)"
        ]
      },
      coordinator: {
        title: "Regional Coordinator Needed",
        status: "Open Position",
        description: "This knowledge base needs someone to invite contributors, maintain quality, connect people, and facilitate coordination.",
        commitment: "Time commitment:",
        commitmentDetails: "Initial: ~10 hours to set up. Ongoing: 2-5 hours/month.",
        why: "Why this matters:",
        whyDetails: "Right now, hundreds of Baltic homesteaders are struggling alone. A coordinator helps prevent that waste by connecting people and maintaining infrastructure for self-organization.",
        benefits: "What's in it for you:",
        benefitsList: [
          "Lead a potentially important network",
          "First to benefit from coordination (bulk purchases, mutual aid)",
          "Potential paid role if network grows",
          "Connection to broader resilience frameworks"
        ],
        apply: "Interested? Contact the creator below."
      },
      cta: {
        primary: "Access the Knowledge Base",
        primaryDesc: "View and contribute to the living document",
        secondary: "Become Coordinator",
        secondaryDesc: "Lead this network"
      },
      contact: {
        title: "Contact & Coordination",
        creator: "Initial Creator:",
        name: "Björn Kenneth Holmström",
        role: "Created template and structure. Available for technical support and questions about broader coordination frameworks.",
        coordinator: "Regional Coordinator:",
        coordinatorStatus: "OPEN POSITION – Apply via email above"
      },
      principles: {
        title: "Core Principles",
        items: [
          "Knowledge freely accessible – No paywalls, no gatekeeping",
          "Community-owned – Contributors retain credit for their work",
          "Failure-friendly – Mistakes are valuable learning",
          "Start simple – Prove it works before adding complexity",
          "Self-organizing – No permission needed to coordinate with others"
        ]
      },
      footer: {
        integration: "Part of the broader Communize ecosystem exploring commons-based resilience.",
        license: "Knowledge base freely shared for non-commercial use. Contributors retain credit."
      }
    },
    et: {
      meta: {
        title: "Balti bioregiooni talupidamise võrgustik",
        description: "Taastootliku elamise teadmusbaas Eestis, Lätis ja Leedus"
      },
      hero: {
        title: "Balti bioregiooni talupidamise võrgustik",
        subtitle: "Taastootliku elamise teadmused Eestis, Lätis ja Leedus",
        status: "Avatud kaastöötajatele • Elav dokument • Ilma bürokraatiata"
      },
      langSelector: "Keel:",
      purpose: {
        title: "Miks see eksisteerib",
        intro: "Sajad Balti talunikud õpivad katse-eksituse meetodil seda, mida teised juba teavad. See teadmusbaas hoiab ära selle raiskamise.",
        different: "Mis teeb selle erinevaks:",
        points: [
          "Bioregionaalselt spetsiifiline – keskendub sellele, mis töötab Balti kliimas ja pinnases",
          "Kogukonna poolt valideeritud – panustatud inimeste poolt, kellel on tõeline kogemus",
          "Kaasab ebaõnnestumisi – dokumenteerime, mis ei tööta, mitte ainult edu",
          "Realistlikud ajagraafikud – ausad selle kohta, kui kaua asjad tegelikult võtavad",
          "Koordineerimist võimaldav – ühendab teid kogenud praktikutega"
        ]
      },
      status: {
        current: "Praegune olukord:",
        description: "Vabatahtlike juhitud teadmiste jagamine. Ei organisatsiooni, ei eelarvet, ei bürokraatiat.",
        future: "Võimalik tulevik:",
        futureDesc: "Kui see osutub väärtuslikuks: hulgiostukoordinatsioon, tööriistade jagamise võrgustikud, integratsioon teiste bioregionidega või formaliseerumine kooperatiivina. Aga alustame lihtsalt."
      },
      sections: {
        title: "Mis sees on",
        items: [
          {
            icon: "🌱",
            title: "Mis siin töötab",
            description: "Konkreetsed taimesordid, tehnikad ja ajagraafikud, mis on tõestatud Balti kliimas. Korraldatud riikide kaupa (Eesti, Läti, Leedu)."
          },
          {
            icon: "⚠️",
            title: "Mis ebaõnnestub (Oluline!)",
            description: "Kallid õppetunnid dokumenteeritud, et te neid ei kordaks. Ebaõnnestunud eksperimendid, põllukultuurid, mis ei tööta, vältimist vajavad tehnikad."
          },
          {
            icon: "📅",
            title: "Realistlikud ajagraafikud",
            description: "1. aasta vs 5. aasta ootused. Kui kaua mullastiku ülesehitamine tegelikult võtab. Millal süsteemid muutuvad isemajandavateks."
          },
          {
            icon: "💰",
            title: "Majanduslikud reaalsused",
            description: "Ausad numbrid: algne investeering, jooksvad kulud, tasuvusajad. Miks 'ROI' pole ainult rahaline."
          },
          {
            icon: "🤝",
            title: "Kohalikud praktikud",
            description: "Ühenda kogenud talunike juurde, kes on valmis mentorlust pakkuma. Riigipõhised kontaktid ja ekspertiisivaldkonnad."
          },
          {
            icon: "🛠️",
            title: "Ressursid ja tööriistad",
            description: "Seemnealliad, tööriistade jagamise võrgustikud, turud ja iga riigi õiguslik/regulatiivne kontekst."
          }
        ]
      },
      howto: {
        title: "Kuidas kasutada",
        steps: [
          "Pääse ligi elavale teadmusbaasile (link allpool)",
          "Leia oma riigi sektsioon (Eesti, Läti, Leedu)",
          "Loe, mida kogenud talunikud on õppinud",
          "Võta ühendust kaastöötajatega, kui sul on küsimusi",
          "Lisa oma õppetunnid, kui sa kogemust kogud"
        ]
      },
      contribute: {
        title: "Kuidas panustada",
        intro: "See töötab ainult siis, kui praktikud jagavad, mida nad on õppinud.",
        steps: [
          "Taotle muutmisõigust koordinaatorilt",
          "Lisa oma kogemused asjakohastesse sektsioonidesse",
          "Ole aus ebaõnnestumiste ja väljakutsete suhtes",
          "Kaasa ajagraafikud (1. aasta, 3. aasta, 5. aasta)",
          "Valikuline: Lisa kontaktandmed, kui oled valmis mentorlust pakkuma"
        ],
        what: "Mida panustada:",
        whatList: [
          "Konkreetsed sordid, mis töötavad/ebaõnnestuvad",
          "Mullastiku ülesehitamise tehnikad ja ajagraafikud",
          "Kahjurite/haiguste ohjamise strateegiad",
          "Säilitamise/konserveerimise meetodid",
          "Majanduslikud reaalsused (ausad numbrid)",
          "Ebaõnnestumised (väldi teiste samade vigade tegemist)"
        ]
      },
      coordinator: {
        title: "Vajame regiooni koordinaatorit",
        status: "Ametikoht vaba",
        description: "See teadmusbaas vajab kedagi, kes kutsub kaastöötajaid, hoiab kvaliteeti, ühendab inimesi ja hõlbustab koordinatsiooni.",
        commitment: "Ajaline kohustus:",
        commitmentDetails: "Algne: ~10 tundi ülesseadmiseks. Jooksev: 2-5 tundi kuus.",
        why: "Miks see on oluline:",
        whyDetails: "Praegu võitlevad sajad Balti talunikud üksi. Koordinaator aitab seda raiskamist vältida, ühendades inimesi ja hooldades enesekorralduse infrastruktuuri.",
        benefits: "Mis sul sellest on:",
        benefitsList: [
          "Juhi potentsiaalselt olulist võrgustikku",
          "Esimesena kasu koordinatsioonist (hulgiostu, vastastikune abi)",
          "Potentsiaalne tasustatud roll, kui võrgustik kasvab",
          "Ühendus laiemate vastupidavuse raamistike juurde"
        ],
        apply: "Huvitatud? Võta ühendust loojaga allpool."
      },
      cta: {
        primary: "Ava teadmusbaas",
        primaryDesc: "Vaata ja panusta elavasse dokumenti",
        secondary: "Hakka koordinaatoriks",
        secondaryDesc: "Juhi seda võrgustikku"
      },
      contact: {
        title: "Kontakt ja koordineerimine",
        creator: "Algne looja:",
        name: "Björn Kenneth Holmström",
        role: "Lõi malli ja struktuuri. Saadaval tehniliseks toeks ja küsimusteks laiema koordineerimise raamistike kohta.",
        coordinator: "Regiooni koordinaator:",
        coordinatorStatus: "VABA AMETIKOHT – Kandideeri ülaloleva e-posti kaudu"
      },
      principles: {
        title: "Põhiprintsiibid",
        items: [
          "Teadmised vabalt kättesaadavad – Ei tasulisi tõkkeid, ei väravatehnikut",
          "Kogukonna omanduses – Kaastöötajad säilitavad auhinna oma töö eest",
          "Ebaõnnestumist talutav – Vead on väärtuslik õpe",
          "Alusta lihtsalt – Tõesta, et see töötab, enne keerukuse lisamist",
          "Enesekorraldav – Luba pole vaja teistega koordineerimiseks"
        ]
      },
      footer: {
        integration: "Osa laiemast Communize ökosüsteemist, mis uurib ühismaa-põhist vastupidavust.",
        license: "Teadmusbaas jagatud vabalt mittekommertsiaalseks kasutamiseks. Kaastöötajad säilitavad auhinna."
      }
    },
    lv: {
      meta: {
        title: "Baltijas bioregionālā saimniecības tīkls",
        description: "Atjaunojošās dzīves zināšanu bāze Igaunijā, Latvijā un Lietuvā"
      },
      hero: {
        title: "Baltijas bioregionālā saimniecības tīkls",
        subtitle: "Atjaunojošās dzīves zināšanas Igaunijā, Latvijā un Lietuvā",
        status: "Atvērts ieguldītājiem • Dzīvs dokuments • Bez birokrātijas"
      },
      langSelector: "Valoda:",
      purpose: {
        title: "Kāpēc tas eksistē",
        intro: "Simtiem Baltijas saimnieku mācās, izmantojot izmēģinājumu un kļūdu metodi, to, ko citi jau zina. Šī zināšanu bāze novērš šo izšķērdību.",
        different: "Kas to atšķir:",
        points: [
          "Bioregionāli specifisks – koncentrēts uz to, kas darbojas Baltijas klimatā un augsnē",
          "Kopienas apstiprināts – veidots no cilvēkiem ar reālu pieredzi",
          "Iekļauj neveiksmes – dokumentējam, kas nedarbojas, ne tikai panākumus",
          "Reālistiski termiņi – godīgi par to, cik ilgu laiku lietas patiesībā aizņem",
          "Iespējota koordinācija – savieno jūs ar pieredzējušiem praktiķiem"
        ]
      },
      status: {
        current: "Pašreizējais stāvoklis:",
        description: "Brīvprātīgo vadīta zināšanu apmaiņa. Nav organizācijas, nav budžeta, nav birokrātijas.",
        future: "Iespējamā nākotne:",
        futureDesc: "Ja tas izrādās vērtīgs: lielapjoma iepirkumu koordinācija, rīku koplietošanas tīkli, integrācija ar citiem bioreģioniem vai formalizēšana kā kooperatīvs. Bet mēs sākam vienkārši."
      },
      sections: {
        title: "Kas ir iekšā",
        items: [
          {
            icon: "🌱",
            title: "Kas šeit darbojas",
            description: "Konkrētas augu šķirnes, metodes un termiņi, kas pierādīti Baltijas klimatā. Organizēti pēc valstīm (Igaunija, Latvija, Lietuva)."
          },
          {
            icon: "⚠️",
            title: "Kas neizdodas (Svarīgi!)",
            description: "Dārgas mācības dokumentētas, lai jūs tās neatkārtotu. Neveiksmīgi eksperimenti, augi, kas nedarbojas, metodes, ko izvairīties."
          },
          {
            icon: "📅",
            title: "Reālistiski termiņi",
            description: "1. gada pret 5. gada cerības. Cik ilgi augsnes veidošana patiesībā aizņem. Kad sistēmas kļūst pašuzturošas."
          },
          {
            icon: "💰",
            title: "Ekonomiskās realitātes",
            description: "Godīgi skaitļi: sākotnējā investīcija, tekošie izdevumi, rentabilitātes termiņi. Kāpēc 'ROI' nav tikai finansiāls."
          },
          {
            icon: "🤝",
            title: "Vietējie praktiķi",
            description: "Savienojieties ar pieredzējušiem saimniekiem, kas gatavi mentorēt. Valsts specifiskas kontaktpersonas un ekspertīzes jomas."
          },
          {
            icon: "🛠️",
            title: "Resursi un rīki",
            description: "Sēklu avoti, rīku koplietošanas tīkli, tirgi un juridiskais/normatīvais konteksts katrai valstij."
          }
        ]
      },
      howto: {
        title: "Kā lietot",
        steps: [
          "Piekļūt dzīvajai zināšanu bāzei (saite zemāk)",
          "Atrodiet savu valsts sadaļu (Igaunija, Latvija, Lietuva)",
          "Lasīt, ko pieredzējuši saimnieki ir iemācījušies",
          "Sazināties ar ieguldītājiem, ja jums ir jautājumi",
          "Pievienot savas mācības, kad jūs iegūstat pieredzi"
        ]
      },
      contribute: {
        title: "Kā ieguldīt",
        intro: "Tas darbojas tikai tad, ja praktiķi dalās ar to, ko viņi ir iemācījušies.",
        steps: [
          "Pieprasīt rediģēšanas piekļuvi no koordinatora",
          "Pievienot savas pieredzes atbilstošajām sadaļām",
          "Būt godīgam par neveiksmes un izaicinājumiem",
          "Iekļaut termiņus (1. gads, 3. gads, 5. gads)",
          "Pēc izvēles: Pievienot kontaktinformāciju, ja esat gatavs mentorēt"
        ],
        what: "Ko ieguldīt:",
        whatList: [
          "Konkrētas šķirnes, kas darbojas/neizdodas",
          "Augsnes veidošanas metodes un termiņi",
          "Kaitēkļu/slimību pārvaldības stratēģijas",
          "Uzglabāšanas/konservēšanas metodes",
          "Ekonomiskās realitātes (godīgi skaitļi)",
          "Neveiksmes (novērst citiem tās pašas kļūdas)"
        ]
      },
      coordinator: {
        title: "Nepieciešams reģionālais koordinators",
        status: "Vakance",
        description: "Šī zināšanu bāze vajag kādu, kas uzaicina ieguldītājus, uztur kvalitāti, savieno cilvēkus un veicina koordināciju.",
        commitment: "Laika ieguldījums:",
        commitmentDetails: "Sākotnējais: ~10 stundas uzstādīšanai. Tekošais: 2-5 stundas mēnesī.",
        why: "Kāpēc tas ir svarīgi:",
        whyDetails: "Pašlaik simtiem Baltijas saimnieku cīnās vieni paši. Koordinators palīdz novērst šo izšķērdību, savienojot cilvēkus un uzturot infrastruktūru pašorganizācijai.",
        benefits: "Kas jums no tā:",
        benefitsList: [
          "Vadīt potenciāli svarīgu tīklu",
          "Pirmais, kas gūst labumu no koordinācijas (lielapjoma pirkumi, savstarpēja palīdzība)",
          "Potenciāla apmaksāta loma, ja tīkls aug",
          "Savienojums ar plašākām noturības sistēmām"
        ],
        apply: "Interesē? Sazinieties ar radītāju zemāk."
      },
      cta: {
        primary: "Piekļūt zināšanu bāzei",
        primaryDesc: "Skatīt un ieguldīt dzīvajā dokumentā",
        secondary: "Kļūt par koordinatoru",
        secondaryDesc: "Vadīt šo tīklu"
      },
      contact: {
        title: "Kontakts un koordinācija",
        creator: "Sākotnējais radītājs:",
        name: "Björn Kenneth Holmström",
        role: "Izveidoja veidni un struktūru. Pieejams tehniskai atbalstam un jautājumiem par plašākām koordinācijas sistēmām.",
        coordinator: "Reģionālais koordinators:",
        coordinatorStatus: "VAKANCE – Pieteikties pa e-pastu augšā"
      },
      principles: {
        title: "Pamata principi",
        items: [
          "Zināšanas brīvi pieejamas – Nav maksas sienu, nav vārtu sargāšanas",
          "Kopienas īpašumā – Ieguldītāji saglabā kredītu par savu darbu",
          "Kļūdu draudzīgs – Kļūdas ir vērtīga mācīšanās",
          "Sākt vienkārši – Pierādīt, ka tas darbojas, pirms pievienot sarežģītību",
          "Pašorganizējošs – Nav nepieciešama atļauja koordinācijai ar citiem"
        ]
      },
      footer: {
        integration: "Daļa no plašākas Communize ekosistēmas, kas pēta uz kopīgumu balstītu noturību.",
        license: "Zināšanu bāze brīvi koplietota nekomerciālai lietošanai. Ieguldītāji saglabā kredītu."
      }
    },
    lt: {
      meta: {
        title: "Baltijos bioregiono sodybų tinklas",
        description: "Atsinaujinančio gyvenimo žinių bazė Estijoje, Latvijoje ir Lietuvoje"
      },
      hero: {
        title: "Baltijos bioregiono sodybų tinklas",
        subtitle: "Atsinaujinančio gyvenimo žinios Estijoje, Latvijoje ir Lietuvoje",
        status: "Atviras bendradarbiams • Gyvas dokumentas • Be biurokratijos"
      },
      langSelector: "Kalba:",
      purpose: {
        title: "Kodėl tai egzistuoja",
        intro: "Šimtai Baltijos sodybininkų mokosi bandymų ir klaidų metodu to, ką kiti jau žino. Ši žinių bazė užkerta kelią tokiam švaistymui.",
        different: "Kas daro tai kitokį:",
        points: [
          "Bioregioniškai specifinis – orientuotas į tai, kas veikia Baltijos klimatu ir dirva",
          "Bendruomenės patvirtintas – kuriamas žmonių su tikra patirtimi",
          "Įtraukia nesėkmes – dokumentuojame, kas neveikia, ne tik sėkmes",
          "Realistiški terminai – sąžiningi apie tai, kiek laiko iš tikrųjų užtrunka",
          "Įgalina koordinavimą – sujungia jus su patyrusia praktikais"
        ]
      },
      status: {
        current: "Dabartinė būsena:",
        description: "Savanorių valdomas žinių dalijimasis. Jokios organizacijos, jokio biudžeto, jokios biurokratijos.",
        future: "Galima ateitis:",
        futureDesc: "Jei tai pasirodys vertinga: didmeninių pirkimų koordinavimas, įrankių dalijimosi tinklai, integracija su kitais bioregionais arba formalizavimas kaip kooperatyvas. Bet pradedame paprastai."
      },
      sections: {
        title: "Kas viduje",
        items: [
          {
            icon: "🌱",
            title: "Kas čia veikia",
            description: "Konkretūs augalų veislės, technikos ir terminai, įrodyti Baltijos klimatu. Suskirstyti pagal šalis (Estija, Latvija, Lietuva)."
          },
          {
            icon: "⚠️",
            title: "Kas nepavyksta (Svarbu!)",
            description: "Brangūs pamokymai dokumentuoti, kad jūs jų nekartotumėte. Nepavykę eksperimentai, augalai, kurie neveikia, technikos, kurių reikėtų vengti."
          },
          {
            icon: "📅",
            title: "Realistiški terminai",
            description: "1-ų metų prieš 5-ų metų lūkesčiai. Kiek ilgai dirvos kūrimas iš tikrųjų užtrunka. Kada sistemos tampa savaiminio palaikymo."
          },
          {
            icon: "💰",
            title: "Ekonominės realybės",
            description: "Sąžiningi skaičiai: pradinė investicija, einamosios išlaidos, atsipirkimo terminai. Kodėl 'ROI' nėra tik finansinis."
          },
          {
            icon: "🤝",
            title: "Vietiniai praktikai",
            description: "Susisiekite su patyrusiais sodybininkais, norinčiais mentoriauti. Konkrečios šalies kontaktai ir ekspertizės sritys."
          },
          {
            icon: "🛠️",
            title: "Ištekliai ir įrankiai",
            description: "Sėklų šaltiniai, įrankių dalijimosi tinklai, rinkos ir teisinė/reguliacinė aplinka kiekvienai šaliai."
          }
        ]
      },
      howto: {
        title: "Kaip naudoti",
        steps: [
          "Prieiti prie gyvos žinių bazės (nuoroda žemiau)",
          "Rasti savo šalies skyrių (Estija, Latvija, Lietuva)",
          "Skaityti, ką patyrę sodybininkai išmoko",
          "Susisiekti su bendradarbiais, jei turite klausimų",
          "Pridėti savo pamokas, kai įgysite patirties"
        ]
      },
      contribute: {
        title: "Kaip prisidėti",
        intro: "Tai veikia tik tada, kai praktikai dalijasi tuo, ko išmoko.",
        steps: [
          "Prašyti redagavimo prieigos iš koordinatoriaus",
          "Pridėti savo patirtis atitinkamuose skyriuose",
          "Būti sąžiningam apie nesėkmes ir iššūkius",
          "Įtraukti terminus (1-i metai, 3-i metai, 5-i metai)",
          "Neprivaloma: Pridėti kontaktinę informaciją, jei norite mentorauti"
        ],
        what: "Ką prisidėti:",
        whatList: [
          "Konkrečios veislės, kurios veikia/nepavyksta",
          "Dirvos kūrimo technikos ir terminai",
          "Kenkėjų/ligų valdymo strategijos",
          "Saugojimo/konservavimo metodai",
          "Ekonominės realybės (sąžiningi skaičiai)",
          "Nesėkmės (užkirsti kelią kitiems daryti tas pačias klaidas)"
        ]
      },
      coordinator: {
        title: "Reikalingas regioninis koordinatorius",
        status: "Laisva vieta",
        description: "Šiai žinių bazei reikia kažko, kas kviestų bendradarbius, palaikytų kokybę, jungtų žmones ir skatintų koordinavimą.",
        commitment: "Laiko įsipareigojimas:",
        commitmentDetails: "Pradinis: ~10 valandų nustatymui. Einamasis: 2-5 valandos per mėnesį.",
        why: "Kodėl tai svarbu:",
        whyDetails: "Šiuo metu šimtai Baltijos sodybininkų kovoja vieni. Koordinatorius padeda išvengti šio švaistymų, jungdamas žmones ir palaikydamas infrastruktūrą savarankiškam organizavimuisi.",
        benefits: "Kas jums iš to:",
        benefitsList: [
          "Vadovauti potencialiai svarbiam tinklui",
          "Pirmas gauti naudą iš koordinavimo (didmeniniai pirkimai, tarpusavio pagalba)",
          "Potencialus apmokamas vaidmuo, jei tinklas auga",
          "Ryšys su platesnėmis atsparumo sistemomis"
        ],
        apply: "Domina? Susisiekite su kūrėju žemiau."
      },
      cta: {
        primary: "Prieiti prie žinių bazės",
        primaryDesc: "Peržiūrėti ir prisidėti prie gyvo dokumento",
        secondary: "Tapti koordinatoriumi",
        secondaryDesc: "Vadovauti šiam tinklui"
      },
      contact: {
        title: "Kontaktai ir koordinavimas",
        creator: "Pradinis kūrėjas:",
        name: "Björn Kenneth Holmström",
        role: "Sukūrė šabloną ir struktūrą. Prieinamas techninio palaikymo ir klausimų apie platesnes koordinavimo sistemas.",
        coordinator: "Regioninis koordinatorius:",
        coordinatorStatus: "LAISVA VIETA – Kreiptis el. paštu aukščiau"
      },
      principles: {
        title: "Pagrindiniai principai",
        items: [
          "Žinios laisvai prieinamos – Jokių mokesčių sienų, jokio vartų saugojimo",
          "Bendruomenės nuosavybė – Bendradarbiai išlaiko kreditą už savo darbą",
          "Draugiškos klaidos – Klaidos yra vertingas mokymasis",
          "Pradėti paprastai – Įrodyti, kad tai veikia, prieš pridedant sudėtingumą",
          "Saviorganizuojantis – Nereikia leidimo koordinuoti su kitais"
        ]
      },
      footer: {
        integration: "Dalis platesnės Communize ekosistemos, tiriant bendrais principais pagrįstą atsparumą.",
        license: "Žinių bazė laisvai dalijama nekomerciniam naudojimui. Bendradarbiai išlaiko kreditą."
      }
    }
  };

  const t = $derived(translations[selectedLang]);
</script>

<SEO
  title={t.meta.title}
  description={t.meta.description}
  keywords="Baltic homesteading, permaculture, Estonia, Latvia, Lithuania, bioregional, regenerative agriculture"
/>

<div class="min-h-screen" in:fade>
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-earth-50 via-moss-50 to-earth-100 py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <!-- Language Selector -->
      <div class="flex justify-center items-center gap-2 mb-8">
        <span class="text-sm text-earth-700 font-medium">{t.langSelector}</span>
        <div class="flex gap-2">
          {#each ['en', 'et', 'lv', 'lt'] as lang}
            <button
              onclick={() => selectedLang = lang}
              class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all {selectedLang === lang ? 'bg-moss-600 text-white' : 'bg-white text-earth-700 hover:bg-moss-50'}"
            >
              {lang === 'en' ? 'EN' : lang === 'et' ? 'EST' : lang === 'lv' ? 'LAT' : 'LIT'}
            </button>
          {/each}
        </div>
      </div>

      <h1 class="text-4xl md:text-5xl font-serif text-earth-900 mb-4 leading-tight">
        {t.hero.title}
      </h1>
      
      <!-- Bioregional Map -->
      <div class="max-w-md mx-auto mb-6">
        <svg viewBox="0 0 300 200" class="w-full h-auto opacity-90">
          <!-- Baltic Sea -->
          <path 
            d="M 50 20 Q 80 10, 120 15 T 200 30 Q 230 45, 250 80 T 240 140 Q 220 170, 180 180 T 100 175 Q 60 165, 40 130 T 50 20 Z" 
            fill="#93c5fd" 
            fill-opacity="0.3"
            stroke="#567d56" 
            stroke-width="1.5"
            stroke-dasharray="3,3"
          />
          
          <!-- Estonia (northern) -->
          <path 
            d="M 140 35 L 180 30 L 190 50 L 165 55 L 140 50 Z" 
            fill="#567d56" 
            fill-opacity="0.6"
          />
          <text x="160" y="45" font-size="9" fill="#2d4a2d" font-weight="600" text-anchor="middle">EST</text>
          
          <!-- Latvia (middle) -->
          <path 
            d="M 130 60 L 175 58 L 180 90 L 145 92 L 125 80 Z" 
            fill="#567d56" 
            fill-opacity="0.5"
          />
          <text x="150" y="77" font-size="9" fill="#2d4a2d" font-weight="600" text-anchor="middle">LAT</text>
          
          <!-- Lithuania (southern) -->
          <path 
            d="M 115 95 L 155 93 L 160 120 L 130 125 L 110 110 Z" 
            fill="#567d56" 
            fill-opacity="0.4"
          />
          <text x="135" y="110" font-size="9" fill="#2d4a2d" font-weight="600" text-anchor="middle">LIT</text>
          
          <!-- Subtle trees/nature symbols -->
          <g opacity="0.3">
            <circle cx="70" cy="100" r="2" fill="#567d56"/>
            <circle cx="75" cy="95" r="2" fill="#567d56"/>
            <circle cx="80" cy="105" r="2" fill="#567d56"/>
            <circle cx="220" cy="60" r="2" fill="#567d56"/>
            <circle cx="225" cy="65" r="2" fill="#567d56"/>
            <circle cx="215" cy="70" r="2" fill="#567d56"/>
          </g>
          
          <!-- Flowing water lines -->
          <path 
            d="M 100 60 Q 110 65, 120 60" 
            stroke="#567d56" 
            stroke-width="1" 
            fill="none" 
            opacity="0.2"
          />
          <path 
            d="M 180 100 Q 190 105, 200 100" 
            stroke="#567d56" 
            stroke-width="1" 
            fill="none" 
            opacity="0.2"
          />
        </svg>
      </div>
      
      <p class="text-xl text-earth-700 mb-4 leading-relaxed">
        {t.hero.subtitle}
      </p>
      <p class="text-sm text-earth-600 font-medium">
        {t.hero.status}
      </p>
    </div>
  </section>

  <!-- Purpose Section -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-4">{t.purpose.title}</h2>
      <p class="text-lg text-earth-700 mb-6 leading-relaxed">
        {t.purpose.intro}
      </p>
      <p class="text-earth-800 font-semibold mb-3">{t.purpose.different}</p>
      <ul class="space-y-3">
        {#each t.purpose.points as point}
          <li class="flex items-start">
            <svg class="w-6 h-6 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-earth-700">{point}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- Status Section -->
  <section class="py-12 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-earth-900 mb-2">{t.status.current}</h3>
          <p class="text-earth-700">{t.status.description}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-earth-900 mb-2">{t.status.future}</h3>
          <p class="text-earth-700">{t.status.futureDesc}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What's Inside Section -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-12 text-center">{t.sections.title}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each t.sections.items as item}
          <div class="bg-gradient-to-br from-earth-50 to-moss-50 rounded-lg p-6 border border-earth-200">
            <div class="text-4xl mb-3">{item.icon}</div>
            <h3 class="text-lg font-semibold text-earth-900 mb-2">{item.title}</h3>
            <p class="text-sm text-earth-700">{item.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- How To Use -->
  <section class="py-12 bg-moss-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-2xl font-serif text-earth-900 mb-6">{t.howto.title}</h2>
      <ol class="space-y-3">
        {#each t.howto.steps as step, i}
          <li class="flex items-start">
            <span class="flex-shrink-0 w-8 h-8 bg-moss-600 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-3">
              {i + 1}
            </span>
            <span class="text-earth-700 pt-1">{step}</span>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <!-- Main CTAs -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Primary CTA -->
        <a 
          href="https://docs.google.com/document/d/1SD9YgSk7WldlMCMwrU3JuDH3_I0o_3sOrsh_MN560-o/edit"
          target="_blank"
          rel="noopener noreferrer"
          class="group block bg-gradient-to-br from-moss-600 to-moss-700 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all border-2 border-moss-500"
        >
          <div class="flex items-center gap-3 mb-3">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="text-2xl font-serif text-white">{t.cta.primary}</h3>
          </div>
          <p class="text-moss-100 mb-4">{t.cta.primaryDesc}</p>
          <div class="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
            <span>Open document</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </a>

        <!-- Secondary CTA -->
        <a 
          href="mailto:bjorn.kenneth.holmstrom@gmail.com?subject=Baltic Bioregional Coordinator Application"
          class="group block bg-gradient-to-br from-earth-100 to-earth-200 rounded-xl p-8 hover:shadow-xl transition-all border-2 border-earth-300"
        >
          <div class="flex items-center gap-3 mb-3">
            <svg class="w-8 h-8 text-earth-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 class="text-2xl font-serif text-earth-900">{t.cta.secondary}</h3>
          </div>
          <p class="text-earth-700 mb-4">{t.cta.secondaryDesc}</p>
          <div class="flex items-center text-earth-800 font-semibold group-hover:translate-x-2 transition-transform">
            <span>Apply now</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Coordinator Section -->
  <section class="py-16 bg-gradient-to-br from-earth-50 to-clay-50">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center gap-3 mb-6">
        <h2 class="text-3xl font-serif text-earth-900">{t.coordinator.title}</h2>
        <span class="px-4 py-1.5 bg-moss-100 text-moss-700 rounded-full text-sm font-semibold">
          {t.coordinator.status}
        </span>
      </div>
      
      <p class="text-lg text-earth-700 mb-6">{t.coordinator.description}</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 class="font-semibold text-earth-900 mb-2">{t.coordinator.commitment}</h3>
          <p class="text-earth-700 text-sm">{t.coordinator.commitmentDetails}</p>
        </div>
        <div>
          <h3 class="font-semibold text-earth-900 mb-2">{t.coordinator.why}</h3>
          <p class="text-earth-700 text-sm">{t.coordinator.whyDetails}</p>
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-earth-900 mb-3">{t.coordinator.benefits}</h3>
        <ul class="space-y-2">
          {#each t.coordinator.benefitsList as benefit}
            <li class="flex items-start text-sm">
              <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-earth-700">{benefit}</span>
            </li>
          {/each}
        </ul>
      </div>

      <p class="mt-6 text-earth-700 font-medium">{t.coordinator.apply}</p>
    </div>
  </section>

  <!-- Contribute Section -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-4">{t.contribute.title}</h2>
      <p class="text-lg text-earth-700 mb-6">{t.contribute.intro}</p>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-semibold text-earth-900 mb-3">Steps:</h3>
          <ol class="space-y-2">
            {#each t.contribute.steps as step, i}
              <li class="flex items-start text-sm">
                <span class="flex-shrink-0 w-6 h-6 bg-earth-200 text-earth-800 rounded-full flex items-center justify-center font-semibold text-xs mr-2">
                  {i + 1}
                </span>
                <span class="text-earth-700 pt-0.5">{step}</span>
              </li>
            {/each}
          </ol>
        </div>
        <div>
          <h3 class="font-semibold text-earth-900 mb-3">{t.contribute.what}</h3>
          <ul class="space-y-2">
            {#each t.contribute.whatList as item}
              <li class="flex items-start text-sm">
                <span class="text-moss-600 mr-2">•</span>
                <span class="text-earth-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Principles -->
  <section class="py-12 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-2xl font-serif text-earth-900 mb-6">{t.principles.title}</h2>
      <div class="space-y-3">
        {#each t.principles.items as principle}
          <div class="flex items-start">
            <svg class="w-5 h-5 text-moss-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-earth-700">{principle}</span>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-16 bg-white border-t-2 border-earth-200">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-8">{t.contact.title}</h2>
      
      <div class="space-y-6">
        <div class="border-l-4 border-moss-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-1">{t.contact.creator}</h3>
          <p class="text-lg text-earth-800 mb-2">{t.contact.name}</p>
          <p class="text-sm text-earth-700 mb-3">{t.contact.role}</p>
          <a href="/cdn-cgi/l/email-protection#26444c495448084d43484843524e084e494a4b555254494b66414b474f4a0845494b" class="text-moss-600 hover:text-moss-700 font-medium text-sm border-b border-moss-300 hover:border-moss-500">
            <span class="__cf_email__" data-cfemail="6301090c110d4d08060d0d06170b4d0b0c0f0e1017110c0e23040e020a0f4d000c0e">[email&#160;protected]</span>
          </a>
        </div>


        <div class="border-l-4 border-earth-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-1">{t.contact.coordinator}</h3>
          <p class="text-earth-700 text-sm">{t.contact.coordinatorStatus}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <section class="py-12 bg-earth-900 text-earth-100">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <p class="mb-3">{t.footer.integration}</p>
      <p class="text-sm text-earth-300">{t.footer.license}</p>
      <div class="mt-6">
        <a href="{base}/" class="text-moss-400 hover:text-moss-300 text-sm border-b border-moss-600 hover:border-moss-400">
          ← Back to Communize
        </a>
      </div>
    </div>
  </section>
</div>
