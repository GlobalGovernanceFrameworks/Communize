<!-- /src/routes/scales/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';
  import languageStore from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = languageStore.language;
  
  const translations = {
    en: {
      title: "The Four Scales of Communizing",
      subtitle: "From inner integration to planetary stewardship",
      intro: "Communizing happens at every scale of existence—from the relationship we have with ourselves, to our intimate bonds, to our local communities, to our shared planet. Each scale mirrors the others, yet each has its own unique patterns and practices.",
      howToUse: {
        title: "How to use this guide",
        practical: "Looking for practical community building? **Start with Societal Commons** for concrete tools and structures.",
        advanced: "Interested in the full fractal view? **Explore all four scales** to see how the same patterns appear everywhere.",
        inner: "The Inner Commons scale is optional—it's for those interested in how these patterns begin within ourselves."
      },
      principle: {
        title: "The fractal principle",
        text: "Like a fractal, the same fundamental patterns of communizing appear at every scale: creating shared spaces, building trust, establishing agreements, navigating conflict, and evolving together. What changes is the context, complexity, and number of participants—but the core dynamics of belonging remain constant."
      },
      scales: [
        {
          id: "inner",
          title: "Inner Commons",
          icon: "🪞",
          badge: "Advanced/Optional",
          badgeColor: "bg-earth-100 text-earth-700",
          subtitle: "The community within",
          description: "How do we communize our own consciousness? This scale explores the inner landscape—our relationship with our own parts, emotions, and thoughts. Drawing from Internal Family Systems, shadow work, and contemplative traditions, we investigate how integration within mirrors integration without.",
          themes: [
            "Self-compassion as self-commoning",
            "Internal parts as a community",
            "Shadow integration and wholeness",
            "The witnessing self and inner democracy"
          ],
          color: "from-moss-50 to-earth-50",
          borderColor: "border-moss-300"
        },
        {
          id: "relational",
          title: "Relational Commons",
          subtitle: "The space between",
          icon: "💞",
          description: "Two-person and small-group communizing—how relationships themselves become shared fields. From partnerships and families to close friendships, this scale explores how we create 'we-space' while honoring individual autonomy. It's the practice ground for all larger-scale communizing.",
          themes: [
            "Relationships as third entities to tend",
            "Shared finances and resources",
            "Non-violent communication as commoning",
            "Conflict as creative tension"
          ],
          color: "from-clay-50 to-earth-50",
          borderColor: "border-clay-300"
        },
        {
          id: "societal",
          title: "Societal Commons",
          subtitle: "Communities & cooperatives",
          icon: "🏘️",
          badge: "Most Practical",
          badgeColor: "bg-moss-100 text-moss-700",
          description: "This is where most people think 'commons' begins—neighborhoods, co-ops, ecovillages, and local economies. Here we find concrete structures: legal agreements, decision-making processes, shared resources, and governance patterns. It's the scale of visible, tangible communizing.",
          themes: [
            "From property to stewardship",
            "Legal structures for the commons",
            "Decision-making models (consensus, sociocracy, etc.)",
            "Economies of reciprocity and care"
          ],
          color: "from-earth-50 to-moss-50",
          borderColor: "border-earth-400"
        },
        {
          id: "planetary",
          title: "Planetary Commons",
          subtitle: "Global & digital",
          icon: "🌍",
          description: "The biosphere, the internet, the atmosphere—resources that belong to no one and everyone. This scale explores how we govern what transcends borders: climate, oceans, knowledge, and digital space. It requires new forms of coordination that honor both local autonomy and planetary interdependence.",
          themes: [
            "The biosphere as ultimate commons",
            "Digital commons and data sovereignty",
            "Cosmo-localism: global knowledge, local production",
            "Planetary governance without global government"
          ],
          color: "from-moss-50 to-clay-50",
          borderColor: "border-moss-400"
        }
      ],
      integration: {
        title: "Integration across scales",
        text: "These scales are not separate—they interpenetrate. How we relate to ourselves shapes how we relate to others. Local practices inform global patterns. Digital tools enable new forms of local collaboration. Understanding all four scales helps us see the complete ecology of belonging."
      },
      thermodynamic: {
        title: "The thermodynamic foundation: Type I-Bio civilization",
        intro: "Our exploration of planetary commons aligns with recent work in civilizational thermodynamics. Darryl J. Nicke II's Neo-Kardashev Scale provides the biophysical framework for what we're building socially.",
        problem: {
          title: "The original problem",
          text: "The classic Kardashev Scale (1964) measures civilizational advancement by energy consumption. But this conflates battery discharge with progress—civilizations that maximize energy throughput while depleting biological complexity are optimizing for extinction."
        },
        reframe: {
          title: "The thermodynamic reframe",
          text: "The Neo-Kardashev Scale measures advancement by negentropic enhancement capacity—the ability to increase organized biological complexity rather than merely consume energy."
        },
        type0: {
          title: "Where we are now: Type 0-Bio",
          text: "Modern civilization operates in ecological deficit, discharging Earth's 'biosphere battery' (accumulated over billions of years) faster than it recharges:",
          points: [
            "Net biomass loss globally",
            "Declining soil organic carbon",
            "Accelerating species extinction",
            "Moving toward thermodynamic equilibrium (incompatible with complex life)"
          ]
        },
        type1: {
          title: "Where we're going: Type I-Bio",
          text: "A planetary regenerative civilization operating as net-positive ecological force:",
          points: [
            "Net global biomass increasing",
            "Soil carbon rising in agricultural lands",
            "Biodiversity recovering",
            "Net carbon drawdown exceeding emissions",
            "Economic systems rewarding regeneration over extraction"
          ]
        },
        connection: {
          title: "Why this matters for Communize",
          text: "The social coordination protocols we're developing (tools for collective resource management, decision-making, knowledge sharing) are the operating system for Type I-Bio transition.",
          details: "Darryl has the thermodynamic metrics (soil carbon +0.1%/year, biodiversity recovery thresholds). We're building the trust infrastructure (Stuga, resource mappers, agreement templates) that enables communities to coordinate toward those metrics.",
          synthesis: [
            "His 'Type I-Bio Civilization' = Our 'Commons-Based Society'",
            "His 'Bio-Negentropic Capacity Vector' = Our 'Community Health Metrics'",
            "His 'Great Filter' hypothesis = Why building commons now is civilizationally critical"
          ]
        },
        conclusion: "We're not just building community gardens and tool libraries. We're prototyping the coordination layer for planetary-scale regeneration. The Baltic Bioregional Network is an early experiment in what Type I-Bio transition looks like on the ground.",
        readMore: {
          title: "Further reading",
          paper: "The Neo-Kardashev Scale: A Thermodynamic Framework for Regenerative Civilizations",
          battery: "Human domination of the biosphere: Rapid discharge of the earth-space battery"
        }
      },
      cta: {
        title: "Explore each scale",
        text: "Dive deeper into any scale to discover essays, practices, and examples of communizing in action."
      }
    },
    sv: {
      title: "De fyra skalorna av kommunisering",
      subtitle: "Från inre integration till planetärt förvaltarskap",
      intro: "Kommunisering sker på varje nivå av existens—från förhållandet vi har med oss själva, till våra intima band, till våra lokala gemenskaper, till vår delade planet. Varje skala speglar de andra, men varje har sina egna unika mönster och praktiker.",
      howToUse: {
        title: "Hur man använder denna guide",
        practical: "Letar du efter praktisk gemenskapsbyggande? **Börja med samhälleliga allmänningar** för konkreta verktyg och strukturer.",
        advanced: "Intresserad av den fullständiga fraktala vyn? **Utforska alla fyra skalorna** för att se hur samma mönster uppträder överallt.",
        inner: "Skalan för inre allmänningar är valfri—den är för dem som är intresserade av hur dessa mönster börjar inom oss själva."
      },
      principle: {
        title: "Den fraktala principen",
        text: "Som en fraktal uppträder samma grundläggande mönster av kommunisering på varje skala: skapa delade utrymmen, bygga förtroende, etablera överenskommelser, navigera konflikter och utvecklas tillsammans. Det som ändras är kontexten, komplexiteten och antalet deltagare—men kärndynamiken av tillhörighet förblir konstant."
      },
      scales: [
        {
          id: "inner",
          title: "Inre allmänningar",
          icon: "🪞",
          badge: "Avancerat/valfritt",
          badgeColor: "bg-earth-100 text-earth-700",
          subtitle: "Gemenskapen inom",
          description: "Hur kommuniserar vi vårt eget medvetande? Denna skala utforskar det inre landskapet—vårt förhållande till våra egna delar, känslor och tankar. Med utgångspunkt i Internal Family Systems, skuggarbete och kontemplativa traditioner undersöker vi hur integration inom speglar integration utan.",
          themes: [
            "Självmedkänsla som själv-kommunisering",
            "Inre delar som en gemenskap",
            "Skuggintegration och helhet",
            "Det bevittnande självet och inre demokrati"
          ],
          color: "from-moss-50 to-earth-50",
          borderColor: "border-moss-300"
        },
        {
          id: "relational",
          title: "Relationella allmänningar",
          subtitle: "Utrymmet däremellan",
          icon: "💞",
          description: "Tvåpersoners- och smågruppskommunisering—hur relationer själva blir delade fält. Från partnerskap och familjer till nära vänskaper utforskar denna skala hur vi skapar 'vi-utrymme' samtidigt som vi hedrar individuell autonomi. Det är övningsplatsen för all storskalig kommunisering.",
          themes: [
            "Relationer som tredje enheter att vårda",
            "Delade finanser och resurser",
            "Ickevåldsam kommunikation som kommunisering",
            "Konflikt som kreativ spänning"
          ],
          color: "from-clay-50 to-earth-50",
          borderColor: "border-clay-300"
        },
        {
          id: "societal",
          title: "Samhälleliga allmänningar",
          subtitle: "Gemenskaper och kooperativ",
          icon: "🏘️",
          badge: "Mest praktisk",
          badgeColor: "bg-moss-100 text-moss-700",
          description: "Det är här de flesta tänker att 'allmänningar' börjar—grannskaper, kooperativ, ekobyar och lokala ekonomier. Här finner vi konkreta strukturer: juridiska avtal, beslutsprocesser, delade resurser och styrningsmodeller. Det är skalan av synlig, påtaglig kommunisering.",
          themes: [
            "Från egendom till förvaltarskap",
            "Juridiska strukturer för allmänningar",
            "Beslutsmodeller (konsensus, sociokrati, etc.)",
            "Ekonomier av ömsesidighet och omsorg"
          ],
          color: "from-earth-50 to-moss-50",
          borderColor: "border-earth-400"
        },
        {
          id: "planetary",
          title: "Planetära allmänningar",
          subtitle: "Global och digital",
          icon: "🌍",
          description: "Biosfären, internet, atmosfären—resurser som tillhör ingen och alla. Denna skala utforskar hur vi styr det som överskrider gränser: klimat, hav, kunskap och digitalt utrymme. Det kräver nya former av samordning som hedrar både lokal autonomi och planetärt ömsesidigt beroende.",
          themes: [
            "Biosfären som ultimat allmänning",
            "Digitala allmänningar och datasuveränitet",
            "Kosmo-lokalism: global kunskap, lokal produktion",
            "Planetär styrning utan global regering"
          ],
          color: "from-moss-50 to-clay-50",
          borderColor: "border-moss-400"
        }
      ],
      integration: {
        title: "Integration över skalor",
        text: "Dessa skalor är inte separata—de genomsyrar varandra. Hur vi relaterar till oss själva formar hur vi relaterar till andra. Lokala praktiker informerar globala mönster. Digitala verktyg möjliggör nya former av lokalt samarbete. Att förstå alla fyra skalor hjälper oss se den fullständiga ekologin av tillhörighet."
      },
      thermodynamic: {
        title: "Den termodynamiska grunden: Typ I-Bio civilisation",
        intro: "Vår utforskning av planetära allmänningar stämmer överens med nyligt arbete inom civilisatorisk termodynamik. Darryl J. Nicke II:s Neo-Kardashev skala ger det biofysiska ramverket för vad vi bygger socialt.",
        problem: {
          title: "Det ursprungliga problemet",
          text: "Den klassiska Kardashev-skalan (1964) mäter civilisatorisk framsteg genom energikonsumtion. Men detta sammanblandar batteriurladdning med framsteg—civilisationer som maximerar energigenomströmning samtidigt som de utarmar biologisk komplexitet optimerar för utrotning."
        },
        reframe: {
          title: "Den termodynamiska omformningen",
          text: "Neo-Kardashev-skalan mäter framsteg genom negentropisk förbättringskapacitet—förmågan att öka organiserad biologisk komplexitet snarare än bara konsumera energi."
        },
        type0: {
          title: "Där vi är nu: Typ 0-Bio",
          text: "Modern civilisation verkar i ekologiskt underskott och laddar ur jordens 'biosförbatteri' (ackumulerat över miljarder år) snabbare än det laddas:",
          points: [
            "Netto biomassaförlust globalt",
            "Minskande organiskt kol i jorden",
            "Accelererande artutrotning",
            "Rörelse mot termodynamisk jämvikt (oförenlig med komplext liv)"
          ]
        },
        type1: {
          title: "Där vi är på väg: Typ I-Bio",
          text: "En planetär regenerativ civilisation som verkar som netto-positiv ekologisk kraft:",
          points: [
            "Netto global biomassa ökande",
            "Markkolhalten stigande på jordbruksmark",
            "Biologisk mångfald återhämtar sig",
            "Netto koldioxidupptagning överstiger utsläpp",
            "Ekonomiska system som belönar regenerering över utvinning"
          ]
        },
        connection: {
          title: "Varför detta spelar roll för Communize",
          text: "De sociala koordinationsprotokoll vi utvecklar (verktyg för kollektiv resurshantering, beslutsfattande, kunskapsdelning) är operativsystemet för Typ I-Bio övergång.",
          details: "Darryl har de termodynamiska mätvärdena (markkol +0,1%/år, tröskelvärden för biologisk mångfald återhämtning). Vi bygger förtroendeinfrastrukturen (Stuga, resurskartläggare, avtalsmallar) som gör det möjligt för samhällen att koordinera mot dessa mätvärden.",
          synthesis: [
            "Hans 'Typ I-Bio civilisation' = Vår 'allmänningsbaserade samhälle'",
            "Hans 'Bio-negentropisk kapacitetsvektor' = Våra 'samhällshälsomätvärden'",
            "Hans 'Stora filter'-hypotes = Varför att bygga allmänningar nu är civilisatoriskt kritiskt"
          ]
        },
        conclusion: "Vi bygger inte bara gemenskapsträdgårdar och verktygsbibliotek. Vi prototypar koordinationslagret för planetär regenerering. Det baltiska bioregionala nätverket är ett tidigt experiment i hur Typ I-Bio övergång ser ut på marken.",
        readMore: {
          title: "Vidare läsning",
          paper: "Neo-Kardashev-skalan: Ett termodynamiskt ramverk för regenerativa civilisationer",
          battery: "Mänsklig dominans av biosfären: Snabb urladdning av jord-rymd batteriet"
        }
      },
      cta: {
        title: "Utforska varje skala",
        text: "Fördjupa dig i vilken skala som helst för att upptäcka essäer, praktiker och exempel på kommunisering i handling."
      }
    }
  };

  $: t = translations[$currentLanguage] || translations.en;
