<!-- /src/routes/baltic/coordinator/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  
  let selectedLang = $state('en');
  
  const translations = {
    en: {
      meta: {
        title: "Become Baltic Bioregional Coordinator",
        description: "Lead the Baltic homesteading network - connect practitioners, maintain quality, facilitate coordination"
      },
      hero: {
        title: "Lead the Baltic Homesteading Network",
        subtitle: "Help hundreds of Baltic homesteaders learn from each other instead of struggling alone",
        status: "Open Position • Volunteer to Start • Potential Paid Role"
      },
      vision: {
        title: "The Vision",
        intro: "Imagine: An Estonian homesteader struggling with potato blight finds a Latvian grower who solved it. A Lithuanian beginner connects with an experienced Estonian mentor. Bulk seed orders happen because someone coordinated it. Tool libraries form because connections were made.",
        impact: "That's what this coordinator role makes possible.",
        current: "Right now, hundreds of Baltic homesteaders are reinventing the wheel, making the same expensive mistakes, struggling in isolation. This role exists to change that."
      },
      role: {
        title: "What You'll Actually Do",
        initial: "Initial Setup (~10 hours):",
        initialTasks: [
          "Invite 10-15 experienced Baltic homesteaders to contribute",
          "Review and validate initial contributions for accuracy",
          "Set up communication channels (Signal group, email list, etc.)",
          "Organize first community call to build momentum",
          "Establish quality guidelines for contributions"
        ],
        ongoing: "Ongoing (~2-5 hours/month):",
        ongoingTasks: [
          "Connect people with questions to people with answers",
          "Review new contributions for quality and accuracy",
          "Maintain the knowledge base (edit access, organization)",
          "Facilitate monthly community calls (optional but valuable)",
          "Spot opportunities for coordination (bulk orders, tool sharing)",
          "Watch for spam/vandalism and protect the commons"
        ]
      },
      skills: {
        title: "What You Need",
        required: "Essential:",
        requiredList: [
          "Homesteading experience in Baltic region (Estonia, Latvia, or Lithuania)",
          "Comfortable with English + at least one Baltic language",
          "Basic tech skills (Google Docs, email, video calls)",
          "Genuine desire to help others succeed",
          "2-5 hours/month consistently available"
        ],
        helpful: "Helpful but not required:",
        helpfulList: [
          "Experience organizing community groups",
          "Knowledge of permaculture/regenerative agriculture",
          "Connections with Baltic homesteading networks",
          "Facilitation or teaching experience"
        ]
      },
      benefits: {
        title: "What You Get",
        immediate: "Immediate:",
        immediateList: [
          "First access to shared knowledge and connections",
          "Direct line to experienced practitioners across Baltics",
          "Priority for bulk purchasing and tool sharing",
          "Satisfaction of preventing others' struggles",
          "Build valuable skills in community coordination"
        ],
        future: "Potential Future:",
        futureList: [
          "Paid position if network grows (6-12 month timeline)",
          "Estimated €500-1000/month if funding secured",
          "Leadership of important regional network",
          "Connection to broader resilience frameworks",
          "Possible expansion to other bioregions"
        ]
      },
      commitment: {
        title: "The Commitment",
        realistic: "Being realistic about the work:",
        month1: "Month 1-2: Heavy lift (~10 hours total)",
        month1desc: "Recruiting contributors, setting up infrastructure, building momentum",
        month3: "Month 3+: Steady state (~2-5 hours/month)",
        month3desc: "Responding to questions, reviewing contributions, coordinating activities",
        flexible: "Most work is flexible timing - you respond when you can, not 24/7 availability.",
        quit: "You can step down anytime with 2 weeks notice to find replacement."
      },
      why: {
        title: "Why This Role Matters",
        waste: "Knowledge Waste:",
        wasteDesc: "Right now, a Lithuanian homesteader is figuring out season extension through trial and error. An Estonian solved this 5 years ago. They'll never connect. That knowledge dies.",
        coordination: "Coordination Failures:",
        coordinationDesc: "Three Latvian homesteaders each buy small quantities of seeds at retail prices. If they knew about each other, they could bulk order and save 40%.",
        isolation: "Isolation:",
        isolationDesc: "Homesteading is hard. Doing it alone, without mentorship or community, leads to burnout. Many people quit who would have succeeded with support.",
        impact: "A coordinator prevents all of this. You're not 'running things' - you're connecting people and maintaining infrastructure that enables self-organization."
      },
      process: {
        title: "Application Process",
        intro: "We're keeping this simple. No bureaucracy, no lengthy forms.",
        step1: "1. Email the creator",
        step1desc: "Send a brief email (2-3 paragraphs) to:",
        step2: "2. Share a bit about yourself:",
        step2list: [
          "Where you homestead (which Baltic country)",
          "How long you've been homesteading",
          "Why you're interested in this role",
          "Rough availability (hours/month you could commit)"
        ],
        step3: "3. Quick conversation",
        step3desc: "We'll schedule a 30-minute video call to:",
        step3list: [
          "Answer your questions about the role",
          "Discuss the vision and expectations",
          "See if it's a good mutual fit"
        ],
        step4: "4. Decision",
        step4desc: "Within a few days, you'll know if you're the coordinator. If yes, we'll get you set up immediately."
      },
      faq: {
        title: "Common Questions",
        items: [
          {
            q: "Do I need to be an expert homesteader?",
            a: "No. You need experience and willingness to learn, but you're not expected to know everything. Your job is connecting people, not being the oracle."
          },
          {
            q: "What if I make a mistake?",
            a: "That's fine. This is a volunteer role starting out. We're all learning. The important thing is trying to help the community succeed."
          },
          {
            q: "Will this actually become paid?",
            a: "Potentially, yes. If the network grows to 50+ active participants within 6-12 months, there's good chance of securing grants or participant contributions. But start with the assumption it's volunteer."
          },
          {
            q: "Can I coordinate from outside the Baltics?",
            a: "Ideally not. The coordinator should have direct experience with Baltic climate, soil, and context. Remote coordination is possible but less effective."
          },
          {
            q: "What if nobody applies?",
            a: "Then the knowledge base exists but remains lightly maintained by the creator. It won't reach its full potential, but it's still useful."
          },
          {
            q: "Can multiple people share this role?",
            a: "Yes! Co-coordinators working together is actually ideal if you find the right partner."
          }
        ]
      },
      cta: {
        title: "Ready to Lead This?",
        description: "Help build the infrastructure that prevents knowledge waste and connects Baltic homesteaders.",
        button: "Apply Now",
        or: "or",
        back: "Back to Baltic Network"
      }
    },
    et: {
      meta: {
        title: "Hakka Balti bioregiooni koordinaatoriks",
        description: "Juhi Balti talupidamise võrgustikku - ühenda praktikuid, hoia kvaliteeti, hõlbusta koordineerimist"
      },
      hero: {
        title: "Juhi Balti talupidamise võrgustikku",
        subtitle: "Aita sadadel Balti talunikel õppida üksteiselt selle asemel, et võidelda üksi",
        status: "Ametikoht vaba • Alguses vabatahtlik • Potentsiaalne tasustatud roll"
      },
      vision: {
        title: "Visioon",
        intro: "Kujuta ette: Eesti talunik, kes võitleb kartuli-lehemädanikuga, leiab Läti kasvataja, kes selle lahendas. Leedu algaja ühendub kogenud Eesti mentoriga. Hulgitellimused toimuvad, sest keegi koordineeris neid. Tööriistade jagamise raamatukogud tekivad, sest ühendused loodi.",
        impact: "Just seda teeb see koordinaatori roll võimalikuks.",
        current: "Praegu leiutavad sajad Balti talunikud ratast uuesti, teevad samu kalleid vigu, võitlevad isolatsioonis. See roll eksisteerib, et seda muuta."
      },
      role: {
        title: "Mida sa tegelikult teed",
        initial: "Algne seadistus (~10 tundi):",
        initialTasks: [
          "Kutsu 10-15 kogenud Balti talunikku panustama",
          "Vaata üle ja valideeri algne panus täpsuse osas",
          "Seadista suhtluskanalid (Signal grupp, e-posti list jne)",
          "Korraldage esimene kogukonna kõne hoo tekitamiseks",
          "Kehtesta kvaliteedi juhised panuste jaoks"
        ],
        ongoing: "Jooksev (~2-5 tundi kuus):",
        ongoingTasks: [
          "Ühenda küsimustega inimesi vastustega inimestega",
          "Vaata üle uued panused kvaliteedi ja täpsuse osas",
          "Hoolda teadmusbaasi (muutmisõigus, korraldus)",
          "Hõlbusta igakuiseid kogukonna kõnesid (valikuline, kuid väärtuslik)",
          "Märka võimalusi koordineerimiseks (hulgitellimused, tööriistade jagamine)",
          "Jälgi rämpsposti/vandalismit ja kaitse ühismaad"
        ]
      },
      skills: {
        title: "Mida sul vaja on",
        required: "Oluline:",
        requiredList: [
          "Talupidamise kogemus Balti regioonis (Eesti, Läti või Leedu)",
          "Mugav inglise keelega + vähemalt üks Balti keel",
          "Põhilised tehnilised oskused (Google Docs, e-post, videokõned)",
          "Ehtne soov aidata teistel õnnestuda",
          "2-5 tundi kuus järjepidevalt saadaval"
        ],
        helpful: "Kasulik, kuid mitte nõutav:",
        helpfulList: [
          "Kogemus kogukonna gruppide korraldamisel",
          "Teadmised permakultuuri/taastootliku põllumajanduse kohta",
          "Ühendused Balti talupidamise võrgustikega",
          "Faciliteerimise või õpetamise kogemus"
        ]
      },
      benefits: {
        title: "Mida sa saad",
        immediate: "Kohene:",
        immediateList: [
          "Esimene juurdepääs jagatud teadmistele ja ühendustele",
          "Otsene side kogenud praktikutega üle Baltikumi",
          "Prioriteet hulgiostuks ja tööriistade jagamiseks",
          "Rahulolu teiste võitluste ärahoidmisest",
          "Ehita väärtuslikke oskusi kogukonna koordineerimises"
        ],
        future: "Potentsiaalne tulevik:",
        futureList: [
          "Tasustatud ametikoht, kui võrgustik kasvab (6-12 kuu ajakava)",
          "Hinnanguline €500-1000 kuus, kui rahastus on tagatud",
          "Olulise piirkondliku võrgustiku juhtimine",
          "Ühendus laiemate vastupidavuse raamistike juurde",
          "Võimalik laienemine teistele bioregioonidele"
        ]
      },
      commitment: {
        title: "Kohustus",
        realistic: "Olles realistlik töö suhtes:",
        month1: "Kuu 1-2: Raske tõstmine (~10 tundi kokku)",
        month1desc: "Kaastöötajate värbamine, infrastruktuuri ülesseadmine, hoo loomine",
        month3: "Kuu 3+: Püsiv olek (~2-5 tundi kuus)",
        month3desc: "Vastamine küsimustele, panuste ülevaatamine, tegevuste koordineerimine",
        flexible: "Enamik töö on paindliku ajastusega - vastata siis, kui saad, mitte 24/7 kättesaadavus.",
        quit: "Võid astuda tagasi igal ajal kahe nädala etteteatamisega, et leida asendaja."
      },
      why: {
        title: "Miks see roll on oluline",
        waste: "Teadmiste raiskamine:",
        wasteDesc: "Praegu leiutab Leedu talunik hooaja pikendamist katse-eksituse meetodil. Eestlane lahendas selle 5 aastat tagasi. Nad ei ühenda kunagi. See teadmine sureb.",
        coordination: "Koordineerimise ebaõnnestumised:",
        coordinationDesc: "Kolm Läti talunikku ostavad igaüks väikeseid koguseid seemneid jaehindadega. Kui nad teaksid üksteisest, saaksid nad teha hulgiostud ja säästa 40%.",
        isolation: "Isolatsioon:",
        isolationDesc: "Talupidamine on raske. Seda üksi teha, ilma mentorluse või kogukonnata, viib läbipõlemiseni. Paljud inimesed loobuvad, kes oleksid õnnestunud toega.",
        impact: "Koordinaator hoiab kõike seda ära. Sa ei 'juhi asju' - sa ühendad inimesi ja hooldad infrastruktuuri, mis võimaldab enesekorraldust."
      },
      process: {
        title: "Kandideerimise protsess",
        intro: "Hoiame selle lihtsana. Ei bürokraatiat, ei pikki vorme.",
        step1: "1. Saada loojale e-kiri",
        step1desc: "Saada lühike e-kiri (2-3 lõiku) aadressile:",
        step2: "2. Jaga natuke endast:",
        step2list: [
          "Kus sa talupidamist teed (milline Balti riik)",
          "Kui kaua oled talupidamisega tegelenud",
          "Miks see roll sind huvitab",
          "Umbkaudne kättesaadavus (tunde kuus, mida saaksid pühendada)"
        ],
        step3: "3. Kiire vestlus",
        step3desc: "Lepime kokku 30-minutilise videokõne, et:",
        step3list: [
          "Vastata su küsimustele rolli kohta",
          "Arutada visiooni ja ootusi",
          "Vaadata, kas see on hea vastastikune sobivus"
        ],
        step4: "4. Otsus",
        step4desc: "Mõne päeva jooksul saad teada, kas oled koordinaator. Kui jah, seadistame su kohe valmis."
      },
      faq: {
        title: "Tavalised küsimused",
        items: [
          {
            q: "Kas pean olema ekspert-talunik?",
            a: "Ei. Vajad kogemust ja valmisolekut õppida, kuid ei oodata, et teaksid kõike. Sinu töö on inimeste ühendamine, mitte oraakliks olemine."
          },
          {
            q: "Mis juhtub, kui teen vea?",
            a: "See on okei. See on alguses vabatahtlik roll. Me kõik õpime. Oluline on püüda aidata kogukonnal õnnestuda."
          },
          {
            q: "Kas see tõesti muutub tasustatuks?",
            a: "Potentsiaalselt jah. Kui võrgustik kasvab 50+ aktiivsele osalejale 6-12 kuu jooksul, on hea võimalus toetuste või osalejate panuste saamiseks. Kuid alusta eeldusega, et see on vabatahtlik."
          },
          {
            q: "Kas saan koordineerida väljastpoolt Baltikumi?",
            a: "Ideaalis mitte. Koordinaatoril peaks olema otsene kogemus Balti kliima, pinnase ja kontekstiga. Kaugkoordineerimine on võimalik, kuid vähem tõhus."
          },
          {
            q: "Mis juhtub, kui keegi ei kandideeri?",
            a: "Siis teadmusbaas eksisteerib, kuid jääb kergelt hooldatuks looja poolt. See ei saavuta oma täielikku potentsiaali, kuid on siiski kasulik."
          },
          {
            q: "Kas mitu inimest saavad seda rolli jagada?",
            a: "Jah! Koos töötavad kaas-koordinaatorid on tegelikult ideaalsed, kui leiad õige partneri."
          }
        ]
      },
      cta: {
        title: "Valmis seda juhtima?",
        description: "Aita ehitada infrastruktuuri, mis hoiab ära teadmiste raiskamise ja ühendab Balti talunikke.",
        button: "Kandideeri nüüd",
        or: "või",
        back: "Tagasi Balti võrgustiku juurde"
      }
    },
    lv: {
      meta: {
        title: "Kļūsti par Baltijas bioregionālo koordinatoru",
        description: "Vadi Baltijas saimniecību tīklu - savieno praktiķus, uzturi kvalitāti, veicina koordināciju"
      },
      hero: {
        title: "Vadi Baltijas saimniecību tīklu",
        subtitle: "Palīdzi simtiem Baltijas saimnieku mācīties vienam no otra, nevis cīnīties vienam",
        status: "Vakance • Sākumā brīvprātīgs • Potenciāla apmaksāta loma"
      },
      vision: {
        title: "Vīzija",
        intro: "Iedomājies: Igauņu saimnieks, kas cīnās ar kartupeļu slimību, atrod latviešu audzētāju, kas to atrisināja. Lietuviešu iesācējs savienojas ar pieredzējušu igauņu mentoru. Lielapjoma sēklu pasūtījumi notiek, jo kāds tos koordinēja. Rīku bibliotēkas veidojas, jo savienojumi tika izveidoti.",
        impact: "Tieši to padara iespējamu šī koordinatora loma.",
        current: "Pašlaik simtiem Baltijas saimnieku izgudro riteni no jauna, pieļauj tās pašas dārgās kļūdas, cīnās izolācijā. Šī loma eksistē, lai to mainītu."
      },
      role: {
        title: "Ko tu faktiski darīsi",
        initial: "Sākotnējā iestatīšana (~10 stundas):",
        initialTasks: [
          "Uzaicini 10-15 pieredzējušus Baltijas saimniekus iesaistīties",
          "Pārskata un validē sākotnējo ieguldījumu precizitātei",
          "Uzstādi komunikācijas kanālus (Signal grupa, e-pasta saraksts utt.)",
          "Organizē pirmo kopienas zvanu, lai radītu impulsu",
          "Izveido kvalitātes vadlīnijas ieguldījumiem"
        ],
        ongoing: "Pastāvīgs (~2-5 stundas mēnesī):",
        ongoingTasks: [
          "Savieno cilvēkus ar jautājumiem ar cilvēkiem ar atbildēm",
          "Pārskata jaunus ieguldījumus kvalitātei un precizitātei",
          "Uztur zināšanu bāzi (rediģēšanas piekļuve, organizācija)",
          "Veicina ikmēneša kopienas zvanus (neobligāti, bet vērtīgi)",
          "Pamanīt koordinācijas iespējas (lielapjoma pasūtījumi, rīku koplietošana)",
          "Uzraugi spamu/vandālismu un aizsargā kopīgumu"
        ]
      },
      skills: {
        title: "Kas tev nepieciešams",
        required: "Būtisks:",
        requiredList: [
          "Saimniekošanas pieredze Baltijas reģionā (Igaunija, Latvija vai Lietuva)",
          "Ērti ar angļu valodu + vismaz viena Baltijas valoda",
          "Pamata tehniskās prasmes (Google Docs, e-pasts, video zvani)",
          "Īsta vēlme palīdzēt citiem gūt panākumus",
          "2-5 stundas mēnesī konsekvent pieejamas"
        ],
        helpful: "Noderīgi, bet nav obligāti:",
        helpfulList: [
          "Pieredze kopienas grupu organizēšanā",
          "Zināšanas par permakultu/atjaunojošo lauksaimniecību",
          "Savienojumi ar Baltijas saimniecību tīkliem",
          "Facilitācijas vai mācīšanas pieredze"
        ]
      },
      benefits: {
        title: "Ko tu saņemsi",
        immediate: "Tūlītējs:",
        immediateList: [
          "Pirmā piekļuve koplietotām zināšanām un savienojumiem",
          "Tieša līnija uz pieredzējušiem praktiķiem visā Baltijā",
          "Prioritāte lielapjoma pirkumiem un rīku koplietošanai",
          "Apmierinājums no citu cīņu novēršanas",
          "Uzbūvē vērtīgas prasmes kopienas koordinācijā"
        ],
        future: "Potenciālā nākotne:",
        futureList: [
          "Apmaksāta pozīcija, ja tīkls aug (6-12 mēnešu grafiks)",
          "Paredzams €500-1000 mēnesī, ja finansējums nodrošināts",
          "Svarīga reģionālā tīkla vadīšana",
          "Savienojums ar plašākām noturības sistēmām",
          "Iespējama paplašināšanās uz citiem bioreģioniem"
        ]
      },
      commitment: {
        title: "Apņemšanās",
        realistic: "Esot reālistiskiem par darbu:",
        month1: "Mēnesis 1-2: Smags pacēlums (~10 stundas kopā)",
        month1desc: "Ieguldītāju vervēšana, infrastruktūras izveide, impulsa radīšana",
        month3: "Mēnesis 3+: Pastāvīgs stāvoklis (~2-5 stundas mēnesī)",
        month3desc: "Atbildēšana uz jautājumiem, ieguldījumu pārskatīšana, aktivitāšu koordinēšana",
        flexible: "Lielākā daļa darba ir ar elastīgu laiku - tu atbildi, kad vari, nevis 24/7 pieejamība.",
        quit: "Vari atkāpties jebkurā laikā ar 2 nedēļu paziņojumu, lai atrastu aizstājēju."
      },
      why: {
        title: "Kāpēc šī loma ir svarīga",
        waste: "Zināšanu izšķērdēšana:",
        wasteDesc: "Pašlaik lietuviešu saimnieks izdomā sezonas pagarināšanu, izmantojot izmēģinājumu un kļūdu metodi. Igaunis atrisināja to pirms 5 gadiem. Viņi nekad nesavienosies. Tās zināšanas mirst.",
        coordination: "Koordinācijas neveikmes:",
        coordinationDesc: "Trīs latviešu saimnieki katrs pērk mazas sēklu daudzumus par mazumtirdzniecības cenām. Ja viņi zinātu viens par otru, varētu veikt lielapjoma pasūtījumu un ietaupīt 40%.",
        isolation: "Izolācija:",
        isolationDesc: "Saimniekošana ir grūta. To darīt vienatnē, bez mentoringa vai kopienas, noved pie izdegšanas. Daudzi cilvēki padodas, kuri būtu guvuši panākumus ar atbalstu.",
        impact: "Koordinators novērš visu to. Tu ne 'vadi lietas' - tu savieno cilvēkus un uzturi infrastruktūru, kas ļauj pašorganizēties."
      },
      process: {
        title: "Pieteikšanās process",
        intro: "Mēs to uzturām vienkāršu. Nav birokrātijas, nav garu veidlapu.",
        step1: "1. Nosūti e-pastu radītājam",
        step1desc: "Nosūti īsu e-pastu (2-3 rindkopas) uz:",
        step2: "2. Pastāsti nedaudz par sevi:",
        step2list: [
          "Kur tu saimnieko (kura Baltijas valsts)",
          "Cik ilgi tu esi saimniekojis",
          "Kāpēc tev interesē šī loma",
          "Aptuvena pieejamība (stundas mēnesī, ko varētu apņemties)"
        ],
        step3: "3. Īsa saruna",
        step3desc: "Plānosim 30 minūšu video zvanu, lai:",
        step3list: [
          "Atbildētu uz taviem jautājumiem par lomu",
          "Apspriestu vīziju un cerības",
          "Redzētu, vai tā ir laba savstarpēja atbilstība"
        ],
        step4: "4. Lēmums",
        step4desc: "Dažu dienu laikā tu zināsi, vai esi koordinators. Ja jā, mēs tevi uzreiz iestatīsim."
      },
      faq: {
        title: "Bieži uzdotie jautājumi",
        items: [
          {
            q: "Vai man jābūt ekspertam saimniekam?",
            a: "Nē. Tev nepieciešama pieredze un gatavība mācīties, bet nav paredzēts, ka zināsi visu. Tavs darbs ir savienot cilvēkus, nevis būt orakulam."
          },
          {
            q: "Kas notiks, ja pieļaušu kļūdu?",
            a: "Tas ir kārtībā. Sākumā tā ir brīvprātīga loma. Mēs visi mācāmies. Svarīgi ir mēģināt palīdzēt kopienai gūt panākumus."
          },
          {
            q: "Vai tas patiešām kļūs apmaksāts?",
            a: "Potenciāli jā. Ja tīkls pieaug līdz 50+ aktīviem dalībniekiem 6-12 mēnešu laikā, ir laba iespēja nodrošināt dotācijas vai dalībnieku ieguldījumus. Bet sāc ar pieņēmumu, ka tas ir brīvprātīgs."
          },
          {
            q: "Vai varu koordinēt no ārpus Baltijas?",
            a: "Ideālā gadījumā nē. Koordinatoram vajadzētu būt tieša pieredze ar Baltijas klimatu, augsni un kontekstu. Attālināta koordinācija ir iespējama, bet mazāk efektīva."
          },
          {
            q: "Kas notiek, ja neviens nepieteicas?",
            a: "Tad zināšanu bāze eksistē, bet paliek viegli uzturēta no radītāja. Tā nesasniegs savu pilno potenciālu, bet joprojām ir noderīga."
          },
          {
            q: "Vai vairāki cilvēki var dalīt šo lomu?",
            a: "Jā! Kopā strādājoši līdzkoordinatori faktiski ir ideāli, ja atrodi pareizo partneri."
          }
        ]
      },
      cta: {
        title: "Gatavs to vadīt?",
        description: "Palīdzi veidot infrastruktūru, kas novērš zināšanu izšķērdēšanu un savieno Baltijas saimniekus.",
        button: "Pieteikties tagad",
        or: "vai",
        back: "Atpakaļ uz Baltijas tīklu"
      }
    },
    lt: {
      meta: {
        title: "Tapk Baltijos bioregiono koordinatoriumi",
        description: "Vadovauk Baltijos sodybų tinklui - junk praktikus, palaikyk kokybę, skatink koordinavimą"
      },
      hero: {
        title: "Vadovauk Baltijos sodybų tinklui",
        subtitle: "Padėk šimtams Baltijos sodybininkų mokytis vieni iš kitų, o ne kovoti vieni",
        status: "Laisva vieta • Iš pradžių savanoriškas • Potencialus apmokamas vaidmuo"
      },
      vision: {
        title: "Vizija",
        intro: "Įsivaizduok: Estijos sodybininkas, kovojantis su bulvių maru, randa latvių augintoją, kuris tai išsprendė. Lietuvos pradedantysis susijungia su patyrusiu Estijos mentoriumi. Didmeniniai sėklų užsakymai vyksta, nes kas nors juos koordinavo. Įrankių bibliotekos formuojasi, nes ryšiai buvo užmegzti.",
        impact: "Būtent tai daro įmanomą šis koordinatoriaus vaidmuo.",
        current: "Šiuo metu šimtai Baltijos sodybininkų iš naujo išranda ratą, daro tas pačias brangias klaidas, kovoja izoliacijoje. Šis vaidmuo egzistuoja, kad tai pakeistų."
      },
      role: {
        title: "Ką tu iš tikrųjų darysi",
        initial: "Pradinis nustatymas (~10 valandų):",
        initialTasks: [
          "Pakviesti 10-15 patyrusių Baltijos sodybininkų prisidėti",
          "Peržiūrėti ir patvirtinti pradinį įnašą dėl tikslumo",
          "Nustatyti komunikacijos kanalus (Signal grupė, el. pašto sąrašas ir kt.)",
          "Organizuoti pirmąjį bendruomenės skambutį, kad sukurtum pagreitį",
          "Nustatyti kokybės gaires įnašams"
        ],
        ongoing: "Nuolatinis (~2-5 valandos per mėnesį):",
        ongoingTasks: [
          "Sujungti žmones su klausimais su žmonėmis su atsakymais",
          "Peržiūrėti naujus įnašus dėl kokybės ir tikslumo",
          "Prižiūrėti žinių bazę (redagavimo prieiga, organizavimas)",
          "Skatinti mėnesinius bendruomenės skambučius (neprivaloma, bet vertinga)",
          "Pastebėti koordinavimo galimybes (didmeniniai pirkimai, įrankių dalijimasis)",
          "Stebėti šlamštą/vandalizmą ir apsaugoti bendrąsias"
        ]
      },
      skills: {
        title: "Ko tau reikia",
        required: "Būtina:",
        requiredList: [
          "Sodybininkavimo patirtis Baltijos regione (Estija, Latvija arba Lietuva)",
          "Patogus su anglų kalba + bent viena Baltijos kalba",
          "Pagrindiniai techniniai įgūdžiai (Google Docs, el. paštas, vaizdo skambučiai)",
          "Nuoširdus noras padėti kitiems sėkmingai",
          "2-5 valandos per mėnesį nuosekliai prieinamos"
        ],
        helpful: "Naudinga, bet neprivaloma:",
        helpfulList: [
          "Patirtis organizuojant bendruomenės grupes",
          "Žinios apie permakulturą/atsinaujinančią žemdirbystę",
          "Ryšiai su Baltijos sodybininkavimo tinklais",
          "Facilitavimo arba mokymo patirtis"
        ]
      },
      benefits: {
        title: "Ką tu gausi",
        immediate: "Nedelsiant:",
        immediateList: [
          "Pirma prieiga prie bendrai turimų žinių ir ryšių",
          "Tiesioginė linija į patyrusius praktikus visoje Baltijoje",
          "Prioritetas didmeniniams pirkimams ir įrankių dalinimuisi",
          "Pasitenkinimas iš kitų kovų išvengimo",
          "Ugdyk vertingus įgūdžius bendruomenės koordinavime"
        ],
        future: "Potenciali ateitis:",
        futureList: [
          "Apmokama pareiga, jei tinklas auga (6-12 mėnesių grafikas)",
          "Numatoma €500-1000 per mėnesį, jei užtikrintas finansavimas",
          "Svarbaus regioninio tinklo vadovavimas",
          "Ryšys su platesnėmis atsparumo sistemomis",
          "Galimas išsiplėtimas į kitus bioregio",
        ]
      },
      commitment: {
        title: "Įsipareigojimas",
        realistic: "Būnant realistams apie darbą:",
        month1: "Mėnuo 1-2: Sunkus pakėlimas (~10 valandų iš viso)",
        month1desc: "Bendradarbių verbavimas, infrastruktūros kūrimas, pagreičio kūrimas",
        month3: "Mėnuo 3+: Stabili būsena (~2-5 valandos per mėnesį)",
        month3desc: "Atsakymas į klausimus, įnašų peržiūra, veiklų koordinavimas",
        flexible: "Dauguma darbo yra lankstus laiko - atsakai, kai gali, ne 24/7 prieinamumas.",
        quit: "Gali atsistatydinti bet kada su 2 savaičių pranešimu, kad rastum pakaitalą."
      },
      why: {
        title: "Kodėl šis vaidmuo svarbus",
        waste: "Žinių švaistymas:",
        wasteDesc: "Šiuo metu Lietuvos sodybininkas išgudrinėja sezono pratęsimą bandymų ir klaidų metodu. Estijos sodybininkas tai išsprendė prieš 5 metus. Jie niekada nesusijungs. Tos žinios miršta.",
        coordination: "Koordinavimo nesėkmės:",
        coordinationDesc: "Trys Latvijos sodybininkai kiekvienas perka nedidelius sėklų kiekius mažmeninėmis kainomis. Jei jie žinotų vieni apie kitus, galėtų didmeninį užsakymą ir sutaupytų 40%.",
        isolation: "Izoliacija:",
        isolationDesc: "Sodybininkavimas yra sunkus. Tai daryti vienam, be mentoriaus ar bendruomenės, veda į perdegimą. Daug žmonių pasiduoda, kurie būtų sėkmingai su parama.",
        impact: "Koordinatorius išvengia viso to. Tu ne 'valdi dalykus' - tu jungi žmones ir prižiūri infrastruktūrą, kuri įgalina saviorganizavimąsi."
      },
      process: {
        title: "Paraiškos procesas",
        intro: "Laikomės paprasto. Jokios biurokratijos, jokių ilgų formų.",
        step1: "1. Siųsk el. laišką kūrėjui",
        step1desc: "Siųsk trumpą el. laišką (2-3 pastraipas) į:",
        step2: "2. Pasidalink šiek tiek apie save:",
        step2list: [
          "Kur tu sodybininkauja (kuri Baltijos šalis)",
          "Kaip ilgai tu sodybininkauji",
          "Kodėl tave domina šis vaidmuo",
          "Apytikris prieinamumas (valandų per mėnesį, kurias galėtum įsipareigoti)"
        ],
        step3: "3. Greitas pokalbis",
        step3desc: "Suplanuosime 30 minučių vaizdo skambutį, kad:",
        step3list: [
          "Atsakytume į tavo klausimus apie vaidmenį",
          "Aptartume viziją ir lūkesčius",
          "Pamatytume, ar tai geras abipusis tinkamumas"
        ],
        step4: "4. Sprendimas",
        step4desc: "Per kelias dienas sužinosi, ar esi koordinatorius. Jei taip, iš karto tave nustatysime."
      },
      faq: {
        title: "Dažni klausimai",
        items: [
          {
            q: "Ar man reikia būti ekspertu sodininkui?",
            a: "Ne. Tau reikia patirties ir noro mokytis, bet nėra tikimasi, kad žinosi viską. Tavo darbas yra jungti žmones, ne būti orakulu."
          },
          {
            q: "Kas nutiks, jei padarysiu klaidą?",
            a: "Tai gerai. Iš pradžių tai savanoriškas vaidmuo. Visi mokomės. Svarbu stengtis padėti bendruomenei sėkmingai."
          },
          {
            q: "Ar tai tikrai taps apmokamai?",
            a: "Potencialiai taip. Jei tinklas išaugs iki 50+ aktyvių dalyvių per 6-12 mėnesių, yra gera galimybė užtikrinti dotacijas arba dalyvių įnašus. Bet pradėk su prielaida, kad tai savanoriška."
          },
          {
            q: "Ar galiu koordinuoti iš už Baltijos ribų?",
            a: "Idealiai ne. Koordinatorius turėtų turėti tiesioginę patirtį su Baltijos klimatu, dirva ir kontekstu. Nuotolinis koordinavimas įmanomas, bet mažiau efektyvus."
          },
          {
            q: "Kas nutinka, jei niekas neprisiregistruoja?",
            a: "Tada žinių bazė egzistuoja, bet lieka lengvai prižiūrima kūrėjo. Ji nepasiekia savo visiško potencialo, bet vis tiek yra naudinga."
          },
          {
            q: "Ar keli žmonės gali dalintis šiuo vaidmeniu?",
            a: "Taip! Kartu dirbantys bendrakoordinatoriai iš tikrųjų yra idealūs, jei randi tinkamą partnerį."
          }
        ]
      },
      cta: {
        title: "Pasiruošęs tai vadovauti?",
        description: "Padėk kurti infrastruktūrą, kuri išvengia žinių švaistymo ir jungia Baltijos sodininkus.",
        button: "Kreiptis dabar",
        or: "arba",
        back: "Atgal į Baltijos tinklą"
      }
    }
  };

  const t = $derived(translations[selectedLang]);
</script>

<SEO
  title={t.meta.title}
  description={t.meta.description}
  keywords="Baltic coordinator, homesteading network, bioregional coordination, community leadership, Estonia, Latvia, Lithuania"
/>

<div class="min-h-screen" in:fade>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-gradient-to-br from-moss-600 via-moss-700 to-earth-800 text-white py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <!-- Language Selector -->
      <div class="flex justify-center items-center gap-2 mb-8">
        <span class="text-sm font-medium opacity-90">Language:</span>
        <div class="flex gap-2">
          {#each ['en', 'et', 'lv', 'lt'] as lang}
            <button
              onclick={() => selectedLang = lang}
              class="px-3 py-1.5 rounded-lg text-sm font-medium transition-all {selectedLang === lang ? 'bg-white text-moss-700' : 'bg-moss-500 hover:bg-moss-400'}"
            >
              {lang === 'en' ? 'EN' : lang === 'et' ? 'EST' : lang === 'lv' ? 'LAT' : 'LIT'}
            </button>
          {/each}
        </div>
      </div>

      <h1 class="text-4xl md:text-5xl font-serif mb-4 leading-tight">
        {t.hero.title}
      </h1>
      <p class="text-xl mb-4 leading-relaxed opacity-95">
        {t.hero.subtitle}
      </p>
      <p class="text-sm font-medium opacity-90">
        {t.hero.status}
      </p>
    </div>
  </section>

  <!-- Vision -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">{t.vision.title}</h2>
      <p class="text-lg text-earth-700 mb-4 leading-relaxed">{t.vision.intro}</p>
      <p class="text-lg font-semibold text-moss-700 mb-4">{t.vision.impact}</p>
      <p class="text-earth-700 leading-relaxed">{t.vision.current}</p>
    </div>
  </section>

  <!-- What You'll Do -->
  <section class="py-16 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-8">{t.role.title}</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg p-6 border-2 border-moss-300">
          <h3 class="text-lg font-semibold text-earth-900 mb-3">{t.role.initial}</h3>
          <ul class="space-y-2">
            {#each t.role.initialTasks as task}
              <li class="flex items-start text-sm">
                <span class="text-moss-600 mr-2">•</span>
                <span class="text-earth-700">{task}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="bg-white rounded-lg p-6 border-2 border-earth-300">
          <h3 class="text-lg font-semibold text-earth-900 mb-3">{t.role.ongoing}</h3>
          <ul class="space-y-2">
            {#each t.role.ongoingTasks as task}
              <li class="flex items-start text-sm">
                <span class="text-earth-600 mr-2">•</span>
                <span class="text-earth-700">{task}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills & Benefits Grid -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Skills -->
        <div>
          <h2 class="text-2xl font-serif text-earth-900 mb-6">{t.skills.title}</h2>
          
          <div class="mb-6">
            <h3 class="font-semibold text-earth-900 mb-3">{t.skills.required}</h3>
            <ul class="space-y-2">
              {#each t.skills.requiredList as skill}
                <li class="flex items-start text-sm">
                  <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-earth-700">{skill}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-earth-700 mb-3">{t.skills.helpful}</h3>
            <ul class="space-y-2">
              {#each t.skills.helpfulList as skill}
                <li class="flex items-start text-sm">
                  <span class="text-earth-400 mr-2">○</span>
                  <span class="text-earth-600">{skill}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- Benefits -->
        <div>
          <h2 class="text-2xl font-serif text-earth-900 mb-6">{t.benefits.title}</h2>
          
          <div class="mb-6">
            <h3 class="font-semibold text-earth-900 mb-3">{t.benefits.immediate}</h3>
            <ul class="space-y-2">
              {#each t.benefits.immediateList as benefit}
                <li class="flex items-start text-sm">
                  <svg class="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-earth-700">{benefit}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="p-4 bg-moss-50 rounded-lg border border-moss-200">
            <h3 class="font-semibold text-earth-900 mb-3">{t.benefits.future}</h3>
            <ul class="space-y-2">
              {#each t.benefits.futureList as benefit}
                <li class="flex items-start text-sm">
                  <span class="text-moss-700 mr-2">→</span>
                  <span class="text-earth-700">{benefit}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why This Matters -->
  <section class="py-16 bg-gradient-to-br from-earth-50 to-clay-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-8">{t.why.title}</h2>
      
      <div class="space-y-6">
        <div class="border-l-4 border-clay-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.why.waste}</h3>
          <p class="text-earth-700">{t.why.wasteDesc}</p>
        </div>

        <div class="border-l-4 border-earth-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.why.coordination}</h3>
          <p class="text-earth-700">{t.why.coordinationDesc}</p>
        </div>

        <div class="border-l-4 border-moss-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.why.isolation}</h3>
          <p class="text-earth-700">{t.why.isolationDesc}</p>
        </div>

        <div class="p-6 bg-white rounded-lg border-2 border-moss-300 mt-8">
          <p class="text-lg text-earth-800 font-medium">{t.why.impact}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Application Process -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-6">{t.process.title}</h2>
      <p class="text-earth-700 mb-8">{t.process.intro}</p>
      
      <div class="space-y-6">
        <div class="border-l-4 border-moss-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.process.step1}</h3>
          <p class="text-earth-700 mb-2">{t.process.step1desc}</p>
          <a href="mailto:bjorn.kenneth.holmstrom@gmail.com?subject=Baltic Coordinator Application" class="text-moss-600 hover:text-moss-700 font-medium border-b border-moss-300 hover:border-moss-500">
            bjorn.kenneth.holmstrom@gmail.com
          </a>
        </div>

        <div class="border-l-4 border-earth-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.process.step2}</h3>
          <ul class="space-y-1 text-sm">
            {#each t.process.step2list as item}
              <li class="flex items-start">
                <span class="text-earth-600 mr-2">•</span>
                <span class="text-earth-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="border-l-4 border-clay-400 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.process.step3}</h3>
          <p class="text-earth-700 mb-2">{t.process.step3desc}</p>
          <ul class="space-y-1 text-sm">
            {#each t.process.step3list as item}
              <li class="flex items-start">
                <span class="text-earth-600 mr-2">•</span>
                <span class="text-earth-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>

        <div class="border-l-4 border-moss-500 pl-6">
          <h3 class="font-semibold text-earth-900 mb-2">{t.process.step4}</h3>
          <p class="text-earth-700">{t.process.step4desc}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-16 bg-earth-50">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-serif text-earth-900 mb-8">{t.faq.title}</h2>
      
      <div class="space-y-6">
        {#each t.faq.items as item}
          <div class="bg-white rounded-lg p-6 border border-earth-200">
            <h3 class="font-semibold text-earth-900 mb-2">{item.q}</h3>
            <p class="text-earth-700">{item.a}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="py-20 bg-gradient-to-br from-moss-600 to-moss-700 text-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-serif mb-4">{t.cta.title}</h2>
      <p class="text-lg mb-8 opacity-95">{t.cta.description}</p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="mailto:bjorn.kenneth.holmstrom@gmail.com?subject=Baltic Coordinator Application"
          class="inline-flex items-center justify-center px-8 py-4 bg-white text-moss-700 rounded-lg hover:bg-moss-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
        >
          {t.cta.button}
        </a>
        
        <span class="py-4 opacity-75">{t.cta.or}</span>
        
        <a 
          href="{base}/baltic"
          class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-moss-600 transition-colors font-semibold"
        >
          {t.cta.back}
        </a>
      </div>
    </div>
  </section>
</div>