</script>

{#key $currentLanguage}
<SEO
  title={t.title}
  description={t.subtitle}
  keywords="scales of communizing, inner commons, relational commons, societal commons, planetary commons"
/>
<div class="min-h-screen" in:fade>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-serif mb-4 text-earth-900">
        {t.title}
      </h1>
      <p class="text-xl text-earth-600 font-light max-w-3xl mx-auto">
        {t.subtitle}
      </p>
    </div>

    <!-- Introduction -->
    <div class="mb-12 max-w-4xl mx-auto">
      <p class="text-lg leading-relaxed text-earth-700">
        {t.intro}
      </p>
    </div>

    <!-- How to Use This Guide - NEW -->
    <div class="mb-12 p-8 bg-gradient-to-br from-moss-50 to-earth-50 rounded-xl max-w-4xl mx-auto border-2 border-moss-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.howToUse.title}
      </h2>
      <div class="space-y-3 text-earth-700">
        <p><strong class="text-moss-700">{@html t.howToUse.practical.split('**')[1]}</strong> {t.howToUse.practical.split('**')[2]}</p>
        <p><strong class="text-earth-700">{@html t.howToUse.advanced.split('**')[1]}</strong> {t.howToUse.advanced.split('**')[2]}</p>
        <p class="text-sm italic text-earth-600 pt-2 border-t border-earth-200">{t.howToUse.inner}</p>
      </div>
    </div>

    <!-- Fractal Principle -->
    <div class="mb-16 p-8 bg-earth-50 rounded-xl max-w-4xl mx-auto border border-earth-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.principle.title}
      </h2>
      <p class="text-earth-700 leading-relaxed">
        {t.principle.text}
      </p>
    </div>

    <!-- The Four Scales -->
    <div class="space-y-8 mb-16">
      {#each t.scales as scale}
        <a 
          href="{base}/scales/{scale.id}"
          class="block group"
        >
          <div class="bg-gradient-to-br {scale.color} rounded-xl p-8 border-2 {scale.borderColor} hover:shadow-lg transition-all">
            <div class="flex items-start gap-6">
              <div class="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {scale.icon}
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-2xl font-serif text-earth-900 group-hover:text-moss-700 transition-colors">
                    {scale.title}
                  </h3>
                  {#if scale.badge}
                    <span class="px-3 py-1 {scale.badgeColor} rounded-full text-xs font-medium">
                      {scale.badge}
                    </span>
                  {/if}
                </div>
                <p class="text-sm text-earth-600 mb-3 font-medium">
                  {scale.subtitle}
                </p>
                <p class="text-earth-700 mb-4 leading-relaxed">
                  {scale.description}
                </p>
                <div class="space-y-1.5">
                  <p class="text-sm font-medium text-earth-600 mb-2">Key themes:</p>
                  {#each scale.themes as theme}
                    <div class="flex items-start text-earth-700 text-sm">
                      <span class="text-moss-600 mr-2">•</span>
                      <span>{theme}</span>
                    </div>
                  {/each}
                </div>
                <div class="mt-4 flex items-center text-moss-600 font-medium text-sm group-hover:text-moss-700">
                  <span>Explore this scale →</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Integration Note -->
    <div class="mb-12 p-8 bg-white rounded-xl max-w-4xl mx-auto border-2 border-earth-200">
      <h2 class="text-2xl font-serif mb-4 text-earth-900">
        {t.integration.title}
      </h2>
      <p class="text-earth-700 leading-relaxed">
        {t.integration.text}
      </p>
    </div>

    <!-- Thermodynamic Foundation: Neo-Kardashev Scale -->
    <div class="mb-12 p-8 bg-gradient-to-br from-moss-50 via-earth-50 to-clay-50 rounded-xl max-w-4xl mx-auto border-2 border-moss-300">
      <h2 class="text-2xl font-serif mb-3 text-earth-900">
        {t.thermodynamic.title}
      </h2>
      <p class="text-earth-700 mb-6 leading-relaxed">
        {t.thermodynamic.intro}
      </p>

      <!-- The Problem -->
      <div class="mb-6 p-4 bg-white/70 rounded-lg border border-earth-200">
        <h3 class="text-lg font-semibold text-earth-900 mb-2">
          {t.thermodynamic.problem.title}
        </h3>
        <p class="text-earth-700 text-sm leading-relaxed">
          {t.thermodynamic.problem.text}
        </p>
      </div>

      <!-- The Reframe -->
      <div class="mb-6 p-4 bg-white/70 rounded-lg border border-moss-200">
        <h3 class="text-lg font-semibold text-moss-800 mb-2">
          {t.thermodynamic.reframe.title}
        </h3>
        <p class="text-earth-700 text-sm leading-relaxed">
          {t.thermodynamic.reframe.text}
        </p>
      </div>

      <!-- Type 0-Bio -->
      <div class="mb-6 p-4 bg-white/70 rounded-lg border border-clay-200">
        <h3 class="text-lg font-semibold text-clay-700 mb-2">
          {t.thermodynamic.type0.title}
        </h3>
        <p class="text-earth-700 text-sm mb-3 leading-relaxed">
          {t.thermodynamic.type0.text}
        </p>
        <ul class="space-y-1.5">
          {#each t.thermodynamic.type0.points as point}
            <li class="flex items-start text-sm text-earth-700">
              <span class="text-clay-600 mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Type I-Bio -->
      <div class="mb-6 p-4 bg-white/70 rounded-lg border border-moss-300">
        <h3 class="text-lg font-semibold text-moss-700 mb-2">
          {t.thermodynamic.type1.title}
        </h3>
        <p class="text-earth-700 text-sm mb-3 leading-relaxed">
          {t.thermodynamic.type1.text}
        </p>
        <ul class="space-y-1.5">
          {#each t.thermodynamic.type1.points as point}
            <li class="flex items-start text-sm text-earth-700">
              <span class="text-moss-600 mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Connection to Communize -->
      <div class="mb-6 p-4 bg-moss-100 rounded-lg border-2 border-moss-400">
        <h3 class="text-lg font-semibold text-earth-900 mb-2">
          {t.thermodynamic.connection.title}
        </h3>
        <p class="text-earth-800 text-sm mb-3 leading-relaxed font-medium">
          {t.thermodynamic.connection.text}
        </p>
        <p class="text-earth-700 text-sm mb-3 leading-relaxed">
          {t.thermodynamic.connection.details}
        </p>
        <div class="space-y-2 pt-2 border-t border-moss-300">
          {#each t.thermodynamic.connection.synthesis as item}
            <div class="flex items-start text-sm text-earth-800">
              <span class="text-moss-700 mr-2">→</span>
              <span class="font-medium">{item}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Conclusion -->
      <div class="p-4 bg-earth-900 rounded-lg text-earth-100 mb-6">
        <p class="text-sm leading-relaxed">
          {t.thermodynamic.conclusion}
        </p>
      </div>

      <!-- Further Reading -->
      <div class="text-sm">
        <p class="font-semibold text-earth-800 mb-2">{t.thermodynamic.readMore.title}:</p>
        <ul class="space-y-1.5">
          <li>
            <a 
              href="https://doi.org/10.5281/zenodo.17709844"
              target="_blank"
              rel="noopener noreferrer"
              class="text-moss-700 hover:text-moss-800 border-b border-moss-300 hover:border-moss-500 transition-colors"
            >
              {t.thermodynamic.readMore.paper}
            </a>
            <span class="text-earth-600"> (Nicke, 2025)</span>
          </li>
          <li>
            <a 
              href="https://www.pnas.org/doi/10.1073/pnas.1508353112"
              target="_blank"
              rel="noopener noreferrer"
              class="text-moss-700 hover:text-moss-800 border-b border-moss-300 hover:border-moss-500 transition-colors"
            >
              {t.thermodynamic.readMore.battery}
            </a>
            <span class="text-earth-600"> (Schramski et al., 2015)</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center">
      <h2 class="text-2xl font-serif mb-3 text-earth-900">
        {t.cta.title}
      </h2>
      <p class="text-earth-600">
        {t.cta.text}
      </p>
    </div>
  </div>
</div>
{/key}
